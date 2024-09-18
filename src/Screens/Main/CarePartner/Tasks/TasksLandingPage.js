import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import DefaultBackHeader from '../../../../Components/Common/Headers/DefaultBackHeader';
import {NavigationContainer} from '@react-navigation/native';
import TasksList from './TasksList';
import GoalsList from './GoalsList';
import RounderTopTab from '../../../../Components/Common/TopTabs/RounderTopTab';
import { AddIcon, PlusWhite } from '../../../../../assets';
import { BACKGROUNDWHITE, FOURTHCOLOR } from '../../../../Constants/Colors/Colors';
import { GlobalSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts';
import { DEFAULTWIDTH } from '../../../../Constants/styles/styles';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();
const TasksLandingPage = ({navigation,route}) => {
  const currentTab = getFocusedRouteNameFromRoute(route);
  console.log("current tab...................",currentTab)
  // Today and Yesterday Tabs will be shown and listed here.
  // Today Medication will have a button
  // Yesterday Medication will only have badges.

  const screenNavigation = ()=>{
    if(currentTab == 'Tasks'){
      navigation.navigate('CreateTask')
    }else{
      navigation.navigate('CreateGoals')
    }
  }
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:BACKGROUNDWHITE}}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <DefaultBackHeader navigation={navigation} />

      <TouchableOpacity 
      onPress={() => screenNavigation()} 
      style={styles.buttonAdd}>
            <PlusWhite width={GlobalSize(25)} height={GlobalSize(25)} />
          </TouchableOpacity>
          </View>
      {/* You might need to remove the navigation container from here */}
      <View style={{flex: 1,backgroundColor:BACKGROUNDWHITE}}>

          <Tab.Navigator tabBar={props => <RounderTopTab {...props} />}>
            <Tab.Screen name="Tasks" component={TasksList} />
            <Tab.Screen name="Goals" component={GoalsList} />
          </Tab.Navigator>
  
      </View>
    </SafeAreaView>
  );
};
const styles = new StyleSheet.create({
  buttonAdd: {
    backgroundColor: FOURTHCOLOR,
    borderRadius: GlobalSize(15),
    width: DEFAULTWIDTH * 0.07,
    height: DEFAULTWIDTH * 0.07,
    alignItems: 'center',
    justifyContent: 'center',
    margin:GlobalSize(20)
  },
});

export default TasksLandingPage;
