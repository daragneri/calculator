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
  const [operators, setOperators] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const handleDataFromChild = (data: string | number) => {
    if (data === "C") {
      setOperators("");
      setDisplay("");
      setNum1("");
      setNum2("");
    } 
    
    else {
      if (typeof data === "number" && operators === "") {
        setNum1((prev) => prev + data.toString());
        setDisplay((prev) => prev + data.toString());
      } 

      else if (data === "=") {
        const n1 = parseInt(num1);
        const n2 = parseInt(num2);
        const sum = n1 + n2;
        setDisplay(sum.toString());
        console.log("entrou");
      }
      
      else if (operators !== "") {
        setNum2((prev) => prev + data.toString());
        setDisplay((prev) => prev + data.toString());
      }

      else if (data === "+") {
        setOperators(data);
        setDisplay((operators) => operators + data.toString());
        
      }
       
      
      
      else if (operators !== "") {
        setNum2((prev) => prev + data.toString());
      }
    }
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
