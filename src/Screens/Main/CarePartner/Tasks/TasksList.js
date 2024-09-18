import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {FlatList, Text, View} from 'react-native';
import TopTab from '../../../../Components/Common/TopTabs/TopTab';
import {NavigationContainer} from '@react-navigation/native';
import {Tree, Walk} from '../../../../../assets';
import TaskListOverview from '../../../../Components/CarePartner/Tasks/TasksLists/TaskListOverview';
import TaskTimeList from '../../../../Components/CarePartner/Tasks/TasksLists/TaskTimeList';
import { PRIMARYCOLOR, PUREWHITE } from '../../../../Constants/Colors/Colors';

const DUMMYDATA = {
  taskiInfo: {
    totalTasks: '12',
    noOfCompletedTasks: '7',
  },
  tasksListDatatoday: [
    {
      time: '8:00 AM',
      taskOfTheTime: [
        {
          id:1,
          title: 'Walk',
          description: 'Take betty for a 5 min walk',
          status: 'completed',
          SVG: Walk,
        },
        {
          id:2,
          title: 'Air',
          description: 'Get some fresh Air while walking',
          status: 'pending',
          SVG: Tree,
        },
      ],
    },
    {
      time: '2:00 PM',
      taskOfTheTime: [
        {
          id:1,
          title: 'Walk',
          description: 'Take betty for a 5 min walk after Lunch',
          status: 'upcoming',
          SVG: Walk,
        },
      ],
    },
    {
      time: '5:00 PM',
      taskOfTheTime: [
        {
          id:1,
          title: 'Walk',
          description: 'Take betty for a 5 min walk',
          status: 'upcoming',
          SVG: Walk,
        },
        {
          id:2,
          title: 'Air',
          description: 'Get some fresh Air while walking',
          status: 'upcoming',
          SVG: Tree,
        },
      ],
    },
  ],
  tasksListDataYesterday: [
    {
      time: '8:00 AM',
      taskOfTheTime: [
        {
          id:1,
          title: 'Walk',
          description: 'Take betty for a 5 min walk',
          status: 'completed',
          SVG: Walk,
        },
        {
          id:2,
          type: 'Air',
          description: 'Get some fresh Air while walking',
          status: 'completed',
          SVG: Tree,
        },
      ],
    },
    {
      time: '2:00 PM',
      taskOfTheTime: [
        {
          id:1,
          title: 'Walk',
          description: 'Take betty for a 5 min walk after Lunch',
          status: 'completed',
          SVG: Walk,
        },
      ],
    },
    {
      time: '5:00 PM',
      taskOfTheTime: [
        {
          id:1,
          title: 'Walk',
          description: 'Take betty for a 5 min walk',
          status: 'pending',
          SVG: Walk,
        },
        {
          id:2,
          title: 'Air',
          description: 'Get some fresh Air while walking',
          status: 'completed',
          SVG: Tree,
        },
      ],
    },
  ],
};

const Tab = createMaterialTopTabNavigator();
const TasksList = ({navigation}) => {
  // Today and Yesterday Tabs will be shown and listed here.
  // Today Task will have a button
  // Yesterday Tasks will only have badges.
  return (
    <View style={{flex: 1, backgroundColor: PUREWHITE}}>
      <TaskListOverview info={DUMMYDATA.taskiInfo} />
      <View style={{flex: 1}}>
        <Tab.Navigator tabBar={props => <TopTab {...props} />}>
          <Tab.Screen name="Today" component={TodayScreen} />
          <Tab.Screen name="Yesterday" component={YesterdayScreen} />
        </Tab.Navigator>
      </View>
    </View>
  );
};

const TodayScreen = ({navigation}) => {
  // Today is identified as 0
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps='always'
      style={{backgroundColor: PUREWHITE}}
      data={DUMMYDATA.tasksListDatatoday}
      renderItem={({item}) => <TaskTimeList time={item} day={0} navigation={navigation}/>}
      keyExtractor={item => item.id}
    />
  );
};

const YesterdayScreen = ({navigation}) => {
  // Yesterday is identified as 1
  return (
    
    <FlatList
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: PUREWHITE}}
      keyboardShouldPersistTaps='always'
      data={DUMMYDATA.tasksListDataYesterday}
      renderItem={({item}) => <TaskTimeList time={item} day={1} navigation={navigation} />}
      keyExtractor={item => item.id}
    />
  );
};

export default TasksList;
