import { useCallback } from "react";
import UNIT_SYSTEMS from "../constants/unitSystems";
import { buildOpenWeatherCurrentUrl } from "../helpers/apiHelpers";
import { buildWeatherIconUrl, getOffsetTime } from "../helpers/weatherHelpers";

const buildCurrentWeatherData = (data, unitSys) => {
  const UNITS = UNIT_SYSTEMS[unitSys.toUpperCase()];
  const currentDateTime = getOffsetTime(data.dt * 1000, data.timezone / 60);
  const weatherData = {
    temps: {
      temp: `${Math.round(data.main.temp)} ${UNITS.TEMP}`,
      min: `${Math.round(data.main.temp_min)} ${UNITS.TEMP}`,
      max: `${Math.round(data.main.temp_max)} ${UNITS.TEMP}`,
      feelsLike: `${Math.round(data.main.feels_like)} ${UNITS.TEMP}`,
    },
    weather: {
      main: data.weather[0].main,
      description: data.weather[0].description,
      iconUrl: buildWeatherIconUrl(data.weather[0].icon),
    },
    wind: {
      speed: `${Math.round(data.wind.speed)} ${UNITS.WIND_SPEED}`,
      deg: data.wind.deg,
    },
    sunrise: getOffsetTime(data.sys.sunrise * 1000, data.timezone / 60).time,
    sunset: getOffsetTime(data.sys.sunset * 1000, data.timezone / 60).time,
    visibility: `${data.visibility / 1000} ${UNITS.VISIBILITY}`,
    dateTime: {
      ms: data.dt * 1000,
      offset: data.timezone / 60,
      ...currentDateTime,
    },
  };
  return weatherData;
};

const useCurrentWeather = (options = {}) => {
  const unitSys = options.units || "imperial";
  const cb = useCallback(
    async (coords) => {
      const url = buildOpenWeatherCurrentUrl({ ...coords }, unitSys);
      try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log("data", data); // uncomment to log the raw fetched data
        // const extractedWeatherData = extractWeatherData(data);
        const weatherData = buildCurrentWeatherData(data, unitSys);
        return { ...weatherData, unitSys };
      } catch (err) {
        console.error(err);
      }
    },
    [unitSys]
  );
  return cb;
};

export default useCurrentWeather;
