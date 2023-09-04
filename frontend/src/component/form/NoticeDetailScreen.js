import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import axios from 'axios';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function NoticeModal({navigation, route}) {


    const {id} = route.params
    const {username} = route.params
    const {phone} = route.params
    const {email} = route.params

    
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.mainContainer}>
            <View style={{ppaddingTop: 10,}}>
              <Text style={{fontSize: 20,}}>{username}</Text>
            </View>
            <View style={{flexDirection:'row', marginTop: 10, justifyContent:'space-between',}}>
              <Text>작성일시</Text>
              <Text>조회수</Text>
            </View>
            <View>
              <Text></Text>
            </View>
            <Text>Phone number : {phone}</Text>
            <Text>User email : {email}</Text>
          </View>
        </SafeAreaView>
      );
    }
  

const styles = StyleSheet.create({
  container : {
    flex:1,
    borderWidth:1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  mainContainer:{
    borderWidth: 1,
    height: hp('90%'),
    width: wp('95'),
    borderRadius: 15,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 20,
  }
})