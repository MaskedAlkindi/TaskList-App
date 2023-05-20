import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Alert } from 'react-native';

function EditPage({ route, navigation }) {  // Include the navigation prop
  const { setTasks } = route.params;

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [status, setStatus] = useState('not complete');

  const createTask = () => {
    const task = { name, description, date, status };
    setTasks(tasks => [...tasks, task]);
    Alert.alert("Task Added", "Your new task has been created successfully!");
    navigation.goBack();  // Add this line to navigate back to the tasks page
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Task name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Date"
        value={date}
        onChangeText={setDate}
      />
      <Button title="Create Task" onPress={createTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default EditPage;
