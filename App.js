import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "./components/Header";
import CadastroInput from "./components/CadastroInput";
import UserList from "./components/UserList";
import Divider from "./components/Divider";
import CustomButton from "./components/CustomButton";
import {
  rotulo_btn_cadastrar,
  rotulo_nome_cadastro,
  rotulo_telefone_cadastro,
  rotulo_titulo,
} from "./components/Rotulos";

const App = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [users, setUsers] = useState([]);

  function nameInputHandler(text) {
    setName(text);
  }

  function phoneInputHandler(text) {
    setPhone(text);
  }

  function adicionarUsuarioHandler() {
    if (name.trim() && phone.trim()) {
      setUsers([...users, { name, phone }]);
      setName("");
      setPhone("");
    }
  }

  return (
    <View style={styles.container}>
      <Header title={rotulo_titulo} />

      <View style={styles.formContainer}>
        <CadastroInput
          label={rotulo_nome_cadastro}
          value={name}
          onChangeText={nameInputHandler}
        />
        <CadastroInput
          label={rotulo_telefone_cadastro}
          value={phone}
          onChangeText={phoneInputHandler}
        />

        <View style={styles.inputRow}>
          <View style={{ flex: 1 }} />
          <View style={{ flex: 2 }}>
            <CustomButton title={rotulo_btn_cadastrar} onPress={adicionarUsuarioHandler} />
          </View>
        </View>
      </View>

      <Divider />
      <UserList users={users} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 15,
  },
  formContainer: {
    gap: 10,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 10,
  },
});

export default App;
