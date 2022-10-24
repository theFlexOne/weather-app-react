// background images
import bgImgDay from "../../assets/images/background_day1.jpg";
import bgImgNight from "../../assets/images/background_night1.jpg";
import { useDayNight } from "../../context/DayNightContext";

// styles
import "./backgroundImage.css";

const BackgroundImage = ({ isDay }) => {
  return (
    <img
      className="background"
      src={isDay ? bgImgDay : bgImgNight}
      alt={isDay ? "daytime" : "nighttime"}
    />
  );
};

export default BackgroundImage;
