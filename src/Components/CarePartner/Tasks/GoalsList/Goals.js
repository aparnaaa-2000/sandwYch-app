import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import {
  EIGHTHCOLOR,
  NINETHCOLOR,
  PRIMARYCOLOR,
  PUREWHITE,
  TRANSPARENTCOLOR1,
} from '../../../../Constants/Colors/Colors';
import DEFAULTSTYLES, { DEFAULTHEIGHT, DEFAULTWIDTH } from '../../../../Constants/styles/styles';
import { FONTS } from '../../../../Constants/Fonts';
import GoalsModal from '../Modal/GoalsModal';
import RadioButtonGroup from '../Modal/RadioButtonGroup';
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts';
import { Close } from '../../../../../assets';

const Goals = ({ goal, onGoing }) => {
  const SVG = goal.svg;
  let press = onGoing == 1 ? false : true;

  let badgeColor;

  switch (goal.status) {
    case 'skipped':
      badgeColor = NINETHCOLOR;
      break;
    case 'completed':
      badgeColor = EIGHTHCOLOR;
      break;
    default:
      badgeColor = EIGHTHCOLOR;
  }

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const saveContent = () => {
    setModalVisible(!isModalVisible);
    // write the function to post the status to api here from the data from RadioButton
  };

  const GoalModalHeader = () => (
    <View style={[DEFAULTSTYLES.modalHeader, { marginBottom: GlobalSize(10) }]}>
      <Text style={DEFAULTSTYLES.modalText}>Have you completed the goal?</Text>
      <TouchableOpacity onPress={toggleModal}>
        <Close />
      </TouchableOpacity>
    </View>
  );

  const GoalModalItem = () => (
    <View style={styles.mainContainerModal}>
      {goal.status && (
        <View style={[styles.statusBadge, { backgroundColor: badgeColor }]}>
          <Text style={styles.badgeText}>{goal.status}</Text>
        </View>
      )}
      <View style={styles.svgView}>
        <SVG />
      </View>
      <View style={{ marginHorizontal: DEFAULTWIDTH * 0.02 }}>
        <View style={styles.headerContainerModal}>
          <Text style={styles.headerText}>{goal.title}</Text>
          <View style={styles.assignView}>
            <Text style={styles.assignText}>{goal.assignee}</Text>
          </View>
        </View>
        <Text style={styles.middleContainer}>{goal.description}</Text>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>{goal.from}</Text>
          <Text style={styles.footerText}>{goal.period}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View>
      <TouchableOpacity
        style={styles.mainContainer}
        // disabled={press}
        onPress={toggleModal}>
        {goal.status && (
          <View style={[styles.statusBadge, { backgroundColor: badgeColor }]}>
            <Text style={styles.badgeText}>{goal.status}</Text>
          </View>
        )}
        <View style={styles.svgView}>
          <SVG />
        </View>
        <View style={{ marginHorizontal: DEFAULTWIDTH * 0.02 }}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{goal.title}</Text>
            <View style={styles.assignView}>
              <Text style={styles.assignText}>{goal.assignee}</Text>
            </View>
          </View>
          <Text style={styles.middleContainer}>{goal.description}</Text>
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>{goal.from}</Text>
            <Text style={styles.footerText}>{goal.period}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <GoalsModal isVisible={isModalVisible} onClose={toggleModal}>
        <GoalModalHeader />
        <GoalModalItem />
        <RadioButtonGroup
          onClose={toggleModal}
          onSave={saveContent}
          onGoing={2}
        />
      </GoalsModal>
    </View>
  );
};

const styles = new StyleSheet.create({
  mainContainer: {
    backgroundColor: TRANSPARENTCOLOR1,
    marginBottom: DEFAULTHEIGHT * 0.02,
    marginHorizontal: DEFAULTWIDTH * 0.02,
    borderRadius: GlobalSize(15),
    flexDirection: 'row',
    padding: DEFAULTWIDTH * 0.03,
  },
  mainContainerModal: {
    backgroundColor: TRANSPARENTCOLOR1,
    marginVertical: DEFAULTHEIGHT * 0.015,
    // marginHorizontal: DEFAULTWIDTH * 0.02,
    borderRadius: GlobalSize(15),
    flexDirection: 'row',
    padding: DEFAULTWIDTH * 0.03,
  },
  statusBadge: {
    position: 'absolute',
    zIndex: 99,
    borderTopLeftRadius: GlobalSize(15),
    borderBottomRightRadius: GlobalSize(15),
    paddingHorizontal: DEFAULTWIDTH * 0.02,
    paddingVertical: DEFAULTWIDTH * 0.005,
  },
  badgeText: {
    color: PUREWHITE,
    fontSize: fontSize(12),
    fontFamily: FONTS.FontRegular,
  },
  svgView: {
    backgroundColor: PUREWHITE,
    width: DEFAULTWIDTH * 0.15,
    height: DEFAULTWIDTH * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: GlobalSize(15),
  },
  footerText: {
    color: PUREWHITE,
    fontFamily: FONTS.FontRegular,
    fontSize: fontSize(12)
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: GlobalSize(15)
  },
  middleContainer: {
    color: PUREWHITE,
    fontSize: fontSize(14),
    fontFamily: FONTS.FontLight,
    marginVertical: DEFAULTWIDTH * 0.02,
  },
  assignText: {
    fontSize: fontSize(12),
    color: PRIMARYCOLOR,
    fontFamily: FONTS.FontRegular,
  },
  assignView: {
    paddingHorizontal: DEFAULTWIDTH * 0.02,
    backgroundColor: PUREWHITE,
    borderRadius: GlobalSize(8),
    marginRight: GlobalSize(15)
  },
  headerText: {
    color: PUREWHITE,
    fontSize: fontSize(14),
    fontFamily: FONTS.FontSemiB,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: DEFAULTWIDTH * 0.73,
  },
  headerContainerModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: DEFAULTWIDTH * 0.68,
  },

});

export default Goals;
