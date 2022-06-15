import client from "./client";

const register = async (expoPushToken) => {
  const response = await client.post("/expoPushTokens", { expoPushToken });
  return response.data;
};

export default { register };
