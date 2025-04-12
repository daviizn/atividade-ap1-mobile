import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Header;
