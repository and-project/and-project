import React, { useEffect, useState } from 'react';
import {View, 
    Text, 
    TouchableOpacity, 
    SafeAreaView, 
    StyleSheet,
    Modal,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MaterialCommunityIcons, MaterialIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';
import DATA from '../form/DATA';

export default function CateCard({modalVisible, closeModal}){

const inpust = 
    { 
        id: 4,
        title: 'dbstn',
        description : 'asdasd',
       
      }

    
  return (
    <Modal visible={modalVisible} animationType='slide' transparent={false}>
    <View style={{hp:'80%', wp:'80%', flex:1, borderWidth:1, justifyContent:'center', alignItems:'center'}}> 
      <Text style={{alignSelf:'center', fontSize:20, paddingBottom:20, fontWeight:'500'}}>기능 추가하기</Text>
      <View
        style={{
          borderTopWidth: 1,
          marginTop: 10,
          alignItems: "center",
          height: 230,
        }}
      >
        <View style={{ justifyContent: "center", width:295,}}>
          <Text style={{ fontSize: 20, marginTop: 10,}}>
            일반기능
          </Text>
        </View>

        <View
          style={{
            borderWidth: 0,
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 10,
            height: 160,
            width: 350,
          }}
        >
          <View style = {{flexDirection:'row', justifyContent:'flex-start', width:300,}}>
          <TouchableOpacity onPress={()=>DATA.push(inpust)}
            activeOpacity={0.1}
            style={[styles.cateButton, {backgroundColor:'cornsilk', opacity:0.7}]}>
            <MaterialIcons name="announcement" size={20} color="black" />
            <Text>공지</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.cateButton, {marginLeft:30, backgroundColor:'khaki', opacity:0.7}]}>
            <MaterialIcons name="how-to-vote" size={20} color="black" />
            <Text>투표</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.cateButton, {marginLeft:30, backgroundColor:'lawngreen', opacity:0.7}]}>
            <Entypo name="slideshare" size={20} color="black" />
            <Text>나눔&구매</Text>
          </TouchableOpacity>

          
          </View>

          <View style = {{flexDirection:'row', width:300,}}>
          <TouchableOpacity onPress={()=>{navigation.navigate('NoticePage')}}
          style={[styles.cateButton, {backgroundColor:'pink', opacity:0.7}]}>
            <MaterialCommunityIcons name="bulletin-board" size={20} color="black"/>
            <Text>자유게시판</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.cateButton, {marginLeft:30, backgroundColor:'silver', opacity:0.7}]}>
            <MaterialCommunityIcons name="bulletin-board" size={20} color="black"/>
            <Text>분신물</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{ borderTopWidth: 1, justifyContent:'center',alignItems:'center'}}>
      <View style = {{width:295,}}>
      <Text style={{ fontSize: 20, paddingTop: 10,}}>
            스마트기능
          </Text>
          </View>
      <View
          style={{
            borderWidth: 0,
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 0,
            height: 160,
            width: 350,
          }}
        >
          <View style = {{flexDirection:'row', justifyContent:'flex-start', width:300,}}>
          <TouchableOpacity onPress={()=>{navigation.navigate('테스트페이지')}}
            style={[styles.cateButton, {backgroundColor:'cornsilk', opacity:0.7}]}>
          <MaterialCommunityIcons name="door-closed-lock" size={20} color="black" />
            <Text>문열기</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.cateButton, {marginLeft:30, backgroundColor:'thistle', opacity:0.7}]}>
          <MaterialCommunityIcons name="cctv" size={20} color="black" />
            <Text>현관보기</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.cateButton, {marginLeft:30, backgroundColor:'powderblue', opacity:0.7}]}>
            <FontAwesome5 name="hands-helping" size={20} color="black" />
            <Text>헬퍼</Text>
          </TouchableOpacity>

          
          </View>

          <View style = {{flexDirection:'row', width:300,}}>
          <TouchableOpacity style={[styles.cateButton, {opacity:0.7}]}>
            <MaterialCommunityIcons name="bulletin-board" size={20} color="black"/>
            <Text>자유게시판</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.cateButton, {marginLeft:30, opacity: 0.7}]}>
            <MaterialCommunityIcons name="bulletin-board" size={20} color="black"/>
            <Text>분신물</Text>
          </TouchableOpacity>
          </View>
         
        </View>
            <TouchableOpacity onPress={closeModal}>
                <View style={{marginTop:10, justifyContent:'center', alignItems:'center', width:100, height:50, borderRadius:10, backgroundColor:'lightgray'}}> 
                    <Text>돌아가기</Text>
                </View>
            </TouchableOpacity>
        
      </View>
      

    </View>
    </Modal>
    )
}


const styles = StyleSheet.create({  
    cateButton: {
      borderWidth:0,
      height: 60,
      width: 75,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      shadowOpacity:0.7,
      shadowColor: 'black',
      shadowRadius: 4,
      shadowOffset: {
        height: 13,
        width: 56,
        
  
      },
      elevation: 6,
    }
  })