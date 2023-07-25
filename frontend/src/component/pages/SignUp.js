import Checkbox from 'expo-checkbox';
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SignUp() {

  const [isChecked, setChecked] = useState(false);


  return (
    <SafeAreaView style={{flex:1, borderWidth:1, justifyContent:'center', alignItems:'center'}}>

        <Text style={{fontSize:20, fontWeight:'500'}}>환영합니다!</Text>
        <Text>지금 바로 스마트한 일상을 누려보세요.</Text>

        <View style={{borderWidth:1, height: 500, width: 350, marginTop:10, paddingLeft:20,paddingTop:3,}}>
            <View>
                <Text style={styles.textStyle}>이름</Text>
                <TextInput style={styles.textInputStyle}/>

                <Text style={styles.textStyle}>주민번호</Text>
            {/* 주민번호 input openAPI 찾기 */}
                <TextInput style={styles.textInputStyle}/>
            </View>
            <View>
                <Text style={styles.textStyle}>비밀번호</Text> 
                {/* 주민번호 input openAPI 찾기 */}
                <TextInput style={styles.textInputStyle}/>
                <Text style={{fontSize:12,}}>*최소 8자리 이상, 특수문자를 포함 해 주세요.</Text>
            </View>
            <Text style={styles.textStyle}>비밀번호 확인</Text>
            {/* 주민번호 input openAPI 찾기 */}
            <TextInput style={styles.textInputStyle}/>

            <Text style={styles.textStyle}>전화번호</Text>
            {/* 전화번호 openAPI 찾기 */}
            <TextInput style={styles.textInputStyle}/>

            <Text style={styles.textStyle}>주소</Text>
            {/* 주소 openAPI 찾기 */}
            <TextInput style={styles.textInputStyle}/>
        
            <View style={{marginTop:10, flexDirection:'row'}}>
                <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "gray" : undefined}
                />
                <Text style={{paddingLeft:5, color:'blue'}}>이용약관</Text>
                <Text> 및 </Text>
                <Text style={{color:'blue'}}>개인정보취급방침</Text>
                <Text>에 동의합니다.</Text>
                <TouchableOpacity style={{paddingLeft:5,}}><Text style={{color:'blue'}}>[보기]</Text></TouchableOpacity>
            </View>
        
            <TouchableOpacity style={styles.signUpButton}>
                <Text style={{alignSelf:'center',}}>회원가입</Text>
            </TouchableOpacity>
        </View>

        
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    textInputStyle : {
        borderWidth:1,
        width: 270,
        height: 35,
        backgroundColor : 'lightgray',
        opacity: 0.7,
        paddingLeft: 10,
        borderRadius: 5,
    },

    textStyle : {
        paddingTop: 10,
    },

    signUpButton : {
        backgroundColor:'yellow', 
        opacity:0.8, 
        alignSelf:'center',
        marginTop:20, 
        borderWidth:1, 
        height:40, 
        width:200, 
        justifyContent:'center',
        borderRadius: 5,
    }
})