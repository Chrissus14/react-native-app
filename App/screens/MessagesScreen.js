import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et facilisis lorem, eget convallis turpis. Nullam risus tellus, tempor eget elit ut, malesuada egestas tortor. Nunc diam odio, varius eu dictum at, commodo sed neque. Quisque ultricies elit quis ipsum consequat, vitae venenatis purus ultricies. Proin ultricies est magna, sed consectetur dui pellentesque sit amet. Praesent rutrum quam eros, et fringilla dolor gravida id. Phasellus venenatis ullamcorper dui ut finibus. Proin a fringilla mi. ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et facilisis lorem, eget convallis turpis. Nullam risus tellus, tempor eget elit ut, malesuada egestas tortor. Nunc diam odio, varius eu dictum at, commodo sed neque. Quisque ultricies elit quis ipsum consequat, vitae venenatis purus ultricies. Proin ultricies est magna, sed consectetur dui pellentesque sit amet. Praesent rutrum quam eros, et fringilla dolor gravida id. Phasellus venenatis ullamcorper dui ut finibus. Proin a fringilla mi. ",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            numberOfLines={1}
            onPress={() => console.log(item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ])
        }
      />
    </Screen>
  );
};

export default MessagesScreen;
