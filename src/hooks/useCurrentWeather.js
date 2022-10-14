import { useCallback } from "react";
import { OPEN_WEATHER_MAP_CURRENT_API_ENDPOINT } from "../constants/apiConstants";
import { buildOpenWeatherCurrentUrl } from "../helpers/apiHelpers";
import { extractWeatherData } from "../helpers/weatherHelpers";

const useCurrentWeather = (options = {}) => {
  const units = options.units || "imperial";
  const cb = useCallback(
    async (coords) => {
      const url = buildOpenWeatherCurrentUrl({ ...coords, units });
      try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log("data", data); // uncomment to log the raw fetched data
        const weatherData = extractWeatherData(data);
        return weatherData;
      } catch (err) {
        console.error(err);
      }
    },
    [units]
  );
  return cb;
};

export default useCurrentWeather;
