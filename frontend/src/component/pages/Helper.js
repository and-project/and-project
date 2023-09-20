import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, {useEffect, useState} from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';



export default function Helper() {
  const navigation = useNavigation();
  const [currentRegion, setCurrentRegion] = useState(null);

  const getCurrentLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("위치 권한이 거부되었습니다.");
      return;
    }

    const { coords } = await Location.getCurrentPositionAsync({});
    setCurrentRegion({
      latitude: coords.latitude,
      longitude: coords.longitude,
      latitudeDelta: 0.0022,
      longitudeDelta: 0.0021,
    });
  };

  useEffect(() => {
    getCurrentLocation();
    Location;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>도움이 필요하신가요?</Text>
      <View style={styles.upperConatiner}>
        <View style={styles.helpContainer}>
          <TouchableOpacity
            style={[styles.helpButton, { backgroundColor: "lightpink" }]}
          >
            <Text style={styles.buttonText}>도와주세요!</Text>
          </TouchableOpacity>
          <Text style={[styles.descText, { top: 10 }]}>
            *사고, 부상 등 주변 이웃들의 도움이 필요할 때 눌러주세요.
          </Text>
        </View>

        <View style={styles.helpContainer}>
          <TouchableOpacity
            style={[
              styles.helpButton,
              { backgroundColor: "lightblue", top: 10 },
            ]}
          >
            <Text style={styles.buttonText}>위급해요!</Text>
          </TouchableOpacity>
          <Text style={[styles.descText, { top: 20 }]}>
            *각 종 범죄에 노출 및 도움이 필요할 때 눌러주세요.
          </Text>
        </View>
      </View>
      <View style={styles.lowerContainer}>
        {currentRegion ? (
          <MapView style={styles.map} initialRegion={currentRegion}>
            <Marker coordinate={currentRegion} />
          </MapView>
        ) : null}
        <Text style={{justifyContent:'center', alignItems:'center', top:10, fontSize:12,}}>버튼 클릭 시 내 정보가 다른 이용자에게 전송됩니다.</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container : {
    flex : 1,
    borderWidth : 0,
    justifyContent : 'center',
    alignItems : 'center',

  },

  upperConatiner : 
  {
    borderWidth : 0,
    flex:1,
    width : wp('100%'),
    justifyContent : 'center',
    alignItems : 'center'
  },

  lowerContainer : {
    borderWidth : 1,
   flex: 1,
   width : wp('100%'),
   justifyContent : 'center',
   alignItems : 'center'
  },

  titleText : {
    fontSize : 20,
    fontWeight : '800',
    top : 25,
  },

  helpContainer : {
    borderWidth : 0,
    height : hp('17%'),
    width : wp('55%'),
    justifyContent : 'center',
    alignItems : 'center',
  },

  helpButton : {
    borderWidth : 1,
    height : hp('10'),
    width : wp('45%'),
    borderRadius : 15,
    justifyContent : 'center',
    alignItems : 'center',
    elevation : 0.5,
    shadowColor : 'gray',
    shadowOffset : {
      elevation : 0.7
    },
  },

  buttonText : {
    fontSize : 15,
    letterSpacing : 1.2,
  },

  descText : {
    fontSize : 12,
  
  },

  map:{
    width:wp('80%%'),
    height : hp('30%'),
  }
})