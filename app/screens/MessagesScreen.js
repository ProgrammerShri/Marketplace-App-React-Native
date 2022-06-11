import React from "react";
import { FlatList, View } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const messagesData = [
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
  const [messages, setMessages] = React.useState(messagesData);
  const [refreshing, setRefreshing] = React.useState(false);
  const handleDelete = (message) => {
    const newMessages = messagesData?.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };

  return (
    <Screen>
      <FlatList
        data={messagesData}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.body}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          console.log("Refreshing");
        }}
      />
    </Screen>
  );
};

export default MessagesScreen;
