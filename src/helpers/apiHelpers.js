import {
  OPEN_WEATHER_MAP_CURRENT_API_ENDPOINT,
  OPEN_WEATHER_MAP_THREE_HOUR_API_ENDPOINT,
} from "../constants/apiConstants";

export const buildOpenWeatherCurrentUrl = ({ lat, lng, units }) => {
  const query = `?lat=${lat}&lon=${lng}&units=${units}&lang=en&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`;
  const url = `${OPEN_WEATHER_MAP_CURRENT_API_ENDPOINT}${query}`;
  return url;
};

export const buildOpenWeatherTHreeHourUrl = ({ lat, lng, units }) => {
  const query = `?lat=${lat}&lon=${lng}&units=${units}&lang=en&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`;
  const url = `${OPEN_WEATHER_MAP_THREE_HOUR_API_ENDPOINT}${query}`;
  return url;
};
