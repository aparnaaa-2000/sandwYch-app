import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import Medication from '../../Common/Meds/Medication';
import DEFAULTSTYLES, { DEFAULTHEIGHT, DEFAULTWIDTH } from '../../../../Constants/styles/styles';
import { FONTS } from '../../../../Constants/Fonts';
import { PRIMARYCOLOR } from '../../../../Constants/Colors/Colors';
import { fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts';

const NextMedication = ({ navigation }) => {
  
  const DUMMYDATA = [
    {
      svgtype: 'pill',
      diagnosis: 'Alzhimers',
      tablet: 'Galantamine Tablet',
      desc: '100mg - Twice day - After meals',
    },
    {
      svgtype: 'drop',
      diagnosis: 'Irritated eyes',
      tablet: 'Systane Complete PF',
      desc: '2 Drops - Twice day',
    },
  ];

  return (
    <View>
      {/* Header */}
      <View style={DEFAULTSTYLES.subHeaderContainer}>
        <Text
          style={DEFAULTSTYLES.subHeader}>
          Next Medication
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('MedStack', { screen: 'MedsTabScreen' })}
        >
          <Text
            style={DEFAULTSTYLES.seeAll}>
            see all
          </Text>
        </TouchableOpacity>
      </View>
      {/* Content */}
      <View style={styles.contentContainer}>
        <View style={{ marginRight: DEFAULTWIDTH * 0.02 }}>
          <Text style={styles.timeText}>12 : 00 AM</Text>
        </View>
        <View style={styles.lineVertical} />
        <View>
          <FlatList
            data={DUMMYDATA}
            renderItem={({ item }) => <Medication medication={item} />}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </View>
  );
};

const styles = new StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  contentContainer: {
    flexDirection: 'row',
    marginTop: DEFAULTHEIGHT * 0.01
  },
  timeText: {
    fontFamily: FONTS.FontRegular,
    fontSize: fontSize(12),
    color: PRIMARYCOLOR,
  },
  lineVertical: {
    height: 'auto',
    width: DEFAULTWIDTH * 0.002,
    marginRight: DEFAULTWIDTH * 0.02,
    backgroundColor: PRIMARYCOLOR,
  },
});

export default NextMedication;
