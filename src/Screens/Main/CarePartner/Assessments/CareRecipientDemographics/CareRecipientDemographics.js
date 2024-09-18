import React from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { FOURTHCOLOR, PRIMARYCOLOR, PUREWHITE, THIRDCOLOR } from '../../../../../Constants/Colors/Colors';

import { GlobalSize, fontSize, height, width } from '../../../../../Constants/ResponsiveFont/ResponsiveFonts';
import { FONTS } from '../../../../../Constants/Fonts';
import { DEFAULTWIDTH } from '../../../../../Constants/styles/styles';


const CareRecipientDemographics = ({ navigation }) => {

  const backToEnrollment = () => {
    navigation.navigate('EnrollmentProgress');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={FOURTHCOLOR} barStyle={'light-content'} style={{ flex: 0 }} />
      <View style={styles.imgFlow}>
        <Image
          source={require('../../../../../../assets/Images/CRD.png')}
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Patient</Text>
        <Text style={styles.headingText}>Demographics</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => backToEnrollment()}
          style={styles.buttonStyle}>
          <Text style={styles.textCont}>Save & Exit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Demographics')}>
          <Text style={styles.textCont}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = new StyleSheet.create({
  container: {
    backgroundColor: FOURTHCOLOR,
    flex: 1,
  },
  imageStyle: {
    marginLeft:GlobalSize(60),
    marginRight:GlobalSize(60),
    //width:DEFAULTWIDTH*0.85,
   // height: '83%',
  },
  headingContainer: {
    marginBottom:GlobalSize(20),
    alignItems: 'center',
  },
  headingText: {
    color: PUREWHITE,
    fontSize: fontSize(25),
    fontFamily: 'Inter-Bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: GlobalSize(20),
    alignSelf: 'center',
  },
  buttonStyle: {
    width: width(140),
    height: height(40),
    margin:GlobalSize(12),
    backgroundColor: PUREWHITE,
    borderRadius: GlobalSize(8),
    alignItems:'center',
    justifyContent:'center'
  },
  textCont: {
    color: PRIMARYCOLOR,
    fontSize: fontSize(14),
    fontFamily: FONTS.FontSemiB
  },
  imgFlow:{ 
    alignItems: 'center' ,
    overflow:'hidden',
    borderRadius:GlobalSize(20)
  }
});

export default CareRecipientDemographics;
