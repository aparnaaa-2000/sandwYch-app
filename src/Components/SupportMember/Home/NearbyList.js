import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';
import {DEFAULTWIDTH} from '../../../Constants/styles/styles';
import {
  PUREWHITE,
  TEXTCOLOR10,
  TEXTCOLOR13,
} from '../../../Constants/Colors/Colors';
import {Maps} from '../../../../assets';
import {FONTS} from '../../../Constants/Fonts';

const NearbyList = () => {
  return (
    <Card style={styles.mainContainer}>
      {/* Header */}
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.personName}>Sunny Wayne</Text>
          <Text style={styles.personRole}>care partner</Text>
        </View>
        <TouchableOpacity>
          <Maps />
        </TouchableOpacity>
      </View>
    </Card>
  );
};

const styles = new StyleSheet.create({
  mainContainer: {
    width: DEFAULTWIDTH * 0.7,
    backgroundColor: PUREWHITE,
    height: 150,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: DEFAULTWIDTH * 0.02,
  },
  personName: {
    fontSize: 12,
    fontFamily: FONTS.FontRegular,
    color: TEXTCOLOR10,
  },
  personRole: {
    fontSize: 10,
    fontFamily: FONTS.FontMedium,
    color: TEXTCOLOR13,
  },
});

export default NearbyList;
