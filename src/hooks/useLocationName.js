import { useCallback } from "react";
import { GOOGLE_GEOCODE_API_ENDPOINT } from "../constants/apiConstants";

const useLocationName = () => {
  const cb = useCallback(async ({ lat, lng }) => {
    const query = `?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
    const url = `${GOOGLE_GEOCODE_API_ENDPOINT}${query}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("location name data:", data);
      const location = data.results.find((r) => r.types[0] === "postal_code");
      const city = location.address_components.find((c) =>
        c.types.includes("locality")
      ).long_name;
      const state = location.address_components.find((c) =>
        c.types.includes("administrative_area_level_1")
      ).long_name;
      const country = location.address_components.find((c) =>
        c.types.includes("country")
      ).short_name;
      return { city, state, country };
    } catch (err) {
      console.error(err);
    }
  }, []);
  return cb;
};

export default useLocationName;
