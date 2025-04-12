import React from "react";
import { View, StyleSheet } from "react-native";

const Divider = () => <View style={styles.linha} />;

const styles = StyleSheet.create({
  linha: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginVertical: 10,
  },
});

export default Divider;
