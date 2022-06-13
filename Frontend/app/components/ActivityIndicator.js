import React from "react";
import LottieView from "lottie-react-native";
import { ViewPropTypes } from "react-native";

const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;
  return (
    <LottieView
      source={require("../assets/animations/loader.json")}
      autoPlay
      loop
    />
  );
  c;
};

export default ActivityIndicator;
