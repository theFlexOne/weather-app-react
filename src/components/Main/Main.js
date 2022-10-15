import Overview from "../Overview/Overview";
import ThreeHourForecast from "../ThreeHourForecast/ThreeHourForecast";
import WeatherDetails from "../WeatherDetails/WeatherDetails";
import "./main.css";

const Main = ({ weatherData, locationName, threeHourForecast }) => {
  return (
    <main>
      <Overview weatherData={weatherData} locationName={locationName} />
      <WeatherDetails weatherData={weatherData} />
      <ThreeHourForecast
        weatherData={weatherData}
        threeHourForecast={threeHourForecast}
      />
    </main>
  );
};

export default Main;
