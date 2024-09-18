import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import DEFAULTSTYLES, { DEFAULTHEIGHT, DEFAULTWIDTH } from '../../../../Constants/styles/styles';
import { FONTS } from '../../../../Constants/Fonts';
import { PRIMARYCOLOR, TEXTCOLOR7 } from '../../../../Constants/Colors/Colors';
import Task from './Task';
import { Tree, Walk } from '../../../../../assets';
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts';

const UpcomingTasks = ({ navigation }) => {

  const DUMMYDATA = [
    {
      svg: Walk,
      title: 'Walk',
      description: 'Take betty for a 5 min Walk',
    },
    {
      svg: Tree,
      title: 'Air',
      description: 'Get some fresh Air while walking.',
    },
  ];

  return (
    <View>
      {/* Header */}
      <View style={[DEFAULTSTYLES.subHeaderContainer,{marginLeft:GlobalSize(5)}]}>
        <Text
          style={DEFAULTSTYLES.subHeader}>
          Upcoming Tasks
        </Text>
        
        <TouchableOpacity onPress={()=>navigation.navigate('TaskStack',{screen:'TasksLandingPage'})}>
          <Text
            style={DEFAULTSTYLES.seeAll}>
            see all
          </Text>
        </TouchableOpacity>
      </View>
      {/* Content */}
      <View style={styles.contentContainer}>
        <View style={{marginRight: DEFAULTWIDTH * 0.02}}>
          <Text style={styles.timeText}>7 : 00 AM</Text>
        </View>
        <View style={styles.lineVertical} />
        <View>
          <FlatList
            data={DUMMYDATA}
            renderItem={({ item }) => <Task task={item} />}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </View>
  );
};

const styles = new StyleSheet.create({

  contentContainer: {
    flexDirection: 'row',
    marginTop: DEFAULTHEIGHT * 0.01,
    marginBottom:GlobalSize(10)
  },
  timeText: {
    fontFamily: FONTS.FontRegular,
    fontSize: fontSize(14),
    color: PRIMARYCOLOR,
  },
  lineVertical: {
    height: 'auto',
    width: DEFAULTWIDTH * 0.002,
    marginRight: DEFAULTWIDTH * 0.02,
    backgroundColor: PRIMARYCOLOR,
  },
});

export default UpcomingTasks;
