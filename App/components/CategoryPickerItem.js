import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "./Icon";
import AppText from "./AppText";

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    width: "33.3%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoryPickerItem;
