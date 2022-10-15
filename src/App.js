import { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import useInputWeather from "./hooks/useInputWeather";
import useUserWeather from "./hooks/useUserWeather";

const BACKGROUND_NIGHT = "assets/images/background_night1.jpg";
const BACKGROUND_DAY = "assets/images/background_day1.jpg";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [locationName, setLocationName] = useState("");
  const [threeHourForecast, setThreeHourForecast] = useState(null);

  const [isNight, setIsNight] = useState(false);

  // let isNight = false;

  const getInputWeather = useInputWeather();
  const getUserWeather = useUserWeather();

  const handleSearchFormSubmit = async (input) => {
    const { name, weatherData, threeHourForecast } = await getInputWeather(
      input
    );
    setThreeHourForecast(threeHourForecast.list);
    setLocationName(name);
    setWeatherData(weatherData);
  };

  useEffect(() => {
    getUserWeather().then((data) => {
      if (!data) return;
      setThreeHourForecast(data.threeHourForecast.list);
      setWeatherData(data.weatherData);
      setLocationName(data.name);
    });
  }, [getUserWeather]);

  return (
    <div className={`App${isNight ? " night" : " day"}`}>
      <Header onSearchFormSubmit={handleSearchFormSubmit} />
      <Main
        weatherData={weatherData}
        locationName={locationName}
        threeHourForecast={threeHourForecast}
      />
    </div>
  );
}

export default App;
