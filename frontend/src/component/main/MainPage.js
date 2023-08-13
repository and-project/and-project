import React, {useState, useEffect, useRef} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, DrawerLayoutAndroid, Button} from 'react-native';
import {WebView} from 'react-native-webview';
import LoadingPage from '../pages/LoadingPage';
import {SliderBox} from 'react-native-image-slider-box';
import icon from '../../../assets/icon.png'
import favicon from '../../../assets/favicon.png';
import splash from '../../../assets/splash.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Feather } from '@expo/vector-icons';
import DrawerLayout from '../form/DrawerLayout';
import Paginator from '../form/Paginator';
import Onboarding from '../form/Onboarding';
import CateCard from '../pages/CateCard';


export default function MainPage({navigation}) {

  const [modalVisible, setModalVisible] = useState(false)


  const openModal = () => {
    setModalVisible(true);
  }

  const closeModal = () => {
    setModalVisible(false);
  }
  

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

  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('')

  const navigationView = () => (
    <View style={styles.container}>
      <DrawerLayout/>
     
    </View>
  );

  


  return ready ? <LoadingPage/> : (  
    <DrawerLayoutAndroid
      ref = {drawer}
      drawerWidth={350}
      drawerPosition={'right'}
      renderNavigationView={navigationView}>
      

    <View>

      <View style={{marginTop:0, width: 100,}}>
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

        <TouchableOpacity onPress={() => drawer.current?.openDrawer()}>
          <View style={{marginRight:10,}}>
            <Feather name="menu" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>

      {/* <Text style={{textAlign:'center', fontSize:30, paddingTop:30,}}>간편 기능</Text>
        <TouchableOpacity onPress={openModal}
          style={{alignSelf:'center', marginTop:10,}}>
          <Feather name="plus-square" size={30} color="black" />        
        </TouchableOpacity>
        <Text style={{alignSelf:'center', color:'blue', marginTop:10,}}>나만의 기능을 추가 해 보세요.</Text>
          <View style={{borderWidth:0, justifyContent:'center', marginTop:5, height:350}}>
            {/* <FlatButton/> */}
            {/* <Onboarding/>
            <CateCard
             modalVisible={modalVisible}
             closeModal={closeModal}/>
          </View> */} 
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
});

