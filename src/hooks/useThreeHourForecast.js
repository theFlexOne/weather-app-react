import { useCallback } from "react";
import UNIT_SYSTEMS from "../constants/unitSystems";
import { buildOpenWeatherThreeHourUrl } from "../helpers/apiHelpers";
import { buildWeatherIconUrl, getOffsetTime } from "../helpers/weatherHelpers";

const buildThreeHourForecastData = (data, unitSys, offset) => {
  const UNITS = UNIT_SYSTEMS[unitSys.toUpperCase()];
  const threeHourForecastData = data.list.map((interval) => {
    const intervalDateTime = getOffsetTime(interval.dt * 1000, offset);
    return {
      temps: {
        temp: `${Math.round(interval.main.temp)} ${UNITS.TEMP}`,
        min: `${Math.round(interval.main.temp_min)} ${UNITS.TEMP}`,
        max: `${Math.round(interval.main.temp_max)} ${UNITS.TEMP}`,
        feelsLike: `${Math.round(interval.main.feels_like)} ${UNITS.TEMP}`,
      },
      weather: {
        main: interval.weather[0].main,
        description: interval.weather[0].description,
        iconUrl: buildWeatherIconUrl(interval.weather[0].icon),
      },
      wind: {
        speed: `${Math.round(interval.wind.speed)} ${UNITS.WIND_SPEED}`,
        deg: interval.wind.deg,
      },
      visibility: `${interval.visibility / 1000} ${UNITS.VISIBILITY}`,
      dateTime: {
        ms: interval.dt * 1000,
        offset: interval.timezone / 60,
        ...intervalDateTime,
      },
    };
  });
  return threeHourForecastData;
};

const useThreeHourForecast = (options = {}) => {
  const unitSys = options.units || "imperial";

  const cb = useCallback(
    async (coords, offset) => {
      const url = buildOpenWeatherThreeHourUrl({ ...coords }, unitSys);
      try {
        const response = await fetch(url);
        const data = await response.json();
        const threeHourForecastData = buildThreeHourForecastData(
          data,
          unitSys,
          offset
        );
        return threeHourForecastData;
      } catch (err) {
        console.error(err);
      }
    },
    [unitSys]
  );
  return cb;
};

export default useThreeHourForecast;
