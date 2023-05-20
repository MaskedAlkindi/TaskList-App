import React, { useState, useEffect } from 'react';
import { Button, FlatList, Text, TextInput, View, StyleSheet } from 'react-native';
import TaskItem from './TaskItem';
import { Picker } from '@react-native-picker/picker';

function TaskPage({ route, navigation }) {
  const { name } = route.params;
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    navigation.setParams({ setTasks });
  }, []);

  useEffect(() => {
    let tempTasks = tasks;
    if (filter === 'complete') {
      tempTasks = tasks.filter(task => task.status === 'complete');
    } else if (filter === 'not complete') {
      tempTasks = tasks.filter(task => task.status === 'not complete');
    }

    if (search) {
      tempTasks = tempTasks.filter(task =>
        task.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    setFilteredTasks(tempTasks);
  }, [tasks, search, filter]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {name}</Text>
      <Picker
        selectedValue={filter}
        onValueChange={itemValue => setFilter(itemValue)}
      >
        <Picker.Item label="All tasks" value="all" />
        <Picker.Item label="Completed tasks" value="complete" />
        <Picker.Item label="Uncompleted tasks" value="not complete" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Search tasks"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        style={styles.list}
        data={filteredTasks}
        renderItem={({ item, index }) => 
          <TaskItem 
            task={item} 
            onToggle={() => {
              let updatedTasks = [...tasks];
              updatedTasks[index].status = updatedTasks[index].status === 'complete' ? 'not complete' : 'complete';
              setTasks(updatedTasks);
            }}
          />
        }
      />
      <View style={styles.buttonContainer}>
        <Button
          title="+"
          onPress={() => navigation.navigate('EditPage', { setTasks, navigation })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  list: {
    marginBottom: 80,  // Leave space for the floating button
  },
  buttonContainer: {
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
});

export default TaskPage;
