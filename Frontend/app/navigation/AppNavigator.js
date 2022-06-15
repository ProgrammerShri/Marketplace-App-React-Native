import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingsScreen from "../screens/ListingsScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountScreen from "../screens/AccountScreen";
import FeedNavigator from "./FeedNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NewListingButton from "./NewListingButton";
import routes from "./routes";
import useNotifications from "../hooks/useNotifications";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  useNotifications();
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name={routes.FEED}
          component={FeedNavigator}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name={routes.LISTING_EDIT}
          component={ListingEditScreen}
          options={({ navigation }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="plus-circle"
                color={color}
                size={size}
              />
            ),
            tabBarButton: () => (
              <NewListingButton
                onPress={() => navigation.navigate(routes.LISTING_EDIT)}
              />
            ),
          })}
        />
        <Tab.Screen
          name={routes.ACCOUNT}
          component={AccountScreen}
          options={{
            headerTitleAlign: "center",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default AppNavigator;
