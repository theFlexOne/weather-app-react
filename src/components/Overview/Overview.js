import {
  buildLocalDateTime,
  buildWeatherIconUrl,
} from "../../helpers/weatherHelpers";
import "./overview.css";

const Overview = ({ weatherData, locationName }) => {
  const temp = Math.round(weatherData?.main.temp);

  const dateTime = weatherData
    ? buildLocalDateTime(weatherData.timezone / 60)
    : null;
  return (
    <div className="weather-card weather-overview primary-card">
      {weatherData && (
        <>
          <div className="card-section top">
            <p className="location-name">{locationName}</p>
            <span className="date-time">
              <p className="date">{dateTime.date}</p>
              <p className="time">{dateTime.time}</p>
            </span>
          </div>
          <div className="weather card-section">
            <img
              className="weather-icon"
              src={buildWeatherIconUrl(weatherData.weather.icon)}
              alt={weatherData.weather.description}
              width="250px"
            />
            <div className="weather-info">
              <p className="temp">{temp}</p>
              <p className="weather-description">
                {weatherData.weather.description}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Overview;
