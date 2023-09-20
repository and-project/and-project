import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';


export default function HelpEmergencyPage() {
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
      setShowMessage(true)
   

  }


  const handlerLongPress = () => {
    getLocation();

  }
  return (
    <View style={{flex:1}}>
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
    </View>
  )}

  
