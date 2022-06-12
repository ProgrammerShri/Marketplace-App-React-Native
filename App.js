import { useEffect, useState } from "react";
import { Image, StyleSheet, Switch, Text, Button, View } from "react-native";
import Screen from "./app/components/Screen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import * as ImagePicker from "expo-image-picker";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  return (
    <Screen>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={(uri) => setImageUris([...imageUris, uri])}
        onRemoveImage={(uri) =>
          setImageUris(imageUris.filter((imageUri) => imageUri !== uri))
        }
      />

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
