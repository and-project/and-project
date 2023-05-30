import React, {useRef} from 'react';
import {View, Text, Animated, StyleSheet} from 'react-native';
import favicon from '../../../assets/favicon.png';
import MaskedView from '@react-native-masked-view/masked-view';
import MainPage from '../main/MainPage';
import splash from '../../../assets/splash.png'

export default class LoadingPage extends React.Component{
  state = {
    loadingProgress: new Animated.Value(0),
    animationDone: false
  };


  componentDidMount(){
    Animated.timing(this.state.loadingProgress,{
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
      delay: 400
    }).start(()=>{
      this.setState({animationDone: true})
    })
  }

  render(){

    const colorLayer = this.state.animationDone ? null : <View style = {[StyleSheet.absoluteFill, {backgroundColor: '#7F23D9'}]}/>
    const whiteLayer = this.state.animationDone ? null : <View style = {[StyleSheet.absoluteFill, {backgroundColor: '#FFF'}]}/>

    const imageScale = {
      transform: [
        {
          scale: this.state.loadingProgress.interpolate({
            inputRange: [0, 15, 100],
            outputRange: [0.1, 0.06, 16]
          })
        }
      ]
    }


    const opacity = {
      opacity: this.state.loadingProgress.interpolate({
        inputRange: [0, 25, 50],
        outputRange: [0, 0, 1],
        extrapolate: 'clamp'
      })
    }

    return(
      <View style={{flex:1,}}>
        {colorLayer}
        <MaskedView style={{flex:1}} maskElement={
          <View style={styles.centered}>
            <Animated.Image 
              source={require('../../../assets/favicon.png')}
              // 메인 사진 들어갈 곳
              style={[{ width: 1000 }, imageScale]}
              resizeMode="contain"
              />

          </View>
        }>
          {whiteLayer}
          <Animated.View style = {[opacity, styles.centered]}>
            <Animated.Image source={splash}/>
            {/* 메인사진 들어갈 곳 */}
          </Animated.View>

        </MaskedView>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  centered:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})