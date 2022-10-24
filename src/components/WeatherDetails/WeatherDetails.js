import "./weatherDetails.css";
import { ReactComponent as Sunrise } from "../../assets/icons/sunrise.svg";
import { ReactComponent as Sunset } from "../../assets/icons/sunset.svg";

const WindDir = (deg) => (
  <i
    className="material-icons-outlined wind-direction"
    style={{ rotate: `${deg}deg` }}
  >
    navigation
  </i>
);
const WeatherDetails = ({ weatherData: { currentWeather } }) => {
  // const { currentWeather } = weatherData;
  return (
    <div className="weather-card weather-details">
      <div className="weather-details-item feels-like-temp">
        <p className="label">Feels Like:</p>
        <span className="temp">{currentWeather.temps.feelsLike}</span>
      </div>
      <div className="weather-details-item">
        <div className="wrapper">
          <div className="low-temp">
            <p className="label">Low:</p>
            <span className="temp">{currentWeather.temps.min}</span>
          </div>
          {"|"}
          <div className="high-temp">
            <p className="label">High:</p>
            <span className="temp">{currentWeather.temps.max}</span>
          </div>
        </div>
      </div>
      <div className="weather-details-item wind">
        <p className="label">Wind:</p>
        <WindDir deg={currentWeather.wind.deg} />
        <span className="wind-speed">{currentWeather.wind.speed}</span>
      </div>
      <div className="weather-details-item visibility">
        <p className="label">Visibility:</p>
        <span className="visibility-distance">{currentWeather.visibility}</span>
      </div>
      <div className="weather-details-item">
        <div className="wrapper">
          <div className="sunrise">
            <p className="label">
              <Sunrise className="icon" />
            </p>
            <span className="time">{currentWeather.sunrise.time}</span>
          </div>
          {"|"}
          <div className="sunset">
            <p className="label">
              <Sunset className="icon" />
            </p>
            <span className="time">{currentWeather.sunset.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
