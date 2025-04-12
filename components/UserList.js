import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { rotulo_nome_lista, rotulo_telefone_lista } from "./Rotulos";

const UserList = ({ users }) => (
  <View style={styles.userList}>
    <View style={styles.listHeader}>
      <Text style={styles.headerText}>{rotulo_nome_lista}</Text>
      <Text style={styles.headerText}>{rotulo_telefone_lista}</Text>
    </View>

    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {users.map((user, index) => (
        <View key={index} style={styles.userItem}>
          <Text>{user.name}</Text>
          <Text>{user.phone}</Text>
        </View>
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  UserList: {
    flex: 1,
  },
  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
  userItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  headerText: {
    fontWeight: "bold",
  },
});

export default UserList;
