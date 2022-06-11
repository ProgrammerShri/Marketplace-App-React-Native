import { useState } from "react";
import { StyleSheet, Switch, Text, TextInput, View } from "react-native";
import AppPicker from "./app/components/AppPicker";
import Screen from "./app/components/Screen";

const categories = [
  { label: "Clothing", value: 1 },
  { label: "Electronics", value: 2 },
  { label: "Furniture", value: 3 },
  { label: "Books", value: 4 },
  { label: "Other", value: 5 },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);
  return (
    <Screen>
      <AppPicker
        icon="apps"
        placeholder="Category"
        items={categories}
        onSelectItem={(item) => setCategory(item)}
        selectedItem={category}
      />
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
