import {View, Text, Image, SafeAreaView, StyleSheet,StatusBar, TouchableOpacity} from 'react-native';
import React from 'react';
import {PRIMARYCOLOR, PUREWHITE} from '../../../../../Constants/Colors/Colors';
import {Button} from 'react-native-paper';
import { GlobalSize, fontSize, height, width } from '../../../../../Constants/ResponsiveFont/ResponsiveFonts';
import { FONTS } from '../../../../../Constants/Fonts';

const HealthChallengesMainScreen = ({navigation}) => {
  const backToEnrollment = () => {
    navigation.navigate('EnrollmentProgress');
  };
  const navigateToHCForm = () => {
    navigation.navigate('HealthChallengesForm');
  };
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={PRIMARYCOLOR} barStyle={'light-content'} style={{ flex: 0 }} />
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../../../../../../assets/Images/HC.png')}
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Caregiving style</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => backToEnrollment()} style={styles.buttonStyle}>
          <Text style={styles.textCont}>Save & Exit</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToHCForm()} style={styles.buttonStyle}>
          <Text style={styles.textCont}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = new StyleSheet.create({
  container: {
    backgroundColor: PRIMARYCOLOR,
    flex: 1,
  },
  imageStyle: {
    width: '92%',
    //height: '83%',
  },
  headingContainer: {
    //marginTop: -120,
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
  }
});

export default HealthChallengesMainScreen;
