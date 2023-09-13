import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import BottomNavigator from '../navigator/BottomNavigator';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MaterialCommunityIcons, MaterialIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';

export default function MyPage() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.upperConatiner}>
          <View  style={styles.infoContainer}>
            <View style={{justifyContent:'center', alignItems:'center'}}>
              <View style={{borderWidth: 1, height : hp('7.5%'), width:wp('11.5%'), alignItems:'center', justifyContent:'center', borderRadius:45,}}>
                <MaterialCommunityIcons name="account-alert-outline" size={60} color="black"/>
              </View>
            </View>
            <View>
              <Text style={{color:'white', left:10, fontSize:15, fontWeight:'700', bottom:2,}}>Yunsu_Park</Text>
              <Text style={{color:'lightgray', left:10, top:2}}>지웰 2차 아파트 2단지 103호</Text>
            </View>
          </View>

        </View>

        <View style={styles.lowerContainer}>
          <View style={{flex:1, borderWidth:1, width: wp('100%'),justifyContent:'space-evenly', alignItems:'center',paddingLeft:20,}}>
            <View style={{borderWidth:0, width:wp('90%'), height:hp('3%')}}>
              <Text style={{color:'gray', fontWeight:'600'}}>Support</Text>
            </View>
            <TouchableOpacity style={styles.buttonStyle}>
              <View style={styles.buttonDetails}>
                <View style={{alignSelf:'center'}}>
                  <MaterialCommunityIcons name="typewriter" size={20} color="black" />
                </View>
                <View style={{left:10, alignSelf:'center'}}>
                  <Text sytle={styles.buttonText}>내글 보기</Text>
                </View>
              </View>
              <View>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle}>
              <View style={styles.buttonDetails}>
                <View style={{alignSelf:'center'}}>
                  <MaterialCommunityIcons name="typewriter" size={20} color="black" />
                </View>
                <View style={{left:10, alignSelf:'center'}}>
                  <Text sytle={styles.buttonText}>찜목록 보기</Text>
                </View>
              </View>
              <View>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle}>
              <View style={styles.buttonDetails}>
                <View style={{alignSelf:'center'}}>
                  <MaterialCommunityIcons name="typewriter" size={20} color="black" />
                </View>
                <View style={{left:10, alignSelf:'center'}}>
                  <Text sytle={styles.buttonText}>계정관리</Text>
                </View>
              </View>
              <View>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle}>
              <View style={styles.buttonDetails}>
                <View style={{alignSelf:'center'}}>
                  <MaterialCommunityIcons name="typewriter" size={20} color="black" />
                </View>
                <View style={{left:10, alignSelf:'center'}}>
                  <Text sytle={styles.buttonText}>sad</Text>
                </View>
              </View>
              <View>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
              </View>
            </TouchableOpacity>

          </View>
          <View style={{flex:1, borderWidth:1, width: wp('100%'),justifyContent:'space-evenly', alignItems:'center',paddingLeft:20,}}>
            <View style={{borderWidth:0, width:wp('90%'), height:hp('3%')}}>
              <Text style={{color:'gray', fontWeight:'600'}}>Support</Text>
            </View>
            <TouchableOpacity style={styles.buttonStyle}>
              <View style={styles.buttonDetails}>
                <View style={{alignSelf:'center'}}>
                  <MaterialCommunityIcons name="typewriter" size={20} color="black" />
                </View>
                <View style={{left:10, alignSelf:'center'}}>
                  <Text sytle={styles.buttonText}>내글 보기</Text>
                </View>
              </View>
              <View>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="gray" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle}>
              <View style={styles.buttonDetails}>
                <View style={{alignSelf:'center'}}>
                  <MaterialCommunityIcons name="typewriter" size={20} color="black" />
                </View>
                <View style={{left:10, alignSelf:'center'}}>
                  <Text sytle={styles.buttonText}>찜목록 보기</Text>
                </View>
              </View>
              <View>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle}>
              <View style={styles.buttonDetails}>
                <View style={{alignSelf:'center'}}>
                  <MaterialCommunityIcons name="typewriter" size={20} color="black" />
                </View>
                <View style={{left:10, alignSelf:'center'}}>
                  <Text sytle={styles.buttonText}>계정관리</Text>
                </View>
              </View>
              <View>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
              </View>
            </TouchableOpacity>
            


          </View>
        </View>
     
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container : {
      flex : 1,
      borderWidth : 0,
    },

    upperConatiner : {
      borderWidth : 0,
      width : wp('100%'),
      height : hp('25%'),
      backgroundColor : 'blue',
      opacity : 0.8,
      justifyContent : 'center',
      alignItems : 'center'
    },

    lowerContainer : {
      borderWidth : 0,
      width : wp('100%'),
      height : hp('69%'),
      backgroundColor : 'lightgray',
      opacity : 0.8
    },

    infoContainer : {
      flexDirection : 'row',
      borderWidth : 1,
      alignItems : 'center',
      width : wp('80%'),
      height : hp('10'),
    },

    buttonStyle : {
      flexDirection : 'row',
      borderWidth : 0,
      width : wp('90%'),
      height : hp('3%'),
      justifyContent : 'space-between'
    },

    buttonDetails : {
      flexDirection : 'row',
      borderWidth : 0,
    },

    buttonText : {
      fontWeight : '300',
      textAlign : 'center',
      fontWeight : '800'
    }
    
})