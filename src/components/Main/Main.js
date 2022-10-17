import Overview from "../Overview/Overview";
import ThreeHourForecast from "../ThreeHourForecast/ThreeHourForecast";
import WeatherDetails from "../WeatherDetails/WeatherDetails";
import "./main.css";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Main = ({ weatherData, locationName, threeHourForecast }) => {
  return (
    <main>
      {weatherData && threeHourForecast ? (
        <>
          <Overview weatherData={weatherData} locationName={locationName} />
          <WeatherDetails weatherData={weatherData} />
          <ThreeHourForecast
            weatherData={weatherData}
            threeHourForecast={threeHourForecast}
          />
        </>
      ) : (
        <LoadingSpinner />
      )}
    </main>
  );
};

export default Main;
