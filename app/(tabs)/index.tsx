import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import ButtonGridScreen from "@/components/ButtonGridScreen";
import { useState } from "react";
const rows = [
  ["C", "()", "%", "÷"],
  [7, 8, 9, "×"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  ["+/-", 0, ".", "="],
];

export default function HomeScreen() {
  const [display, setDisplay] = useState("");
  const[operators, setOperators] = useState("");
  
  const handleDataFromChild = (data: string | number) => {
    if (data === "C") {
      setDisplay("");
    }
    if (typeof data === "number") {
      setDisplay((prev) => prev + data.toString());
    }
    if(data === "+") {
      setDisplay((prev) => prev.toString() + data)
  };
  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.display}>{display}</Text>
      </View>

      <View style={styles.gridContainer}>
        <ButtonGridScreen
          total_buttons={20}
          columns={4}
          buttons={rows}
          onDataReceived={handleDataFromChild}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  displayContainer: {
    flex: 0.2, // 20% da altura da tela
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end", // alinhado à direita como calculadora
    padding: 16,
    backgroundColor: "green",
  },
  display: {
    color: "violet",
    fontSize: 40,
  },
  gridContainer: {
    flex: 0.8, // 80% restante
    width: "100%",
    backgroundColor: "blue",
  },
});
