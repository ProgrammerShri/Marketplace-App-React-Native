import React, { useEffect } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingApi from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

const ListingsScreen = ({ navigation }) => {
  const [listings, setListings] = React.useState([]);
  const [error, setError] = React.useState(true);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    const response = await listingApi.getListings();
    if (!response.ok) return setError(true);
    setError(false);
    setListings(response.data);
  };

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
            <AppButton title="Retry" onPress={loadListings} color="primary" />
          </View>
        </>
      )}
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
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
