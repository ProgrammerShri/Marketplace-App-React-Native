import React from "react";
import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <LottieView
        // style={styles.lottie}
        source={require("../assets/animations/loader.json")}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: colors.black,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 1,
    opacity: 0.7,
  },
});

export default ActivityIndicator;
