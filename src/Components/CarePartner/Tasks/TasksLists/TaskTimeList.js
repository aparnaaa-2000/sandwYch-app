import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {DEFAULTHEIGHT, DEFAULTWIDTH} from '../../../../Constants/styles/styles';
import {FONTS} from '../../../../Constants/Fonts';
import {PRIMARYCOLOR} from '../../../../Constants/Colors/Colors';
import SeperateTask from './SeperateTask';
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts';

const TaskTimeList = ({time, day}) => {
  return (
    <View style={styles.contentContainer}>
      <View style={{marginRight: DEFAULTWIDTH * 0.05}}>
        <Text style={styles.timeText}>{time.time}</Text>
      </View>
      <View style={styles.lineVertical} />
      <View>
        {/* List of medicines at particular time*/}
        {/* <FlatList
          scrollEnabled={false}
          data={time.taskOfTheTime}
          renderItem={({item}) => <SeperateTask task={item} day={day}/>}
          keyExtractor={item => item.id}
        /> */}

        {time.taskOfTheTime.map((item)=>{
          return(
            <View key={item.id}>
              <SeperateTask task={item} day={day}/>
              </View>
          )
        })}
      </View>
    </View>
  );
};
const styles = new StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    marginTop: DEFAULTHEIGHT * 0.0,
    marginHorizontal: DEFAULTWIDTH * 0.02,
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

export default TaskTimeList;
