import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";

type Props = {
  addItem: (item: string) => void;
};

const CreateItem = ({ addItem }: Props) => {
  const [text, setText] = useState("");

  const handleAddItem = () => {
    if (text.trim() !== "") {
      addItem(text);
      setText("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={(value) => setText(value)}
        placeholder="Enter item"
      />
      <TouchableOpacity onPress={handleAddItem} style={styles.button}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    width: "80%",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 45,
    marginRight: 10,
    paddingHorizontal: 10,
    height: 70,
    paddingLeft: 20,
  },

  button: {
    backgroundColor: "#841584",
    borderRadius: 100,
    padding: 15,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
});

export default CreateItem;
