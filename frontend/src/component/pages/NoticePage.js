import React, { useEffect, useReducer, useState } from 'react'
import {Text, View, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import {GET_NOTICE_URL} from '../../env'
import { Button } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function NoticePage({navigation, route}) {

  // const navigation = useNavigation();

  const baseURL = GET_NOTICE_URL;

  const [fetchData, setFetchData] = useState([]);

  const [username, setUserName] = useState('');
  const [phone, setPhone] = useState('')


useEffect(()=>{
  axios.get(`http://jsonplaceholder.typicode.com/users`)
  .then((response)=> setFetchData(response.data))
  .catch((error)=> console.log(error))
}, [])




  return (
    <SafeAreaView style={{ borderWidth:1, width: wp('100%'), height:hp('100%')}}>
       <View style={{height: 50, justifyContent:'center', alignItems:'center', backgroundColor:'lightgray'}}>
        <Text style={{fontSize:20,}}>공지사항</Text>
       </View>
          
        <View style={{ height:60, width:wp('100%'), flexDirection:'row', justifyContent:'space-around'}}>
        <TouchableOpacity style={styles.cateButton}><Text>전체보기</Text></TouchableOpacity>
        <TouchableOpacity style={styles.cateButton}><Text>새글보기</Text></TouchableOpacity>
       
        </View>

      <ScrollView>
        {
          fetchData.map((value)=>{
            return(
              <TouchableOpacity onPress={()=>{navigation.navigate('공지상세페이지', {
                id : value.id,
                username : value.username,
                phone : value.phone,
                email : value.email
              })}}
              
                style={[styles.noticeContainer, {flexDirection:'row'}]}>
                <View style={{borderWidth:0, width: 250, justifyContent:'center'}}>
                  <Text style={{fontSize:15,}}>{value.name}</Text>
                  <Text>{value.email}</Text>
                </View>
                <View
                  style={{alignSelf:'center', marginRight:10,}}>
                {/* <MaterialCommunityIcons name="alpha-n-box-outline" size={20} color="red" /> */}
                
                </View>
              </TouchableOpacity>
             
            )
          })
        }
      </ScrollView>
      

   

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  noticeContainer : {
    borderWidth:1, 
    height: 100, 
    width: wp('90%'),  
    
    borderRadius:15,
    marginTop: 10,
    paddingLeft: 10,
    flexDirection:'column',
    justifyContent:'space-between',
    alignSelf:'center'
  },

  cateButton:{
    borderWidth:1,
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 15,
  },
 

})