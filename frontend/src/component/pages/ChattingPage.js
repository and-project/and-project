import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React, {useEffect, useState} from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { EvilIcons } from '@expo/vector-icons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import ChattingRoom from '../pages/ChattingRoom';

export default function ChattingPage() {

  const navigation = useNavigation();

  const [fetchChatting, setFetchChatting] = useState([]);

  const textFontSize = {
    mainText : wp('5%'),
    subText1 : wp('3%'),
    subText2 : wp('2%'),
  }

  useEffect(() => {
    axios
      .get(`http://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        setFetchChatting(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {fetchChatting.map((value) => {
          return (
            <TouchableOpacity onPress={()=>{navigation.navigate('채팅창')}}
            key={value.id} style={styles.chatContainer}>
              <View style={styles.chatImageContainer}>
                <View style={styles.chatImageStyle}>
                  <Text>프로필</Text>
                </View>
              </View>
              <View style={styles.chatUserContainer}>
                <Text >{value.name}</Text>
              </View>
              <View style={styles.chatContextContainer}>
                <Text style={{fontSize: textFontSize.subText2}}>{value.email}</Text>
              </View>             
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0,
  },

  scrollContainer: {
    borderWidth: 0,
    width: wp("100%"),
    height: hp("100%"),
  },

  chatContainer: {
    borderWidth: 1,
    width: wp("100%"),
    height: hp("10%"),
    elevation: 1,
    borderRadius: 5,
    backgroundColor: "ghostwhite",
    opacity: 0.8,
    marginTop: 2,
    flexDirection: "row",
  },

  chatImageContainer: {
    flex: 1,
    borderWidth: 0,
    justifyContent: "center",
    alignItems: "center",
  },

  chatImageStyle: {
    borderWidth: 1,
    width: wp("15%"),
    height: hp("8%"),
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  chatUserContainer : {
    borderWidth : 0,
    flex: 1,
    justifyContent : 'center',
    alignItems : 'center'

  },

  chatContextContainer : {
    justifyContent : 'center',
    borderWidth : 0,
    flex : 2,
    paddingLeft : 10,
  }
});