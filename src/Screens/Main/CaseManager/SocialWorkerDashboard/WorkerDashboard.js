import React from 'react';
import { Text, View, SafeAreaView, StatusBar, ScrollView, StyleSheet } from 'react-native';
import { BACKGROUNDCOLORH, BACKGROUNDCOLORM, BACKGROUNDWHITE, BORDERCOLORH, BORDERCOLORM, FOURTHCOLOR, LINECOLOR1, TEXTCOLORH } from '../../../../Constants/Colors/Colors';
import DEFAULTSTYLES from '../../../../Constants/styles/styles';
import DashboardHeader from '../../../../Components/Common/Headers/DashboardHeader';
import { GlobalSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts';
import MainHeader from '../../../../Components/Common/Headers/MainHeader';
import WeeklyMood from '../../../../Components/CarePartner/Home/WeeklyMood';
import DailyGoals from '../../../../Components/CarePartner/Home/DailyGoals';
import DashboardList from '../../../../Components/CaseManager/DashBoard/DashBoardList';

const WorkerDashboard = ({ navigation }) => {

  const SDOHData = [
    {
      id: 1,
      image: require('../../../../../assets/Images/SDOH1.png'),
      Title: 'Economic Stability',
      RiskStatus: 'High Risk',
      borderColor: BORDERCOLORH,
      backgroundColor: BACKGROUNDCOLORH,
      TextColor: TEXTCOLORH,
    },
    {
      id: 2,
      image: require('../../../../../assets/Images/SDOH2.png'),
      Title: 'Neighbourhood',
      RiskStatus: 'Medium Risk',
      borderColor: BORDERCOLORM,
      backgroundColor: BACKGROUNDCOLORM,
      TextColor: FOURTHCOLOR,
    }
  ]


  const MedData = [
    {
      id: 1,
      image: require('../../../../../assets/Images/SDOH1.png'),
      Title: 'Food',
      RiskStatus: 'High Risk',
      borderColor: BORDERCOLORH,
      backgroundColor: BACKGROUNDCOLORH,
      TextColor: TEXTCOLORH,
    },
    {
      id: 2,
      image: require('../../../../../assets/Images/SDOH2.png'),
      Title: 'Health care',
      RiskStatus: 'Medium Risk',
      borderColor: BORDERCOLORM,
      backgroundColor: BACKGROUNDCOLORM,
      TextColor: FOURTHCOLOR,
    }
  ]
  return (
    <SafeAreaView style={DEFAULTSTYLES.AndroidSafeArea}>
      <StatusBar
        backgroundColor={BACKGROUNDWHITE}
        barStyle={'dark-content'}
        style={{ flex: 0 }} />

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{ margin: GlobalSize(10) }}>
          <DashboardHeader />

          <View style={styles.lineBorder} />

          <MainHeader navigation={navigation} />
        </View>
        <WeeklyMood />
        <DailyGoals />

        <DashboardList SDOHData={SDOHData} MainHeader={'SDOH'} />

        <View style={{ marginBottom: GlobalSize(10) }}>
          <DashboardList SDOHData={MedData} MainHeader={'Medication'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
};

export default WorkerDashboard;

const styles = StyleSheet.create({
  lineBorder: {
    backgroundColor: LINECOLOR1,
    height: GlobalSize(1),
    margin: GlobalSize(10),
    marginLeft: GlobalSize(8),
    marginRight: GlobalSize(8),
    marginTop: 0
  },

})