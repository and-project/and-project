import React from 'react'
import {Text, View, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function NoticePage() {
  return (
    <SafeAreaView style={{ borderWidth:1,}}>
       <View style={{height: 50, justifyContent:'center', alignItems:'center', backgroundColor:'lightgray'}}>
        <Text style={{fontSize:20,}}>공지사항</Text>
       </View>

       <ScrollView>
        <TouchableOpacity style={[styles.noticeContainer, ]}>
          <View>
            <Text style={{fontSize: 15,}}>제목</Text>
            </View>
            <View style={{flexDirection:'row',}}>
            <Text style={{paddingTop:5, fontSize:12,}}>등록일</Text>
            <Text style={{paddingLeft: 10, paddingTop:5, fontSize:12,}}>몇년몇월몇일</Text>
            </View>
        </TouchableOpacity>
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


})