import React, {useState, useEffect, useRef} from 'react';
import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';
import LoadingPage from '../pages/LoadingPage';
import {SliderBox} from 'react-native-image-slider-box';
import icon from '../../../assets/icon.png'
import favicon from '../../../assets/favicon.png';
import splash from '../../../assets/splash.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Feather } from '@expo/vector-icons';
import { DrawerLayoutAndroid } from 'react-native';


export default function MainPage() {
//아파트 메인사진 들어갈 곳
  const img = [
    require('../../../assets/icon.png'),
    require('../../../assets/favicon.png'),
    require('../../../assets/splash.png'),
  ];



  const [ready, setReady] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setReady(false)
    }, 3000)
  })



  return ready ? <LoadingPage/> : (    

    <SafeAreaView>

      <View style={{marginTop:100, width: 100,}}>
        <SliderBox
          images = {img}
          autoplay = {true} //자동 슬라이더 넘김
          circleLoop = {true} //맨끝 슬라이드에서 첫 슬라이드로 이동
          resizeMode = 'contain'
          ImageComponentStyle = {{width: wp('100%'), height: hp('15%')}}
        />
      </View>

      <View style = {{flexDirection:'row', width: 'auto', height: 50, borderWidth:1, justifyContent:'space-between', alignItems:'center'}}>
        <View style = {{marginLeft:10,}}>
          <Text style={{fontSize: 20,}}>아파트 입주민 커뮤니티</Text>
        </View>

        <TouchableOpacity>
          <View style={{justifyContent:'space-between', marginRight:10,}}>
            <Feather name="menu" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
    

      // <WebView
      //   style={styles.container}
      //   source={{ uri: 'https://expo.dev' }}
      //   // web주소 받아올 곳
      // />
    );
  }

// const styles = StyleSheet.create({
//   container : {
//     flex:1,
//   }
// })



