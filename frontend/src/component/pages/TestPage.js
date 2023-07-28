import React, {useState, useEffect} from 'react'
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import data from '../../../data.json';
import { Button } from 'react-native-paper';


export default function TestPage({content}) {

const dataList = data.notice;



return(

    <View>
        
            <View style={{flexDirection:'row', marginTop:10,}}>
                <Button style={{height:40, width:150, backgroundColor:'thistle'}}
                    mode='elevated' disabled={false}
                    onPress={()=>console.log('ress') }>새공지 보기</Button>
                
                <Button style={{height:40, width:150, backgroundColor:'thistle', marginLeft:10,}}
                    mode='elevated'
                    onPress={()=>console.log('ress') }>전체보기</Button>
           
        </View>
            
        <SafeAreaView style={{marginTop:10,}}>
        
            <View>
            {
                dataList.map((value)=>{
                    return(
                        <View style={{borderWidth:1, height:70, borderRadius:5, paddingLeft:5, paddingTop:5, marginTop:5,}}>
                            <Text style={{fontSize:20,fontWeight:'500'}}>{value.title}</Text>
                            <Text style={{fontSize:15, paddingTop:5,}}>{value.desc}</Text>
                        </View>
                    )
                })
                    
                }
            </View>
           
        </SafeAreaView>
    </View>
)
}