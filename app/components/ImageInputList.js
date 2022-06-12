import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import ImageInput from "./ImageInput";

const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          {imageUris.map((imageUri, index) => {
            return (
              <View key={imageUri}>
                <ImageInput
                  imageUri={imageUri}
                  onChangeImage={() => onRemoveImage(imageUri)}
                  style={styles.image}
                />
              </View>
            );
          })}
          <ImageInput
            onChangeImage={(uri) => onAddImage(uri)}
            style={styles.image}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    justifyContent: "center",
  },
});

export default ImageInputList;
