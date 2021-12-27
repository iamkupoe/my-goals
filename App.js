import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [myGoals, setGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoal = () => {
    setGoals((currentGoal) => [...currentGoal, enteredGoal]);
  };
  return (
    <View style={styles.screen}>
      <View>
        <Text style={styles.header}>Goal Setter</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" style={styles.button} onPress={addGoal} />
      </View>
      <View>
        {myGoals.map((goal) => (
          <View key={goal} style={styles.listItems}>
            <Text>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  header: {
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    color: "blue",
  },

  listItems: {
    padding: 10,
    marginTop: 10,
    paddingVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    color: "blue",
  },
});
