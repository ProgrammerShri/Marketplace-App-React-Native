import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";
import Screen from "./Screen";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const OfflineNotice = () => {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && !netInfo.isInternetReachable) {
    return (
      <Screen>
        <View style={styles.container}>
          <MaterialCommunityIcons
            name="wifi-off"
            size={30}
            color={colors.white}
            style={styles.icon}
          />
          <AppText style={styles.text}>No internet connection</AppText>
        </View>
      </Screen>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    position: "absolute",
    zIndex: 1,
    top: Constants.statusBarHeight,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
  },
  text: {
    color: colors.white,
    fontSize: 20,
    marginLeft: 10,
  },
  icon: {
    paddingLeft: 170,
  },
});

export default OfflineNotice;
