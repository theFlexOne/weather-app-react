import { useMemo, useState } from "react";
import "./threeHourForecast.css";

const ThreeHourForecast = ({ threeHourForecast }) => {
  const [page, setPage] = useState(1);
  const intervalGroupLength = 10;
  const intervalStart = (page - 1) * intervalGroupLength;
  const lastPage = useMemo(
    () => Math.ceil(threeHourForecast.length / intervalGroupLength),
    [intervalGroupLength, threeHourForecast.length]
  );
  const displayIntervalGroup = (start, span) => {
    const group = threeHourForecast.slice(start, start + span);

    return group.map((interval) => {
      const { day, hour } = interval.dateTime;

      return (
        <div className="interval" key={interval.dateTime.ms}>
          <div className="time">
            <div className="day">{day}</div>
            <div className="hour">{hour}</div>
          </div>
          <div className="weather">
            <img
              className="icon"
              src={interval.weather.iconUrl}
              alt={interval.weather.description}
            />
          </div>
          <div className="temp">{interval.temps.temp}</div>
        </div>
      );
    });
  };
  const displayNextGroup = () =>
    setPage((page) => (page === lastPage ? page : page + 1));
  const displayPrevGroup = () => setPage((page) => page - 1 || page);

  console.log("threeHourForecast", threeHourForecast);

  return (
    <div className="weather-card three-hour-forecast">
      <h3>3-Hour Forecast</h3>
      <div className="interval-wrapper">
        {threeHourForecast &&
          displayIntervalGroup(intervalStart, intervalGroupLength)}
      </div>
      <div className="button-wrapper">
        <button
          className="prev"
          onClick={displayPrevGroup}
          disabled={page === 1}
        >
          <span className="material-icons-outlined">arrow_back_ios</span>
        </button>
        <button
          className="next"
          onClick={displayNextGroup}
          disabled={page === lastPage}
        >
          <span className="material-icons-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};

export default ThreeHourForecast;
