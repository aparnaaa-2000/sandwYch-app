import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, StatusBar, SafeAreaView, Dimensions, ScrollView } from 'react-native';

// COLORS ARE IMPORTED GLOBALLY FROM COLORS
import { BACKGROUNDWHITE, PRIMARYCOLOR } from '../../Constants/Colors/Colors';

import { FONTS } from '../../Constants/Fonts';

//SWIPE BUTTON IMPORTED FROM COMPONEENTS
import NewUserButton from '../../Components/Common/Buttons/IOSRingButton/NewUserButton'
import SignInButton from '../../Components/Common/Buttons/IOSRingButton/SignInButton';
import { DEFAULTWIDTH } from '../../Constants/styles/styles';
import { GlobalSize, fontSize } from '../../Constants/ResponsiveFont/ResponsiveFonts';

const WelcomeScreen = ({ navigation }) => {

  const [toggled, setToggled] = useState(false);
  const [toggleState, setToggleState] = useState(false);
  const [toggledUser, setToggledUser] = useState(false);
  const [toggleStateUser, setToggleStateUser] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Your refresh logic goes here
      setToggleState(false)
      setToggled(false)
      setToggleStateUser(false)
      setToggledUser(false)
      console.log('Home screen focused. Refresh!', toggleState);
    });

    return unsubscribe;
  }, [navigation]);

  const navigations_Login = () => {
    navigation.navigate('SignIn');
  }

  const navigations_NewUser = () => {
    navigation.navigate('SignUpScreen');
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Your refresh logic goes here
      console.log('Home screen focused. Refresh!');
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={{ backgroundColor: BACKGROUNDWHITE, flex: 1 }}>
      <StatusBar backgroundColor={BACKGROUNDWHITE} barStyle={'dark-content'} style={{ flex: 0 }} />
      <ScrollView showsVerticalScrollIndicator={false}>

      <View style={styles.container}>

        <View style={{ marginLeft: DEFAULTWIDTH * 0.12 }}>
          <Image source={require('../../../assets/Images/NEWSIGNIN/WELCOME1.png')}
            style={{ width: 450, height: 400 }} resizeMode='contain' />
        </View>

        <View style={{ marginTop: DEFAULTWIDTH * 0.18, marginBottom: DEFAULTWIDTH * 0.18 }}>
          <Text style={styles.textWe}>Welcome!</Text>
        </View>


        <SignInButton
          navigations={navigations_Login}
          navigation={navigation}
          toggled={toggled}
          setToggled={setToggled}
          toggleState={toggleState}
          setToggleState={setToggleState}
        />

        <NewUserButton
          navigations={navigations_NewUser}
          navigation={navigation}
          toggled={toggledUser}
          setToggled={setToggledUser}
          toggleState={toggleStateUser}
          setToggleState={setToggleStateUser}
        />

      </View>
      </ScrollView>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: GlobalSize(10),
    backgroundColor: BACKGROUNDWHITE
  },
  textWe: {
    fontSize: fontSize(25),
    fontFamily: FONTS.FontSemiB,
    color: PRIMARYCOLOR
  },

})
export default WelcomeScreen;


