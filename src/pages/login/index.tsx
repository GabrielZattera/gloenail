import React, { useState } from "react";
import { Text, View, Image, TextInput, Button, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../assets/Logo.png";
import styles from "./styles";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Campo obrigatório", "Por favor, preencha todos os campos.");
    } else {
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxTop}>
        <Image source={Logo} style={{ width: 150, height: 100 }} />
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Bem vindo de volta!</Text>
      </View>
      <View style={styles.boxMid}>
        <Text>Endereço de e-mail</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Digite seu e-mail"
        />
        <Text>Senha</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Digite sua senha"
          secureTextEntry
        />
      </View>
      <View style={styles.boxBottom}>
        <Button title="Entrar" color="#eb85ca" onPress={handleLogin} />
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.createAccountText}>Não tem uma conta? Crie uma agora</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}