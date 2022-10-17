import "./overview.css";

const Overview = ({ weatherData, locationName }) => {
  const dt = weatherData && weatherData.dateTime;
  return (
    <div className="weather-card weather-overview primary-card">
      {weatherData && (
        <>
          <div className="card-section top">
            <p className="location-name">{locationName}</p>
            <span className="date-time">
              <p className="date">{dt.date}</p>
              <p className="time">{dt.time}</p>
            </span>
          </div>
          <div className="weather card-section">
            <img
              className="weather-icon"
              src={weatherData.weather.iconUrl}
              alt={weatherData.weather.description}
              width="250px"
            />
            <div className="weather-info">
              <p className="temp">{weatherData.temps.temp}</p>
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
