import React from "react";
import LottieView from "lottie-react-native";
import { StyleSheet } from "react-native";

const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;
  return (
    <LottieView
      style={styles.lottie}
      source={require("../assets/animations/loader.json")}
      autoPlay
      loop
    />
  );
};

const styles = StyleSheet.create({
  lottie: {
    zIndex: 1,
  },
});

export default ActivityIndicator;
