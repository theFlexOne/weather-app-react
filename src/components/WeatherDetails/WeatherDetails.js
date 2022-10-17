import "./weatherDetails.css";

const WeatherDetails = ({ weatherData }) => {
  console.log("weatherData", weatherData);
  return (
    <div className="weather-card weather-details">
      {weatherData && (
        <>
          <div className="weather-details-item feels-like-temp">
            <p className="label">Feels Like:</p>
            <span className="temp">{weatherData.temps.feelsLike}</span>
          </div>
          <div className="weather-details-item">
            <div className="wrapper">
              <div className="low-temp">
                <p className="label">Low:</p>
                <span className="temp">{weatherData.temps.min}</span>
              </div>
              {"|"}
              <div className="high-temp">
                <p className="label">High:</p>
                <span className="temp">{weatherData.temps.max}</span>
              </div>
            </div>
          </div>
          <div className="weather-details-item wind">
            <p className="label">Wind:</p>
            <i
              className="material-icons-outlined wind-direction"
              style={{ rotate: `${weatherData.wind.deg}deg` }}
            >
              navigation
            </i>
            <span className="wind-speed">{weatherData.wind.speed}</span>
          </div>
          <div className="weather-details-item visibility">
            <p className="label">Visibility:</p>
            <span className="visibility-distance">
              {weatherData.visibility}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherDetails;
