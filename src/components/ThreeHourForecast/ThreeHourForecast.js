import {
  buildWeatherIconUrl,
  getLocalTime,
} from "../../helpers/weatherHelpers";
import "./threeHourForecast.css";

const buildThreeHourInterval = (interval, offset) => {
  const { day, hour } = getLocalTime(interval.dt * 1000, offset);
  return (
    <>
      <div className="time">
        {day}
        <div className="hour">{hour}</div>
      </div>
      <div className="weather">
        <img
          className="icon"
          src={buildWeatherIconUrl(interval.weather[0].icon, "md")}
          alt={interval.weather[0].description}
        />
        <span className="weather-description">{interval.weather[0].main}</span>
      </div>
      <div className="temp">{interval.main.temp.toFixed(1)}</div>
    </>
  );
};

const ThreeHourForecast = ({ threeHourForecast, weatherData }) => {
  return (
    <div className="weather-card three-hour-forecast">
      {threeHourForecast &&
        threeHourForecast.map((interval) => (
          <div className="interval" key={interval.dt}>
            {buildThreeHourInterval(interval, weatherData.timezone / 60)}
          </div>
        ))}
    </div>
  );
};

export default ThreeHourForecast;
