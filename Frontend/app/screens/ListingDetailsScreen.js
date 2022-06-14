import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = ({ route }) => {
  const listing = route?.params;

  const { images } = listing;
  const image = images[0]?.url;
  return (
    <View>
      <Image
        style={styles.image}
        // preview={{ uri: images[0]?.thumbnail }}
        source={image && { uri: image }}
      />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>{listing?.title}</AppText>
        <AppText style={styles.price}>${listing?.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  detailContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
    fontSize: 24,
    fontWeight: "bold",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});
