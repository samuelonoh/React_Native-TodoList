import React, { useState } from "react";
import Demo from "../main/demo";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function Register() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    if (!name || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      await AsyncStorage.setItem("user_name", name);
      await AsyncStorage.setItem("user_password", password);
      Alert.alert("Success", "Registration successful!");
      navigation.navigate("Demo");
    } catch (error) {
      Alert.alert("Error", "Failed to save credentials");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Register</Text>
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
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Confirm Password:</Text>
        <TextInput
          style={styles.input}
          keyboardType="default"
          placeholder="Confirm Password"
          placeholderTextColor="#ABAFAF"
          autoCapitalize="none"
          secureTextEntry
          onChangeText={setConfirmPassword}
          value={confirmPassword}
        />
      </View>
      <TouchableOpacity onPress={handleRegister} style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "5%",
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
    color: "#292B2B",
    borderWidth: 1,
    borderColor: "black",
    height: 50,
    fontSize: 15,
    width: "100%",
    borderRadius: 45,
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
