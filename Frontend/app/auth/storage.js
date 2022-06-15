import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";
import logger from "../utility/logger";

const key = "authToken";

// storing the token in the device's secure storage
const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    logger.log("Error storing the auth token", error);
  }
};

// retrieving the token from the device's secure storage
const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    logger.log("Error retrieving the auth token", error);
  }
};

// getting the token from the device's secure storage and returning it
const getUser = async () => {
  try {
    const token = await getToken();
    return token ? jwtDecode(token) : null;
  } catch (error) {
    logger.log("Error retrieving the user", error);
  }
};

// deleting the token from the device's secure storage
const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    logger.log("Error removing the auth token", error);
  }
};

export default { getToken, storeToken, getUser, removeToken };
