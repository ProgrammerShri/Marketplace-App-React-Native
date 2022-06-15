import * as SecureStore from "expo-secure-store";

const key = "authToken";

// storing the token in the device's secure storage
const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error storing the auth token", error);
  }
};

// retrieving the token from the device's secure storage
const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error retrieving the auth token", error);
  }
};
const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};

export default { storeToken, getToken, removeToken };
