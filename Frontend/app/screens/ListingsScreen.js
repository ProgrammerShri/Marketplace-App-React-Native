import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingApi from "../api/listings";

const ListingsScreen = ({ navigation }) => {
  const [listings, setListings] = React.useState([]);

  useEffect(() => {
    listingApi
      .getListings()
      .then((response) => {
        setListings(response.data);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("finally");
      })
      .done();
  }, []);

  const loadListings = async () => {
    const response = await listingApi.getListings();
    console.log(response);
    setListings(response.data);
  };

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={`$${item.price}`}
            imageUrl={item.image[0].url}
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
});

export default ListingsScreen;
