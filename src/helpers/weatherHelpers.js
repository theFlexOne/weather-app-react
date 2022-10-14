import { DateTime, Zone } from "luxon";

export const extractWeatherData = (data) => ({
  weather: data.weather[0],
  main: data.main,
  wind: data.wind,
  dt: data.dt,
  timezone: data.timezone,
  visibility: data.visibility,
  sunrise: data.sys.sunrise,
  sunset: data.sys.sunset,
});

export const buildLocalDateTime = (offset) => {
  const dt = DateTime.utc().toUTC(offset);
  const date = dt.toFormat("DDDD");
  const time = dt.toFormat("t");
  console.log("DateTime", { DateTime });
  return { date, time };
};

export const getLocalTime = (ms, offset) => {};
