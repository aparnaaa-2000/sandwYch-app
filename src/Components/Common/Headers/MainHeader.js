import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Menu, SwitchProfile, WorldPeace } from '../../../../assets';
import FastImage from 'react-native-fast-image';
import {
  BACKGROUNDWHITE,
  GREYICONBACKGROUND,
  LINECOLOR1,
  PUREWHITE,
  TEXTCOLOR10,
  TEXTCOLOR5
} from '../../../Constants/Colors/Colors';
import { BETTYSMITHPROFILE } from '../../../Constants/DummyImages';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GlobalSize, fontSize } from '../../../Constants/ResponsiveFont/ResponsiveFonts';

const MainHeader = ({ navigation }) => {

  const [UserType, setUserType] = useState(null)

  useEffect(() => {
    getItemFromAsyncStorage()
  }, [])

  // Assume you want to get an item with the key 'exampleKey'
  const getItemFromAsyncStorage = async () => {
    try {
      // Use AsyncStorage.getItem() to retrieve the value associated with the key
      const storedValue = await AsyncStorage.getItem('UserType');
      console.log("user type....................", storedValue)
      if (storedValue !== null) {
        setUserType(storedValue)
      } else {
        // Key does not exist in AsyncStorage
        console.log('Key does not exist in AsyncStorage');
      }
    } catch (error) {

    }
  };

  const UserNavigation = () => {
    navigation.navigate('ChooseTheUser')
  }

  return (
    <View style={{ backgroundColor: BACKGROUNDWHITE }}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('MenuStack', { screen: 'Journey' })}
          style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FastImage
            style={styles.imageView}
            source={{
              uri: BETTYSMITHPROFILE,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View style={{ marginLeft: GlobalSize(10) }}>
            <Text style={styles.mainHeader}>Betty Smith</Text>
            {/* <Text style={styles.subHeader}>bettysmith@gmail.com</Text> */}
          </View>
        </TouchableOpacity>

        {UserType == 'CarePartner' &&
          <TouchableOpacity
            style={styles.peaceOverlay}
            onPress={() => UserNavigation()}>
            <SwitchProfile width={GlobalSize(25)} height={GlobalSize(25)} />
          </TouchableOpacity>}
          
      </View>
      <View style={styles.lineBorder} />
    </View>
  );
};

const styles = new StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: GlobalSize(10),
    marginBottom: GlobalSize(10),
    justifyContent: 'space-between',
    alignItems:'center'

  },
  lineBorder: {
    backgroundColor: LINECOLOR1,
    height: 1,
    margin: GlobalSize(10),
    marginLeft: GlobalSize(8),
    marginRight: GlobalSize(8)
  },
  imageView: {
    width: GlobalSize(40),
    height: GlobalSize(40),
    borderRadius: GlobalSize(40),
    marginLeft: GlobalSize(10)
  },
  mainHeader: {
    fontFamily: 'Inter-Medium',
    color: TEXTCOLOR10,
    fontSize: fontSize(14),
  },
  subHeader: {
    fontFamily: 'Inter-Regular',
    color: TEXTCOLOR5,
    fontSize: fontSize(14),
  },
  peaceOverlay: {
    width: GlobalSize(40),
    height: GlobalSize(40),
    backgroundColor: GREYICONBACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: GlobalSize(40),
    marginRight: GlobalSize(10)
  },
});

export default MainHeader;
