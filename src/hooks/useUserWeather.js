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
    const name = await getLocationName(geolocation.coords);
    const weatherData = await getCurrentWeatherData(geolocation.coords);
    const threeHourForecast = await getThreeHourForecast(
      geolocation.coords,
      weatherData.dateTime.offset
    );
    return { name, weatherData, threeHourForecast };
  }, [
    getCurrentWeatherData,
    getLocationName,
    geolocation.coords,
    getThreeHourForecast,
  ]);

  return cb;
};

export default useUserWeather;
