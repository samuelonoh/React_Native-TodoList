import React from "react";
import Login from "../auth/Login";
import Register from "../auth/Register";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Demo from "./demo";

export default function Home() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent="true" style={styles.container}>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Demo" component={Demo} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E9FBFF",
    borderWidth: 2,
    borderColor: "blue",
  },
});
