import React, { useEffect } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingApi from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
// import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";
import { LogBox } from "react-native";

const ListingsScreen = ({ navigation }) => {
  const {
    data: listings,
    isLoading,
    error,
    request: loadlistings,
  } = useApi(listingApi.getListings);

  useEffect(() => {
    loadlistings();
  }, []);

  LogBox.ignoreLogs(["exported from 'deprecated-react-native-prop-types'."]);
  // LogBox.ignoreLogs([
  //   "ViewPropTypes will be removed",
  //   "ColorPropType will be removed",
  // ]);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <View style={styles.error}>
            <AppText
              style={{
                textAlign: "center",
                fontSize: 26,
                marginVertical: 50,
              }}
            >
              Something went Wrong
            </AppText>
            <AppButton title="Retry" onPress={loadlistings} color="primary" />
          </View>
        </>
      )}
      {/* <ActivityIndicator visible={isLoading} /> */}
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          // console.log(item),
          <Card
            title={item.title}
            subTitle={`$${item.price}`}
            imageUrl={item.images[0]?.url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
  error: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default ListingsScreen;
