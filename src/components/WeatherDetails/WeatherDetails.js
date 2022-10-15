import "./weatherDetails.css";

const WeatherDetails = ({ weatherData }) => {
  return (
    <div className="weather-card weather-details">
      {weatherData && (
        <>
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
        </>
      )}
    </div>
  );
};

export default WeatherDetails;
