import { useState } from "react";
import { StyleSheet, Switch, Text, TextInput, View } from "react-native";

import Screen from "./app/components/Screen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";

export default function App() {
  return (
    <Screen>
      <RegisterScreen />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
