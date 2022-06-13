import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Listings" component={ListingsScreen} />
      <Stack.Screen
        name="ListingDetails"
        component={ListingDetailsScreen}
        options={({ route }) => ({
          headerShown: Platform.OS === "android" ? true : false,
          title: route.params.title,
        })}
      />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
