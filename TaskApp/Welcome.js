import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';

function Welcome({ navigation }) {
  const [name, setName] = useState('');

  const enterApp = () => {
    navigation.navigate('TaskPage', { name });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <Button title="Enter" onPress={enterApp} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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

export default Welcome;
