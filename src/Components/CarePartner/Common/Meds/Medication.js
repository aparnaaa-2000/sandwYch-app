import { View, Text, StyleSheet, Platform } from 'react-native';
import React from 'react';
import {
  MEDSITEMCOLOR2,
  PRIMARYCOLOR,
  PUREWHITE,
  TRANSPARENTCOLOR1,
} from '../../../../Constants/Colors/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DEFAULTSTYLES, {
  DEFAULTHEIGHT,
  DEFAULTWIDTH,
} from '../../../../Constants/styles/styles';
import { Drop } from '../../../../../assets';
import { FONTS } from '../../../../Constants/Fonts';
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts';

const Medication = ({ medication }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <View style={[styles.headerItems, DEFAULTSTYLES.medMarginLeft]}>
          <Text style={styles.diagnosisText}>{medication.diagnosis}</Text>
        </View>

        {/* Button / Marking */}
        <TouchableOpacity
          style={[
            styles.buttonView,
            Platform.OS === 'ios'
              ? DEFAULTSTYLES.iosShadow
              : DEFAULTSTYLES.androidShadow,
          ]}>
          <Text style={[styles.textColor, { fontFamily: FONTS.FontSemiB }]}>
            Done?
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoView}>
        {/* Icon */}
        <View style={styles.iconView}>
          <Drop width={55} height={55} />
        </View>
        {/* Informations */}
        <View style={styles.infoHeight}>
          <View style={styles.informationView}>
            <Text style={styles.titleText}>{medication.tablet}</Text>
            <Text style={[styles.textColor, { fontFamily: FONTS.FontLight }]}>
              {medication.desc}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = new StyleSheet.create({
  mainContainer: {
    width: DEFAULTWIDTH * 0.73,
    marginBottom: DEFAULTHEIGHT * 0.009,
    borderRadius: 15,
    backgroundColor: TRANSPARENTCOLOR1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: MEDSITEMCOLOR2,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: 'center',
  },
  iconView: {
    height: DEFAULTHEIGHT * 0.07,
    alignItems: 'center',
    width: DEFAULTWIDTH * 0.18,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textColor: {
    color: PUREWHITE,
    fontSize: fontSize(12),
  },
  buttonView: {
    width: DEFAULTWIDTH * 0.18,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    borderLeftWidth: 0.5,
    borderColor: PUREWHITE,
    padding: GlobalSize(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerItems: {
    height: DEFAULTHEIGHT * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoView: {
    flex: 1,
    flexDirection: 'row'
  },
  informationView: {
    justifyContent: 'space-around',
    flex: 1
  },
  titleText: {
    fontFamily: FONTS.FontSemiB,
    fontSize: fontSize(16),
    color: PUREWHITE
  },
  diagnosisText: {
    fontFamily: FONTS.FontRegular,
    fontSize: 12,
    color: PUREWHITE,
  },
  infoHeight: {
    height: DEFAULTHEIGHT * 0.12
  },
});

export default Medication;
