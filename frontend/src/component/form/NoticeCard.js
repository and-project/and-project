import React, { useEffect, useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { GET_NOTICE_URL } from '../../env';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';


export default function NoticeCard() {


    const [dataList, setDataList] = useState([])

    useEffect(()=>{
        axios.get(`http://jsonplaceholder.typicode.com/users`)
        .then((response)=> setDataList(response.data))
        .catch((error)=> console.log(error))
      }, [])


  return (
    <View style={styles.container}>
        <View style={styles.upperContainer}>
            <Text style={styles.textStyle}>아파트 소식</Text>
        </View>

        <View style={styles.lowerContainer}>
        {
            dataList.slice(0, 5).map((value)=>{
                return(
                    <View style={styles.dataContainer}>
                        <Text style={styles.dataText}>
                            {value.name}
                        </Text>
                    </View>
                )
            })
        }
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container : {
        borderWidth : 1,
        height : hp('27%'),
        width : wp('70%'),
        alignSelf : 'center',
        borderRadius : 10,
        marginTop : 10,
        elevation : 15,
        backgroundColor : 'white'
    },

    upperContainer : {
        height : hp('4%'),
        justifyContent : 'center',
        backgroundColor : 'gainsboro',
        borderRadius : 10,
    },

    dataContainer : {
        borderBottomWidth : 1,
        borderStyle : 'dotted',
        marginTop : 10,
        height : hp('3%'),
        justifyContent : 'center'
    },
    
    textStyle : {
        fontSize : 15,
        paddingLeft : 10,
        
    },

    dataText : {
        paddingLeft : 10,
    }

})