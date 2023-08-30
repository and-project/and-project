import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, Modal} from 'react-native';
import NoticePage, {fetchData} from '../pages/NoticePage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import navigation from '@react-navigation/stack'

export default function NoticeModal() {

    const id = navigation.getParams('id', 'NO-ID');
    const username = navigation.getParams('username', 'NO-USERNAME');
    const phone = navigation.getParams('phone', 'NO-PHONE');
    


      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>ID: {JSON.stringify(id)}</Text>
          <Text>Username: {JSON.stringify(username)}</Text>
          <Text>Phone: {JSON.stringify(phone)}</Text>
        </View>
      );
    }
  

