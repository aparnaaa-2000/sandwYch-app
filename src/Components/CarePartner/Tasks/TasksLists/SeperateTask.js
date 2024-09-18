import { View, Text, TouchableOpacity, Platform, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import DEFAULTSTYLES, {
  DEFAULTHEIGHT,
  DEFAULTWIDTH,
} from '../../../../Constants/styles/styles';
import {
  FOURTHCOLOR,
  MEDSITEMCOLOR1,
  MEDSITEMCOLOR2,
  MEDSITEMCOLOR3,
  PRIMARYCOLOR,
  PUREWHITE,
  SEVENTHCOLOR,
} from '../../../../Constants/Colors/Colors';
import { FONTS } from '../../../../Constants/Fonts';
import GoalsModal from '../Modal/GoalsModal';
import RadioButtonGroup from '../Modal/RadioButtonGroup';
import { GlobalSize, width } from '../../../../Constants/ResponsiveFont/ResponsiveFonts';
import { Close } from '../../../../../assets';


const SeperateTask = ({ task, day }) => {
  const [textValue, setTextValue] = useState('')
  const SVG = task.SVG;

  let badgeText, badgeColor, press;

  // In Switch case checking the stats to update the badge on top.
  // Additionally checking the day Today = 0, Yesterday = 1
  // badgeText - identifies the text which is shown in badge
  // badgecolor - indicates the color shown to badge
  // press - true - indicates the badge is disabled
  // press - false - indicates the badge can be pressed
  switch (task.status) {
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

  const TaskModalHeader = () => (
    <View style={[DEFAULTSTYLES.modalHeader, { marginBottom: GlobalSize(10) }]}>
      <Text style={DEFAULTSTYLES.modalText}>Have you completed the task?</Text>
      <TouchableOpacity onPress={toggleModal}>
        <Close />
      </TouchableOpacity>
    </View>
  );

  const TaskModalItem = () => (
    <View style={styles.modalmainContainer}>
      <View style={styles.iconContainer}>
        <SVG width={GlobalSize(30)} height={GlobalSize(30)} />
      </View>
      <View style={{ width: DEFAULTWIDTH * 0.6 }}>
        <Text style={styles.titleText}>{task.title}</Text>
        <Text style={styles.descText}>{task.description}</Text>
      </View>
    </View>
  );

  return (
    <View
      style={[
        styles.mainContainer,
        Platform.OS === 'ios'
          ? DEFAULTSTYLES.iosShadow
          : DEFAULTSTYLES.androidShadow,
      ]}>
      <View style={styles.iconContainer}>
        <SVG width={GlobalSize(30)} height={GlobalSize(30)} />
      </View>
      <View style={{ width: DEFAULTWIDTH * 0.53 }}>
        <TouchableOpacity
          disabled={press}
          onPress={toggleModal}
          style={[styles.doneButton, { backgroundColor: badgeColor }]}>
          <Text style={styles.doneText}>{badgeText}</Text>
        </TouchableOpacity>
        <Text style={styles.titleText}>{task.title}</Text>
        <Text style={styles.descText}>{task.description}</Text>
      </View>
      {/* Reusing the component from the goals the child of each component is written seperately */}
      <GoalsModal isVisible={isModalVisible} onClose={toggleModal}>
        <TaskModalHeader />
        <TaskModalItem />

        <RadioButtonGroup
          onClose={toggleModal}
          onSave={saveContent}
          onGoing={1}
        />
      </GoalsModal>
    </View>
  );
};

const styles = new StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    //height: DEFAULTHEIGHT * 0.14,
    marginBottom: DEFAULTHEIGHT * 0.012,
    backgroundColor: PUREWHITE,
    borderRadius: GlobalSize(25),
    width: DEFAULTWIDTH * 0.7,
    paddingBottom: GlobalSize(10)
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
    marginRight: GlobalSize(18)
  },
  doneText: {
    fontSize: GlobalSize(10),
    fontFamily: FONTS.FontSemiB,
    color: PUREWHITE,
  },
  titleText: {
    fontFamily: FONTS.FontBold,
    fontSize: GlobalSize(14),
    color: PRIMARYCOLOR,
  },
  descText: {
    fontFamily: FONTS.FontLight,
    fontSize: GlobalSize(12),
    color: PRIMARYCOLOR,
    maxWidth: width(150)
  },
  modalmainContainer: {
    flexDirection: 'row',
    //height: DEFAULTHEIGHT * 0.14,
    marginVertical: DEFAULTHEIGHT * 0.012,
    backgroundColor: PUREWHITE,
    borderRadius: GlobalSize(25),
    width: DEFAULTWIDTH * 0.9,
    borderWidth: 0.2,
    borderColor: PRIMARYCOLOR,
    padding: GlobalSize(8),
    alignItems: 'center'

  },
});

export default SeperateTask;
