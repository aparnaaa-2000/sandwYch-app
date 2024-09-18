import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import React from 'react';
import {
  AnalogClock,
  GreyCalendar2,
  SquareMap,
  TransportMobility,
} from '../../../../assets';
import {
  BORDERCOLORW,
  EIGHTHCOLOR,
  NINETHCOLOR,
  PRIMARYCOLOR,
  PRIMARYLESSOPAQ,
  PUREWHITE,
  SECONDARYTEXTCOLOR3,
  SEVENTHCOLOR,
  TEXTCOLOR10,
  TEXTCOLOR13,
  TEXTCOLOR2,
  TEXTCOLOR5,
} from '../../../Constants/Colors/Colors';
import {FONTS} from '../../../Constants/Fonts';
import DEFAULTSTYLES, {
  DEFAULTHEIGHT,
  DEFAULTWIDTH,
} from '../../../Constants/styles/styles';

const NewNotification = ({notification, day, navigation}) => {
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
    <View
      style={[
        styles.mainContainer,
        Platform.OS === 'ios'
          ? DEFAULTSTYLES.iosShadow
          : DEFAULTSTYLES.androidShadow,
      ]}>
      <View style={styles.headerContainer}>
        {/* Header Left Container */}
        <View style={{justifyContent: 'space-between'}}>
          {/* Name of the person requested and their role */}
          <View>
            <Text style={styles.nameText}>{notification.name}</Text>
            <Text style={styles.roleText}>{notification.role}</Text>
          </View>

          {/* Time & Date info */}
          <View style={styles.timestampContainer}>
            <GreyCalendar2 width={12} height={12} />
            <Text style={styles.timestamp}>
              {notification.date}
              {', '}
            </Text>
            <AnalogClock width={12} height={12} />
            <Text style={styles.timestamp}>{notification.time}</Text>
          </View>
        </View>
        {/* Header Right Container */}
        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity
            style={{
              marginRight: DEFAULTWIDTH * 0.01,
              marginBottom: DEFAULTHEIGHT * 0.005,
            }}>
            <SquareMap />
          </TouchableOpacity>
          <Text style={styles.placeText}>{notification.city}</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SupportStack', {
            screen: 'SupportNotificationDetails',
            params: {
              navigationBack: navigation,
              notification: notification,
              day: day,
            },
          });
          // navigation.navigate('SupportNotificationDetails');
        }}
        style={{flexDirection: 'row'}}>
        {/* Icon and its Type of Request ADL/ IADL/ Medical Assitance/ Medical Treatment or Procedure */}
        <View style={styles.iconContainer}>
          {/* if the status is active, The badge won't be shown. */}
          {notification.status !== 'active' && (
            <View style={styles.badgeContainer(notification.status)}>
              <Text style={styles.badgeText}>{badgeText}</Text>
            </View>
          )}

          <TransportMobility width={70} height={70} />
          <Text numberOfLines={1} style={styles.typeText}>
            {notification.type}
          </Text>
        </View>
        {/* Title and Description */}
        <View style={{marginLeft: DEFAULTWIDTH * 0.02}}>
          <Text style={styles.titleText}>{notification.title}</Text>
          <Text numberOfLines={4} style={styles.descText}>
            {notification.description}{' '}
          </Text>
        </View>
      </TouchableOpacity>
      {/* Checking whether its the current day, Only then it will show the Accept Notification */}
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
    </View>
  );
};

const styles = new StyleSheet.create({
  mainContainer: {
    marginHorizontal: DEFAULTWIDTH * 0.02,
    backgroundColor: PUREWHITE,
    padding: DEFAULTHEIGHT * 0.01,
    marginTop: DEFAULTHEIGHT * 0.02,
    borderRadius: 8,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: DEFAULTHEIGHT * 0.009,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: BORDERCOLORW,
    marginBottom: DEFAULTHEIGHT * 0.015,
  },
  nameText: {
    color: TEXTCOLOR10,
    fontSize: 18,
    fontFamily: FONTS.FontSemiB,
  },
  roleText: {
    color: TEXTCOLOR5,
    fontSize: 10,
    fontFamily: FONTS.FontRegular,
  },
  timestampContainer: {
    flexDirection: 'row',
    marginLeft: DEFAULTWIDTH * 0.01,
    marginTop: DEFAULTHEIGHT * 0.005,
    alignItems: 'center',
  },
  timestamp: {
    fontSize: 10,
    fontFamily: FONTS.FontRegular,
    color: SECONDARYTEXTCOLOR3,
    marginLeft: DEFAULTWIDTH * 0.01,
  },
  typeText: {
    fontFamily: FONTS.FontSemiB,
    fontSize: 14,
    color: PUREWHITE,
  },
  iconContainer: {
    backgroundColor: PRIMARYLESSOPAQ,
    borderRadius: 15,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontFamily: FONTS.FontBold,
    color: PRIMARYCOLOR,
    fontSize: 16,
    marginBottom: DEFAULTHEIGHT * 0.005,
  },
  descText: {
    width: DEFAULTWIDTH * 0.6,
    fontFamily: FONTS.FontLight,
    fontSize: 14,
    color: TEXTCOLOR2,
  },
  placeText: {
    color: TEXTCOLOR13,
    fontSize: 14,
    fontFamily: FONTS.FontLight,
  },
  buttonStyle: {
    width: DEFAULTWIDTH * 0.3,
    alignItems: 'center',
    height: 35,
    justifyContent: 'center',
    borderRadius: 8,
    marginHorizontal: DEFAULTWIDTH * 0.01,
  },
  buttonLayout: {
    flexDirection: 'row',
    paddingVertical: DEFAULTHEIGHT * 0.01,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: 8,
  },
  badgeText: {
    fontFamily: FONTS.FontSemiB,
    fontSize: 12,
    color: PUREWHITE,
  },
  badgeContainer: status => ({
    position: 'absolute',
    zIndex: 11,
    top: 0,
    left: 0,
    padding: 5,
    backgroundColor: status === 'rejected' ? NINETHCOLOR : EIGHTHCOLOR,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 20,
  }),
});

export default NewNotification;
