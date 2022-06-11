import { useState } from "react";
import { StyleSheet, Switch, Text, TextInput, View } from "react-native";

import Screen from "./app/components/Screen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import RegisterScreen from "./app/screens/RegisterScreen";

export default function App() {
  return (
    <Screen>
      <ListingEditScreen />
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
