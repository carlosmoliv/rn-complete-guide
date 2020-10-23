import React, { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/goaInput";
import GoalItem from "./components/goaltem";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modal, setModal] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalTitle },
    ]);

    setModal(false);
  };

  const removeGoalHandler = (goalId) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== goalId);
    });
  };

  const cancelModalHandler = () => {
    setModal(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setModal(true)} />
      {/* <Text>Hello World!</Text> */}

      <GoalInput
        visible={modal}
        addGoal={addGoalHandler}
        cancelModal={cancelModalHandler}
      />

      <FlatList
        data={goals}
        renderItem={(data) => (
          <GoalItem
            title={data.item.value}
            id={data.item.key}
            onDelete={removeGoalHandler}
          />
        )}
      />

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
