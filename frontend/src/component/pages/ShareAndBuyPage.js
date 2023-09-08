import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';
import ShareAndBuyModal from './ContentShareBuy';
import { useNavigation } from '@react-navigation/native';
import FloatingButton from '../form/FloatingButton';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignIn from './SignIn';
import NoticePage from './NoticePage';
import MainPage from '../main/MainPage';
import BottomNavigator from '../navigator/BottomNavigator';


export default function ShareAndBuyPage() {

    const navigation = useNavigation();

  

    const [fetchData, setFetchData] = useState([]);

    useEffect(()=>{
        axios.get(`http://jsonplaceholder.typicode.com/users`)
        .then((response)=> setFetchData(response.data))
        .catch((error)=> console.log(error))
      }, [])

  

  return (
    <View style={{flex:1}}>
    <ScrollView style={styles.container}>
      {
        fetchData.map((value)=>{
            return(
            <TouchableOpacity onPress={()=>{navigation.navigate('나눔&구매 상세페이지', {
                phone : value.phone,
                email : value.email,
                username : value.username,

            })}}
                style={styles.cardContainer}>
                <View style={{borderRightWidth: 1, width:wp('25%'), alignItems:'center', justifyContent:'center'}}>
                    <Text>사진</Text>
                </View>

                <View style={{borderWidth:0,width:wp('65%')}}>
                    <View style={{height:hp('5%'), justifyContent:'center', paddingLeft:10, borderBottomWidth:1,}}>
                        <Text style={{fontWeight:'600'}}>{value.phone}</Text>
                    </View>
                    <View style={{borderWidth:0, flexDirection:'row', height:hp('9.5%'), justifyContent:'space-between', paddingLeft:10, paddingRight:10,alignItems:'center'}}>
                        <View>
                            <Text style={{fontSize:17,}}>{value.email}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:12}}>금액</Text>
                            <Text style={{paddingLeft:10, fontSize:12,}}>1,000원</Text>
                        </View>
                    </View>
                </View>
              
            </TouchableOpacity>

            
            )
            
        })
      }
     
    </ScrollView>
      <FloatingButton/>
      <BottomNavigator/>
      
    </View>
     
    
  )

  
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },

    cardContainer : {
        borderWidth : 1,
        height : hp('15%'),
        width : wp('90%'),
        flexDirection : 'row',
        marginTop : 10,
        borderRadius : 10,
        elevation : 2,
        alignSelf : 'center'

    }
})