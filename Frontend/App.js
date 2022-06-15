import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import NetInfo from "@react-native-community/netinfo";
import { LogBox } from "react-native";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";

export default function App() {
  LogBox.ignoreAllLogs();
  const [user, setUser] = React.useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
