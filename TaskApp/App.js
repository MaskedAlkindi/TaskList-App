import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './Welcome';
import TaskPage from './TaskPage';
import EditPage from './EditPage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomePage">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="TaskPage" component={TaskPage} />
        <Stack.Screen name="EditPage" component={EditPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
