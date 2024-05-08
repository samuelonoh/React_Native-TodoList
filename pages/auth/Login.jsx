import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await AsyncStorage.getItem("user_name", name);
      await AsyncStorage.getItem("user_password", password);
      Alert.alert("Success", "Logged in");
    } catch (error) {
      Alert.alert("Error", "Type the correct credentials");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign in</Text>
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Name:</Text>
        <TextInput
          style={styles.input}
          keyboardType="default"
          placeholder="E.g Sammy"
          placeholderTextColor="#ABAFAF"
          autoCapitalize="none"
          onChangeText={setName}
          value={name}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Password:</Text>
        <TextInput
          style={styles.input}
          keyboardType="default"
          placeholder="Password"
          placeholderTextColor="#ABAFAF"
          autoCapitalize="none"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: "80%",
    gap: 30,
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 50,
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    color: "#ABAFAF",
    borderWidth: 1,
    borderColor: "black",
    height: 50,
    fontSize: 15,
    width: "100%",
    borderRadius: 45,
  },

  areaView: {
    width: "100%",
    justifyContent: "center",
    gap: 30,
  },

  inputText: {
    fontSize: 20,
    paddingLeft: 5,
  },

  inputGroup: {
    marginBottom: 20,
    width: "100%",
  },
  inputLabel: {
    fontSize: 20,
    paddingLeft: 5,
  },
  button: {
    backgroundColor: "#841584",
    borderRadius: 45,
    marginTop: 20,
    padding: 10,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
});
