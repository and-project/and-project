import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import BottomNavigator from '../navigator/BottomNavigator'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function MyPage() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={{height : hp('100%')}}>
       
        </View>
        <BottomNavigator/>
   

     
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container : {
   
        height : hp('100%'),
        width : wp('100%'),
        borderWidth : 3,
    }
})