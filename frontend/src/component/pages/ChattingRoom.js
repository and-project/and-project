import { View, Text } from 'react-native';
import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

export default function ChattingRoom() {
  return (
    <View style={{flex:1, borderWidth : 1, }}>
    <GiftedChat/>
    </View>
  )
}