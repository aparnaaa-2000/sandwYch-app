import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, StatusBar, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';

// COLORS IMPORTED
import { BACKGROUNDWHITE, PRIMARYCOLOR, } from '../../../Constants/Colors/Colors';

// FONTS IMPORTED
import { FONTS } from '../../../Constants/Fonts';

//SVG ICONS
import { RightWhite, ToolTip } from '../../../../assets';

//COMPONENTS IMPORTED
import ToolTipModal from '../../../Components/Forms/Signup/TooltipModal';
import OtpInput from '../../../Components/Forms/NewOTPComponent/OTPinput';
import OTPSuccessModal from '../../../Components/Forms/Signup/OTPSuccessModal';
import ErrorPopup from '../../../Components/ComingSoonPopup/ErrorPopup';
import ValidationModal from '../../../Components/Forms/LoginScreen/ValidationModal';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
// import OTPVerify from 'react-native-otp-verify';

//REDUX
import { OtpRClear } from '../../../redux/Slice/VerifyResetOtp';
import { ResendVerifyOtpReset, VerifyOtpReset } from '../../../redux/thunk';
import { ResendOtpResetClear } from '../../../redux/Slice/ResendOtpResetEmail';
import DEFAULTSTYLES, { DEFAULTWIDTH } from '../../../Constants/styles/styles';
import { GlobalSize, fontSize, height, width } from '../../../Constants/ResponsiveFont/ResponsiveFonts';
import { ScrollView } from 'react-native';


const OTPVerification = ({ navigation, route }) => {

  const [ModalOpen, setModalOpen] = useState(false)

  const dispatch = useDispatch()
  const [OtpCode, setOtpCode] = useState(['', '', '', '', '', '']);
  const [seconds, setSeconds] = useState(30);
  const [isRunning, setIsRunning] = useState(false);
  const [TimerStart, setTimerStart] = useState(false)
  const [token, setToken] = useState(null)
  const [Message, setMessage] = useState(null)
  const [ErrorModal, setErrorModal] = useState(false)
  const [OtpSuccess, setOtpSucess] = useState(false)
  const [ValidOpen, setValidOpen] = useState(false)

  const { data, error, isLoading, error2 } = useSelector(
    state => ({
      data: state.verifyOtpReset.data,
      error: state.verifyOtpReset.error,
      isLoading: state.verifyOtpReset.isLoading,
      error2: state.ResendOTPER.error
    }),
    shallowEqual
  );


  useEffect(() => {
    getItemFromAsyncStorage()
    ModalOpen_Redux()
  }, [error, data, token]);

  // useEffect(() => {
  //   if (Platform.OS === 'android') {
  //     OTPVerify.getHash().then(hash => {
  //       OTPVerify.addListener(hash, message => {
  //         if (message) {
  //           // Extract OTP from the message and set it
  //           setOtp(extractOTPFromMessage(message));
  //         }
  //       });
  //     });
  //   }
  //   return () => {
  //     // Clean up OTPVerify listener
  //     OTPVerify.removeListener(HASH_CODE);
  //   };
  // }, []);

  const getItemFromAsyncStorage = async () => {
    try {
      const storedValue = await AsyncStorage.getItem('TOKENAuth');
      if (storedValue !== null) {
        setToken(storedValue)
      } else {

      }
    } catch (error) {
      console.error('Error retrieving data from AsyncStorage:', error);
    }
  };


  const ModalOpen_Redux = () => {
    console.log("error snf sycces", error)
    // Check if error is defined and has a status of 400
    if (error && error.status) {

      setMessage(error?.data?.message)
      setErrorModal(true)
      setTimeout(() => {
        setErrorModal(false)
      }, 1500)
      dispatch(OtpRClear())

    } else if (data && OtpCode?.length == 6) {
      setOtpSucess(true)
      dispatch(OtpRClear())
    } else if (error2 && error2?.status == 400) {

      setMessage(error?.data?.message)
      setErrorModal(true)
      setTimeout(() => {
        setErrorModal(false)
      }, 1500)
      dispatch(ResendOtpResetClear());

      console.log("error2.......................", error2)
    }
  };

  useEffect(() => {
    let intervalId;

    if (isRunning && seconds > 0) {
      // Start the timer
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      // Stop the timer when it reaches 0
      setIsRunning(false);
      setTimerStart(false)
    }
    return () => clearInterval(intervalId);
  }, [isRunning, seconds]);


  // FUNCTION FOR CHECKING OTP LENGTH
  const onOTPSend = () => {

    const joinedString = OtpCode?.join('');
    console.log("OTPSEND........................", joinedString)
    if (joinedString?.length !== 6) {
      setValidOpen(true)
      setMessage("Please enter a valid OTP")
      setTimeout(() => {
        setValidOpen(false)
      }, 1500)
    } else {
      const joinedString = OtpCode?.join('');
      setOtpCode(OtpCode)
      setOtpSucess(true)
      // VerifyOtpReset(joinedString, dispatch, token);
    }

  };

  const ResendOtp = () => {
    setTimerStart(true),
      setIsRunning(true),
      setSeconds(30)
    // ResendAPI()
  }

  //FUNCTION FOR CALLING RESEND API 
  const ResendAPI = () => {
    ResendVerifyOtpReset(route?.params?.email, dispatch)
  }

  return (
    <SafeAreaView style={{ backgroundColor: BACKGROUNDWHITE, flex: 1 }}>
      <StatusBar backgroundColor={BACKGROUNDWHITE} barStyle={'dark-content'} style={{ flex: 0 }} />

      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>

        <View style={{ marginLeft: 0 }}>
          <Image source={require('../../../../assets/Images/NEWSIGNIN/reset.png')}
            style={{ width: width(350), height: height(330) }} resizeMode='contain' />
        </View>


        <View style={styles.letsView}>
          <View>
            <Text style={styles.textWe}>OTP</Text>
          </View>
          <View style={{ marginTop: 10, left: 4 }}>
            <TouchableOpacity onPress={() => setModalOpen(true)}>
              <ToolTip />
            </TouchableOpacity>
          </View>
        </View>

        <View style={DEFAULTSTYLES.alignView}>
          <View style={styles.viewTextInput}>
            <OtpInput otp={OtpCode} setOtp={setOtpCode} />

          </View>
        </View>

        <View style={styles.viewSend}>

          <View style={{ marginTop: DEFAULTWIDTH * 0.04 }}>
            <Text style={styles.textSend}>Continue</Text>
          </View>


          <TouchableOpacity onPress={() => onOTPSend()}>
            <View style={styles.viewRight}>
              <RightWhite />
            </View>
          </TouchableOpacity>
        </View>



        <View style={styles.postView} >

          <View>
            {!TimerStart ?
              <TouchableOpacity style={{ padding: 5 }} onPress={() => ResendOtp()}>
                <Text style={styles.textCommon}>Resend</Text>
              </TouchableOpacity> :

              <View style={{ padding: 5,marginTop:GlobalSize(5) }}>
                <Text style={styles.textC}><Text style={[styles.textC, { fontFamily: FONTS.FontRegular }]}>Resend OTP in </Text>00:{seconds < 10 ? '0' + seconds : seconds}</Text>
              </View>}
          </View>

          <View>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={{ padding: 5 }}>
              <View>
                <Text style={styles.textCommon}>Sign In</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

      </View>
      </ScrollView>
      <ErrorPopup
        Message={Message}
        ModalOpen={ErrorModal}
        setModalOpen={setErrorModal} />

      <ValidationModal
        ModalOpen={ValidOpen}
        setModalOpen={setValidOpen}
        Message={Message} />

      <OTPSuccessModal
        ModalOpen={OtpSuccess}
        setModalOpen={setOtpSucess}
        navigation={() => navigation.navigate('ResetPasswordScreen')}
      />

      <ToolTipModal
        ModalOpen={ModalOpen}
        setModalOpen={setModalOpen}
        Title={'Why OTP is required for sign up process?'}
        Desc={'Your 6 digit OTP which has been send to your email or phone is required. This helps us to identify that you own this phone number or email address'}
      />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: DEFAULTWIDTH * 0.06,
    backgroundColor: BACKGROUNDWHITE
  },
  textWe: {
    fontSize: fontSize(25),
    fontFamily: FONTS.FontSemiB,
    color: PRIMARYCOLOR
  },
  letsView: {
    marginBottom: DEFAULTWIDTH * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewTextInput: {
    borderWidth: 1,
    borderRadius: GlobalSize(28),
    width: DEFAULTWIDTH * 0.88,
    height: DEFAULTWIDTH * 0.16,
    borderColor: PRIMARYCOLOR,
    opacity: 0.45,
    flexDirection: 'row',
    marginBottom: GlobalSize(5),
    alignItems: 'center',
    justifyContent: 'center'
  },
  textSend: {
    fontFamily: FONTS.FontSemiB,
    fontSize: fontSize(20),
    color: PRIMARYCOLOR
  },
  textC: {
    fontSize: fontSize(14),
    fontFamily: FONTS.FontMedium,
    color: PRIMARYCOLOR
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
    marginTop: DEFAULTWIDTH * 0.02,
    marginBottom: DEFAULTWIDTH * 0.34,
    alignItems: 'center'
  },
  textCommon: {
    fontSize: fontSize(20),
    color: PRIMARYCOLOR,
    fontFamily: FONTS.FontRegular,
    textDecorationLine: 'underline'
  },
  postView: {
    position: 'absolute',
    bottom: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
export default OTPVerification;


