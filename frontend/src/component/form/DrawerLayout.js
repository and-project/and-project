import React from 'react'
import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native'
import { MaterialCommunityIcons, MaterialIcons, Entypo } from '@expo/vector-icons';

export default function DrawerLayout() {
  return (
    <SafeAreaView style={{ flex: 1, borderWidth: 1, width: 350 }}>
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
          marginTop: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          alignSelf: "center",
        }}
      >
        <View style = {{borderRightWidth: 1, flex:1, justifyContent:'center', alignItems:'center', height:30,}}>
          <TouchableOpacity style={styles.signInButton}>
            <Text style={{ fontSize: 17 }}>로그인</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flex:1, justifyContent:'center', alignItems:'center', height: 30,}}>
          <TouchableOpacity style={styles.signInButton}>
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
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 15, marginTop: 10, borderWidth: 1 }}>
            일반기능
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 20,
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
    borderWidth: 0,
    height: 40,
    width: 110,
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