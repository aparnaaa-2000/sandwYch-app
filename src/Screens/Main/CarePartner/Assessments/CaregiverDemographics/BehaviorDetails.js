import React, { useState } from 'react';
import { Text, View, StyleSheet, StatusBar, SafeAreaView } from 'react-native';

//COLORS IMPORTED GLOBALLY
import {
  BACKGROUNDWHITE,
  BORDERCOLOR1,
  BORDERCOLOR4,
  BOTTOMTABTEXT1,
  LINECOLOR1,
  TEXTCOLOR10,
  TEXTCOLOR7,
  TEXTCOLOR8
} from '../../../../../Constants/Colors/Colors';

import { FONTS } from '../../../../../Constants/Fonts';
import DEFAULTSTYLES, { DEFAULTWIDTH } from '../../../../../Constants/styles/styles';

import { Dropdown } from 'react-native-element-dropdown';
import { Button } from 'react-native-paper';
import { GlobalSize, fontSize } from '../../../../../Constants/ResponsiveFont/ResponsiveFonts';


const BehaviorDetails = ({ navigation }) => {

  //To open ADL 1
  const [valueADL, setValueADL] = useState('');
  const [ADL, setADL] = useState([
    { label: 'No assistance needed - Care recipient is independent or does not have needs in this area', value: 'No assistance needed - Care recipient is independent or does not have needs in this area' },
    { label: 'Assistance needed', value: 'Assistance needed' },
  ]);


  //To open ADL 2
  const [valueMed, setValueMed] = useState('');
  const [Med, setMed] = useState([
    { label: 'Caregiver needs training/supportive services to provide assistance', value: 'Caregiver needs training/supportive services to provide assistance' },
    { label: 'Caregiver does not need any services', value: 'Caregiver does not need any services' },
  ]);

  //To open ADL 3
  const [valueMedT, setValueMedT] = useState('');
  const [MedT, setMedT] = useState([
    { label: 'Caregiver cannot/does not want to provide assistance', value: 'Caregiver cannot/does not want to provide assistance' },
    { label: 'Caregiver does not need any services', value: 'Caregiver does not need any services' },
  ]);

  //To open ADL 4
  const [valueSS, setValueSS] = useState('');
  const [MedSS, setMedSS] = useState([
    { label: 'Assistance needed by an agency Caregiver', value: 'Assistance needed by an agency Caregiver' },
    { label: 'Does not need any assistance', value: 'Does not need any assistance' },
  ]);

  const NextNavigation = () => { // Navigate to Next page after selecting the options
    if (valueADL && valueMed && valueMedT && valueSS) {
      navigation.navigate('CareRecipientDemographics');
    } else {
      console.log("")
    }
  }

  const backToHC = () => {
    navigation.goBack();
  };

  const backToEnrollment = () => {
    navigation.navigate('EnrollmentProgress');
  };


  return (
    <SafeAreaView style={{ backgroundColor: BACKGROUNDWHITE, flex: 1 }}>
      <StatusBar backgroundColor={BACKGROUNDWHITE} barStyle={'dark-content'} style={{ flex: 0 }} />

      <View style={DEFAULTSTYLES.margin}>
        <Text style={styles.mainHeader}>Behavior Details</Text>
      </View>

      <View style={styles.container}>

        <View>
          <Text style={styles.subHeader}>ADLs/IADLs Assistance</Text>
          <Dropdown
            style={styles.textIn}
            placeholderStyle={styles.placeholderS}
            itemTextStyle={styles.textArea}
            selectedTextStyle={styles.textArea}
            containerStyle={styles.dropView}
            data={ADL}
            search={false}
            labelField="label"
            valueField="value"
            placeholder={'Select'}
            value={valueADL}
            showsVerticalScrollIndicator={false}
            onChange={item => {
              setValueADL(item.value);
            }}
          />
        </View>

        <View style={{ marginTop: GlobalSize(5) }} >
          <Text style={styles.subHeader}>Medication Assistance</Text>

          <Dropdown
            style={styles.textIn}
            placeholderStyle={styles.placeholderS}
            itemTextStyle={styles.textArea}
            selectedTextStyle={styles.textArea}
            containerStyle={styles.dropView}
            data={Med}
            search={false}
            labelField="label"
            valueField="value"
            placeholder={'Select'}
            value={valueMed}
            showsVerticalScrollIndicator={false}
            onChange={item => {
              setValueMed(item.value);
            }}

          />
        </View>

        <View style={{ marginTop: GlobalSize(5) }}>
          <Text style={styles.subHeader}>Medical Procedure/Treatments</Text>
          <Dropdown
            style={styles.textIn}
            placeholderStyle={styles.placeholderS}
            itemTextStyle={styles.textArea}
            selectedTextStyle={styles.textArea}
            containerStyle={styles.dropView}
            data={MedT}
            search={false}
            labelField="label"
            valueField="value"
            placeholder={'Select'}
            value={valueMedT}
            showsVerticalScrollIndicator={false}
            onChange={item => {
              setValueMedT(item.value);
            }}

          />
        </View>

        <View style={{ marginTop: GlobalSize(5) }}>
          <Text style={styles.subHeader}>Supervision and Safety</Text>
          <Dropdown
            style={styles.textIn}
            placeholderStyle={styles.placeholderS}
            itemTextStyle={styles.textArea}
            selectedTextStyle={styles.textArea}
            iconStyle={styles.iconStyle}
            data={MedSS}
            containerStyle={styles.dropView}
            search={false}
            labelField="label"
            valueField="value"
            placeholder={'Select'}
            showsVerticalScrollIndicator={false}
            value={valueSS}
            onChange={item => {
              setValueSS(item.value);
            }}

          />
        </View>

        <View style={styles.buttonPost}>
          <View
            style={styles.viewButton}>
            <Button
              onPress={() => backToHC()}
              style={styles.buttonStyle}>
              <Text style={styles.buttonText}>Back</Text>
            </Button>

            <Button
              onPress={() => backToEnrollment()}
              style={styles.buttonStyle}>
              <Text style={styles.buttonText}>Save & Exit</Text>
            </Button>

            <Button
              onPress={() => NextNavigation()}
              style={[styles.buttonStyle, { borderColor: valueADL && valueMed && valueMedT && valueSS ? BORDERCOLOR4 : LINECOLOR1 }]}>
              <Text style={[styles.buttonText, { color: valueADL && valueMed && valueMedT && valueSS ? TEXTCOLOR7 : LINECOLOR1 }]}>Next</Text>
            </Button>
          </View>
        </View>

      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUNDWHITE,
    alignItems: 'center'
  },
  mainHeader: {
    fontFamily: 'Inter-Bold',
    fontSize: fontSize(26),
    color: TEXTCOLOR8,
  },
  dropView: {
    borderRadius: GlobalSize(8),
    borderColor: BORDERCOLOR4,
    width: DEFAULTWIDTH * 0.90,
    padding: GlobalSize(5)
  },
  subHeader: {
    marginTop: GlobalSize(8),
    marginBottom: GlobalSize(8),
    color: TEXTCOLOR7,
    fontSize: fontSize(14),
    fontFamily: 'Inter-Medium',
  },
  placeholderS: {
    fontSize: fontSize(14),
    fontFamily: FONTS.FontRegular,
    color: BOTTOMTABTEXT1
  },
  textIn: {
    backgroundColor: BACKGROUNDWHITE,
    width: DEFAULTWIDTH * 0.90,
    borderWidth: 1,
    height: GlobalSize(65),
    borderRadius: GlobalSize(8),
    borderColor: BORDERCOLOR1,
    paddingLeft: GlobalSize(15),
    padding: GlobalSize(5),
  },
  textArea: {
    fontSize: fontSize(13),
    fontFamily: FONTS.FontRegular,
    fontWeight: '400',
    color: TEXTCOLOR10,
  },
  buttonText: {
    color: TEXTCOLOR7,
    fontFamily: 'Inter-Medium',
    fontSize: fontSize(14),
  },
  buttonStyle: {
    borderRadius: GlobalSize(8),
    borderWidth: 1,
    margin: GlobalSize(5),
    borderColor: BORDERCOLOR4,
    width: DEFAULTWIDTH * 0.29,
  },
  buttonPost: {
    position: 'absolute',
    bottom: GlobalSize(20),
    alignItems: 'center'
  },
  viewButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
})
export default BehaviorDetails;



