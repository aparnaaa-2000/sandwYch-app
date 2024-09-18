import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {DEFAULTHEIGHT, DEFAULTWIDTH} from '../../../Constants/styles/styles';
import {FONTS} from '../../../Constants/Fonts';
import {
  TEXTCOLOR10,
  TEXTCOLOR11,
} from '../../../Constants/Colors/Colors';
import NearbyList from './NearbyList';

const NearbySupportRequired = () => {
  return (
    <View style={styles.mainConainter}>
      <View style={styles.headerRow}>
        <Text style={styles.commonHeaderText}>
          <Text style={{fontFamily: FONTS.FontBold}}>Near By </Text>
          <Text style={{fontFamily: FONTS.FontRegular}}>Support Required</Text>
        </Text>
        <TouchableOpacity>
          <Text style={styles.subHeaderText}>see all</Text>
        </TouchableOpacity>
      </View>

      <NearbyList />

    </View>
  );
};

const styles = new StyleSheet.create({
  mainConainter: {
    marginVertical: DEFAULTHEIGHT * 0.01,
    marginHorizontal: DEFAULTWIDTH * 0.02,
  },
  commonHeaderText: {flexDirection: 'row', fontSize: 16, color: TEXTCOLOR10},
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subHeaderText: {
    fontFamily: FONTS.FontMedium,
    fontSize: 12,
    color: TEXTCOLOR11,
  },
});

export default NearbySupportRequired;
