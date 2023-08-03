import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainPage from './src/component/main/MainPage';
import LoadingPage from './src/component/pages/LoadingPage';
import DrawerLayout from './src/component/form/DrawerLayout';
import SignIn from './src/component/pages/SignIn';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from '../frontend/src/component/navigator/StackNavigator';
import CateCard from './src/component/form/cateCard';


export default function App() {
  return (
  //   <NavigationContainer>
  //  <StatusBar style="black" />
  //   <StackNavigator />
  //   </NavigationContainer>
 
    <CateCard/>
  );
}

