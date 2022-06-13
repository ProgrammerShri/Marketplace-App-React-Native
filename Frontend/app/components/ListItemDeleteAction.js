import React from "react";

import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
const ListItemDeleteAction = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} style={styles.container}>
      <View>
        <MaterialCommunityIcons
          name="delete-outline"
          size={30}
          color={colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ListItemDeleteAction;
