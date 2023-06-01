import React from 'react'
import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native'
import { MaterialIcons} from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function DrawerLayout() {
  return (
    <SafeAreaView style={{ flex: 1, borderWidth: 1, width: 350 }}>
      <View
        style={{
          borderWidth: 1,
          height: 100,
          marginTop: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity style={styles.signInButton}>
          <Text>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signInButton}>
          <Text>회원가입</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 3, borderWidth: 1, alignItems: "center" }}>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Text style = {{fontSize:15, marginTop:10, borderWidth:1,}}>일반기능</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 30,
            height: 70,
            width: 350,
          }}
        >
          <TouchableOpacity style={styles.cateButton}>
            <MaterialIcons name="announcement" size={20} color="black" />
            <Text>공지</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cateButton}>
            <MaterialIcons name="how-to-vote" size={20} color="black" />
            <Text>투표</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cateButton}>
            <Entypo name="slideshare" size={20} color="black" />
            <Text>나눔&구매</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cateButton}>
            <MaterialCommunityIcons
              name="bulletin-board"
              size={20}
              color="black"
            />
            <Text>자유게시판</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 4, borderWidth: 1, backgroundColor: "gray" }}>

      <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 30,
            height: 70,
            width: 350,
          }}
        >
          <TouchableOpacity style={styles.cateButton}>
            <MaterialIcons name="announcement" size={20} color="black" />
            <Text>공지</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cateButton}>
            <MaterialIcons name="how-to-vote" size={20} color="black" />
            <Text>투표</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cateButton}>
            <Entypo name="slideshare" size={20} color="black" />
            <Text>나눔&구매</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cateButton}>
            <MaterialCommunityIcons
              name="bulletin-board"
              size={20}
              color="black"
            />
            <Text>자유게시판</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  signInButton : {
    borderWidth: 1,
    height: 50,
    width: 120,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  cateButton: {
    borderWidth:1,
    height: 60,
    width: 75,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
})