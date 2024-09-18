// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { DrawerContentScrollView } from '@react-navigation/drawer';
import DEFAULTSTYLES, {
  DEFAULTHEIGHT,
  DEFAULTWIDTH,
} from '../../../Constants/styles/styles';
import {
  PRIMARYCOLOR,
  PUREWHITE,
  TEXTCOLOR10,
  TEXTCOLOR5,
  TEXTCOLORW,
} from '../../../Constants/Colors/Colors';
import { ArrowB, LogoSmall, SwitchProfile } from '../../../../assets';
import { FONTS } from '../../../Constants/Fonts';
import { GlobalSize, fontSize, height, width } from '../../../Constants/ResponsiveFont/ResponsiveFonts';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomSidebarMenu = props => {

  const [UserType, setUserType] = useState(null)

  useEffect(() => {
    getItemFromAsyncStorage()
  }, [])

  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';

  const navigateAndCloseDrawer = (stackName, screenName) => {
    props.navigation.navigate(stackName, { screen: screenName })
    props.navigation.closeDrawer(); // This will close the drawer
  };

  const navigateScreen = () => {
    if (UserType == 'CarePartner') {
      props.navigation.navigate('ChooseTheUser')
      props.navigation.closeDrawer(); // This will close the drawer
    } else {
      navigateAndCloseDrawer('MenuStack', 'Journey')
    }

  };

  // Assume you want to get an item with the key 'exampleKey'
  const getItemFromAsyncStorage = async () => {
    try {
      // Use AsyncStorage.getItem() to retrieve the value associated with the key
      const storedValue = await AsyncStorage.getItem('UserType');

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
    <SafeAreaView style={{ flex: 1, backgroundColor: PUREWHITE }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/*Top Large Image */}

        <TouchableOpacity
          style={styles.container}
          onPress={() => navigateAndCloseDrawer('MenuStack', 'CarePartnerProfile')}
        >
          <Image
            source={{ uri: BASE_PATH + proileImage }}
            style={styles.sideMenuProfileIcon}
          />
          <View
            style={[DEFAULTSTYLES.alignView, { zIndex: 199 }]}>
            <Text
              style={{
                fontFamily: FONTS.FontExtraBold,
                fontSize: fontSize(16),
                color: PRIMARYCOLOR,
              }}>
              Amy Bakley
            </Text>
            <Text style={styles.secondaryText}>amybakley@gmail.com</Text>
          </View>
        </TouchableOpacity>

        {/* Custom - Should write a function, if the caregiver is the user it should be shown
      or else if its a patient it should be hidden from the user side */}

        {UserType == 'CarePartner' &&
          <View style={[styles.switchProfile, DEFAULTSTYLES.iosShadow]}>
            <View style={styles.cardLayout}>
              <TouchableOpacity
                onPress={() => navigateAndCloseDrawer('MenuStack', 'Journey')}>
                <Text style={styles.textPatient}>
                  Betty Smith
                </Text>
                <Text style={styles.secondaryText}>bettysmith@gmail.com</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigateScreen()}>
                <SwitchProfile width={width(25)} height={height(25)} />
              </TouchableOpacity>
            </View>
          </View>}
        <DrawerContentScrollView {...props}>
          {/* <DrawerItemList {...props} /> */}

          <TouchableOpacity
            style={[styles.cardContainer, DEFAULTSTYLES.iosShadow]}
            onPress={() => navigateAndCloseDrawer('MenuStack', 'InPrevResources')}
          >
            <View style={styles.cardLayout}>
              <Text style={styles.subMenuText}>Requested Resource</Text>
              <ArrowB width={width(16)} height={height(16)} />
            </View>
          </TouchableOpacity>


          <TouchableOpacity
            style={[styles.cardContainer, DEFAULTSTYLES.iosShadow]}
            onPress={() => navigateAndCloseDrawer('MenuStack', 'InPrevSupport')}>
            <View style={styles.cardLayout}>
              <Text style={styles.subMenuText}>Requested Support</Text>
              <ArrowB width={width(16)} height={height(16)} />
            </View>
          </TouchableOpacity>


          <TouchableOpacity
            style={[styles.cardContainer, DEFAULTSTYLES.iosShadow]}
            onPress={() => navigateAndCloseDrawer('MenuStack', 'Settings')}>
            <View style={styles.cardLayout}>
              <Text style={styles.subMenuText}>Settings</Text>
              <ArrowB width={width(16)} height={height(16)} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.cardContainer, DEFAULTSTYLES.iosShadow]}
            onPress={() => navigateAndCloseDrawer('MenuStack', 'AboutUs')}>
            <View style={styles.cardLayout} >
              <Text style={styles.subMenuText}>About SandwYch</Text>
              <ArrowB width={width(16)} height={height(16)} />
            </View>
          </TouchableOpacity>


          <TouchableOpacity
            style={[styles.cardContainer, DEFAULTSTYLES.iosShadow]}
            onPress={() => navigateAndCloseDrawer('MenuStack', 'FAQ')}>
            <View style={styles.cardLayout}>
              <Text style={styles.subMenuText}>FAQ</Text>
              <ArrowB width={16} height={16} />
            </View>
          </TouchableOpacity>


          {/* <View style={[styles.cardContainer, DEFAULTSTYLES.iosShadow]}>
          <TouchableOpacity style={styles.cardLayout}>
            <Text style={styles.subMenuText}>Logout</Text>
            <ArrowB width={16} height={16} />
          </TouchableOpacity>
        </View> */}
        </DrawerContentScrollView>
        </ScrollView>
        <View style={styles.logoView}>
          <LogoSmall />
        </View>

     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: DEFAULTWIDTH * 0.4,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: DEFAULTHEIGHT * 0.00005,
    marginBottom: DEFAULTHEIGHT * 0.02,
    zIndex: 999,
  },
  cardContainer: {
   // width: DEFAULTWIDTH * 0.65,
    marginHorizontal: DEFAULTWIDTH * 0.05,
    backgroundColor: PUREWHITE,
    justifyContent: 'center',
    padding: DEFAULTWIDTH * 0.04,
    marginBottom: DEFAULTHEIGHT * 0.02,
    elevation: 2,
    borderRadius: DEFAULTHEIGHT * 0.02,
    zIndex: 99,
  },
  cardLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switchProfile: {
   // width: DEFAULTWIDTH * 0.65,
    marginHorizontal: DEFAULTWIDTH * 0.05,
    backgroundColor: PUREWHITE,
    padding: DEFAULTWIDTH * 0.04,
    marginTop: DEFAULTHEIGHT * 0.01,
    marginBottom: DEFAULTHEIGHT * 0.02,
    elevation: 2,
    borderRadius: DEFAULTHEIGHT * 0.02,
  },
  subMenuText: {
    color: TEXTCOLORW,
    fontFamily: FONTS.FontRegular,
    fontSize: fontSize(12),
  },
  secondaryText: {
    color: TEXTCOLOR5,
    fontFamily: FONTS.FontRegular,
    fontSize: fontSize(13),
  },
  logoView: {
    alignSelf: 'center',
    marginBottom: GlobalSize(10),
    ///marginTop: GlobalSize(50)
  },
  sideMenuProfileIcon: {
    width: DEFAULTWIDTH * 0.3,
    height: DEFAULTWIDTH * 0.3,
    resizeMode: 'contain',
  },
  textPatient: {
    fontFamily: FONTS.FontMedium,
    fontSize: fontSize(14),
    color: TEXTCOLOR10
  }
});

export default CustomSidebarMenu;
