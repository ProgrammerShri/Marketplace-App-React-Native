import { StyleSheet, View } from "react-native";
import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  return (
    <Screen>
      <Icon name="email" size={50} backgroundColor="#f00" iconColor="white" />
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
