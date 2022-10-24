import { createContext, useContext, useState } from "react";

const DayNightContext = createContext();

const DayNightProvider = ({ children }) => {
  const [isDay, setIsDay] = useState(true);
  return (
    <DayNightContext.Provider value={{ isDay, setIsDay }}>
      {children}
    </DayNightContext.Provider>
  );
};

const useDayNight = () => {
  const ct = useContext(DayNightContext);
  return (
    ct ||
    console.error("Must be called from with the DayNightProvider component")
  );
};
export { DayNightProvider, useDayNight };
