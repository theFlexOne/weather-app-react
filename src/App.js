import { useEffect, useState } from "react";
import "./App.css";
import BackgroundImage from "./components/BackgroundImage/BackgroundImage";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import useInputWeather from "./hooks/useInputWeather";
import useUserWeather from "./hooks/useUserWeather";
// import useUserWeather from "./hooks/useUserWeather";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const getInputWeather = useInputWeather();
  const getUserWeather = useUserWeather();

  const isDay = (() => {
    if (!weatherData) return new Date().getHours() < 19;
    const sr = weatherData.currentWeather.sunrise.ms;
    const ss = weatherData.currentWeather.sunset.ms;
    const now = Date.now();
    return sr < now && now < ss;
  })();

  useEffect(() => {
    if (searchInput.length) {
      getInputWeather(searchInput).then((data) => {
        if (!data) return;
        setWeatherData(data);
      });
      return;
    }
    getUserWeather().then((data) => {
      if (!data) return;
      setWeatherData(data);
    });
  }, [getUserWeather, getInputWeather, searchInput]);

  const onSearch = (input) => setSearchInput(input);

  return (
    <div className={`App`}>
      <BackgroundImage isDay={isDay} />
      <Header handleSearch={onSearch} />
      <Main weatherData={weatherData} />
    </div>
  );
}

export default App;
