import { useEffect, useState } from 'react';

/**
 * location State 타입 인터페이스.
 *
 * 타입 : load, coordinates(존재하지 않을 수도 있음), error(존재하지 않을 수도 있음)
 */
interface locationType {
  load: boolean;
  coordinates: { lat: number; lng: number };
}

/**
 *
 * @returns
 */
const useGeolocation = () => {
  const [location, setLocation] = useState<locationType>({
    load: false,
    coordinates: { lat: 36.1069, lng: 128.4164 },
  });

  const onSuccess = (locations: { coords: { latitude: number; longitude: number } }) => {
    setLocation({
      load: true,
      coordinates: {
        lat: locations.coords.latitude,
        lng: locations.coords.longitude,
      },
    });
  };

  const onError = () => {
    setLocation({
      load: true,
      coordinates: { lat: 36.1069, lng: 128.4164 },
    });
  };

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      onError();
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default useGeolocation;
