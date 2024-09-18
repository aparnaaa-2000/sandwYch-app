import { View, Text, ScrollView } from 'react-native';
import React,{useState,useEffect} from 'react';
import MainHeader from '../../../../Components/Common/Headers/MainHeader';
import DashboardHeader from '../../../../Components/Common/Headers/DashboardHeader';
import { BACKGROUNDWHITE } from '../../../../Constants/Colors/Colors';
import DEFAULTSTYLES, {
  DEFAULTHEIGHT,
} from '../../../../Constants/styles/styles';
import MainStats from '../../../../Components/CarePartner/Tasks/Dashboard/MainStats';
import UpcomingTasks from '../../../../Components/CarePartner/Tasks/Dashboard/UpcomingTasks';
import OnGoingGoals from '../../../../Components/CarePartner/Tasks/Dashboard/OnGoingGoals';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomSidebarMenu from '../../../../Components/CarePartner/SideMenu/CustomSideMenuBar';



const Drawer = createDrawerNavigator();


const TaskDashboard = () => (
  <Drawer.Navigator
    screenOptions={{ headerShown: false }}
    drawerContent={props => <CustomSidebarMenu {...props} />}>
    <Drawer.Screen name="TaskDashboardScreen" component={TaskDashboardScreen} />
  </Drawer.Navigator>
);

const TaskDashboardScreen = ({ navigation }) => {

  const [UserType, setUserType] = useState(null)

  useEffect(() => {
    getItemFromAsyncStorage()
  }, [])

  // Assume you want to get an item with the key 'exampleKey'
  const getItemFromAsyncStorage = async () => {
    try {
      // Use AsyncStorage.getItem() to retrieve the value associated with the key
      const storedValue = await AsyncStorage.getItem('UserType');
      console.log("user type....................", storedValue)
      if (storedValue !== null) {
        setUserType(storedValue)
      } else {
        // Key does not exist in AsyncStorage
        console.log('Key does not exist in AsyncStorage');
      }
    } catch (error) {

    }
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: BACKGROUNDWHITE,
        paddingBottom: 50,
      }}
      showsVerticalScrollIndicator={false}>
      <View style={{ backgroundColor: BACKGROUNDWHITE, }}>
        <View style={{ margin: 10,marginBottom:0 }}>
          <DashboardHeader navigation={navigation} />

          <View style={DEFAULTSTYLES.lineBorder} />

          {UserType == 'CarePartner' &&
          <MainHeader navigation={navigation} />}

          <MainStats />

          <UpcomingTasks navigation={navigation} />
        </View>
        <OnGoingGoals navigation={navigation} />
      </View>
    </ScrollView>
  );
};

export default TaskDashboard;
