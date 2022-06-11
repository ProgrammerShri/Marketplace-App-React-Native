import React from "react";
import { Image, StyleSheet } from "react-native";
import AppForm from "../components/AppForm";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../components/ErrorMessage";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";

const validationSchema = Yup.object()
  .shape({
    email: Yup.string().label("Email").required().email(),
    password: Yup.string().label("Password").required().min(4),
  })
  .required();

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          icon="email"
          placeholder="Email"
          textContentType="emailAddress"
          name="email"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          textContentType="password"
          secureTextEntry={true}
          name="password"
        />

        <SubmitButton title="Login" color="primary" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 10,
  },
});

export default LoginScreen;
