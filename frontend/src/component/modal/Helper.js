import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native'
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';

export default function Helper({modalVisible, closeModal}) {
  return (
    <Modal visible={modalVisible} transparent={true}>
        <View  style={styles.modalContainer}>
            <TouchableOpacity activeOpacity={0.9} style={styles.helpContainer}>
              <Text style={styles.textStyle}>다쳤어요!</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.9} style={styles.emergencyContainer}>
            <Text style={styles.textStyle}>위급해요!</Text>
            </TouchableOpacity>

            <View style={styles.closeContainer}>
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Ionicons name="close-circle-outline" size={24} color="black" />
                  <Text>닫기</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer : {
    borderWidth : 1,
    borderRadius : 15,
    justifyContent : 'center',
    alignItems : 'center',
    height : hp('40%'),
    width : wp('70%'),
    flexDirection : 'column',
    alignSelf : 'center',
    top : 120,
    elevation : 1,
  },

  helpContainer : {
    flex : 1.5,
    borderBottomWidth : 1,
    borderTopEndRadius : 15,
    borderTopLeftRadius : 15,
    width : wp('69%'),
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : 'lightpink',
  },

  emergencyContainer : {
    flex : 1.5,
    width : wp('69%'),
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : 'lightgray',
  },

  closeContainer : {
    flex : 1,
    width : wp('69%'),
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : 'white',
    borderWidth : 0,
    borderTopWidth : 1,
    borderBottomLeftRadius : 15,
    borderBottomRightRadius : 15,
  },

  closeButton : {
    flexDirection : 'row',
    borderWidth : 1,
    height : hp('5%'),
    width : wp('20%'),
    justifyContent : 'center',
    alignItems : 'center',
  },

  textStyle : {
    fontSize : 20,
    fontWeight : '700',
  }
})