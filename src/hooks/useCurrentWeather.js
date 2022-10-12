import { useCallback } from "react";
import { OPEN_WEATHER_MAP_CURRENT_API_ENDPOINT } from "../constants/apiConstants";

const useCurrentWeather = (options = {}) => {
  const units = options.units || "imperial";
  const cb = useCallback(
    async ({ lat, lng }) => {
      const query = `?lat=${lat}&lon=${lng}&units=${units}&lang=en&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`;
      const url = `${OPEN_WEATHER_MAP_CURRENT_API_ENDPOINT}${query}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (err) {
        console.error(err);
      }
    },
    [units]
  );
  return cb;
};

export default useCurrentWeather;
