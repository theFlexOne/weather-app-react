import { useCallback } from "react";
import { buildOpenWeatherTHreeHourUrl } from "../helpers/apiHelpers";

const useThreeHourForecast = (options = {}) => {
  const units = options.units || "imperial";
  const cb = useCallback(
    async (coords) => {
      const url = buildOpenWeatherTHreeHourUrl({ ...coords, units });
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

export default useThreeHourForecast;
