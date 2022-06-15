import React from "react";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import expoPushTokens from "../api/expoPushTokens";
import navigation from "../navigation/rootNavigation";
import logger from "../utility/logger";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowAlert: true,
  }),
});

export default useNotification = (notificationListner) => {
  React.useEffect(() => {
    registerForPushNotifications();

    if (notificationListner)
      Notifications.addNotificationReceivedListener((notificationListner) => {
        navigation.navigate(routes.ACCOUNT);
      });
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;
      const token = await Notifications.getExpoPushTokenAsync();
      await expoPushTokens.register(token);
    } catch (error) {
      logger.log("Error getting expo push token", error);
    }
  };
};
