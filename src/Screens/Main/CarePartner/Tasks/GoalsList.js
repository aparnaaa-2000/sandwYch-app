import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import TopTab from '../../../../Components/Common/TopTabs/TopTab';
import {WalkPri, WeighingMachinePri} from '../../../../../assets';
import {BACKGROUNDWHITE, MEDSITEMCOLOR2,PRIMARYCOLOR, PUREWHITE} from '../../../../Constants/Colors/Colors';
import {FONTS} from '../../../../Constants/Fonts';
import { DEFAULTWIDTH} from '../../../../Constants/styles/styles';
import Goals from '../../../../Components/CarePartner/Tasks/GoalsList/Goals';
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts';

const DUMMYDATA = {
  goalsInfo: {
    totalGoals: '10',
    noOfCompletedGoals: '5',
  },
  onGoingGoals: [
    {
      title: 'Gain Weight',
      description: 'Increase weight by 5 Kg',
      from: '05/01/2024',
      period: 'For 1 month',
      svg: WeighingMachinePri,
      assignee: 'self',
    },
    {
      title: 'Walk',
      description: 'Increase walking distance by 500m',
      from: '05/01/2024',
      period: 'For 1 month',
      svg: WalkPri,
      assignee: 'physician',
    },
  ],
  upComingGoals: [
    {
      title: 'Gain Weight',
      description: 'Increase weight by 5 Kg',
      from: '05/01/2024',
      period: 'For 1 month',
      svg: WeighingMachinePri,
      status: 'completed',
      assignee: 'self',
    },
    {
      title: 'Walk',
      description: 'Increase walking distance by 500m',
      from: '05/01/2024',
      period: 'For 1 month',
      svg: WalkPri,
      status: 'skipped',
      assignee: 'physician',
    },
  ],
};

const Tab = createMaterialTopTabNavigator();
const GoalsList = ({navigation}) => {
  // Upcoming and Ongoing Tabs will be shown and listed here.
  // Each list will be a button will have a button
  // Previous Goals will only have badges.
  return (
    <View style={{flex: 1, backgroundColor:BACKGROUNDWHITE}}>
      <View style={styles.headerContainer}>
        <View style={styles.titleView}>
          <Text style={styles.headerText}>Goals Met</Text>
        </View>
        <View style={styles.statusView}>
          <Text style={styles.statusText}>
            <Text style={{fontSize: fontSize(50)}}>{DUMMYDATA.goalsInfo.noOfCompletedGoals}</Text>/
            <Text style={{fontSize: fontSize(30)}}>{DUMMYDATA.goalsInfo.totalGoals}</Text>
          </Text>
        </View>
      </View>

      <View style={{flex: 1,backgroundColor:BACKGROUNDWHITE}}>
        <Tab.Navigator tabBar={props => <TopTab {...props} />}>
          <Tab.Screen name="Ongoing" component={OnGoingScreen} />
          <Tab.Screen name="Previous" component={PreviousScreen} />
        </Tab.Navigator>
      </View>
    </View>
  );
};

const OnGoingScreen = () => {
  // Today is identified as 0
  return (
    <View style={{backgroundColor:BACKGROUNDWHITE,flex:1}}>
    <FlatList
      showsVerticalScrollIndicator={false}
      data={DUMMYDATA.onGoingGoals}
      renderItem={({item}) => <Goals goal={item} onGoing={1} />}
      keyExtractor={item => item.id}
    />
    </View>
  );
};

const PreviousScreen = () => {
  // Yesterday is identified as 1
  return (
    <View style={{backgroundColor:BACKGROUNDWHITE,flex:1}}>
    <FlatList
      showsVerticalScrollIndicator={false}
      data={DUMMYDATA.upComingGoals}
      renderItem={({item}) => <Goals goal={item} onGoing={0} />}
      keyExtractor={item => item.id}
    />
    </View>
  );
};

const styles = new StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: DEFAULTWIDTH * 0.9,
    backgroundColor: PUREWHITE,
    borderRadius: GlobalSize(12),
    borderWidth: 0.2,
    borderColor: PRIMARYCOLOR,
  },
  titleView: {
    alignItems: 'center',
    justifyContent: 'center',
    margin:GlobalSize(22),
    marginRight:GlobalSize(5)
  },
  headerText: {
    color: PRIMARYCOLOR, 
    fontSize: fontSize(28), 
    fontFamily: FONTS.FontLight
  },
  statusView: {
    backgroundColor: MEDSITEMCOLOR2,
    width: DEFAULTWIDTH * 0.45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: GlobalSize(12),
  },
  statusText: {
    color: PUREWHITE,
    fontFamily: FONTS.FontSemiB,
    fontSize: fontSize(40),
  },
});

export default GoalsList;
