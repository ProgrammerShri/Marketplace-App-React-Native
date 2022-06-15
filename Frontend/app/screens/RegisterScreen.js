import React from "react";
import * as Yup from "yup";
import { Image, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";
import routes from "../navigation/routes";
import authApi from "../../app/api/auth.js";
import useAuth from "../auth/useAuth";
import userApi from "../../app/api/user.js";

const validationSchema = Yup.object()
  .shape({
    name: Yup.string().required().min(1),
    email: Yup.string().label("Email").required().email(),
    password: Yup.string().label("Password").required().min(4),
  })
  .required();

const RegisterScreen = () => {
  const [error, setError] = React.useState(null);
  const auth = useAuth();

  const handleSubmit = async (userInfo) => {
    const result = await userApi.register(userInfo);
    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError(response.data.message || "An unexpected error occured");
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await authApi.login(
      userInfo.email,
      userInfo.password
    );
    setError(null);
    auth.logIn(authToken);
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <ErrorMessage error={error} visible={error} />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
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

        <SubmitButton title={routes.REGISTER} color="secondary" />
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

export default RegisterScreen;
