import { Button } from "@/components/ui/Button";
import React from "react";
import { Dimensions, FlatList, ListRenderItem, StyleSheet, View } from "react-native";

type ButtonGridScreenProps = {
  total_buttons: number;
  columns: number;
  buttons:  (string | number)[][];
  onDataReceived: any
};


export default function ButtonGridScreen({
  total_buttons,
  columns,
  buttons,
  onDataReceived
}: ButtonGridScreenProps) {

  const handlePress = (label: number | string) => {
    onDataReceived(label)
    console.log(`Pressionando: ${label}`);
  };

  const renderItem: ListRenderItem<string | number> = ({ item }) => (
    <View
      style={[
        styles.item,
        { minWidth: Dimensions.get("window").width / columns - 24 },
      ]}

    >
      <Button title={item} onPress={() => handlePress(item)} />
    </View>
  );

  return (
    <FlatList<string | number>
  data={buttons.flat()}
  renderItem={renderItem}
  keyExtractor={(item) => item.toString()} // importante!
  numColumns={columns}
  contentContainerStyle={styles.container}
/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    backgroundColor: "pink",
  },
  item: {
    margin: 8,
  },
});
