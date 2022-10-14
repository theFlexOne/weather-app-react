import { useCallback } from "react";
import { extractWeatherData } from "../helpers/weatherHelpers";
import useCurrentWeather from "./useCurrentWeather";
import useLocationData from "./useLocationData";
import useThreeHourForecast from "./useThreeHourForecast";

const useInputWeather = () => {
  const getLocationData = useLocationData();
  const getCurrentWeather = useCurrentWeather();
  const getThreeHourForecast = useThreeHourForecast();

  const cb = useCallback(
    async (input) => {
      const { lat, lng, name, error } = await getLocationData(input);
      if (error) return { error };
      const weatherData = await getCurrentWeather({ lat, lng });
      const threeHourForecast = await getThreeHourForecast({ lat, lng });

      return { name, weatherData, threeHourForecast };
    },
    [getCurrentWeather, getLocationData, getThreeHourForecast]
  );
  return cb;
};

export default useInputWeather;
