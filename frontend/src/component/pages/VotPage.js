import { View, Text, StyleSheet,TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { EvilIcons } from '@expo/vector-icons';


export default function VotPage() {

const [search, setSearch] = useState('')

console.log(search);

  return (
    <View style={styles.container}>
      <View style={styles.menuBar}>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuText}>전체보기</Text>
        </TouchableOpacity>

        <View style={styles.searchContainer}>
          <TextInput 
            placeholder="투표 검색하기" 
            onChangeText={setSearch}
          />
          <TouchableOpacity style={styles.searchButton}>
            <EvilIcons name="search" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <Text>투표 현황</Text>
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
        flexDirection : 'row'
    },

    menuButton : {
        borderWidth : 1,
        height : hp('3.5%'),
        width : wp('12%'),
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 10,

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
        justifyContent : 'space-between'
    },

    searchButton : {
        right : 5,
    }
})