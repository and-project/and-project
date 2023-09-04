import React from 'react';
import {View, Text, StyleSheet, ImageBackground, transparent} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import backgroundImage from '../../../assets/backgroundImage.jpg'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import InfoCard from '../form/InfoCard';
import MenuCard from '../form/MenuCard';
import NoticeCard from '../form/NoticeCard';


export default function MainPage() {
  return (
   <SafeAreaView style={styles.container}>
    <ImageBackground style={styles.bgImage}
        source={require('../../../assets/backgroundImage.jpg')}>
            <Text style={styles.titleText}>아파트 입주민 커뮤니티</Text>
            <Text style={styles.titleText2}>오신 것을 환영합니다.</Text>

                <InfoCard/>

                <MenuCard/>

                <NoticeCard/>
            
        
    </ImageBackground>
   </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container : {
        flex: 1,
        borderWidth : 1,
    },

    bgImage : {
        height : hp('100%'),
        width : wp('100%'),
        backgroundColor : 'rgba(0, 0, 0, 0)'
    },

    titleText : {
        fontSize : 20,
        alignSelf : 'center',
        marginTop : 30
    },

    titleText2 : {
        fontSize : 15,
        letterSpacing : 5,
        alignSelf : 'center',
        fontWeight : '500'
    }
})
