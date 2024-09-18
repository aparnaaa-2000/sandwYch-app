import { View, Text, ScrollView, StyleSheet, Platform } from 'react-native';
import React from 'react';
import DEFAULTSTYLES, {
  DEFAULTHEIGHT,
  DEFAULTWIDTH,
} from '../../../../Constants/styles/styles';
import {
  PUREWHITE,
  TEXTCOLOR7,
  TEXTCOLORW,
} from '../../../../Constants/Colors/Colors';
import { FONTS } from '../../../../Constants/Fonts';
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts';

const PatientInfo = () => {

  const ARRAYSTYLES = [
    styles.squareContainer,
    Platform.OS == 'android'
      ? DEFAULTSTYLES.androidShadow
      : DEFAULTSTYLES.iosShadow,
  ];

  return (
    <View>

    <View style={{marginLeft:GlobalSize(10)}}>
        <Text style={styles.patientText}>
        Patient Info
      </Text></View>
  
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}>
      
        <View style={ARRAYSTYLES}>
          <Text style={styles.titleText}>Age</Text>
          <Text style={styles.detailText}>86</Text>
        </View>
        <View style={ARRAYSTYLES}>
          <Text style={styles.titleText}>Blood Group</Text>
          <Text style={styles.detailText}>AB +ve</Text>
        </View>
        <View style={ARRAYSTYLES}>
          <Text style={styles.titleText}>Height</Text>
          <Text style={styles.detailText}>176 cm</Text>
        </View>
        <View style={ARRAYSTYLES}>
          <Text style={styles.titleText}>Weight</Text>
          <Text style={styles.detailText}>78 Kg</Text>
        </View>
        <View style={ARRAYSTYLES}>
          <Text style={styles.titleText}>Blood Glucose</Text>
          <Text style={styles.detailText}>90 mg/dl</Text>
        </View>
        <View style={ARRAYSTYLES}>
          <Text style={styles.titleText}>Body Temperateure</Text>
          <Text style={styles.detailText}>92 deg Cel</Text>
        </View>
        <View style={ARRAYSTYLES}>
          <Text style={styles.titleText}>Blood Pressure</Text>
          <Text style={styles.detailText}>176 cm</Text>
        </View>
   
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  squareContainer: {
    width: DEFAULTWIDTH * 0.38,
    marginRight: DEFAULTWIDTH * 0.02,
    alignItems: 'center',
    backgroundColor: PUREWHITE,
    justifyContent: 'center',
    padding:GlobalSize(10),
    borderRadius: GlobalSize(15),
    margin:GlobalSize(2),
    marginLeft:GlobalSize(8)
  },
  detailText: {
    fontFamily: FONTS.FontRegular,
    fontSize: GlobalSize(16),
    color: TEXTCOLORW,
    alignSelf: 'center',
    marginTop: DEFAULTWIDTH * 0.02,
  },
  titleText: {
    fontFamily: FONTS.FontMedium,
    fontSize: fontSize(14),
    color: TEXTCOLOR7,
    textAlign:'center'
    // marginTop: -DEFAULTWIDTH * 0.05
  },
  patientText: {
    fontFamily: FONTS.FontBold,
    color: TEXTCOLOR7,
    fontSize: fontSize(14),
    marginBottom:GlobalSize(10)
  }
});

export default PatientInfo;
