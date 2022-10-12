import { useCallback } from "react";
import { GOOGLE_GEOCODE_API_ENDPOINT } from "../constants/apiConstants";

const useLocationName = () => {
  const cb = useCallback(async ({ lat, lng }) => {
    const query = `?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
    const url = `${GOOGLE_GEOCODE_API_ENDPOINT}${query}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      const locationName = data.results.find(
        (r) => r.types[0] === "postal_code"
      )?.formatted_address;
      return locationName;
    } catch (err) {
      console.error(err);
    }
  }, []);
  return cb;
};

export default useLocationName;
