import React from 'react';
import {View, Text, StyleSheet, Image, backgroundImage} from 'react-native';
import loadingImage from '../../../assets/loadingImage.jpg';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ImageBackground } from 'react-native';



// <View style={styles.container}>
// <View style={styles.titleContainer}>
//   <Text>asdaasdasdsds</Text>
// </View>

// <View style={styles.imageContainer}>
//   <Image source={require('../../../assets/loadingImage.jpg')}/>
// </View>
// </View>




export default function LoadingPage() {



  return (
    <ImageBackground style={{ backgroundColor: "black" }}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../../assets/loadingImage.jpg")}
          style={styles.bgImage}
        ></ImageBackground>
      </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
 container : {
  borderWidth : 1,
  height : hp('100%'),
  width : wp('100'),
  backgroundColor : 'rgba(0, 0, 0, 0.2)',
 

 },

 bgImage : {
  flex:1,
  resizeMode : 'contain',
  width : wp('100%'),
  backgroundColor : 'black',
  opacity : 0.7,
  psotion : 'ablsolute'
  
 },

 titleContainer : {
  height : hp('30')
 },






 imageContainer : {
  resizeMode : 'contain',
  width : wp('100%')
 }
})