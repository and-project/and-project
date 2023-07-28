import React, {useState, useRef} from 'react'
import { FlatList, View, Animated, StyleSheet, Text, useWindowDimensions} from 'react-native';
import FlatButton from './FlatButton'
import DATA from './DATA';

export default function Onboarding() {
    
    // const width = useWindowDimensions();

      const scrollX = useRef(new Animated.Value(0)).current;

      const [currentIndex, setCurrentIndex] = useState(0)

      const ViewableItemsChanged = useRef(({viewableItems})=>{
        setCurrentIndex(viewableItems[0].index);

      }).current;
      
      const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current
      
      const Item = ({title}) => (
        <View style={{height:250, width:250, borderWidth:1,}}>
        <Text style={styles.title}>asd</Text>
        <Text style={styles.description}>asdasd</Text>
    </View>
      );
      
  return (
    <View style={StyleSheet.container}>
        <FlatList style={{height:250, borderWidth:1,}}
            data = {DATA}
            renderItem={({item})=><Item title={item.title} />}
            horizontal
            showsHorizontalScrollIndicator
            pagingEnabled
            bounces={false}
            onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], 
                {useNativeDriver: false},)}
            onViewableItemsChanged={ViewableItemsChanged}
            scrollEventThrottle={32}
            viewabilityConfig={viewConfig}
            keyExtractor={(item)=>item.id}
            
            
        />
            <Text>asd</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    title : {
        fontWeight: '800',
        fontSize: 28,
        marginBottom: 10,
        color: 'red',
        textAlign: 'center'
    },

    description : {
        fontWeight: '300',
        color: 'pink',
        textAlign: 'center',
        paddingHorizontal: 64,
    }
    
})
