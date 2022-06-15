import * as Location from "expo-location";
import { useEffect, useState } from "react";
import logger from "../utility/logger";

export default useLocation = () => {
  const [location, setLocation] = useState();
  useEffect(() => {
    getLocationAsync();
  }, []);

  const getLocationAsync = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        logger.log("Permission to access location was denied");
      }

      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      logger.log(error);
    }
  };

  return location;
};
