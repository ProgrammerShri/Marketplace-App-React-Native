import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import NetInfo from "@react-native-community/netinfo";
import { LogBox } from "react-native";

export default function App() {
  LogBox.ignoreAllLogs();

  const demo = async () => {
    await AsyncStorage.setItem("person", JSON.stringify({ name: "John" }));
    const value = await AsyncStorage.getItem("person");
    const person = JSON.parse(value);
    console.log(person);
  };
  demo();
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
      {/* <AuthNavigator /> */}
    </NavigationContainer>
  );
}
