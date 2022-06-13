import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({
  name,
  size = 40,
  backgroundColor = colors.black,
  iconColor = colors.white,
}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Icon;
