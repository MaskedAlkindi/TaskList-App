# React Native Expo Task Management Application Documentation

## Overview:

This application consists of three primary screens: `Welcome`, `TaskPage`, and `EditPage`. A user first encounters the `Welcome` screen, where they enter their name. Upon entering, they are redirected to the `TaskPage`, where they can view, add, and manage tasks. The `EditPage` provides an interface to add new tasks.

## 1. App.js:

This is the main entry point of the application. It sets up the navigation stack and specifies the available screens.

### Components used:
- `NavigationContainer`: It's the container for all navigation related components.
- `createStackNavigator`: Used to create a stack of screens for navigation.
- `Welcome`, `TaskPage`, `EditPage`: These are imported screen components that can be navigated to.

## 2. EditPage.js:

This screen is used to add a new task.

### Components used:
- `Button`, `TextInput`, `View`, `StyleSheet`, `Alert` from `react-native`.
  
### State Variables:
- `name`: Represents the name of the task.
- `description`: Describes the task.
- `date`: Specifies the date for the task.
- `status`: Represents the completion status of the task.

### Functions:
- `createTask`: Creates a new task, adds it to the existing tasks, and returns the user to the TaskPage.

## 3. TaskItem.js:

It represents each task item in the list of tasks.

### Components used:
- `Text`, `TouchableOpacity`, `View`, `StyleSheet`, `CheckBox`, `Button` from `react-native`.

### Props:
- `task`: The task details.
- `onToggle`: Function to toggle the completion status of the task.
- `onRemove`: Function to remove the task from the list.

## 4. TaskPage.js:

Displays the list of tasks and provides filtering options.

### Components used:
- `Button`, `FlatList`, `Text`, `TextInput`, `View`, `StyleSheet` from `react-native`.
- `Picker` from `@react-native-picker/picker`.

### State Variables:
- `tasks`: The array of tasks.
- `search`: The search term to filter tasks by name.
- `filter`: Specifies which tasks to view ('all', 'complete', 'not complete').
- `filteredTasks`: The tasks that fit the filter and search criteria.

### Functions:
- `useEffect`: There are two useEffect hooks:
  - The first one sets `setTasks` function in the navigation parameters.
  - The second one filters tasks based on the search and filter criteria.
  
## 5. Welcome.js:

The initial screen where the user enters their name.

### Components used:
- `Button`, `TextInput`, `View`, `StyleSheet` from `react-native`.

### State Variables:
- `name`: Stores the name of the user.

### Functions:
- `enterApp`: Navigates the user to the `TaskPage` upon clicking the "Enter" button.

## Styles:

Each screen has its unique styling using `StyleSheet.create`. Components are styled for appearance (like font size, padding, margins) and layout (like flex direction, alignment).

## Note:

Ensure you have the necessary modules installed (`@react-navigation/native`, `@react-navigation/stack`, `@react-native-picker/picker`) before running the application.

---

End of Documentation.