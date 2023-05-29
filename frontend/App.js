import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainPage from './src/component/main/MainPage';
import LoadingPage from './src/component/pages/LoadingPage';

export default function App() {
  return (
    <MainPage/>
    // <LoadingPage/>
  );
}

