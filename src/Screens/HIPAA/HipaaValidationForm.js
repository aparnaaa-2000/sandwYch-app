import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, BackHandler, TouchableOpacity } from 'react-native';
import {
  BACKGROUNDWHITE,
  BORDERCOLOR1,
  BORDERCOLOR4,
  PRIMARYCOLOR,
  PUREWHITE,
  TEXTCOLOR10,
} from '../../Constants/Colors/Colors';
import { Button, Modal } from 'react-native-paper';
import { Platform } from 'react-native';
import { Check, Uncheck } from '../../../assets';
import { DEFAULTWIDTH } from '../../Constants/styles/styles';
import { GlobalSize, fontSize } from '../../Constants/ResponsiveFont/ResponsiveFonts';

const HipaaValidationForm = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [isChecked, setChecked] = useState(false);

  const navigateToEnrollment = () => {
    navigation.navigate('EnrollmentStack');
  };

  useEffect(() => {

    handleBackButtonPressAndroid()
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonPressAndroid);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonPressAndroid);
    };
  }, [navigation]);

  const handleCheckBoxToggle = () => {
    setChecked(!isChecked);
  };

  const handleBackButtonPressAndroid = () => {
    if (!navigation.isFocused()) {
      // The screen is not focused, so don't do anything
      return false;
    }
    else {
      return true;
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>

      <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:GlobalSize(130)}}>
        <View style={styles.hipaaView}>
          <View style={styles.viewHead}>
            <Text style={styles.headerText}>HIPAA Authorization</Text>
          </View>
          <View style={{ marginLeft: GlobalSize(10), marginRight: GlobalSize(10) }}>
            <Text style={[styles.normalText, { marginBottom: GlobalSize(10) }]}>
              I understand by using this app, that I am either disclosing or being trusted with Protected Health Information (PHI) for purposes of coordinating care. I authorize the release of my PHI to anyone invited into my network. The following individuals or entities can include:
            </Text>
            <View style={styles.rowContainer}>
              <Text style={styles.normalText}>1. </Text>
              <Text style={styles.normalText}>
                Medical or mental health professionals
              </Text>
            </View>
            <View style={styles.rowContainer}>
              <Text style={styles.normalText}>2. </Text>
              <Text style={styles.normalText}>
                Health services performed at home or in transport
              </Text>
            </View>

            <View style={styles.rowContainer}>
              <Text style={styles.normalText}>3. </Text>
              <Text style={styles.normalText}>
                Support members
              </Text>
            </View>

            <View style={[styles.rowContainer, { marginBottom: GlobalSize(10) }]}>
              <Text style={styles.normalText}>4. </Text>
              <Text style={styles.normalText}>
                Care partner either appointed or selected
              </Text>
            </View>


            <Text style={styles.normalText}>
              I understand that by using this app, I am permitting the disclosure of my PHI to anyone that is using the app. I understand that once my PHI is disclosed, it may no longer be protected by the privacy regulations of the Health Insurance Portability and Accountability Act (HIPAA). I release [healthcare provider, SandwYch] from any liability resulting from the use or disclosure of my PHI in accordance with this authorization, except to the extent such release is prohibited by law.  Email confirmation, confirm without email.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomView}>

        <View style={styles.viewCheck}>
          <TouchableOpacity onPress={() => handleCheckBoxToggle()} style={{ marginTop: GlobalSize(4) }}>
            {isChecked ?
              <Check /> :
              <Uncheck />}
          </TouchableOpacity>

          <View style={{ marginLeft: GlobalSize(10) }}>
            <Text style={styles.normalText}>I accept and continue the terms and</Text>
            <Text style={styles.normalText}>conditions</Text>
          </View>
        </View>
        <Button style={[styles.buttonStyle, { borderColor: isChecked ? BORDERCOLOR4 : BORDERCOLOR1 }]}
          onPress={() => isChecked ? showModal() : console.log("")}>
          <Text style={[styles.buttonText, { color: isChecked ? PRIMARYCOLOR : BORDERCOLOR1 }]}>Confirm</Text>
        </Button>
      </View>
      <Modal
        visible={visible}
        onDismiss={hideModal}
      >
        <View style={styles.modalView}>
          <Text
            style={styles.textApprove}>
            Approve the HIPAA Authorization
          </Text>

          <Text style={styles.textHipaa}>
            It is mandatory to read and confirm your HIPAA Authorization. If you
            haven't read it Kindly go back and Read the HIPAA Authorization.
            Then click continue to proceed.
          </Text>
          <View style={styles.modalButtonView}>
            <Button style={styles.popupButtonStyle} onPress={hideModal}>
              <Text style={styles.buttonText}>Back</Text>
            </Button>
            <Button
              onPress={() => navigateToEnrollment()}
              style={styles.popupButtonStyle}>
              <Text style={styles.buttonText}>Continue</Text>
            </Button>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = new StyleSheet.create({
  mainContainer: {
    backgroundColor: BACKGROUNDWHITE,
    flex: 1,
  },
  hipaaView: {
    flex: 1,
    margin: GlobalSize(10),
    //marginBottom: GlobalSize(100)
  },
  viewHead: {
    marginVertical: GlobalSize(8),
    marginLeft: GlobalSize(10),
    marginBottom: DEFAULTWIDTH * 0.05
  },
  rowContainer: {
    flexDirection: 'row'
  },
  headerText: {
    fontFamily: 'Inter-Bold',
    fontSize: fontSize(25),
    color: PRIMARYCOLOR,
  },
  normalText: {
    fontFamily: 'Inter-Regular',
    fontSize: fontSize(15),
    color: PRIMARYCOLOR,
  },
  bottomView: {
    left: 0,
    right: 0,
    position: 'absolute',
    bottom: Platform.OS == 'ios' ? DEFAULTWIDTH * 0.1 : DEFAULTWIDTH * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS == 'ios' ? GlobalSize(30) : GlobalSize(60),
    backgroundColor: BACKGROUNDWHITE,
    paddingTop: GlobalSize(8),
  },
  buttonStyle: {
    width: DEFAULTWIDTH * 0.90,
    borderWidth: 1,
    borderColor: BORDERCOLOR4,
    borderRadius: 8,
    backgroundColor: BACKGROUNDWHITE
  },
  buttonText: {
    fontFamily: 'Inter-Medium',
    fontSize: GlobalSize(14),
    color: PRIMARYCOLOR,
  },
  popupButtonStyle: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: BORDERCOLOR4,
    width: DEFAULTWIDTH * 0.35,
  },
  modalView: {
    margin: GlobalSize(10),
    width: DEFAULTWIDTH * 0.94,
    backgroundColor: PUREWHITE,
    borderRadius: 8,
    padding: GlobalSize(15),

  },
  textHipaa: {
    textAlign: 'center',
    color: TEXTCOLOR10
  },
  viewCheck: {
    flexDirection: 'row',
    marginBottom: GlobalSize(10),
    left: GlobalSize(-18)
  },
  modalButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: GlobalSize(10),
    marginTop: GlobalSize(20)
  },
  textApprove: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize(18),
    color: PRIMARYCOLOR,
    alignSelf: 'center',
    marginBottom: GlobalSize(10)
  }
});

export default HipaaValidationForm;


// import React from 'react';
// import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
// import { PUREBLACK } from '../../Constants/Colors/Colors';

// const AbsoluteButton = () => {
//   return (
//     <View style={styles.container}>
//       <ScrollView style={styles.scrollView}>
//         <Text style={{color:PUREBLACK}}>
//         "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

//         "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

//         "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

//         "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

//         "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

//         "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

//         "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

//         "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

//         "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"


//         </Text>
//       </ScrollView>
//       <TouchableOpacity style={styles.absoluteButton}>
//       <Text style={styles.buttonText}>Continue</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20, // Added padding to avoid button overlap
//   },
//   scrollView: {
//     flex: 1,
//     width: '100%',
//     marginBottom: 60, // Adjust this value to avoid button overlap
//   },
//   absoluteButton: {
//     position: 'absolute',
//     bottom: 20,  // You can adjust the position as per your requirement
//     right: 20,   // You can adjust the position as per your requirement
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });

// export default AbsoluteButton;
