import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import DEFAULTSTYLES from '../../../../Constants/styles/styles';
import ProgressCard from '../../../../Components/SupportMember/Home/ProgressCard';
import Header from '../../../../Components/SupportMember/Home/Header';
import UpcomingCard from '../../../../Components/SupportMember/Home/UpcomingCard';
import NearbySupportRequired from '../../../../Components/SupportMember/Home/NearbySupportRequired';



const HomeScreen = () => {
  return (
    <SafeAreaView
      style={
        Platform.OS === 'android'
          ? DEFAULTSTYLES.AndroidSafeArea
          : styles.container
      }>
        <Header />
        <ProgressCard />
        <UpcomingCard />
        <NearbySupportRequired />

    </SafeAreaView>
  );
};

const styles = new StyleSheet.create({
  container: {
    flex: 1,
  },
  
});

export default HomeScreen;
