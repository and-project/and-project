import { View, Text, StyleSheet, Modal, TouchableOpacity, Platform } from 'react-native'
import React, {useState, useEffect} from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import * as Location from 'expo-location';
import MapView, {Marker} from 'react-native-maps';
import { width } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import { useNavigation } from '@react-navigation/native';


export default function Helper({modalVisible, closeModal}){


  const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

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

  const closeMap = () => {
    setShowMap(false)
  }

  const sendMap = () => {
    
      setShowMap(false);
      closeModal();
      setShowMessage(true)
   

  }

   const stopEmergency = () => {
    closeModal();
    setShowMessage(false);
  }

  const handlerLongPress = () => {
    getLocation();

  }


  return (
    <Modal visible={modalVisible} transparent={true}>
      <View style={styles.modalContainer}>
       { showMessage ? ( 
        <View>
        <Text>asdas</Text>
        <TouchableOpacity onPress={stopEmergency}>
          <Text>닫기</Text>
        </TouchableOpacity>
    </View>
       
        ) : (
       <>
        <TouchableOpacity activeOpacity={0.9} style={styles.helpContainer}>
          <Text style={[styles.textStyle, { color: "white" }]}>다쳤어요!</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onLongPress={handlerLongPress}
          activeOpacity={0.9}
          style={styles.emergencyContainer}
        >
          <Text style={[styles.textStyle, { color: "blue" }]}>위급해요!</Text>
        </TouchableOpacity>

        <View style={styles.closeContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Ionicons name="close-circle-outline" size={24} color="black" />
            <Text>닫기</Text>
          </TouchableOpacity>    
        </View>
        </>
        )
       }
      </View>
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
              <View></View>
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

      

    </Modal>
    
  );
}



const styles = StyleSheet.create({
  modalContainer : {
    borderWidth : 1,
    borderRadius : 15,
    justifyContent : 'center',
    alignItems : 'center',
    height : hp('40%'),
    width : wp('70%'),
    flexDirection : 'column',
    alignSelf : 'center',
    top : 120,
    elevation : 1,
  },

  helpContainer : {
    flex : 1.5,
    borderBottomWidth : 1,
    borderTopEndRadius : 15,
    borderTopLeftRadius : 15,
    width : wp('69%'),
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : 'lightpink',
  },

  emergencyContainer : {
    flex : 1.5,
    width : wp('69%'),
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : 'lightgray',
  },

  closeContainer : {
    flex : 1,
    width : wp('69%'),
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : 'white',
    borderWidth : 0,
    borderTopWidth : 1,
    borderBottomLeftRadius : 15,
    borderBottomRightRadius : 15,
  },

  closeButton : {
    flexDirection : 'row',
    borderWidth : 1,
    height : hp('5%'),
    width : wp('20%'),
    justifyContent : 'center',
    alignItems : 'center',
  },

  textStyle : {
    fontSize : 20,
    fontWeight : '700',
  },

  viewMap : {
    borderWidth : 0, 
    width: wp('80%'), 
    height: hp('47%'),
    alignItems : 'center',
    alignSelf : 'center',
    backgroundColor : 'white',
    bottom : 150,
  },

  closeMapButton : {
    borderWidth : 0, 
    height : hp('7%'), 
    width : wp('40%'), 
    alignItems : 'center', 
    justifyContent : 'center',
   
  },
})