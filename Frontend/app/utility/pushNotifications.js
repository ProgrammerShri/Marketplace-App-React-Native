const { Expo } = require("expo-server-sdk");

const sendPushNotification = async (targetExpoPushToken, message) => {
  const expo = new Expo();
  const chunks = expo.chunkPushNotification([
    {
      to: targetExpoPushToken,
      sound: "default",
      title: "New Message",
      body: message,
    },
  ]);

  const sendChunks = async () => {
    chunks.forEach(async (chunk) => {
      await expo.sendPushNotificationsAsync(chunk);
      console.log("Push notification sent", chunk);
    });
  };
};
