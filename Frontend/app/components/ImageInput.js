import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";

const ImageInput = ({ imageUri, onChangeImage }) => {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted)
      alert("You need to enable camera permissions to use this app.");
  };

  const handlePress = async () => {
    if (!imageUri) selectImage();
    else
      Alert.alert(
        "Are you sure?",
        "Are you sure you want to remove this image?",
        [
          { text: "Cancel" },
          { text: "Remove", onPress: () => onChangeImage(null) },
        ]
      );
  };

  const selectImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("You need to enable permissions to use this app.");
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      //   allowsEditing: true,
      //   aspect: [4, 4],
      //   quality: 0.5,
    });
    if (!result.cancelled) {
      onChangeImage(result.uri);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.medium}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    height: 100,
    width: 100,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ImageInput;
