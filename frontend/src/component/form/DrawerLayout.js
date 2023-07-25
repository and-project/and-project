import React from 'react'
import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native'
import { MaterialCommunityIcons, MaterialIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';
import NoticePage from '../pages/NoticePage';
import StackNavigator from '../navigator/StackNavigator';
import SignIn from '../pages/SignIn';
import { useNavigation } from '@react-navigation/native';

export default function DrawerLayout() {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, borderWidth: 0, width: 350 }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          marginLeft: 10,
          marginTop: 40,
        }}
      >
        <View
          style={{
            borderWidth: 1,
            height: 75,
            width: 75,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "gray",
            opacity: 0.5,
            borderRadius: 15,
          }}
        >
          <MaterialCommunityIcons
            name="account-alert-outline"
            size={50}
            color="black"
          />
        </View>
        <View style={{ flexDirection: "column", paddingTop: 15 }}>
          <Text style={{ fontSize: 20, marginLeft: 10 }}>비입주자</Text>
          <Text style={{ fontSize: 20, marginLeft: 10 }}>
            로그인을 해주세요.
          </Text>
        </View>
      </View>

      <View
        style={{
          borderWidth: 0,
          borderRadius: 20 / 2,
          backgroundColor: "gainsboro",
          opacity: 1,
          width: 330,
          height: 50,
          marginTop: 15,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          alignSelf: "center",
        }}
      >
        <View style = {{borderRightWidth: 1, flex:1, justifyContent:'center', alignItems:'center', height:30}}>
          <TouchableOpacity style={styles.signInButton}
            onPress = {()=>{navigation.navigate('로그인페이지')}}>
            <Text style={{ fontSize: 17, fontFamily:'' }}>로그인</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flex:1, justifyContent:'center', alignItems:'center', height: 30,}}>
          <TouchableOpacity onPress={()=>{navigation.navigate('회원가입')}}
          style={styles.signInButton}>
            <Text style={{ fontSize: 17 }}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          borderTopWidth: 1,
          marginTop: 10,
          alignItems: "center",
          height: 300,
        }}
      >
        <View style={{ justifyContent: "center", width:295,}}>
          <Text style={{ fontSize: 20, marginTop: 20,}}>
            일반기능
          </Text>
        </View>

        <View
          style={{
            borderWidth: 0,
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 20,
            height: 180,
            width: 350,
          }}
        >
          <View style = {{flexDirection:'row', justifyContent:'flex-start', width:300,}}>
          <TouchableOpacity
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

      <View style={{ flex: 4, borderTopWidth: 1, justifyContent:'center',alignItems:'center'}}>
      <View style = {{width:295,}}>
      <Text style={{ fontSize: 20, paddingTop: 30,}}>
            스마트기능
          </Text>
          </View>
      <View
          style={{
            borderWidth: 0,
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 0,
            height: 200,
            width: 350,
          }}
        >
          <View style = {{flexDirection:'row', justifyContent:'flex-start', width:300,}}>
          <TouchableOpacity style={[styles.cateButton, {backgroundColor:'cornsilk', opacity:0.7}]}>
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
      </View>
      
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  signInButton : {
    borderWidth: 0,
    height: 40,
    width: 110,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

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