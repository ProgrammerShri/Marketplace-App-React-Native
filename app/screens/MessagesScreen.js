import React from "react";
import { StyleSheet, FlatList, Text } from "react-native";
import ListItem from "../components/ListItem";

const messages = [
  {
    id: 1,
    title: "Message 1",
    body: "This is the body of message 1",
    desc: "This is the description of message 1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "Message 2",
    body: "This is the body of message 2",
    desc: "This is the description of message 1",
    image: require("../assets/mosh.jpg"),
  },
];

const MessagesScreen = () => {
  return (
    <FlatList
      data={messages}
      keyExtractor={(message) => message.id.toString()}
      renderItem={({ item }) => (
        <ListItem title={item.title} subTitle={item.body} image={item.image} />
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
