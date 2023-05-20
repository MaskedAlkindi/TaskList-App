import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, CheckBox } from 'react-native';

function TaskItem({ task, onToggle }) {
  return (
    <View style={styles.container}>
      <CheckBox value={task.status === 'complete'} onValueChange={onToggle} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{task.name}</Text>
        <Text style={styles.text}>{task.date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 18,
  },
});

export default TaskItem;
