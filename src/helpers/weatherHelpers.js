import { DateTime } from "luxon";

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
  return { date, time };
};

export const getOffsetTime = (ms, offset = false) => {
  const dateTimeUTC = DateTime.fromMillis(ms);
  const dateTimeLocal = dateTimeUTC.toUTC(offset);
  return {
    date: dateTimeLocal.toFormat("DDDD"),
    day: dateTimeLocal.toFormat("EEE"),
    hour: dateTimeLocal.toFormat("ha"),
    time: dateTimeLocal.toFormat("t"),
  };
};

export const buildWeatherIconUrl = (iconCode, size = "lg") => {
  const sizes = { md: "2", lg: "4" };
  return `https://openweathermap.org/img/wn/${iconCode}@${sizes[size]}x.png`;
};
