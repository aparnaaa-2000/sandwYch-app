import { View, Text, FlatList, StyleSheet, Platform } from 'react-native';
import React from 'react';
import DEFAULTSTYLES, {
  DEFAULTHEIGHT,
  DEFAULTWIDTH,
} from '../../../../Constants/styles/styles';
import { MEDSITEMCOLOR1, PRIMARYCOLOR, PUREWHITE } from '../../../../Constants/Colors/Colors';
import { FONTS } from '../../../../Constants/Fonts';
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts';

const MainStats = () => {
  const DUMMYDATA = [
    {
      name: 'Daily Task',
      totalAvailable: '12',
      totalCompleted: '7',
    },
    {
      name: 'Goals Met',
      totalAvailable: '10',
      totalCompleted: '5',
    },
  ];

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        data={DUMMYDATA}
        renderItem={({ item }) => <TaskHeader data={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

{
  /* Daily Tasks and Goals Met Infromation will be resued as a same component - API Required  */
}
const TaskHeader = ({ data }) => {
  return (

    <View
      style={[
        styles.headerContainer,
        Platform.OS === 'ios'
          ? DEFAULTSTYLES.iosShadow
          : DEFAULTSTYLES.androidShadow,
      ]}>
      <Text style={styles.titleText}>{data.name}</Text>
      <View style={styles.headerSatsItem}>
        <Text style={styles.calcText}>
          {data.totalCompleted}/{data.totalAvailable}
        </Text>
      </View>
    </View>
    
  );
};

const styles = new StyleSheet.create({
  headerContainer: {
    width: DEFAULTWIDTH * 0.42,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PUREWHITE,
    borderRadius: GlobalSize(15),
    margin: DEFAULTWIDTH * 0.01,
    padding:GlobalSize(10),
    marginLeft:GlobalSize(6),
    marginRight:GlobalSize(16)
    
  },
  headerSatsItem: {
    padding: DEFAULTWIDTH * 0.03,
    backgroundColor: MEDSITEMCOLOR1,
    width: DEFAULTWIDTH * 0.36,
    height: DEFAULTWIDTH * 0.24,
    borderRadius: GlobalSize(15),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: DEFAULTHEIGHT * 0.01
  },
  titleText: {
    fontSize: fontSize(20),
    fontFamily: FONTS.FontSemiB,
    color: PRIMARYCOLOR
  },
  calcText: {
    color: PUREWHITE,
    fontSize: fontSize(24),
    fontFamily: FONTS.FontBlack
  },
});

export default MainStats;
