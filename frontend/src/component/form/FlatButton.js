import React, {useEffect, useRef} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  useWindowDimensions,
  Animated
} from 'react-native';
import DATA from './DATA';

const widthView = useWindowDimensions;



const FlatButton = () => {

    // const ButtonAnimation = useRef(new Animated.Value(0)).current

    const scrollX = useRef(new Animated.Value(0)).current;

    const translateY = scrollX.interpolate({
        inputRange : [0, 0, 0],
        outputRange : [0, -50, 0]
    })
    

  return (
    <SafeAreaView style={[styles.container]}>
      <FlatList style={{widthView}}
        data={DATA}
        renderItem={({item}) => {
            
            return(
                <Animated.View style={[styles.item, {transform:[translateY]}]}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </Animated.View>)}}
        keyExtractor={item => item.id}
        decelerationRate={0}
        horizontal
        onScroll={Animated.event(
            [{nativeEvent:{contentOffset: { x: scrollX}}}],
                {useNativeDriver: true
}        )}
        scrollEventThrottle={16}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
  
    marginTop: StatusBar.currentHeight || 0,


    
  },
  item: {
    backgroundColor: 'lightgray',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth:1,
    borderRadius: 10,
    width: 120,
    height: 150,
    
  },
  title: {
    fontSize: 20,
    textAlign:'center'
  },

  description:{
    fontSize: 15,
    textAlign:'center'
  }

});

export default FlatButton;