import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Importe suas telas
import Login from "./src/pages/login";
import Register from "./src/pages/register";
import Home from "./src/pages/home";

// Define a tipagem das rotas
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

// Cria o stack com a tipagem
const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
