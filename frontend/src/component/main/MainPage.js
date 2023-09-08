import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, ImageBackground, transparent} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import backgroundImage from '../../../assets/backgroundImage.jpg'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import InfoCard from '../form/InfoCard';
import MenuCard from '../form/MenuCard';
import NoticeCard from '../form/NoticeCard';
import LoadingPage from '../pages/LoadingPage'
import { useNavigation } from '@react-navigation/native';
import BottomNavigator from '../navigator/BottomNavigator';

export default function MainPage() {

const [ready, setReady] = useState(true)

useEffect(()=>{
    setTimeout(()=>{
        setReady(false)
    }, 3000)
})

  return ready ? (<LoadingPage/>) : (
   <View style={styles.container}>
    <ImageBackground style={styles.bgImage}
        source={require('../../../assets/backgroundImage.jpg')}>
            <Text style={styles.titleText}>아파트 입주민 커뮤니티</Text>
            <Text style={styles.titleText2}>오신 것을 환영합니다.</Text>

                <InfoCard/>

                <MenuCard/>

                <NoticeCard/>

                
            
        
    </ImageBackground>
    <BottomNavigator/>
   </View>
  )
}


const styles = StyleSheet.create({
    container : {
        flex : 1,
      
        
    },

    bgImage : {
        flex:1,
        backgroundColor : 'rgba(0, 0, 0, 0)',
        resizeMode : 'cover'
    },

    titleText : {
        fontSize : 20,
        alignSelf : 'center',
        marginTop : 0,
    },

    titleText2 : {
        fontSize : 15,
        letterSpacing : 5,
        alignSelf : 'center',
        fontWeight : '500'
    }
})
