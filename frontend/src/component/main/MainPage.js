import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

export default function MainPage() {

  



  return (
<View>
     {/* wweb에서 받아 올 uri 주소 */}
    <WebView source={{uri: 'www.naver.com'}}/>
   
</View>

  )
}
