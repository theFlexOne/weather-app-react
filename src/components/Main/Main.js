import "./main.css";

const Main = ({ weatherData, locationName }) => {
  const temp = weatherData.main.temp.toPrecision(3);
  return (
    weatherData && (
      <main>
        <div className="weather-card weather-overview">
          <h3 className="location-name">{locationName}</h3>
          <img
            className="weather-icon"
            src={`https://openweathermap.org/img/wn/${weatherData.weather.icon}@4x.png`}
            alt={weatherData.weather.description}
          />
          <div className="temp">{temp}</div>
          <h4 className="weather-description">
            {weatherData.weather.description}
          </h4>
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
      </main>
    )
  );
};

export default Main;
