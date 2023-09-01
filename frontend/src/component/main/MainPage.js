import React, {useState, useEffect, useRef} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, DrawerLayoutAndroid, Button, Dimensions, ImageBackground } from 'react-native';
import {WebView} from 'react-native-webview';
import LoadingPage from '../pages/LoadingPage';
import {SliderBox} from 'react-native-image-slider-box';
import apart from '../../../assets/apart.jpg'
import apart2 from '../../../assets/apart2.jpg';
import apart3 from '../../../assets/apart3.jpg'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Feather } from '@expo/vector-icons';
import DrawerLayout from '../form/DrawerLayout';
import Paginator from '../form/Paginator';
import Onboarding from '../form/Onboarding';
import CateCard from '../pages/CateCard';
import axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AutoHeightImage from "react-native-auto-height-image";
import backgroundImage from '../../../assets/backgroundImage.jpg';

export default function MainPage() {

  const navigation = useNavigation()

  const [modalVisible, setModalVisible] = useState(false)
  const [notcieData, setNoticeData] = useState([''])

  

  useEffect(()=>{
    axios.get(`http://jsonplaceholder.typicode.com/users`)
    .then((response)=>setNoticeData(response.data))
    .catch((error) => console.log(error))
  }, [])
  const openModal = () => {
    setModalVisible(true);
  }

  const closeModal = () => {
    setModalVisible(false);
  }

const win = Dimensions.get('window').width


//아파트 메인사진 들어갈 곳


  const img = [
    require('../../../assets/apart.jpg'),
    require('../../../assets/apart2.jpg'),
    require('../../../assets/apart3.jpg'),
  ];

  
  const [ready, setReady] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setReady(false)
    }, 3000)
  })

  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('')

  const navigationView = () => (
    <View style={styles.container}>
      <DrawerLayout/>
     
    </View>
  );



  return ready ? (
    <LoadingPage />
  ) : (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={350}
      drawerPosition={"right"}
      renderNavigationView={navigationView}
    >
    <View style={styles.mainContainer}>
      <View styl={{flex:1}}>
        <View style={{ marginTop: 0, width: 100 }}>
          <SliderBox
            images={img}
            autoplay={true} //자동 슬라이더 넘김
            circleLoop={true} //맨끝 슬라이드에서 첫 슬라이드로 이동
            resizeMode="contain"
            ImageComponentStyle={{
              width: wp("100%"),
              height: hp("20%"),
              borderWidth: 0,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            height: 50,
            borderWidth: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 20 }}>아파트 입주민 커뮤니티</Text>
          </View>

          <TouchableOpacity onPress={() => drawer.current?.openDrawer()}>
            <View style={{ marginRight: 10 }}>
              <Feather name="menu" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>

      <View style={styles.middleContainer}>

      </View>
      

      <View style={styles.loewrContainer}>
        <View style={styles.noticeContainer}>
          <View
            style={{
              borderBottomWidth: 1,
              height: 40,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text>공지사항</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("공지게시판");
              }}
              style={{ flexDirection: "row" }}
            >
              <Text>이동하기</Text>
              <MaterialCommunityIcons
                name="page-next-outline"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <View>
            {notcieData.slice(0, 5).map((value) => {
              return (
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderStyle: "dotted",
                    height: 30,
                  }}
                >
                  <Text>{value.name}</Text>
                </View>
              );
            })}
          </View>
        </View>
        </View>
      </View>
      </View>
    </DrawerLayoutAndroid>
  );
  }





const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },

  mainContainer : {
    width : wp('100%'),
    height : hp('100%'),
    backgroundColor : 'lavenderblush'
  },

  middleContainer : {
    borderWidth : 1,
    width : wp('100%'),
    height : hp('35%')
  },

  loewrContainer : {
    justifyContent:'center',
    alignItems : 'center',
    borderWidth:1,
    height: hp('34%'),
    width : wp('100%')
  },

  noticeContainer: {
    borderWidth: 1,
    height: 190,
    width:wp('85%'),
    borderRadius:10,
    elevation : 3,
    backgroundColor : 'white',
    shadowOpacity : 0.2
  },

  
});

