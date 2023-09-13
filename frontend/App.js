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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyPage from './src/component/pages/MyPage';
import Home from '../frontend/src/component/navigator/StackNavigator';
import { Icon} from 'react-native-elements';


export default function App() {

  
  const Tab = createBottomTabNavigator();
    return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{ 
          headerShown: false, 
          tabBarLabelStyle :{
            fontSize : 12,
            color : 'white'
          },
          tabBarStyle:{
            backgroundColor : 'lightgray'
          },
          tabBarIconStyle : {
            color : 'white',
          },
           headerPressOpacity : true,
          }}>
          <Tab.Screen name="홈" component={StackNavigator} options={{tabBarShowLabel:true,
            tabBarIcon : ()=>(<Icon name='home' type='material' color='#fff' size={20}/>)}}/>
          <Tab.Screen name="채팅" component={MyPage}/>
          <Tab.Screen name="마이페이지" component={MyPage} options={{
            tabBarIcon : ()=>( <Icon name='person' type='material' color='#fff' size={20}/>)}}/>
        </Tab.Navigator>
    <StatusBar style="black" />
    </NavigationContainer>
 
    );
  }
