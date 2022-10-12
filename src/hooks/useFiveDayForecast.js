import { useCallback, useState } from "react";
import { OPEN_WEATHER_MAP_FORECAST_API_ENDPOINT } from "../constants/apiConstants";
import { buildWeatherStackUrl } from "../helpers/apiHelpers";

const useFiveDayForecast = () => {
  // const [data, setData] = useState(null)
  // const [isLoading, setIsLoading] = useState(false)
  // const [error, setError] = useState(null)

  const cb = useCallback(async ({ lat, lng }) => {
    const url = buildWeatherStackUrl({ lat, lng });
    const response = await fetch(url);
    const fiveDayForecast = await response.json();
    console.log("fiveDayForecast", fiveDayForecast);
    return fiveDayForecast;
  }, []);
  return cb;
};

export default useFiveDayForecast;
