import { ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import DashboardHeader from '../../../../Components/Common/Headers/DashboardHeader';
import MainHeader from '../../../../Components/Common/Headers/MainHeader';
import AssessmentProgress from '../../../../Components/CarePartner/Home/AssessmentProgress';
import WeeklyMood from '../../../../Components/CarePartner/Home/WeeklyMood';
import DailyGoals from '../../../../Components/CarePartner/Home/DailyGoals';
import UpcomingMeds from '../../../../Components/CarePartner/Home/UpcomingMeds';
import RxComponent from '../../../../Components/CarePartner/Home/RxComponent';
import CaregivingResources from '../../../../Components/CarePartner/Home/CaregivingResources';
import { BACKGROUNDWHITE, LINECOLOR1, PRIMARYCOLOR } from '../../../../Constants/Colors/Colors';
import { SwitchProfile } from '../../../../../assets';
import DEFAULTSTYLES, { DEFAULTWIDTH } from '../../../../Constants/styles/styles';
import FromCommunity from '../../../../Components/CarePartner/Home/FromCommunity';
import ResourceFilterModal from '../../../../Components/CarePartner/Resources/ResourceFilterModal';
import CustomSidebarMenu from '../../../../Components/CarePartner/SideMenu/CustomSideMenuBar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NextMedication from '../../../../Components/CarePartner/Med/Landing/NextMedication';
import UpcomingTasks from '../../../../Components/CarePartner/Tasks/Dashboard/UpcomingTasks';
import { GlobalSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Drawer = createDrawerNavigator();

const MainScreen = () => (
  <Drawer.Navigator
    screenOptions={{ headerShown: false }}
    drawerContent={props => <CustomSidebarMenu {...props} />}
  >

    <Drawer.Screen name="HomeScreen" component={MainScreenView} />
  </Drawer.Navigator>
);


const MainScreenView = ({ navigation }) => {

  const [ModalOpen, setModalOpen] = useState(false)
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
    <>
      <ScrollView
        style={{ flex: 1, backgroundColor: BACKGROUNDWHITE }}
        showsVerticalScrollIndicator={false}>
        <View style={{ backgroundColor: BACKGROUNDWHITE, margin: GlobalSize(10) }}>
          <DashboardHeader navigation={navigation} />

          <View style={styles.lineBorder} />
          
          {UserType == 'CarePartner' &&
            <MainHeader navigation={navigation} />
          }

        </View>
        <AssessmentProgress />
        <WeeklyMood navigation={navigation} />
        <DailyGoals />
        {/* <UpcomingMeds />\ */}
        <View style={{ marginHorizontal: DEFAULTWIDTH * 0.02 }}>
          <NextMedication navigation={navigation} />
          <View style={{ marginBottom: GlobalSize(10) }}>
            <UpcomingTasks navigation={navigation} />
          </View>
        </View>

        <View style={DEFAULTSTYLES.alignView}>
          <RxComponent />
        </View>
        <CaregivingResources />
        <FromCommunity />

      </ScrollView>

      <View style={styles.buttonPost}>
        <TouchableOpacity
          style={styles.buttonTouch}
          onPress={() => setModalOpen(true)} >
          <SwitchProfile />
        </TouchableOpacity>
      </View>

    </>
  );
};


export default MainScreen;


const styles = StyleSheet.create({
  lineBorder: {
    backgroundColor: LINECOLOR1,
    height: GlobalSize(1),
    margin: GlobalSize(10),
    marginLeft: GlobalSize(8),
    marginRight: GlobalSize(8),
    marginTop: 0
  },
  buttonPost: {
    position: 'absolute',
    left: 0,
    right: GlobalSize(16),
    bottom: GlobalSize(10),
    alignItems: 'flex-end'
  },
  buttonTouch: {
    backgroundColor: PRIMARYCOLOR,
    width: DEFAULTWIDTH * 0.12,
    height: DEFAULTWIDTH * 0.12,
    borderRadius: GlobalSize(8),
    alignItems: 'center',
    justifyContent: 'center'
  }
})