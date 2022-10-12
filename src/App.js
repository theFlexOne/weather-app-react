import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import useInputWeather from "./hooks/useInputWeather";
import useUserWeather from "./hooks/useUserWeather";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [locationName, setLocationName] = useState("");

  const getInputWeather = useInputWeather();
  const getUserWeather = useUserWeather();

  const handleSearchFormSubmit = async (input) => {
    const { name, weatherData } = await getInputWeather(input);
    setLocationName(name);
    setWeatherData(weatherData);
  };

  useEffect(() => {
    getUserWeather &&
      getUserWeather().then((data) => {
        if (!data) return;
        setWeatherData(data.weatherData);
        setLocationName(data.name);
      });
  }, [getUserWeather]);

  return (
    <div className="App">
      <Header onSearchFormSubmit={handleSearchFormSubmit} />
      {weatherData && (
        <Main weatherData={weatherData} locationName={locationName} />
      )}
    </div>
  );
}

export default App;
