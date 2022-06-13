import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import routes from "../navigation/routes";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.text}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title={routes.LOGIN}
          onPress={() => navigation.navigate(routes.LOGIN)}
          color="primary"
        />
        <AppButton
          title={routes.REGISTER}
          onPress={() => navigation.navigate(routes.REGISTER)}
          color="secondary"
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    obkectFit: "cover",
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  text: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
