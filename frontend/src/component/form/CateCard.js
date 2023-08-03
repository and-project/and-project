import React from 'react';
import {View, Text} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function CateCard(){
  return (
    <View style={{wp:'80%', hp:'80%', flex:1, borderWidth:1, justifyContent:'center', alignItems:'center'}}>
        <Text>asdaqwesd</Text>
    </View>
    )
}
