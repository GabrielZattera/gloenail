import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, Alert, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../assets/Logo.png";
import styles from "./styles";

export default function Register() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!name || !email || !password) {
      Alert.alert("Campo obrigatório", "Por favor, preencha todos os campos.");
    } else {
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={{ width: 150, height: 100 }} />
      <Text style={styles.title}>Crie sua conta</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Nome"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Senha"
        secureTextEntry
      />
      <Button title="Cadastrar" color="#eb85ca" onPress={handleRegister} />
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.backToLogin}>Já tem uma conta? Volte para o login</Text>
      </TouchableOpacity>
    </View>
  );
}