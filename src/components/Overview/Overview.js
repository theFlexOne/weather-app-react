import "./overview.css";

const Overview = ({ weatherData }) => {
  const { currentWeather, locationName } = weatherData;
  const dt = currentWeather.dateTime;
  return (
    <div className="weather-card weather-overview primary-card">
      <div className="location-name">
        <span className="location-line-1">
          <p className="city">{locationName.city}</p>
        </span>
        <span className="location-line-2">
          <p className="state">{locationName.state}</p>
          <p className="country">{locationName.country}</p>
        </span>
      </div>
      <div className="weather card-section">
        <img
          className="weather-icon"
          src={currentWeather.weather.iconUrl}
          alt={currentWeather.weather.description}
          width="250px"
        />
        <div className="weather-info">
          <p className="temp">{currentWeather.temps.temp}</p>
          <p className="weather-description">
            {currentWeather.weather.description}
          </p>
        </div>
      </div>
      <div className="date-time">
        <p className="date">{dt.date}</p>
        <p className="time">{dt.time}</p>
      </div>
    </div>
  );
};

export default Overview;
