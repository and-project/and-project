import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import HelpEmergencyPage from '../pages/HelpEmergencyPage';
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';




export default function Helper() {

  const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [showMap, setShowMap] = useState(false);


  const getLocation = async () => {
    const { status } = await
      Location.requestForegroundPermissionsAsync();
    if (status !=='granted') {
      console.log('Permission to access location was denied');
    return;
  }
    const currentLocation = await
    Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      setShowMap(true);
  };


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
          <Text style={[styles.descText, {top: 10,}]}>
            *사고, 부상 등 주변 이웃들의 도움이 필요할 때 눌러주세요.
          </Text>
        </View>

        <View style={styles.helpContainer}>
          <TouchableOpacity
            style={[styles.helpButton, { backgroundColor: "lightblue", top: 10, }]}
          >
            <Text style={styles.buttonText}>위급해요!</Text>
          </TouchableOpacity>
          <Text style={[styles.descText, {top: 20,}]}>
            *각 종 범죄에 노출 및 도움이 필요할 때 눌러주세요.
          </Text>
        </View>
        <TouchableOpacity>
          <Text>내 위치 보기</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.lowerContainer}>
      {showMap && location && (
        <View style={styles.viewMap}>
          <View>
            <MapView
              style={{ width: wp("80"), height: hp("40%") }}
              initialRegion={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker
                coordinate={{
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                }}
                title="My Location"
                description="This is my current location"
              />
            </MapView>
          </View>
          <View style={{ flexDirection: "row", borderWidth: 1 }}>
            <View>
              <TouchableOpacity
                style={[
                  styles.closeMapButton,
                  { backgroundColor: "lightgray", opacity: 0.9 },
                ]}
                onPress={closeMap}
              >
                <View style={{ flexDirection: "row" }}>
                  <Ionicons name="hand-left-outline" size={22} color="black" />
                  <Text style={{ paddingLeft: 10, fontSize: 15 }}>
                    요청 중단하기
                  </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 10, top: 5 }}>
                    *요청을 중단하고 화면을 나갑니다.
                  </Text>
                </View>
              </TouchableOpacity>
              
            </View>

            <TouchableOpacity
              onPress={sendMap}
              style={[
                styles.closeMapButton,
                { backgroundColor: "red", opacity: 0.9 },
              ]}
            >
              <View style={{ flexDirection: "row" }}>
                <FontAwesome5 name="hands-helping" size={20} color="black" />
                <Text style={{ paddingLeft: 10, fontSize: 15 }}>요청하기</Text>
              </View>
              <View>
                <Text style={{ fontSize: 10, top: 5 }}>
                  *나의 위치정보를 보내 도움을 요청합니다.
                </Text>
              </View>
            </TouchableOpacity>
              
          </View>
          
      
        </View>
      )}
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
   width : wp('100%')
  },

  titleText : {
    fontSize : 20,
    fontWeight : '800',
    top : 25,
  },

  helpContainer : {
    borderWidth : 1,
    height : hp('15%'),
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
  
  }
})