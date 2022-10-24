import Overview from "../Overview/Overview";
import ThreeHourForecast from "../ThreeHourForecast/ThreeHourForecast";
import WeatherDetails from "../WeatherDetails/WeatherDetails";
import "./main.css";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { useCallback, useEffect, useState } from "react";
import useInputWeather from "../../hooks/useInputWeather";
import useUserWeather from "../../hooks/useUserWeather";
import { useDayNight } from "../../context/DayNightContext";
import BackgroundImage from "../BackgroundImage/BackgroundImage";

const Main = ({ weatherData }) => {
  return (
    <>
      <main>
        {weatherData ? (
          <>
            <Overview weatherData={weatherData} />
            <WeatherDetails weatherData={weatherData} />
            <ThreeHourForecast weatherData={weatherData} />
          </>
        ) : (
          <LoadingSpinner />
        )}
      </main>
    </>
  );
};

export default Main;
