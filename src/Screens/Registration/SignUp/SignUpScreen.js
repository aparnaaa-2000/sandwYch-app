import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  Keyboard,
  TextInput,
  ActivityIndicator,
  ScrollView
} from 'react-native';

//COLORS IMPORTED GLOBALLY
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
import { RightWhite, ToolTip } from '../../../../assets';

//MODAL IMPORTED FROM COMPONENTS
import ToolTipModal from '../../../Components/Forms/Signup/TooltipModal';
import ValidationModal from '../../../Components/Forms/LoginScreen/ValidationModal';
import SuccessPopup from '../../../Components/ComingSoonPopup/Successpopup';
import ErrorPopup from '../../../Components/ComingSoonPopup/ErrorPopup';

//REDUX
import { verifyClear } from '../../../redux/Slice/SignupVerifyEmail';
import { VerifyEmailsignup } from '../../../redux/thunk';

import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import DEFAULTSTYLES, { DEFAULTHEIGHT, DEFAULTWIDTH } from '../../../Constants/styles/styles';
import { GlobalSize, fontSize, height, width } from '../../../Constants/ResponsiveFont/ResponsiveFonts';

const SignUpScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const [mobileView, setMobileView] = useState(true);
  const [ModalOpen, setModalOpen] = useState(false)
  const [Message, setMessage] = useState(null)
  const [ValidOpen, setValidOpen] = useState(false)
  const [SuccessModal, setSuccessModal] = useState(false)
  const [ErrorModal, setErrorModal] = useState(false)
  const [Email, setEmail] = useState(null)
  const [IsLoading, setIsLoading] = useState(false)
  const [MobileNum, setMobileNum] = useState(null)

  const { data, error, isLoading } = useSelector(
    state => ({
      data: state.verify.data,
      error: state.verify.error,
      isLoading: state.verify.isLoading,
    }),
    shallowEqual
  );

  useEffect(() => {
    ModalOpen_Redux();
  }, [error, data])



  const ModalOpen_Redux = () => {

    // Check if error is defined and has a status of 400
    if (error?.status == 404) {
      dispatch(verifyClear())
      setMessage(error?.data?.message)
      setErrorModal(true)
      setIsLoading(false)
      setEmail(null)
      setTimeout(() => {
        setErrorModal(false)
      }, 1500)
      console.log("error enter............", error?.data?.message)
      //ErrorToast()

    } else if (data) {
      //showToast()
      setIsLoading(false)
      setMessage('Verification code generated successfully. Please check your email')
      setSuccessModal(true)
      setTimeout(() => {
        setSuccessModal(false)
        navigation.navigate('SignUpVerification', { email: Email })
      }, 1500);

      dispatch(verifyClear())
    } else if (error) {
      dispatch(verifyClear())
      setIsLoading(false)
      setEmail(null)
      setMessage(error?.data?.message)
      setErrorModal(true)

      setTimeout(() => {
        setErrorModal(false)
      }, 1500)
    }
    else {

      console.log("verified otp...............")
      dispatch(verifyClear())

    }
  };


  const ValidateValues = () => {
    if (!mobileView) {
      validateEmail()
    } else {
      validatePhone()
    }
  }

  //FUNCTION FOR VALIDATING EMAIL
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(Email)) {
      setValidOpen(true)
      setMessage('Email is required')
      setTimeout(() => {
        setValidOpen(false)
      }, 1500)
      return false;
    }
    navigation.navigate('SignUpVerification', { email: Email })
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
    navigation.navigate('SignUpVerification', { email: Email })
    return true;
  };


  // FUNCTION FOR VALIDATING EMAIL AND CALLING API
  const VerifyEmail = () => {
    console.log("email..............", Email)
    if (validateEmail()) {
      setIsLoading(true)
      setEmail(Email)
      Keyboard.dismiss()
      VerifyEmailsignup(Email, dispatch);
    }
  };


  return (
    <SafeAreaView style={{ backgroundColor: BACKGROUNDWHITE, flex: 1 }}>
      <StatusBar backgroundColor={BACKGROUNDWHITE} barStyle={'dark-content'} style={{ flex: 0 }} />
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>


        <View style={{ marginLeft: DEFAULTWIDTH * 0.096, alignItems: 'center' }}>
          <Image source={require('../../../../assets/Images/NEWSIGNIN/Signup.png')}
            style={{ width: width(480), height: height(340) }} resizeMode='contain' />
        </View>

        <View style={styles.letsView}>
          <View>
            <Text style={styles.textWe}>Let's Get Started</Text>
          </View>
          <View style={{ marginTop: 10, left: 4 }}>
            <TouchableOpacity onPress={() => setModalOpen(true)}>
              <ToolTip />
            </TouchableOpacity>

          </View>
        </View>

        <View style={{ marginBottom: DEFAULTWIDTH * 0.02 }}>
          {mobileView ?
            <Text style={styles.textSIGIN}>Create an account using your mobile phone number</Text> :
            <Text style={styles.textSIGIN}>Create an account using your E-mail</Text>}
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
                  style={styles.textInput1}
                  value={MobileNum}
                  onChangeText={(text) => setMobileNum(text)}
                  placeholder='Enter phone number'
                  placeholderTextColor={PLACEHOLDERCOLOR3} /> :

                <TextInput
                  maxLength={30}
                  keyboardType={'email-address'}
                  value={Email}
                  onChangeText={(text) => setEmail(text)}
                  style={[styles.textInput1, { width: DEFAULTWIDTH * 0.65 }]}
                  placeholder='Enter your email address'
                  placeholderTextColor={PLACEHOLDERCOLOR3} />}
            </View>
          </View>
        </View>
        <View style={styles.viewTextInput} >
            <TextInput
            style={styles.inputArea}
                      maxLength={30}
                      value={Email}
                      keyboardType={'number-pad'}
                    
                      // style={[styles.inputArea, {width: DEFAULTWIDTH * 0.65}]}
                      placeholder="Enter the referal code"
                      placeholderTextColor={PLACEHOLDERCOLOR3}
                    />

            </View>



        <TouchableOpacity style={styles.viewSign} onPress={() => setMobileView(!mobileView)}>
          {mobileView ?
            <Text style={styles.textSignin}>or sign up using email</Text> :
            <Text style={styles.textSignin}>Sign up using phone number</Text>}
        </TouchableOpacity>

        <View style={styles.viewSend}>
          
           <Text style={styles.verificationButton}>Send Verification Code</Text>
          

          <TouchableOpacity 
            onPress={() => ValidateValues()}>
            {!IsLoading ?
              <RightWhite /> :
              <ActivityIndicator size={20} color={BACKGROUNDWHITE} />
            }
          </TouchableOpacity>
        </View>
       

        <View style={styles.postView}>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>

            <Text style={styles.textIn}>Sign In</Text>

          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
      <ValidationModal
        ModalOpen={ValidOpen}
        setModalOpen={setValidOpen}
        Message={Message} />

      <SuccessPopup
        Message={Message}
        ModalOpen={SuccessModal}
        setModalOpen={setSuccessModal} />

      <ErrorPopup
        Message={Message}
        ModalOpen={ErrorModal}
        setModalOpen={setErrorModal} />

      <ToolTipModal
        ModalOpen={ModalOpen}
        setModalOpen={setModalOpen}
        Title={'Why should you sign up using email or phone?'}
        Desc={'We need a contact method to verify your account with SandwYch, in case you ever need us to help you recover your account.'} />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUNDWHITE,
    marginLeft: DEFAULTWIDTH * 0.07,
    marginRight: DEFAULTWIDTH * 0.07
  },
  verificationButton:{
    width: DEFAULTWIDTH * 0.86,
    height: DEFAULTHEIGHT* 0.07,
    backgroundColor: PRIMARYCOLOR,
    borderColor: PRIMARYCOLOR,
    color: 'white',
    textAlign:'center',
    padding:10,
    fontSize: fontSize(18),

  },
  textWe: {
    fontSize: fontSize(25),
    fontFamily: FONTS.FontSemiB,
    color: PRIMARYCOLOR
  },
  textSIGIN: {
    fontSize: fontSize(16),
    fontFamily: FONTS.FontRegular,
    color: PRIMARYCOLOR
  },
  viewTextInput: {
    borderWidth: 1,
    borderRadius: GlobalSize(28),
    width: DEFAULTWIDTH * 0.86,
    height: DEFAULTWIDTH * 0.16,
    borderColor: 'rgba(21, 31, 109, 0.25)',
    flexDirection: 'row',
    marginBottom: GlobalSize(5),
    alignItems:'center',
  },
  textOne: {
    fontSize: fontSize(15),
    color: FOURTHCOLOR,
    fontFamily: FONTS.FontSemiB,
    opacity: 0.45
  },
  viewOne: {
    width: GlobalSize(50),
    height: GlobalSize(50),
    borderRadius: GlobalSize(25),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: BORDERCOLOR5,
    marginLeft: GlobalSize(3.5),
  },
  textInput1: {
    fontSize: fontSize(15),
    fontFamily: FONTS.FontRegular,
    color: PUREBLACK,
    width: DEFAULTWIDTH * 0.5
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
  viewSign: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: GlobalSize(10)
  },
  textSend: {
    fontFamily: FONTS.FontSemiB,
    fontSize: fontSize(20),
    color: PRIMARYCOLOR
  },
  postView: {
    position: 'absolute',
    bottom: GlobalSize(20),
    right: GlobalSize(5)
  },
  viewRight: {
    backgroundColor: PRIMARYCOLOR,
    width: GlobalSize(50),
    height: GlobalSize(50),
    borderRadius: GlobalSize(25),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: GlobalSize(5)
  },
  viewSend: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: DEFAULTWIDTH * 0.05,
    marginBottom: DEFAULTWIDTH * 0.17
  },
  textIn: {
    fontSize: fontSize(20),
    color: PRIMARYCOLOR,
    fontFamily: FONTS.FontRegular,
    textDecorationLine: 'underline'
  },
  letsView: {
    marginBottom: DEFAULTWIDTH * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
export default SignUpScreen;