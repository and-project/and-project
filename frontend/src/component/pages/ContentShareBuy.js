import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import useShare from '../modal/UseShare';

export default function ShareAndBuyModal({route}) {

    const navigation = useNavigation();

    const {username} = route.params;
    const {email} = route.params;
    const {phone} = route.params;


    const share = useShare();

    const handleShare = () => {
      share({
        message:`${username}  \n\n ${email}`,
      });
    };

   
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>

        <View style={styles.titleContainer}>
            <Text>{username}</Text>
        </View>

        <View style={styles.imageContainer}>
            <Text>사진</Text>
        </View>

        <View style={styles.shareBuyContainer}>
            <View style={{borderWidth:1, width:wp('15'), height:hp('3'), justifyContent : 'center', alignItems:'center', borderRadius:10, elevation:2,}}>
                <Text>나눔&구매</Text>
            </View>
            <View style={{borderWidth:1, width:wp('15'), height:hp('3'), justifyContent : 'center', alignItems:'center', borderRadius:10, elevation:2,}}>
                <Text>금액</Text>
            </View>
        </View>

        <View style={styles.contentContainer}>
            <Text>{email}</Text>
        </View>

        <View style={styles.decisionContainer}>
            <View style={styles.likeAndShareContainer}>  
                <TouchableOpacity style={styles.likeAndShareButton}>
                <Entypo name="heart-outlined" size={18} color="black" />
                    <Text style={styles.likeAndShareText}>찜하기</Text>
                </TouchableOpacity>
            
                <TouchableOpacity onPress={handleShare}
                    style={[styles.likeAndShareButton, {marginLeft:10}]}>
                    <Entypo name="share" size={18} color="black" />
                    <Text style={styles.likeAndShareText}>공유하기</Text>
                </TouchableOpacity>
            </View>
          
                <TouchableOpacity style={styles.chatButton}>
                    <Text>문의하기</Text>
                </TouchableOpacity>         
        </View>

        <TouchableOpacity onPress={()=>{navigation.goBack()}}
            style={styles.exitButton}>
            <Entypo name="cross" size={24} color="black" />
            <Text style={styles.exitText}>닫기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container : {
        flex: 1 ,
        justifyContent : 'center',
        alignSelf : 'center',
        borderWidth : 0
    },

    mainContainer : {
        borderWidth : 1,
        height : hp('85%'),
        width : wp('80%'),
        borderRadius : 10,
        alignItems : 'center',
        elevation : 2,
        backgroundColor : 'white',
        alignSelf : 'center',
    },

    titleContainer : {
        borderWidth : 1,
        marginTop : 15,
        height : hp('5%'),
        width : wp('70%'),
        borderRadius : 10,
        justifyContent : 'center',
        paddingLeft : 10,
        elevation : 2,
    },

    imageContainer : {
        borderWidth : 1,
        height: hp('15'),
        width : wp('70'),
        marginTop : 15,
        paddingLeft : 10,
        justifyContent : 'center',
        borderRadius : 10,
        elevation : 2,
    },

    shareBuyContainer : {
        borderWidth : 1,
        height : hp('5'),
        width : wp('70'),
        marginTop : 15,
        paddingLeft : 10,
        paddingRight : 10,
        justifyContent : 'space-between',
        borderRadius : 10,
        flexDirection : 'row',
        alignItems : 'center'
    },

    contentContainer : {
        borderWidth : 1,
        width : wp(70),
        height : hp('40'),
        marginTop : 15,
        borderRadius : 10,
        elevation : 2,
    },

    decisionContainer : {
        borderWidth : 1,
        width : wp('70'),
        height : hp('5'),
        borderRadius : 10,
        marginTop : 15,
        flexDirection : 'row',
        justifyContent : 'space-between'

    },

    likeAndShareContainer : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center'
    },

    likeAndShareButton : {
        flexDirection : 'row',
        marginLeft : 10,
        elevation : 0,

    },
    likeAndShareText : {
        marginLeft : 5,
        fontSize : 12,
    },

    chatButton : {
        alignSelf : 'center',
        marginRight : 10,
        borderWidth : 1,
        height : hp('4'),
        width : wp('30'),
        borderRadius : 10,
        justifyContent : 'center',
        alignItems : 'center',
        elevation : 1,
    },

    exitButton : {
        borderWidth : 1,
        height : hp('5'),
        width : wp(20),
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : 15,
        borderRadius : 10,
        elevation : 2,
    },

    exitText : {
        marginLeft : 5,
        fontSize : 15,
    }
    
})