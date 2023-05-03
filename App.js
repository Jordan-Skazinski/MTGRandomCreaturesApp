import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { globalStyles } from './globalStyles';
import Navigator from './stack.js'
export default function App() {
  return (
      <Navigator/>
  );
}

