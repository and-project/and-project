import { View, Text, StyleSheet } from 'react-native';
import React, {useState} from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { EvilIcons } from '@expo/vector-icons';

export default function ChattingPage() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <EvilIcons name="arrow-left" size={24} color="black" />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container : {
        flex : 1,
        borderWidth : 1,

    },

    headerContainer : {
        borderWidth : 1,
        width : wp('100%'),
        height : hp('7%')
    }
})