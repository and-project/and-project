import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
 

export default function VoteDetailsPage({route}) {

    const navigation = useNavigation();
    const {id} = route.params
    const {username} = route.params
    const {phone} = route.params
    const {email} = route.params

    const textFontSize = {
        mainText : wp('5%'),
        title : wp('2%'),
        desc : wp('2%'),

    }


  return (
    <View style={styles.container}>
      <View style={styles.voteContainer}>
        <Text style={[styles.voteText, { fontSize: textFontSize.mainText }]}>
          투표 현황
        </Text>
        <View style={styles.titleContainer}>
          <Text style={[styles.titleText, { fontSize: textFontSize.title }]}>
            {username}
          </Text>
        </View>
        <View style={styles.descContainer}>
          <Text style={[styles.titleText, { fontSize: textFontSize.desc }]}>
            {email}
          </Text>
        </View>
        <View></View>
        <View></View>
        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        borderWidth : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },

    voteContainer : {
        width : wp('90%'),
        height : hp('85%'),
        borderWidth : 1,
        borderRadius : 10,
        justifyContent : 'center',
        alignItems : 'center'
    },

    voteText : {
        fontSize : 30,
        alignSelf : 'center',
        paddingTop : 0,
    },

    titleContainer : {
        borderWidth : 1,
        height : hp('5%'),
        width : wp('85%'),
        marginTop : 20,
        borderRadius : 10,
        justifyContent : 'center'
    },

    titleText : {
        paddingLeft : 20,
        fontSize : 15,
        fontWeight : '700',
    },

    descContainer : {
        borderWidth : 1,
        height : hp('20%'),
        width : wp('85%'),
        marginTop : 10,
        justifyContent : 'center',
        borderRadius : 10,

    }
   
    
})