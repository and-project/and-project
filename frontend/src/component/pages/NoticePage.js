import React, { useEffect, useState } from 'react'
import {Text, View, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';
import {GET_NOTICE_URL} from '../../env'
import { Button } from 'react-native-paper';

export default function NoticePage() {

 const [allNotice, setAllNotice] = useState([])
 const [notices, setNotices] = useState([])

  const baseURL = GET_NOTICE_URL;

 const getApi = ()=> {
  axios({
    method : 'GET',
    responseType : 'json',
    url : `${baseURL}/${notices}`
  })
  .then((response)=>setNotices(response.data))
  .catch((err)=> console.log(err))
 }


 
 
  // useEffect(()=>{
  //   const fetchNotices = async()=>{
  //     const result = await
  //       getAPI();
  //         setNotices(result);
  //   };
  //   fetchNotices();
  // }, [])


  return (
    <SafeAreaView style={{ borderWidth:1, width: wp('100%'), height:hp('100%')}}>
       <View style={{height: 50, justifyContent:'center', alignItems:'center', backgroundColor:'lightgray'}}>
        <Text style={{fontSize:20,}}>공지사항</Text>
       </View>
          
        <View style={{width:wp('100%'), flexDirection:'row', justifyContent:'space-around'}}>
        <TouchableOpacity style={styles.cateButton}><Text>전체보기</Text></TouchableOpacity>
        <TouchableOpacity style={styles.cateButton}><Text>새글보기</Text></TouchableOpacity>
       
        </View>

       <ScrollView>
        {
          notices.map((value)=>{
            <View>
              {value.id}
            </View>

          })
        }
       
        {/* <TouchableOpacity style={[styles.noticeContainer, ]}>
        
          <View>
            <Text style={{fontSize: 15,}}>제목</Text>
            </View>
            <View style={{flexDirection:'row',}}>
            <Text style={{paddingTop:5, fontSize:12,}}>등록일</Text>
            <Text style={{paddingLeft: 10, paddingTop:5, fontSize:12,}}>몇년몇월몇일</Text>
            </View>
        </TouchableOpacity> */}
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
    justifyContent:'center',
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