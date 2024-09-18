import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {DEFAULTHEIGHT, DEFAULTWIDTH} from '../../../Constants/styles/styles';
import {
  MEDSITEMCOLOR1,
  PUREWHITE,
  TEXTCOLOR10,
  TEXTCOLOR13,
} from '../../../Constants/Colors/Colors';
import {FONTS} from '../../../Constants/Fonts';

const Header = () => {
  return (
    <TouchableOpacity style={styles.mainConainter}>
      <View style={styles.profileRound}>
        <Text style={styles.profileImageText}>SM</Text>
      </View>
      <View>
        <Text style={styles.profileName}>Support Member 1</Text>
        <Text style={styles.profileEmail}>support@gmail.com</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = new StyleSheet.create({
  mainConainter: {
    marginVertical: DEFAULTHEIGHT * 0.01,
    marginHorizontal: DEFAULTWIDTH * 0.02,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileRound: {
    backgroundColor: MEDSITEMCOLOR1,
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  profileImageText: {
    color: PUREWHITE,
    fontFamily: FONTS.FontBold,
    fontSize: 14,
  },
  profileName: {
    fontFamily: FONTS.FontBold,
    fontSize: 16,
    color: TEXTCOLOR10,
  },
  profileEmail: {
    fontFamily: FONTS.FontRegular,
    fontSize: 12,
    color: TEXTCOLOR13,
  },
});

export default Header;
