import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MaterialCommunityIcons, MaterialIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Helper from '../modal/Helper';


export default function MenuCard() {

const [modalVisible, setModalVisible] = useState(false)

const openModal = () => {
    setModalVisible(true);
};

const closeModal = () => {
    setModalVisible(false);
};

const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.upperContainer}>
            <TouchableOpacity onPress={()=>{navigation.navigate('공지게시판')}}
                style={[styles.menuButton, {backgroundColor:'cornsilk'}]}>
                <MaterialIcons name="announcement" size={20} color="black" />
                <Text style={styles.textStyle}>공지</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.menuButton, {marginLeft:40, backgroundColor:'khaki'}]}>
                <MaterialIcons name="how-to-vote" size={20} color="black" />
                <Text style={styles.textStyle}>투표</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{navigation.navigate('나눔&구매페이지')}}
                style={[styles.menuButton, {marginLeft:40, backgroundColor:'lawngreen'}]}>
                <Entypo name="slideshare" size={20} color="black" />
                <Text style={{fontSize:11,}}>나눔&구매</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.menuButton, {marginLeft:40, backgroundColor:'lawngreen'}]}>
                <Entypo name="slideshare" size={20} color="black" />
                <Text style={styles.textStyle}>민원</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.lowerContainer}>
            <TouchableOpacity
            style={[styles.menuButton, {backgroundColor:'cornsilk',}]}>
                <MaterialCommunityIcons name="door-closed-lock" size={20} color="black" />
                <Text style={styles.textStyle}>문열기</Text>
          </TouchableOpacity>

            <TouchableOpacity style={[styles.menuButton, {marginLeft:40, backgroundColor:'thistle'}]}>
                <MaterialCommunityIcons name="cctv" size={20} color="black" />
                    <Text style={styles.textStyle}>현관보기</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.menuButton, {marginLeft:40, backgroundColor:'powderblue'}]}>
                <FontAwesome5 name="hands-helping" size={20} color="black" />
                <Text style={styles.textStyle}>헬퍼</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={openModal}
                style={[styles.menuButton, {marginLeft:40, backgroundColor:'powderblue'}]}>
                <FontAwesome5 name="hands-helping" size={20} color="black" />
                <Text style={styles.textStyle}>헬퍼</Text>
            </TouchableOpacity>
        </View>
        <Helper
            modalVisible = {modalVisible}
            closeModal = {closeModal}
        />
    </View>
  )
}

const styles = StyleSheet.create({

container : {
    height : hp('20%'),
    width : wp('70%'),
    alignSelf : 'center',
    marginTop : 10,
    borderRadius : 10,
 
},

upperContainer : {
    flex: 1,
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center'
},

lowerContainer : {
    flex: 1,
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center'
},

menuButton: {
    borderWidth:0,
    height: hp('7%'),
    width: wp('13%'),
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity:0.7,
    shadowColor: 'black',
    shadowRadius: 4,
    shadowOffset: {
      height: 13,
      width: 56,
    },
    elevation: 6,
    opacity : 1
  },

  textStyle : {
    fontSize : 12,
}


})