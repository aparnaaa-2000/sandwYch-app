import {View, Text, TouchableOpacity, Platform, StyleSheet} from 'react-native';
import React from 'react';
import {
  MEDSITEMCOLOR1,
  MEDSITEMCOLOR3,
  PRIMARYCOLOR,
  PUREWHITE,
} from '../../../../Constants/Colors/Colors';
import DEFAULTSTYLES, {
  DEFAULTHEIGHT,
  DEFAULTWIDTH,
} from '../../../../Constants/styles/styles';
import {FONTS} from '../../../../Constants/Fonts';
import { GlobalSize, fontSize, height, width } from '../../../../Constants/ResponsiveFont/ResponsiveFonts';

const Task = ({task}) => {
  const SVG = task.svg;
  return (
    <View
      style={[
        styles.mainContainer,
        Platform.OS === 'ios'
          ? DEFAULTSTYLES.iosShadow
          : DEFAULTSTYLES.androidShadow,
      ]}>
      <View style={styles.iconContainer}>
        <SVG width={width(30)} height={height(30)} />
      </View>
      <View style={{width: DEFAULTWIDTH * 0.5}}>
        <TouchableOpacity style={styles.doneButton}>
          <Text style={styles.doneText}>Done{'?'}</Text>
        </TouchableOpacity>
        <Text style={styles.titleText}>{task.title}</Text>
        <Text style={styles.descText}>{task.description}</Text>
      </View>
    </View>
  );
};

const styles = new StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    height: DEFAULTHEIGHT * 0.14,
    marginBottom: DEFAULTHEIGHT * 0.012,
    backgroundColor: PUREWHITE,
    borderRadius: GlobalSize(25),
    width: DEFAULTWIDTH * 0.72,
    margin:2
  },
  iconContainer: {
    backgroundColor: MEDSITEMCOLOR1,
    alignItems: 'center',
    justifyContent: 'center',
    width: DEFAULTWIDTH * 0.18,
    height: DEFAULTWIDTH * 0.18,
    alignSelf: 'center',
    borderRadius: GlobalSize(20),
    marginHorizontal: DEFAULTWIDTH * 0.02,
  },
  doneButton: {
    alignSelf: 'flex-end',
    backgroundColor: MEDSITEMCOLOR3,
    justifyContent: 'center',
    height: DEFAULTHEIGHT * 0.035,
    borderTopRightRadius: GlobalSize(25),
    borderBottomLeftRadius: GlobalSize(25),
    width: DEFAULTWIDTH * 0.15,
    alignItems: 'center',
  },
  doneText: {
    fontSize: fontSize(10),
    fontFamily: FONTS.FontSemiB,
    color: PUREWHITE,
  },
  titleText: {
    fontFamily: FONTS.FontBold,
    fontSize: fontSize(14),
    color: PRIMARYCOLOR,
  },
  descText: {
    fontFamily: FONTS.FontLight,
    fontSize: fontSize(14),
    color: PRIMARYCOLOR,
  },
});

export default Task;
