import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {BellFilledColor} from '../../../../assets';
import {DEFAULTWIDTH} from '../../../Constants/styles/styles';
import {FONTS} from '../../../Constants/Fonts';
import {NINETHCOLOR, PUREWHITE} from '../../../Constants/Colors/Colors';

const Header = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Notifications</Text>
      <View style={{}}>
        <BellFilledColor width={30} height={30} />
        <View style={styles.notificationNoOverlay}>
          <Text style={styles.notificationNo}>2</Text>
        </View>
        <View></View>
      </View>
    </View>
  );
};

const styles = new StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: DEFAULTWIDTH * 0.04,
    alignItems: 'center',
  },
  heading: {fontFamily: FONTS.FontBlack, fontSize: 22},
  notificationNo: {
    color: PUREWHITE,
    fontSize: 10,
    fontFamily: FONTS.FontSemiB,
  },
  notificationNoOverlay: {
    position: 'absolute',
    backgroundColor: NINETHCOLOR,
    right: 1,
    borderRadius: 20,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Header;
