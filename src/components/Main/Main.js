import { buildLocalDateTime } from "../../helpers/weatherHelpers";
import "./main.css";

const Main = ({ weatherData, locationName, threeHourForecast }) => {
  const temp = weatherData.main.temp.toFixed(1);

  const dateTime = weatherData
    ? buildLocalDateTime(weatherData.timezone / 60)
    : null;

  console.log("threeHourForecast", threeHourForecast);

  return (
    weatherData && (
      <main>
        <div className="weather-card weather-overview primary-card">
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
              src={`https://openweathermap.org/img/wn/${weatherData.weather.icon}@4x.png`}
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
        </div>
        <div className="weather-card weather-details">
          <div className="feels-like-temp">
            Feels Like:{" "}
            <span className="temp">{weatherData.main.feels_like}</span>
          </div>
          <div className="high-temp">
            High: <span className="temp">{weatherData.main.temp_max}</span>
          </div>
          <div className="low-temp">
            Low: <span className="temp">{weatherData.main.temp_min}</span>
          </div>
          <div className="wind">
            Wind:{" "}
            <i
              className="material-icons-outlined wind-direction"
              style={{ rotate: `${weatherData.wind.deg}deg` }}
            >
              navigation
            </i>
            <span className="wind-speed">{weatherData.wind.speed}</span>
          </div>
          <div className="visibility">
            Visibility:{" "}
            <span className="visibility-distance">
              {weatherData.visibility * 0.001}
            </span>
          </div>
        </div>
        <div className="weather-card three-hour-forecast">
          {threeHourForecast.map((interval) => (
            <div className="three-hour-interval" key={interval.dt}></div>
          ))}
        </div>
      </main>
    )
  );
};

export default Main;
