import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  StatusBar,
  SafeAreaView,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';

// COLORS IMPORTED GLOBALLY
import {
  BACKGROUNDWHITE,
  BORDERCOLOR5,
  FOURTHCOLOR,
  PLACEHOLDERCOLOR3,
  PRIMARYCOLOR,
  PUREBLACK,
  TEXTCOLOR14
} from '../../../Constants/Colors/Colors';

import { FONTS } from '../../../Constants/Fonts';

//SVG ICONS 
import { EyeClose1, EyeOpen1, Phone, RightWhite, ToolTip } from '../../../../assets';

// REDUX LOGIN
import { LoginEmail, postLoginDetails } from '../../../redux/thunk';
import { loginClear } from '../../../redux/Slice/LoginSliceKey';

import { useDispatch, useSelector, shallowEqual } from 'react-redux';

//MODAL IMPORTED FROM COMPONENTS
import ToolTipModal from '../../../Components/Forms/Signup/TooltipModal';
import SuccessPopup from '../../../Components/ComingSoonPopup/Successpopup';
import ValidationModal from '../../../Components/Forms/LoginScreen/ValidationModal';
import DEFAULTSTYLES, { DEFAULTWIDTH } from '../../../Constants/styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GlobalSize, fontSize } from '../../../Constants/ResponsiveFont/ResponsiveFonts';


const SignIn = ({ navigation }) => {

  const dispatch = useDispatch();
  const [Message, setMessage] = useState(null)
  const [mobileView, setMobileView] = useState(true);
  const [ModalOpen, setModalOpen] = useState(false)
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [forceRefresh, setForceRefresh] = useState(false);
  const [SuccessModal, setSuccessModal] = useState(false)

  const [Email, setEmail] = useState(null)
  const [Password, setPassword] = useState(null)
  const [ValidOpen, setValidOpen] = useState(false)
  const [IsLoading, setIsLoading] = useState(false)
  const [MobileNum, setMobileNum] = useState(null)


  const phone = 'Sorry, your phone number or password is incorrect. Please try again.';
  const email = 'Sorry, your email or password is incorrect. Please try again.';

  // useEffect(() => { // To refresh the screen
  //   setForceRefresh((prev) => !prev);
  // }, [mobileView]);

  const { data, error, isLoading } = useSelector(
    state => ({
      data: state.login.data,
      error: state.login.error,
      isLoading: state.login.isLoading,
    }),
    shallowEqual
  );

  useEffect(() => {
    ModalOpen_Redux();
  }, [error, data]);

  //FUNCTION FOR UPDATING THE DATA WHEN CALLING THE API
  const ModalOpen_Redux = () => {
    console.log("data............", data, error)
    if (error) {
      setValidOpen(true)
      setMessage(email)

      setTimeout(() => {
        setValidOpen(false)
        setEmail(null)
        setPassword(null)
        setIsLoading(false)
      }, 1500)
      dispatch(loginClear())

    } else if (data && Email && Password !== null) {
      setSuccessModal(true)
      setTimeout(() => {
        setSuccessModal(false)
        setIsLoading(false)
        navigation.navigate('HipaaValidationForm')
      }, 2000)

      dispatch(loginClear())
    }
  };

  //FUNCTION FOR VALIDATING EMAIL
  const validateEmail = () => {
    // Regular expression for a valid email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(Email)) {
      setValidOpen(true)
      setMessage('Email is required')
      setTimeout(() => {
        setValidOpen(false)
      }, 1500)
      return false;
    }

    return true;
  };


  const validatePhone = () => {
    const isValidPhoneNumber = /^\d{10}$/.test(MobileNum?.replace(/[^\d]/g, ''));

    if (!isValidPhoneNumber) {
      setValidOpen(true)
      setMessage('Phone number is required')
      setTimeout(() => {
        setValidOpen(false)
      }, 1500)
      return false;
    }

    return true;
  };


  // FUNCTION FOR VALIDATING PASSWORD
  const validatePassword = () => {

    if (Password == null) {
      setValidOpen(true)
      setMessage('Password is required')
      setTimeout(() => {
        setValidOpen(false)
      }, 1500)
      return false;
    }

    return true;
  };

  //FUNCTION FOR VALIDATING AND CALLING THE API - EMAIL
  const onLoginSendEmail = () => {

    if (!mobileView ? validateEmail() : validatePhone() && validatePassword()) {
      Keyboard.dismiss()
      setIsLoading(true)
      OnSubmitUser()

      // LoginEmail(Email, Password, dispatch);
    }
  };

  //FUNCTION FOR VALIDATING AND CALLING THE API - PHONE NUMBER
  const onLoginSendPhone = (phone, password) => {
    Keyboard.dismiss()
    postLoginDetails(phone, password, dispatch);
  };

  const StoreData = (userData)=>{
  AsyncStorage.getItem('users')
  .then((existingUsers) => {
    let users = existingUsers ? JSON.parse(existingUsers) : [];
    users.push(userData);
    return AsyncStorage.setItem('users', JSON.stringify(users));
  })
  .then(() => {
    setEmail(null);
    setPassword(null);
    setIsLoading(false);
  })
  .catch((error) => {
    console.error('Error storing user data:', error);
  });
}


  const OnSubmitUser = () => {

    if (Email?.toLowerCase() == 'bettysmith@gmail.com' && Password == '123456') {

      const userData = {
        name: Email?.split('@')[0], // Using email as name for this example
        email: Email,
        userType: 'Patient'
      };
      StoreData(userData)
      AsyncStorage.setItem('UserType', 'Patient')

      navigation.navigate('HipaaValidationForm')
      setEmail(null)
      setPassword(null)
      setIsLoading(false)

    }
    else if (Email?.toLowerCase() == 'amy@gmail.com' && Password == '123456') {

      const userData = {
        name: Email?.split('@')[0], // Using email as name for this example
        email: Email,
        userType: 'CarePartner'
      };
      StoreData(userData)
      AsyncStorage.setItem('UserType', 'CarePartner')
      navigation.navigate('HipaaValidationForm')
      setEmail(null)
      setPassword(null)
      setIsLoading(false)
    }
    else if (Email?.toLowerCase() == 'support@gmail.com' && Password == '123456') {
      const userData = {
        name: Email?.split('@')[0], // Using email as name for this example
        email: Email,
        userType: 'SupportMember'
      };
      StoreData(userData)
      AsyncStorage.setItem('UserType', 'SupportMember')
      navigation.navigate('SupportLandingScreen')
      setEmail(null)
      setPassword(null)
      setIsLoading(false)
    }
    else {
      setMessage("Invalid Credentials")
      setValidOpen(true)
      setTimeout(() => {
        setIsLoading(false)
        setValidOpen(false)
      }, 1500)

    }
  }

  return (
    <SafeAreaView style={{ backgroundColor: BACKGROUNDWHITE, flex: 1 }}>
      <StatusBar backgroundColor={BACKGROUNDWHITE} barStyle={'dark-content'} style={{ flex: 0 }} />


      <KeyboardAvoidingView
        // behavior={Platform.OS === 'ios' ? 'height' : 'padding'}
        style={{ flex: 1 }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>

            <View style={{ marginLeft: GlobalSize(30) }}>
              <Image
                source={require('../../../../assets/Images/NEWSIGNIN/Login.png')}
                style={{ width: GlobalSize(300), height: GlobalSize(320) }}
                resizeMode='contain' />
            </View>

            <View style={styles.letsView}>
              <View>
                <Text style={styles.textWe}>Welcome Back</Text>
              </View>
              <View style={{ marginTop: GlobalSize(10), left: GlobalSize(4) }}>
                <TouchableOpacity onPress={() => setModalOpen(true)}>
                  <ToolTip />
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ marginBottom: GlobalSize(8) }}>
              {mobileView ?
                <Text style={styles.textSIGIN}>Sign in using phone number</Text> :
                <Text style={styles.textSIGIN}>Sign in using E-mail</Text>}
            </View>

            <View style={DEFAULTSTYLES.alignView}>
              <View style={styles.viewTextInput}>
                <View style={styles.viewOne}>
                  {mobileView ?
                    <Text style={styles.textOne}>1+</Text> :
                    <Text style={styles.textOne}>@</Text>}
                </View>

                <View style={styles.viewTextIn}>
                  {mobileView ?
                    <TextInput
                      keyboardType='number-pad'
                      maxLength={10}
                      value={MobileNum}
                      onChangeText={(text) => setMobileNum(text)}
                      style={[styles.textInputPass, { width: DEFAULTWIDTH * 0.75 }]}
                      placeholder='Enter phone number'
                      placeholderTextColor={PLACEHOLDERCOLOR3} /> :

                    <TextInput
                      maxLength={30}
                      value={Email}
                      keyboardType={'email-address'}
                      style={[styles.textInputPass, { width: DEFAULTWIDTH * 0.75 }]}
                      placeholder='Enter your email address'
                      onChangeText={(text) => setEmail(text)}
                      placeholderTextColor={PLACEHOLDERCOLOR3} />}
                </View>
              </View>
            </View>

            <View style={DEFAULTSTYLES.alignView}>
              <View style={styles.viewTextInput}>

                <View style={styles.viewTextIn}>

                  <TextInput
                    maxLength={10}
                    value={Password}
                    style={[styles.textInputPass, { width: DEFAULTWIDTH * 0.6, left: GlobalSize(5) }]}
                    secureTextEntry={isPasswordSecure}
                    placeholder='Enter your password'
                    onChangeText={(text) => setPassword(text)}
                    placeholderTextColor={PLACEHOLDERCOLOR3} />
                </View>

                <TouchableOpacity
                  style={[styles.viewOne, { right: GlobalSize(4) }]}
                  onPress={() => setIsPasswordSecure(!isPasswordSecure)}>
                  {!isPasswordSecure ?
                    <EyeOpen1 width={20} height={20} /> :
                    <EyeClose1 width={20} height={20} />}
                </TouchableOpacity>
              </View>
            </View>


            <View style={styles.viewDiv}>
              <View>
                <TouchableOpacity
                  style={styles.touchSign}
                  onPress={() => navigation.navigate('PasswordVerify')}>
                  <Text style={styles.textSignin}>Forgot password</Text>
                </TouchableOpacity>

              </View>
              <View>
                <TouchableOpacity
                  style={styles.touchSign}
                  onPress={() => setMobileView(!mobileView)}>
                  {mobileView ?
                    <Text style={styles.textSignin}>or sign in using email</Text> :
                    <Text style={styles.textSignin}>or sign in using phone</Text>}
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.viewSend}>
              <View style={{ marginTop: DEFAULTWIDTH * 0.04 }}>
                <Text style={styles.textSign}>Sign In</Text>
              </View>

              <TouchableOpacity onPress={() => onLoginSendEmail()}>
                <View style={styles.viewRight}>
                  {!IsLoading ?
                    <RightWhite /> :
                    <ActivityIndicator size={20} color={BACKGROUNDWHITE} />
                  }
                </View>
              </TouchableOpacity>

            </View>

            <View style={{ alignItems: 'flex-end' }}>
              <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
                <Text style={styles.textSignup}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>


        </ScrollView>

      </KeyboardAvoidingView>
      <ValidationModal
        ModalOpen={ValidOpen}
        setModalOpen={setValidOpen}
        Message={Message} />

      <SuccessPopup
        Message={'Login successfull '}
        ModalOpen={SuccessModal}
        setModalOpen={setSuccessModal} />

      <ToolTipModal
        ModalOpen={ModalOpen}
        setModalOpen={setModalOpen}
        Title={'What is the sign in process?'}
        Desc={'You have to login using your email or phone number and the password you have created.  If it is validated, you will be redirected to your associated role which you have selected at the time of sign up.'} />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: DEFAULTWIDTH * 0.06,
    backgroundColor: BACKGROUNDWHITE
  },
  letsView: {
    marginBottom: DEFAULTWIDTH * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textWe: {
    fontSize: fontSize(25),
    fontFamily: FONTS.FontSemiB,
    color: PRIMARYCOLOR
  },
  textSIGIN: {
    fontSize: GlobalSize(16),
    fontFamily: FONTS.FontRegular,
    color: PRIMARYCOLOR
  },
  viewDiv: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: GlobalSize(5),
  },
  viewTextInput: {
    borderWidth: 1,
    borderRadius: GlobalSize(28),
    width: DEFAULTWIDTH * 0.86,
    height: DEFAULTWIDTH * 0.16,
    borderColor: 'rgba(21, 31, 109, 0.25)',
    flexDirection: 'row',
    marginBottom: GlobalSize(10),
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textOne: {
    fontSize: GlobalSize(15),
    color: FOURTHCOLOR,
    fontFamily: FONTS.FontSemiB,
    opacity: 0.45
  },
  viewOne: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: BORDERCOLOR5,
    marginLeft: GlobalSize(3.5)
  },
  textInputPass: {
    fontSize: fontSize(15),
    fontFamily: FONTS.FontRegular,
    color: PUREBLACK,
    width: DEFAULTWIDTH * 0.5
  },
  postView: {
    position: 'relative',
    bottom: GlobalSize(1),
    right: GlobalSize(10)
  },
  viewTextIn: {
    marginLeft: DEFAULTWIDTH * 0.03,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textSignin: {
    fontSize: fontSize(14),
    fontFamily: FONTS.FontRegular,
    color: TEXTCOLOR14,
    textDecorationLine: 'underline'
  },
  touchSign: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: GlobalSize(8),

  },
  textSign: {
    fontFamily: FONTS.FontSemiB,
    fontSize: fontSize(20),
    color: PRIMARYCOLOR
  },
  viewRight: {
    backgroundColor: PRIMARYCOLOR,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: GlobalSize(5)
  },
  viewSend: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: DEFAULTWIDTH * 0.05,
    marginBottom: DEFAULTWIDTH * 0.04,
    marginLeft: GlobalSize(8),
    marginRight: GlobalSize(8)
  },
  textSignup: {
    fontSize: GlobalSize(20),
    color: PRIMARYCOLOR,
    fontFamily: FONTS.FontRegular,
    textDecorationLine: 'underline'
  },
})
export default SignIn;


