import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainPage from './src/component/main/MainPage';
import LoadingPage from './src/component/pages/LoadingPage';
import DrawerLayout from './src/component/form/DrawerLayout';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    // <MainPage/>
    // <LoadingPage/>
    // <DrawerLayout/>

    <NavigationContainer>
      <StatusBar style="black" />
      <StackNavigator />
    </NavigationContainer>
  );
}

