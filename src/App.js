import { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import useInputWeather from "./hooks/useInputWeather";
import useUserWeather from "./hooks/useUserWeather";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [locationName, setLocationName] = useState("");
  const [threeHourForecast, setThreeHourForecast] = useState(null);

  const getInputWeather = useInputWeather();
  const getUserWeather = useUserWeather();

  const handleSearchFormSubmit = async (input) => {
    const { name, weatherData, threeHourForecast } = await getInputWeather(
      input
    );
    setThreeHourForecast(threeHourForecast);
    setLocationName(name);
    setWeatherData(weatherData);
  };

  useEffect(() => {
    getUserWeather().then((data) => {
      if (!data) return;
      setThreeHourForecast(data.threeHourForecast);
      setWeatherData(data.weatherData);
      setLocationName(data.name);
    });
  }, [getUserWeather]);

  return (
    <div className={`App`}>
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
