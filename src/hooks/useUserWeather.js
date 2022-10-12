import { useCallback, useEffect, useMemo, useState } from "react";
import { extractWeatherData } from "../helpers/weatherHelpers";
import useCurrentWeather from "./useCurrentWeather";
import useFiveDayForecast from "./useFiveDayForecast";
import useGeolocation from "./useGeolocation";
import useLocationName from "./useLocationName";

const useUserWeather = () => {
  const geolocation = useGeolocation();
  const getLocationName = useLocationName();
  const getWeatherData = useCurrentWeather();
  const getFiveDayForecast = useFiveDayForecast();

  useEffect(() => {}, [geolocation]);

  const cb = useCallback(async () => {
    if (!geolocation.coords) return;
    const name = await getLocationName(geolocation.coords);
    const weatherData = extractWeatherData(
      await getWeatherData(geolocation.coords)
    );
    const forecast = await getFiveDayForecast(geolocation.coords);
    console.log("forecast", forecast);
    return { name, weatherData };
  }, [getWeatherData, getLocationName, geolocation.coords, getFiveDayForecast]);

  return cb;
};

export default useUserWeather;
