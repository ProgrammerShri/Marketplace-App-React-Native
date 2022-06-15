import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";
import logger from "./logger";

const prefix = "cache_";
const expireTiming = 5; // minutes

// storing data in cache
const storeCache = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    logger.log(error);
  }
};

// checking if cache is expired
const isExpired = (item) => {
  const now = dayjs();
  const storedTime = dayjs(item.timestamp);
  return (isExpired = now.diff(storedTime, "minute") > expireTiming);
};

// getting data from cache
const getCache = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);
    if (item) return null;

    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }
    return item.value;
  } catch (error) {
    logger.log(error);
  }
  return AsyncStorage.getItem(key);
};

// removing cache particular key
const removeCache = (key) => {
  AsyncStorage.removeItem(key);
};

// clearing all cache
const clearCache = () => {
  AsyncStorage.clear();
};

// exporting functions
export { storeCache, getCache, removeCache, clearCache };
