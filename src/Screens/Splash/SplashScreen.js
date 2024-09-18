import React, { useEffect, useState } from 'react';
// import AnimatedLottieView from 'lottie-react-native';
import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { BACKGROUNDWHITE, DEFAULTGRAY, PRIMARYCOLOR } from '../../Constants/Colors/Colors';
import { Logo } from '../../../assets/svgImages';
import DEFAULTSTYLES from '../../Constants/styles/styles';

const SplashScreen = ({ navigation }) => {


  // =======================================================
  // TIMEOUT is used to provide a small time for Splashscreen 
  // before it loads into another page.
  // =======================================================
  setTimeout(() => {
    getData();
  }, 3000);

  const getData = async () => {
   
    navigation.navigate('WelcomeScreen');
  };

  // useEffect(() => {
  //   requestPermissions() // To access the camera and files 
  // }, [])

  // const requestPermissions = async () => {
  //   try {
  //     const permission =
  //       Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA;
  //     const result = await request(permission);
  //     if (result === RESULTS.GRANTED) {
  //       navigation.navigate('Onboarding');
  //       console.log('Camera permission granted');
  //     } else {
  //       setModalOpen(true)
  //       console.log('Camera permission denied');
  //       throw new Error('Camera permission is required');
  //     }
  //   } catch (error) {
  //     console.log("camera deny")
  //     throw error;
  //   }
  // };



  return (

    <SafeAreaView
      style={
        Platform.OS === 'android' ? DEFAULTSTYLES.AndroidSafeArea : styles.container
      }>
      <StatusBar backgroundColor={BACKGROUNDWHITE} barStyle={'dark-content'} style={{ flex: 0 }} />
      <View style={styles.mainContainer}>
        <View style={{ flex: 1 }}>
          <View style={styles.headerContainer}>
            <Logo width={300} height={50} />
          </View>
          <View style={styles.loaderContainer}>
            {/* <AnimatedLottieView
              source={require('../../../assets/lottieFiles/loader.json')}
              autoPlay
              loop
            /> */}
          </View>
          <View style={styles.loaderContainer}>
            <Text style={styles.textStyle}>You've got their back</Text>
            <Text style={styles.textStyle}>We've got yours</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
    // <>

    //   {/* <PermissionModal
    //     navigation={navigation}
    //     ModalOpen={ModalOpen}
    //     setModalOpen={setModalOpen} /> */}
    // </>
  );
};

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DEFAULTGRAY,
  },
  mainContainer: {
    marginTop: 100,
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    flex: 0.2,
  },
  loaderContainer: {
    flex: 0.3,
  },
  textStyle: {
    alignSelf: 'center',
    fontFamily: 'Inter-Bold',
    color:PRIMARYCOLOR,
  },
});

export default SplashScreen;
