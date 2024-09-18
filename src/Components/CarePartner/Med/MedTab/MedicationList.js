import { View, Text, StyleSheet, Platform, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import React, { useMemo, useState } from 'react';
import DEFAULTSTYLES, {
  DEFAULTHEIGHT,
  DEFAULTWIDTH,
} from '../../../../Constants/styles/styles';
import { FONTS } from '../../../../Constants/Fonts';
import { Close, Drop } from '../../../../../assets';
import {
  FOURTHCOLOR,
  MEDSITEMCOLOR2,
  PRIMARYCOLOR,
  PUREWHITE,
  SEVENTHCOLOR,
  TRANSPARENTCOLOR1,
} from '../../../../Constants/Colors/Colors';
import MedBottomModal from '../Modal/MedBottomModal';
import RadioButtonGroup from '../Modal/RadioGroup';
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts';

const MedicationList = ({ medication, day, navigation }) => {
  let badgeText, badgeColor, press;

  // In Switch case checking the stats to update the badge on top.
  // Additionally checking the day Today = 0, Yesterday = 1
  // badgeText - identifies the text which is shown in badge
  // badgecolor - indicates the color shown to badge
  // press - true - indicates the badge is disabled
  // press - false - indicates the badge can be pressed
  switch (medication.stats) {
    case 'upcoming':
      badgeText = 'Done?';
      (badgeColor = MEDSITEMCOLOR2), (press = false);
      break;
    case 'pending':
      badgeText = day == 1 ? 'Skipped' : 'Pending';
      badgeColor = FOURTHCOLOR;
      press = day == 1 ? true : false;
      break;
    case 'completed':
      badgeText = 'Done';
      badgeColor = SEVENTHCOLOR;
      press = true;
      break;
    default:
      badgeText = 'Done?';
  }

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const saveContent = () => {
    setModalVisible(!isModalVisible);
    // write the function to post the status to api here from the data from RadioButton
  };

  return (

    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <View style={[styles.headerItems, DEFAULTSTYLES.medMarginLeft]}>
          <Text style={styles.diagnosisText}>{medication.diagnosis}</Text>
        </View>

        {/* Button / Marking */}
        <TouchableOpacity
          disabled={press}
          onPress={toggleModal}
          style={[
            styles.buttonView,
            { backgroundColor: badgeColor },
            Platform.OS === 'ios'
              ? DEFAULTSTYLES.iosShadow
              : DEFAULTSTYLES.androidShadow,
          ]}>
          <Text
            style={[
              styles.textColor,
              { fontFamily: FONTS.FontSemiB, fontSize: fontSize(12) },
            ]}>
            {badgeText}
          </Text>
        </TouchableOpacity>
      </View>

      {/* From here navigate to the Medication Details Page */}
      <TouchableOpacity
        style={styles.infoView}
        onPress={() => navigation.navigate('MedStack', { screen: 'MedDetails' })}>
        {/* Icon */}
        <View style={styles.iconView}>
          <Drop width={55} height={55} />
        </View>
        {/* Informations */}
        <View style={{ paddingBottom: GlobalSize(10) }}>
          <View style={styles.informationView}>
            <Text style={styles.titleText}>{medication.nameOfMedicine}</Text>
            <Text style={[styles.textColor, { fontFamily: FONTS.FontLight, width: GlobalSize(210) }]}>
              {medication.description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <MedBottomModal isVisible={isModalVisible} onClose={toggleModal}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalText}>
            Have you completed the medication?
          </Text>
          <TouchableOpacity onPress={toggleModal}>
            <Close />
          </TouchableOpacity>
        </View>
        <View style={styles.modalSubHeader}>
          <Text style={styles.titleText}>{medication.nameOfMedicine}</Text>
          <Text style={[styles.textColor, { fontFamily: FONTS.FontLight }]}>
            {medication.description}
          </Text>
        </View>

        <RadioButtonGroup onClose={toggleModal} onSave={saveContent} />
      </MedBottomModal>
    </View>
  );
};

const styles = new StyleSheet.create({
  mainContainer: {
    width: DEFAULTWIDTH * 0.79,
    marginBottom: DEFAULTHEIGHT * 0.009,
    borderRadius: GlobalSize(15),
    backgroundColor: TRANSPARENTCOLOR1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: MEDSITEMCOLOR2,
    borderTopLeftRadius: GlobalSize(15),
    borderTopRightRadius: GlobalSize(15),
    alignItems: 'center',
  },
  iconView: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textColor: {
    color: PUREWHITE,
  },
  buttonView: {
    width: DEFAULTWIDTH * 0.19,
    borderBottomLeftRadius: GlobalSize(15),
    borderTopRightRadius: GlobalSize(15),
    borderLeftWidth: 0.5,
    borderColor: PUREWHITE,
    height: DEFAULTHEIGHT * 0.04,
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
    flex: 0.8,
    marginTop: GlobalSize(15)
  },
  titleText: {
    fontFamily: FONTS.FontSemiB,
    fontSize: fontSize(16),
    color: PUREWHITE
  },
  diagnosisText: {
    fontFamily: FONTS.FontRegular,
    fontSize: fontSize(12),
    color: PUREWHITE,
  },
  closeModalView: {
    backgroundColor: PRIMARYCOLOR,
    width: DEFAULTWIDTH * 0.06,
    height: DEFAULTWIDTH * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: GlobalSize(15),
  },
  closeText: {
    color: PUREWHITE,
    fontFamily: FONTS.FontBold
  },
  modalText: {
    fontFamily: FONTS.FontSemiB,
    color: PRIMARYCOLOR,
    fontSize: fontSize(15),
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalSubHeader: {
    alignItems: 'center',
    backgroundColor: TRANSPARENTCOLOR1,
    marginVertical: DEFAULTHEIGHT * 0.016,
    paddingVertical: DEFAULTHEIGHT * 0.01,
    marginBottom: GlobalSize(15)
  },
});

export default MedicationList;
