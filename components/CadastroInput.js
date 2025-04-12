import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const CadastroInput = ({ label, value, onChangeText, keyboardType = "default", placeholder }) => (
  <View style={styles.inputRow}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.inputText}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      placeholder={placeholder}
      placeholderTextColor="#aaa"
    />
  </View>
);

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    flexWrap: "wrap",
    gap: 10,
  },
  label: {
    flex: 1,
    fontWeight: "bold",
    minWidth: 80,
  },
  inputText: {
    flex: 2,
    borderColor: "#000",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    minWidth: 120,
  },
});

export default CadastroInput;
