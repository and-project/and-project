import { View, Text, StyleSheet,TouchableOpacity, TextInput, ScrollView, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { EvilIcons } from '@expo/vector-icons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


export default function VotPage() {

const navigation = useNavigation();

const [search, setSearch] = useState('')

const [voteData, setVoteData] = useState([]);

const [selectors, setSelectors] = useState([]);

useEffect(()=>{
  axios.get(`http://jsonplaceholder.typicode.com/users`)
  .then((response)=> {
      setVoteData(response.data)
      setSelectors})
  .catch((error)=> console.log(error))
}, [])


const voteSelectors = (selectorButton) => {
  
  if(selectorButton == '전체보기'){
    return setSelectors(voteData);
  //전체보기 버튼 클릭 시 데이터 전체가 랜더링 됩니다.
  }else if(selectorButton == search){
      return setSelectors(voteData.filter(d => d.username.includes(selectorButton)))
  // //textInput에서 onChangeText 값이 hook의 setSearch로 전달되고, 
  // //search값이 검색어 중 username과 일부분이 동일하면 해당 데이터를 랜더링합니다.
  }else{
    return setSelectors(voteData.filter(d => d.username == selectorButton))
  }
  // 그 외 각 버튼들을 클릭했을 때 해당되는 데이터를 출력합니다.
}



  return (
    <View style={styles.container}>
      <View style={styles.menuBar}>
        <TouchableOpacity
          onPress={() => voteSelectors("전체보기")}
          style={styles.menuButton}
        >
          <Text style={styles.menuText}>전체보기</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => voteSelectors("Antonette")}
          style={styles.menuButton}
        >
          <Text style={styles.menuText}>새 투표 보기</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => voteSelectors("Bret")}
          style={styles.menuButton}
        >
          <Text style={styles.menuText}>우리동 보기</Text>
        </TouchableOpacity>

        <View style={styles.searchContainer}>
          <TextInput placeholder="투표 검색하기" onChangeText={setSearch} />
          <TouchableOpacity
            onPress={()=>voteSelectors(search)}
            style={styles.searchButton}
          >
            <EvilIcons name="search" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        style={{ alignSelf: "center", marginTop: 10, width: wp("100%") }}
      >
        {
          selectors.map((value) => {
            return(
            <TouchableOpacity onPress={() => {navigation.navigate('투표상세페이지', {
              username : value.username,
              email : value.email,
              phone : value.phone
            })}}
              style={styles.voteContainer}>
              <View
                style={{ flex: 1, justifyContent: "center", paddingLeft: 10 }}
              >
                <Text style={styles.voteTitle}>{value.username}</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  borderTopWidth: 1,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <Text style={styles.voteSubText}>작성일시</Text>
                  <Text style={styles.voteSubText}>{value.phone}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <Text style={styles.voteSubText}>마감일시</Text>
                  <Text style={styles.voteSubText}>{value.email}</Text>
                </View>
              </View>
            </TouchableOpacity>)
          
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        borderWidth : 1,
        
    },

    menuBar : {
        borderWidth : 1,
        width : wp('100%'),
        height : hp('5%'),
        justifyContent : 'space-around',
        alignItems : 'center',
        flexDirection : 'row',
        backgroundColor : 'lightgray',
        opacity : 0.7
    },

    menuButton : {
        borderWidth : 1,
        height : hp('3.5%'),
        width : wp('15%'),
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 10,
        elevation : 0.5,
        backgroundColor : 'white'

    },

    menuText : {
        fontSize : 12,
    },

    searchContainer : {
        borderWidth : 1,
        height : hp('3.5%'),
        width : wp('25%'),
        paddingLeft : 10,
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 5,
        elevation : 0.5,
        justifyContent : 'space-between',
        backgroundColor : 'white'
    },

    searchButton : {
        right : 5,
    },

    voteContainer : {
      borderWidth : 1,
      borderRadius : 10,
      height : hp('10%'),
      width : wp('80%'),
      marginTop : 10,
      alignSelf : 'center'
    },

    voteTitle : {
      fontSize : 13,
    },

    voteSubText : {
      fontSize : 12,
      paddingLeft : 10,
    },

    noResultContainer : {
      borderWidth : 1,
      height : hp('80%'),
      width : wp('100%'),
      justifyContent : 'center',
      alignItems : 'center',
    },

    noResultText : {
      alignSelf : 'center',
      paddingTop : 10,
    },

    notFoundImage : {
      width : wp('50%'),
      height : hp('30%')
    }
})