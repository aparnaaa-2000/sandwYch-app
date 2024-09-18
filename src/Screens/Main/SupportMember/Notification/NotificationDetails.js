import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import DEFAULTSTYLES, {
  DEFAULTHEIGHT,
  DEFAULTWIDTH,
} from '../../../../Constants/styles/styles';
import {
  LeftArrow,
  OldPhone,
  SquareMap,
  TransportMobility,
  WhiteAnalogClock,
  WhiteCalendar,
} from '../../../../../assets';
import {
  BORDERCOLORW,
  EIGHTHCOLOR,
  NINETHCOLOR,
  PRIMARYLESSOPAQ,
  PUREWHITE,
  SEVENTHCOLOR,
  TEXTCOLOR10,
  TEXTCOLOR11,
  TEXTCOLOR12,
  TEXTCOLOR14,
  TEXTCOLOR2,
  TEXTCOLOR8,
} from '../../../../Constants/Colors/Colors';
import {FONTS} from '../../../../Constants/Fonts';

const NotificationDetails = ({route, navigation}) => {
  const {navigationBack, notification, day} = route.params;
  const placeName = 'Austin, Texas';
  const notificationStatus = true;

  const handleOpenMaps = () => {
    // Format the place name for the query
    const formattedPlaceName = encodeURIComponent(placeName);
    // Only For Apple Maps:
    if (Platform.OS === 'ios') {
      Linking.openURL(`https://maps.apple.com/?q=${formattedPlaceName}`);
    }
    //Only For Google Maps:
    else if (Platform.OS === 'android') {
      Linking.openURL(
        `https://www.google.com/maps/search/?api=1&query=${formattedPlaceName}`,
      );
    } else {
    }
  };

  let badgeText;

  switch (notification.status) {
    case 'rejected':
      badgeText = 'Rejected';
      break;
    case 'accepted':
      badgeText = 'Accepted';
      break;
    default:
      badgeText = 'Rejected';
  }

  return (
    <SafeAreaView
      style={
        Platform.OS === 'android'
          ? DEFAULTSTYLES.AndroidSafeArea
          : styles.container
      }>
      <View style={styles.mainContainer}>
        {/* Header Row for the Page */}
        <View style={styles.headerRow}>
          <View style={styles.headerContainer}>
            <TouchableOpacity
              onPress={() => navigationBack.goBack()}
              style={styles.backConatiner}>
              <LeftArrow width={14} height={14} />
            </TouchableOpacity>
            <Text style={styles.headerText}>{notification.type}</Text>
            <View>
              <Text>{'         '}</Text>
            </View>
          </View>
        </View>
        {/* if the status is active, The badge won't be shown. */}
        {notification.status !== 'active' && (
          <View style={styles.badgeContainer(notification.status)}>
            <Text style={styles.badgeText}>{badgeText}</Text>
          </View>
        )}
        {/* Icon is defined here */}
        <TransportMobility width={DEFAULTWIDTH} height={DEFAULTWIDTH} />
        {/* Timestamp inside the Icon */}
        <View style={styles.timeStampLayout}>
          <WhiteCalendar width={15} height={15} />
          <Text style={styles.timeStamp}>
            {notification.date}
            {', '}
          </Text>
          <WhiteAnalogClock width={15} height={15} />
          <Text style={styles.timeStamp}>{notification.time}</Text>
        </View>
      </View>

      <View
        style={[
          styles.middleContainer,
          Platform.OS === 'ios'
            ? DEFAULTSTYLES.iosShadow
            : DEFAULTSTYLES.androidShadow,
        ]}>
        {/* Left Container */}
        <View>
          <View style={{marginBottom: DEFAULTHEIGHT * 0.01}}>
            <Text style={styles.requestedName}>{notification.name}</Text>
            <Text style={styles.requestedRole}>{notification.role}</Text>
          </View>
          <View>
            <Text style={styles.placeText}>{notification.city}</Text>
          </View>
        </View>

        {/* Right Container */}
        <View style={{flexDirection: 'row'}}>
          {!notificationStatus && (
            <TouchableOpacity>
              <OldPhone width={40} height={36} />
            </TouchableOpacity>
          )}
          <TouchableOpacity style={{marginLeft: 10}} onPress={handleOpenMaps}>
            <SquareMap width={36} height={36} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={[
          styles.middleContainer,
          Platform.OS === 'ios'
            ? DEFAULTSTYLES.iosShadow
            : DEFAULTSTYLES.androidShadow,
        ]}>
        {/* Info of the Request will be shown here */}
        <View style={{padding: DEFAULTHEIGHT * 0.009}}>
          <Text style={styles.infoContainerHeading}>{notification.title}</Text>
          <View style={styles.lineHorizontal} />
          <Text style={styles.infoContainerDesc}>
            {notification.description}
          </Text>
        </View>
      </View>

      {/* Button Setup */}

      {day === 0 && (
        <>
          {/* This is to see whether the status is confirmed or not */}
          {notification.status === 'active' && (
            <View style={styles.buttonLayout}>
              <TouchableOpacity
                style={[styles.buttonStyle, {backgroundColor: SEVENTHCOLOR}]}>
                <Text style={{color: PUREWHITE, fontFamily: FONTS.FontBold}}>
                  ACCEPT
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.buttonStyle, {backgroundColor: NINETHCOLOR}]}>
                <Text style={{color: PUREWHITE, fontFamily: FONTS.FontBold}}>
                  REJECT
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </>
      )}
    </SafeAreaView>
  );
};

const styles = new StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    width: DEFAULTWIDTH,
    height: DEFAULTWIDTH,
    backgroundColor: PRIMARYLESSOPAQ,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginHorizontal: DEFAULTWIDTH * 0.02,
  },
  backConatiner: {
    backgroundColor: PUREWHITE,
    borderRadius: 20,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },

  headerRow: {position: 'absolute', top: 15, width: DEFAULTWIDTH},
  headerText: {
    fontSize: 18,
    color: PUREWHITE,
    fontFamily: FONTS.FontSemiB,
  },
  middleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: DEFAULTHEIGHT * 0.009,
    // borderRadius: 8,
    backgroundColor: PUREWHITE,
    // borderWidth: 0.5,
    borderColor: BORDERCOLORW,
    margin: DEFAULTHEIGHT * 0.015,
  },
  requestedName: {
    fontFamily: FONTS.FontMedium,
    fontSize: 15,
    color: TEXTCOLOR8,
  },
  requestedRole: {
    fontFamily: FONTS.FontRegular,
    fontSize: 12,
    color: TEXTCOLOR14,
  },
  placeText: {
    color: TEXTCOLOR11,
    fontSize: 14,
    fontFamily: FONTS.FontLight,
  },
  infoContainerHeading: {
    fontSize: 20,
    fontFamily: FONTS.FontSemiB,
    color: TEXTCOLOR10,
  },
  infoContainerDesc: {
    fontFamily: FONTS.FontLight,
    fontSize: 16,
    color: TEXTCOLOR2,
  },
  lineHorizontal: {
    width: DEFAULTWIDTH * 0.85,
    alignSelf: 'center',
    height: 0.2,
    backgroundColor: TEXTCOLOR12,
    marginVertical: 5,
  },
  buttonStyle: {
    width: DEFAULTWIDTH * 0.45,
    alignItems: 'center',
    height: 45,
    justifyContent: 'center',
    borderRadius: 8,
    marginHorizontal: DEFAULTWIDTH * 0.01,
  },
  buttonLayout: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: DEFAULTHEIGHT * 0.04,
    alignSelf: 'center',
    zIndex: 99,
  },
  timeStampLayout: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeStamp: {
    fontSize: 14,
    fontFamily: FONTS.FontLight,
    color: PUREWHITE,
    marginLeft: 6,
  },
  badgeText: {
    fontFamily: FONTS.FontSemiB,
    fontSize: 12,
    color: PUREWHITE,
  },
  badgeContainer: status => ({
    position: 'absolute',
    zIndex: 11,
    bottom: 0,
    right: 0,
    padding: 5,
    backgroundColor: status === 'rejected' ? NINETHCOLOR : EIGHTHCOLOR,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  }),
});

export default NotificationDetails;
