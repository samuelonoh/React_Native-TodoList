import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

type Props = {
  items: string[];
  deleteItem: (index: number) => void;
  updateItem: (index: number, newItem: string) => void;
};
const DisplayItems = ({ items, deleteItem, updateItem }: Props) => {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editedItem, setEditedItem] = useState<string>("");

  const startEditing = (index: number, item: string) => {
    setEditIndex(index);
    setEditedItem(item);
  };

  const cancelEditing = () => {
    setEditIndex(null);
    setEditedItem("");
  };

  const handleUpdateItem = (index: number) => {
    if (editedItem !== "") {
      updateItem(index, editedItem);
      setEditIndex(null);
      setEditedItem("");
    }
  };

  return (
    <ScrollView style={styles.container}>
      {items.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          {editIndex === index ? (
            <View style={styles.editContainer}>
              <TextInput
                style={styles.editInput}
                value={editedItem}
                onChangeText={(value) => setEditedItem(value)}
                placeholder="Update item"
              />
              <TouchableOpacity onPress={() => handleUpdateItem(index)}>
                <Text style={styles.actionButton}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={cancelEditing}>
                <Text style={styles.actionButton}>Cancel</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.item}>
              <Text>{item}</Text>
              <TouchableOpacity style={styles.options}>
                <Text
                  style={styles.updateButton}
                  onPress={() => startEditing(index, item)}
                >
                  Update
                </Text>
                <Text
                  style={styles.deleteButton}
                  onPress={() => deleteItem(index)}
                >
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
  },

  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    borderWidth: 2,
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  editContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  editInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  options: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionButton: {
    marginLeft: 10,
    color: "blue",
  },
  updateButton: {
    color: "green",
    marginRight: 10,
  },
  deleteButton: {
    color: "red",
  },
});

export default DisplayItems;
