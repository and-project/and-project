import { width } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import React from 'react';
import {View, Text, StyleSheet, useWindowDimensions, Animated} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function Paginator({data, scrollX}) {
    const width = wp('100%')
  return (
    <View style={{flexDirection: 'row', height: 64, justifyContent: 'center', alignItems: 'center'}}>
        {data.map((_, i)=>{
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

            const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange: [10, 20, 10],
                extrapolate: 'clamp',
            });

            const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.3, 1, 0.3],
                extrapolate: 'clamp'
            })
            return <Animated.View style={[styles.dot, {width: dotWidth}]} key={i.toString()}/>
        })}
       
    </View>
  )
}

const styles = StyleSheet.create({
   dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: 'lightgray',
    marginHorizontal: 8,
   }
})
