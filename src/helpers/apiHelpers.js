import { WEATHER_STACK_FORECAST_API_ENDPOINT } from "../constants/apiConstants";

export const buildWeatherStackUrl = ({ lat, lng, name, units = "f" }) => {
  const accessKey = `access_key=${process.env.REACT_APP_WEATHER_STACK_API_KEY}`;
  const query = `query=${lat && lng ? `${lat},${lng}` : name}`;
  const forecastDays = `forecast_days=5`;
  const url = `${WEATHER_STACK_FORECAST_API_ENDPOINT}?${accessKey}&${query}&${forecastDays}`;
  console.log("url", url);
  return url;
};
