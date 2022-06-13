import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const NewListingButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={colors.white}
          size={50}
          style={styles.icon}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 50,
    bottom: 40,
    alignSelf: "center",
    justifyContent: "center",
    height: 80,
    width: 80,
  },
  icon: {
    alignSelf: "center",
  },
});

export default NewListingButton;
