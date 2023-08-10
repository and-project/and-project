import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Animated, useWindowDimensions, TouchableOpacity,
Button, Alert} from 'react-native';
import DATA from './DATA';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Paginator from './Paginator';


export default function Onboarding(){
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewableItemsChanged = useRef(({viewableItems})=>{
    setCurrentIndex(viewableItems[0]);
  }).current

 

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current

  const [dataList, setDataList] = useState(DATA);

  const handlerLongClick = (id) =>
    
     Alert.alert(                    
      "기능 해제",               
       "해당 기능을 해제 할까요?",               
      [                             
        {
          text: "아니요",                                   
          style: "cancel"
        },
        { text: "네", onPress : () => {const updatedDataList=dataList.filter((item)=>item.id !== id);
          setDataList(updatedDataList);}  },
                                              
      ],
      
      { cancelable: false }
    );

  return(
    <View style={{width:wp('100%')}}>
      <FlatList
        data={dataList}
        renderItem={({item})=> {
        return (
          <View>
          <TouchableOpacity 
          onLongPress={()=>handlerLongClick(item.id)}
          style ={[styles.cardContainer,{opacity: 0.8}]}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
      
          </TouchableOpacity>
        </View>
        )
      }}
        horizontal
        pagingEnabled
        bounces={false}
        keyExtractor={(item)=>item.id}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false})}
          scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        
      />
    <Paginator data={dataList} scrollX={scrollX}/>
   </View>
   
  )}

const styles = StyleSheet.create({
  container : {
    flex:1,
    borderWidth:0,
    height: 250,
    justifyContent:'center',
   
    
  },

  cardContainer:{
    borderRadius: 10,
    backgroundColor:'pink',
    height: 250,
    borderWidth:1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity:0.9,
    shadowColor: 'black',
    shadowRadius: 4,
    shadowOffset: {
      height: 13,
      width: 56,},
    width : wp('100%')
  }
})