import { Constants } from "expo-constants";

const settings = {
  dev: {
    apiUrl: "https://node-marketplace-app.herokuapp.com/api/",
  },
  stagging: {
    apiUrl: "https://node-marketplace-app.herokuapp.com/api/",
  },
  prod: {
    apiUrl: "https://node-marketplace-app.herokuapp.com/api/",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;

  if (Constants.manifest.releaseChannel === "staging") return settings.stagging;

  return settings.prod;
};

export default getCurrentSettings;
