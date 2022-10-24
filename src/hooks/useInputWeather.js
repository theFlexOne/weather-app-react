import { useCallback } from "react";
import { extractWeatherData } from "../helpers/weatherHelpers";
import useCurrentWeather from "./useCurrentWeather";
import useLocationData from "./useLocationData";
import useLocationName from "./useLocationName";
import useThreeHourForecast from "./useThreeHourForecast";

const useInputWeather = () => {
  const getLocationData = useLocationData();
  const getCurrentWeather = useCurrentWeather();
  const getThreeHourForecast = useThreeHourForecast();
  const getLocationName = useLocationName();

  const cb = useCallback(
    async (input) => {
      const { lat, lng, error } = await getLocationData(input);
      if (error) return { error };
      const locationName = await getLocationName({ lat, lng });
      const currentWeather = await getCurrentWeather({ lat, lng });
      const threeHourForecast = await getThreeHourForecast(
        { lat, lng },
        currentWeather.dateTime.offset
      );

      return { locationName, currentWeather, threeHourForecast };
    },
    [getCurrentWeather, getLocationData, getThreeHourForecast, getLocationName]
  );
  return cb;
};

export default useInputWeather;
