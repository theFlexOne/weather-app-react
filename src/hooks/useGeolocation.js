import { useEffect, useState } from "react";

const useGeolocation = () => {
  const [coords, setCoords] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const success = (pos) => {
    setCoords({
      lat: pos.coords.latitude,
      lng: pos.coords.longitude,
    });
    setIsLoading(false);
  };
  const failure = (err) => {
    console.warn(
      "navigator.geolocation is not available on this device and/or browser."
    );
    setError({ error: err });
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(success, failure);
  }, []);

  return { coords, isLoading, error };
};

export default useGeolocation;
