import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MaterialCommunityIcons, MaterialIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



export default function InfoCard() {

const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <View style={styles.upperContainer}>
            <View style={styles.infoImage}>
                <View style={{borderWidth: 1, height : hp('6%'), width:wp('12%'), alignItems:'center', justifyContent:'center', borderRadius:5,}}>
                    <MaterialCommunityIcons name="account-alert-outline" size={60} color="black"/>
                </View>
            </View>
            <View style={styles.inforUser}>
                <Text style={{fontSize : 20,}}>비입주자</Text>
                <Text style={{fontSize : 20,}}>로그인을 해주세요.</Text>
            </View>
            <View style={styles.infoLogin}>
                <TouchableOpacity onPress={()=>{navigation.navigate('로그인페이지')}}>
                    <MaterialIcons name="login" size={50} color="black" />
                </TouchableOpacity>
            </View>
        </View>
       
        <View style={styles.lowerConatiner}>
            <Text>임시입니다.</Text>
        </View>

    </View>
  )
}


const styles = StyleSheet.create({
    container : {
        borderWidth : 1,
        height : hp('30%'),
        width : wp('70%'),
        alignSelf : 'center',
        backgroundColor : 'lavenderblush',
        borderRadius : 10,
        marginTop : 30,
        elevation : 10,
    },

    upperContainer : {
        borderBottomWidth : 1, 
        flex:1,
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center'
    },

    infoImage : {
        borderWidth : 0,
        width : wp('20%'),
        height : hp('10%'),
        justifyContent : 'center',
        alignItems : 'center',
    },

    inforUser : {
        borderWidth : 0,
        width : wp('40%'),
        height : hp('10%'),
        justifyContent : 'center',
        paddingLeft : 10,
    },

    infoLogin : {
        borderWidth : 0,
        width : wp('10%'),
        height : hp('10%'),
        alignItems : 'center',
    },


    lowerConatiner : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },

})