import { useCallback, useState } from "react";
import { GOOGLE_PLACES_API_ENDPOINT } from "../constants/apiConstants";

const useLocationData = () => {
  // const [data, setData] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  const cb = useCallback(async (input) => {
    const query = `?input=${input}&fields=formatted_address,name,geometry,place_id&inputtype=textquery&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
    const url = `${GOOGLE_PLACES_API_ENDPOINT}${query}`;
    try {
      const response = await fetch(url);
      if (!response.ok)
        throw new Error({
          code: response.statusCode,
          message: response.status,
        });
      const data = await response.json();
      const { lat, lng } = data.candidates[0].geometry.location;
      const name = data.candidates[0].formatted_address;
      return { lat, lng, name };
    } catch (error) {
      console.error(error);
      return { error };
    }
  }, []);
  return cb;
};
export default useLocationData;
