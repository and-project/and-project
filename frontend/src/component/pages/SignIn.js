import React, {useState, useEffect} from 'react'
import {View, 
    Text, 
    SafeAreaView,  
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
    } from 'react-native';
import Checkbox from 'expo-checkbox';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';
import { POST_NOTICE_URL } from '../../env';
import StackNavigator from '../navigator/StackNavigator';
import MainPage from '../main/MainPage';

export default function SignIn({navigation}) {

  const baseURL = POST_NOTICE_URL

 const [id, setId] = useState('');
 const [pw, setPw] = useState('');

//  onHandlerClick = ()=>{
//   axios.post(`${baseURL}`, {
//     loginId : id,
//     pw : pw,
//   })
//   .then((response)=>{
//     console.log(response.data)
//     navigation.navigate('메인페이지')})
//   .catch((error)=>console.log(error))
//  }


// onHandlerClick= () =>{
//   fetch(`${baseURL}`, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ loginId: id, pw: pw }),
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((error) => console.log(error));
// }

// console.log(id, pw)
// User(id=1, apart=null, loginId=test, pw=test!, nick=null, creationTime=n


onHandlerClick = () => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    
    body: {
      id : id,
      pw : pw,
    }
    
  }),
  headers: {
    'Content-type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .then(()=>{navigation.navigate('메인페이지')})
  .catch((error)=>console.log(error))
}


  return(
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 20,}}>아파트 입주민</Text>
      <Text style={{fontSize : 25, fontWeight: '800', letterSpacing: 8,}}>커뮤니티</Text>

      <KeyboardAvoidingView style={styles.signInContainer}>
        <Text style={{fontSize: 20, letterSpacing: 10,}}>로그인</Text>
        <View style={{borderWidth:0, height: hp('20%'), justifyContent: 'center', alignItems:'center', marginTop: 10,}}>
          <TextInput style={styles.TextInputContainer}
            clearTextOnFocus={true}
            placeholder='아이디를 입력하세요.'
            value={id}
            onChangeText={setId}/>

          <TextInput style={[styles.TextInputContainer, {marginTop: 30,}]}
            clearTextOnFocus={true}
            placeholder='비밀번호를 입력하세요.'
            secureTextEntry={true}
            value={pw}
            onChangeText={setPw}/>
        </View> 

        <View style={styles.signInUpContainer}>
          <TouchableOpacity onPress={onHandlerClick}
            style={styles.buttonStyle}>
            <Text style={styles.buttonText}>로그인</Text>
          </TouchableOpacity>

          <View style={styles.signInUpContainer2}>
            <TouchableOpacity><Text style={styles.buttonText2}>회원가입</Text></TouchableOpacity>
            <Text>|</Text>
            <TouchableOpacity><Text style={styles.buttonText2}>아이디 찾기</Text></TouchableOpacity>
            <Text>|</Text>
            <TouchableOpacity><Text style={styles.buttonText2}>비밀번호 찾기</Text></TouchableOpacity>
          </View>
          
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container : {
    flex:1,
    justifyContent: 'center',
    alignItems : 'center',
  },
  signInContainer: {
    borderWidth : 1,
    height : hp('70%'),
    width : wp('90%'),
    marginTop: 10,
    justifyContent: 'center',
    alignItems : 'center'
  },

  TextInputContainer : {
    borderBottomWidth: 1,
    backgroundColor: '#dcdcdc',
    opacity: 0.8,
    height: 50,
    width: wp('70%'),
    
  },

  textStyle : {
    textAlign: 'center',
    alignSelf : 'center',
    paddingLeft: 10,
  },

  signInUpContainer : {
    borderWidth : 0,
    height : hp('10%'),
    width : wp('70%'),
    marginTop: 20,
    justifyContent: 'space-around',
    alignItems : 'center',
  },

  buttonStyle : {
    borderWidth : 0,
    backgroundColor : 'yellow',
    opacity : 0.6,
    height : hp('5%'),
    width : wp('60%'),
    justifyContent: 'center',
    alignItems : 'center',
    borderRadius : 5,
  },

  buttonText : {
    fontSize : 15,
    fontWeight : '800',
    letterSpacing : 3,
  },

  signInUpContainer2 : {
    flexDirection : 'row', 
    borderWidth : 0, 
    width : wp('50%'), 
    height : hp('3%'), 
    marginTop : 15,
    justifyContent : 'space-around',
    alignItems : 'center',
  },

  buttonText2 : {
    fontSize : 12,
  }

})