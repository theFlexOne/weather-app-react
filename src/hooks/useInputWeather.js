import { useCallback } from "react";
import { extractWeatherData } from "../helpers/weatherHelpers";
import useCurrentWeather from "./useCurrentWeather";
import useLocationData from "./useLocationData";

const useInputWeather = () => {
  const getLocationData = useLocationData();
  const getCurrentWeather = useCurrentWeather();

  const cb = useCallback(
    async (input) => {
      const { lat, lng, name, error } = await getLocationData(input);
      if (error) return { error };
      const weatherData = extractWeatherData(
        await getCurrentWeather({ lat, lng })
      );
      const returnData = { name, weatherData };
      return returnData;
    },
    [getCurrentWeather, getLocationData]
  );
  return cb;
};

export default useInputWeather;
