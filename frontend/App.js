import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from '../frontend/src/component/navigator/StackNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyPage from './src/component/pages/MyPage';
import {Icon} from 'react-native-elements';
import ChattingPage from './src/component/pages/ChattingPage';


export default function App() {

  
  const Tab = createBottomTabNavigator();
    return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{ 
          headerShown: true, 
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
          <Tab.Screen name="홈" component={StackNavigator} options={{headerShown: false,tabBarShowLabel:true,
            tabBarIcon : ()=>(<Icon name='home' type='material' color='#fff' size={20}/>)}}/>
          <Tab.Screen name="채팅방" component={ChattingPage} options={{headerTitleAlign:'center',
            tabBarIcon : ()=>(<Icon name='chat' type='material' color='#fff' size={20}/>)}}/>
          <Tab.Screen name="마이페이지" component={MyPage} options={{
            tabBarIcon : ()=>( <Icon name='person' type='material' color='#fff' size={20}/>)}}/>
        </Tab.Navigator>
    <StatusBar style="black" />
    </NavigationContainer>
 
    );
  }
