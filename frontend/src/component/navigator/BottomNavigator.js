import { useNavigation } from '@react-navigation/native';
import { autoFocus } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon} from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



export default function BottomNavigator (){

    const navigation = useNavigation();
    
        return (
            <View style={{
              
                flexDirection: 'column',
                backgroundColor: '#f8f4f4',
                borderWidth : 0,
              
                

            }}>
                <View style={{ position: 'absolute',justifyContent:'center', alignSelf: 'center', width: wp('5%'), height: hp('5%'), borderRadius: 0, bottom: 30, zIndex: 10 }}>
                    <Icon
                        name='add'
                        type='material'
                        color='#f00'
                        containerStyle={{ alignSelf: 'center' }}
                        reverse
                        size={22}
                        onPress={() => {}}
                    />
                </View>

                <View style={styles.container}>
                    <TouchableOpacity style={styles.buttonStyle}
                        onPress={()=>{navigation.navigate('메인페이지')}}>
                        <View style={styles.menuButton}>
                            <Icon name='home' type='material' color='#fff' size={22}/>
                            <Text style={styles.menuText}>홈</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.buttonStyle]}>
                        <View style={[styles.menuButton, { ustifyContent: 'center' }]}>
                            <Icon name='chat' type='material'color='#fff' size={22}/>
                            <Text style={styles.menuText}>채팅</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.buttonStyle]}>
                        <View style={[styles.menuButton, {ustifyContent: 'center' }]}>
                            <Icon name='search' type='material' color='#fff' size={22}/>
                            <Text style={styles.menuText}>검색</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonStyle}>
                        <View style={styles.menuButton}> 
                            <Icon name='person' type='material' color='#fff' size={22}/>
                            <Text style={[styles.menuText, {fontSize : 9}]}>마이페이지</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }


    const styles = StyleSheet.create({

        container : {
            position: 'absolute', 
            backgroundColor: 'lightgray', 
            bottom: 0, 
            zIndex: 1, 
            width: '100%', 
            height: hp('6%'), 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            paddingHorizontal: 15, 
            paddingVertical: 10
        },
        
        menuText : {
            fontSize : 11,
            color : 'white',
            textAlign : 'center'
        },

        menuButton : {
            justifyContent:'center', 
            alignSelf: 'center', 
            borderWidth : 0, 
            width : 50
        },

        buttonStyle : {
            height : hp('4%'),
            width : wp('10%'),
            alignSelf : 'center',
            justifyContent : 'center',
            alignItems : 'center'
        }
    })