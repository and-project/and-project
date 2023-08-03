import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Animated, useWindowDimensions} from 'react-native';
import DATA from './DATA';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Paginator from './Paginator';

export default function Onboarding(){
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewableItemsChanged = useRef(({viewableItems})=>{
    setCurrentIndex(viewableItems[0].index);
  }).current

 

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current

  return(
    <View style={{width:wp('100%')}}>
      <FlatList
        data={DATA}
        renderItem={({item})=> {
        return (
          <View style ={[styles.cardContainer,{opacity: 0.8}]}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
      
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
    <Paginator data={DATA} scrollX={scrollX}/>
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