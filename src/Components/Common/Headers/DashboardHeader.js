import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React,{useState,useEffect}from 'react';
import {BellIcon, BlueMenu, LogoSmall} from '../../../../assets';
import {DEFAULTHEIGHT, DEFAULTWIDTH} from '../../../Constants/styles/styles';
import {
  FOURTHCOLOR,
  PRIMARYCOLOR,
  PUREWHITE,
} from '../../../Constants/Colors/Colors';
import {FONTS} from '../../../Constants/Fonts';
import { GlobalSize, height, width,fontSize } from '../../../Constants/ResponsiveFont/ResponsiveFonts';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DashboardHeader({navigation}) {

  const [UserType, setUserType] = useState(null)

  useEffect(() => {
    getItemFromAsyncStorage()
  }, [])

    // Assume you want to get an item with the key 'exampleKey'
    const getItemFromAsyncStorage = async () => {
      try {
        // Use AsyncStorage.getItem() to retrieve the value associated with the key
        const storedValue = await AsyncStorage.getItem('UserType');
        const UserData = await AsyncStorage.getItem('Users')
        
        console.log("user data..................",UserData)
        if (storedValue !== null) {
          setUserType(storedValue)
        } else {
          // Key does not exist in AsyncStorage
          console.log('Key does not exist in AsyncStorage');
        }
      } catch (error) {
  
      }
    };
  return (
    <View>
      <View style={styles.flexView}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* Open Side Menu Bar from Here */}
          <TouchableOpacity
            style={{marginRight: DEFAULTWIDTH * 0.02}}
            onPress={() => navigation.openDrawer()}>
            <BlueMenu height={height(22)} width={width(22)} />
          </TouchableOpacity>

          <View>
            <LogoSmall />
          </View>
        </View>

        <View></View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* Notificationn is settuped here */}
          <TouchableOpacity
          onPress={()=>navigation.navigate('MenuStack',{screen:'NotificationList'})}
            style={{marginLeft: DEFAULTWIDTH * 0.08, flexDirection: 'row'}}>
            <BellIcon />
            <View style={styles.iconNum}>
              {/* Here mention the no of notifications mentioned for the user */}
              <Text style={styles.textNum}>1</Text>
            </View>
          </TouchableOpacity>

          {/* Profile Icon is shown which navigates to the Profile page of the User */}

          <TouchableOpacity 
          style={styles.viewCard}
          onPress={() => UserType !== 'CarePartner' && 
          navigation.navigate('MenuStack', { screen: 'Journey' })}>
            {/* Use the users First Letter */}
            <Text style={styles.textLetter}>A</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: DEFAULTHEIGHT * 0.02,
    marginLeft: GlobalSize(8),
    marginRight: GlobalSize(8),
  },
  viewRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: DEFAULTHEIGHT * 0.04,
    marginRight: GlobalSize(4),
  },
  iconNum: {
    backgroundColor: FOURTHCOLOR,
    width: GlobalSize(14),
    height: GlobalSize(14),
    borderRadius: GlobalSize(7),
    left: GlobalSize(-6),
    top: GlobalSize(-2),
    borderColor: PUREWHITE,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textNum: {
    fontSize: fontSize(7),
    color: PUREWHITE,
    fontFamily: FONTS.FontSemiB,
  },
  viewCard: {
    width: GlobalSize(30),
    height: GlobalSize(30),
    borderRadius: GlobalSize(15),
    backgroundColor: PRIMARYCOLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLetter: {
    color: PUREWHITE,
    fontFamily: FONTS.FontSemiB,
    fontSize: fontSize(13),
  },
});
