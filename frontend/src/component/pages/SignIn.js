import React, {useState, useEffect} from 'react'
import {View, 
    Text, 
    SafeAreaView, 
    TextInput, 
    StyleSheet,
    TouchableOpacity
    } from 'react-native';
import Checkbox from 'expo-checkbox';

export default function SignIn() {

const [isChecked, setChecked] = useState(false);
const [id, setId] = useState('');
const [pw, setPw] = useState('');

  return (
    <SafeAreaView
      style={{
        flex: 1,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20 }}>아파트 입주민</Text>
      <Text style={{ fontSize: 15, color: "blue", fontWeight: "bold" }}>커뮤니티</Text>

      <View
        style={{
          borderWidth: 0.8,
          height: 300,
          width: 300,
          marginTop: 10,
          alignItems: "center",
        }}
      >
        <TextInput
          style={[styles.textInputStyle, {marginTop:30,}]}
          placeholder="아이디를 입력하세요."
          value={id}
          onChangeText={setId}
        />

        <TextInput
          style={[styles.textInputStyle, { marginTop: 20 }]}
          placeholder="비밀번호를 입력하세요."
          value={pw}
          onChangeText={setPw}
          secureTextEntry={true}
        />

        <View style={{width:200, flexDirection:'row', justifyContent:'center', alignItems:'center', marginTop:20,}}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "gray" : undefined}
          />
          <Text style={{paddingLeft:10,}}>자동으로 연결하기</Text>
        </View>

        <View style={{marginTop: 20,}}>
            <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.buttonText}>로그인</Text>
            </TouchableOpacity>
            
            <View style = {{flexDirection:'row', justifyContent:'center', marginTop:20,}}>
                <TouchableOpacity style={{paddingRight: 20,}}>
                    <Text style={{fontSize:15,}}>아이디 찾기</Text>
                </TouchableOpacity>
                <Text style={{fontSize:15,}}>/</Text>
                <TouchableOpacity style={{paddingLeft: 20,}}>
                    <Text style={{fontSize:15,}}>비밀번호 찾기</Text>
                </TouchableOpacity>
            </View>
            
        </View>
      </View>
    
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    textInputStyle : {
        borderWidth:1,
        width: 250,
        height: 40,
        backgroundColor : 'lightgray',
        opacity: 0.7,
        paddingLeft: 10,
        borderRadius: 5,
    },

    buttonStyle : {
        borderWidth: 0,
        height: 35,
        width: 250,
        borderRadius: 5,
        justifyContent:'center',
        backgroundColor : 'yellow',
        opacity: 0.7,
    
    },

    buttonText : {
        fontSize: 16,
        alignSelf: 'center',
        fontWeight:'600'
    }
})
