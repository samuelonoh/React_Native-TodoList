import React, { useState } from "react";
import { StyleSheet, View, Text, Button, Alert, Image } from "react-native";
import CreateItem from "../../components/CreateItem";
import DisplayItems from "../../components/DisplayItems";

export default function Demo() {
  const [items, setItems] = useState<string[]>([]);

  const addItem = (item: string) => {
    setItems([...items, item]);
  };

  const deleteItem = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const updateItem = (index: number, newItem: string) => {
    Alert.alert("Saved", "Done");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/image.png")}
        style={{ width: "100%", height: "20%" }}
      />
      <Text style={styles.title}>CRUD APP</Text>
      <CreateItem addItem={addItem} />
      <DisplayItems
        items={items}
        deleteItem={deleteItem}
        updateItem={updateItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
