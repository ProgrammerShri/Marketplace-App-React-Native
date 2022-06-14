import { Modal, StyleSheet, View } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import colors from "../config/colors";
import LottieView from "lottie-react-native";

const UploadScreen = ({ progress = 0, visible = false, onDone }) => {
  return (
    <>
      <Modal visible={visible}>
        <View style={styles.container}>
          {progress < 1 ? (
            <Progress.Bar
              progress={progress}
              color={colors.primary}
              width={200}
            />
          ) : (
            <LottieView
              source={require("../assets/animations/done.json")}
              autoPlay
              loop={false}
              style={styles.lottie}
              onAnimationFinish={onDone}
            />
          )}
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  lottie: {
    width: 200,
  },
});

export default UploadScreen;
