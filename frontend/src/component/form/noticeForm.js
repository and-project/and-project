import React, { useEffect, useState } from 'react';
import data from '../../../data.json';

export default function noticeForm({content}) {

const [dataList, setDataList] = useState();

    useEffect(() => {
         setDataList(dataList)
    }, []);


  return (
    <View style={{borderWidth:1, height:70, borderRadius:5, paddingLeft:5, paddingTop:5,}}>
        <Text style={{fontSize:20,fontWeight:'500'}}>{content.title}</Text>
    <Text style={{fontSize:15, paddingTop:5,}}>{content.desc}</Text>
</View>
  )
}



