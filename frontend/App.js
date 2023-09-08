import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainPage from './src/component/main/MainPage';
import LoadingPage from './src/component/pages/LoadingPage';
import SignIn from './src/component/pages/SignIn';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from '../frontend/src/component/navigator/StackNavigator';
import NoticeDetatilScreen from './src/component/form/NoticeDetailScreen'
import InfoCard from './src/component/form/InfoCard';
import MenuCard from './src/component/form/MenuCard'
import NoticeCard from './src/component/form/NoticeCard';
import ShareAndBuyModal from './src/component/pages/ContentShareBuy';
import FloatingButton from './src/component/form/FloatingButton';

export default function App() {

  

  return (
  <NavigationContainer>
    
  <StatusBar style="black" />
  <StackNavigator />
  </NavigationContainer>

  );
}

