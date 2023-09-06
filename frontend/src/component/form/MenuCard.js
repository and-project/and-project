import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MaterialCommunityIcons, MaterialIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function MenuCard() {

const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.upperContainer}>
            <TouchableOpacity onPress={()=>{navigation.navigate('공지게시판')}}
                style={[styles.menuButton, {backgroundColor:'cornsilk'}]}>
                <MaterialIcons name="announcement" size={20} color="black" />
                <Text>공지</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.menuButton, {marginLeft:40, backgroundColor:'khaki'}]}>
                <MaterialIcons name="how-to-vote" size={20} color="black" />
                <Text>투표</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.menuButton, {marginLeft:40, backgroundColor:'lawngreen'}]}>
                <Entypo name="slideshare" size={20} color="black" />
                <Text>나눔&구매</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.menuButton, {marginLeft:40, backgroundColor:'lawngreen'}]}>
                <Entypo name="slideshare" size={20} color="black" />
                <Text>민원</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.lowerContainer}>
            <TouchableOpacity
            style={[styles.menuButton, {backgroundColor:'cornsilk',}]}>
                <MaterialCommunityIcons name="door-closed-lock" size={20} color="black" />
                <Text>문열기</Text>
          </TouchableOpacity>

            <TouchableOpacity style={[styles.menuButton, {marginLeft:40, backgroundColor:'thistle'}]}>
                <MaterialCommunityIcons name="cctv" size={20} color="black" />
                    <Text>현관보기</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.menuButton, {marginLeft:40, backgroundColor:'powderblue'}]}>
                <FontAwesome5 name="hands-helping" size={20} color="black" />
                <Text>헬퍼</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.menuButton, {marginLeft:40, backgroundColor:'powderblue'}]}>
                <FontAwesome5 name="hands-helping" size={20} color="black" />
                <Text>헬퍼</Text>
            </TouchableOpacity>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({

container : {
    height : hp('20%'),
    width : wp('70%'),
    alignSelf : 'center',
    marginTop : 30,
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
    height: 60,
    width: 75,
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
  }


})