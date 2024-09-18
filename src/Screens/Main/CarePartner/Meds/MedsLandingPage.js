import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React,{useEffect,useState} from 'react';
import CustomSidebarMenu from '../../../../Components/CarePartner/SideMenu/CustomSideMenuBar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { BACKGROUNDWHITE, LINECOLOR1 } from '../../../../Constants/Colors/Colors';
import DashboardHeader from '../../../../Components/Common/Headers/DashboardHeader';
import MainHeader from '../../../../Components/Common/Headers/MainHeader';
import PatientInfo from '../../../../Components/CarePartner/Med/Landing/PatientInfo';
import NextMedication from '../../../../Components/CarePartner/Med/Landing/NextMedication';
import RecentDiagnosis from '../../../../Components/CarePartner/Med/Landing/RecentDiagnosis';
import OnGoingDiagnosis from '../../../../Components/CarePartner/Med/Landing/OnGoingDiagnosis';
import DEFAULTSTYLES, { DEFAULTWIDTH } from '../../../../Constants/styles/styles';
import { GlobalSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts';
import ActiveDiet from '../../../../Components/CarePartner/Med/Landing/ActiveDiet';
import RxComponent from '../../../../Components/CarePartner/Home/RxComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();

const MedsLandingPage = () => (
  <Drawer.Navigator
    screenOptions={{ headerShown: false }}
    drawerContent={props => <CustomSidebarMenu {...props} />}>
    <Drawer.Screen name="MedsLanding" component={MedsLanding} />
  </Drawer.Navigator>
);

const MedsLanding = ({ navigation }) => {

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
      style={styles.scrollContainer}
      showsVerticalScrollIndicator={false}>
      <View style={{ backgroundColor: BACKGROUNDWHITE,padding:GlobalSize(10) }}>
        <DashboardHeader navigation={navigation} />

        <View style={DEFAULTSTYLES.lineBorder} />

        {UserType == 'CarePartner' &&
        <MainHeader navigation={navigation} />}
        <View>
          <PatientInfo />
        </View>

        <NextMedication navigation={navigation} />
        <RecentDiagnosis />
        <OnGoingDiagnosis />

        <ActiveDiet/>
        <View style={DEFAULTSTYLES.alignView}>
        <RxComponent/>
        </View>
      </View>
    </ScrollView>
  );
};


export default MedsLandingPage;


const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: BACKGROUNDWHITE,
    paddingBottom: GlobalSize(50)
  }
})
