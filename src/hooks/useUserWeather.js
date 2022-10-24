import { useCallback, useEffect } from "react";
import { extractWeatherData } from "../helpers/weatherHelpers";
import useCurrentWeather from "./useCurrentWeather";
import useGeolocation from "./useGeolocation";
import useLocationName from "./useLocationName";
import useThreeHourForecast from "./useThreeHourForecast";

const useUserWeather = () => {
  const geolocation = useGeolocation();
  const getLocationName = useLocationName();
  const getCurrentWeatherData = useCurrentWeather();
  const getThreeHourForecast = useThreeHourForecast();

  const cb = useCallback(async () => {
    if (!geolocation.coords) return;
    const locationName = await getLocationName(geolocation.coords);
    const currentWeather = await getCurrentWeatherData(geolocation.coords);
    const threeHourForecast = await getThreeHourForecast(
      geolocation.coords,
      currentWeather.dateTime.offset
    );
    return { locationName, currentWeather, threeHourForecast };
  }, [
    getCurrentWeatherData,
    getLocationName,
    geolocation.coords,
    getThreeHourForecast,
  ]);

  return cb;
};

export default useUserWeather;
