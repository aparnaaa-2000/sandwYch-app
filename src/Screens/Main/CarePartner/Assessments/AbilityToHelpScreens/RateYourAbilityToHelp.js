import { View, Text, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity, Image, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { Button } from 'react-native-paper';

//COLORS IMPORTED GLOBALLY
import {
  BORDERCOLOR4,
  BORDERCOLOR5,
  BOTTOMTABTEXT1,
  LINECOLOR1,
  TEXTCOLOR5,
  TEXTCOLOR7,
  TEXTCOLOR8,
  BACKGROUNDWHITE,
  PRIMARYCOLOR,
} from '../../../../../Constants/Colors/Colors';
import { FONTS } from '../../../../../Constants/Fonts';

//CONSTANT TEXTS
import { RateYourAbilityText } from '../../../../../Constants/Texts';

//MODAL IMPORTED FROM COMPONENTS
import SupportModal from '../../../../../Components/CarePartner/Assessments/AbilityToHelp/SupportModal';
import { DEFAULTWIDTH } from '../../../../../Constants/styles/styles';
import { GlobalSize, fontSize } from '../../../../../Constants/ResponsiveFont/ResponsiveFonts';


const RateYourAbilityToHelp = ({ navigation, route }) => {

  const dataLength = route?.params?.selectedItems?.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedButton, setSelectedButton] = useState(null);
  const [ModalOpen, setModalOpen] = useState(false)
  const [Message, setMessage] = useState(null)

  switch (route?.params?.selectedItems[currentIndex]?.name) {
    case 'Eating':
      imageSource = require('../../../../../../assets/Images/AbilityToHelp1/Eating.png');
      break;
    case 'Dressing':
      imageSource = require('../../../../../../assets/Images/AbilityToHelp1/Dressing.png');
      break;
    case 'Transfer & Mobility':
      imageSource = require('../../../../../../assets/Images/AbilityToHelp1/Transfre&Mobiity.png');
      break;
    case 'Bathing':
      imageSource = require('../../../../../../assets/Images/AbilityToHelp1/Bathing.png');
      break;
    case 'Dental Hygene':
      imageSource = require('../../../../../../assets/Images/AbilityToHelp1/DentalHygene.png');
      break;
    case 'Toileting':
      imageSource = require('../../../../../../assets/Images/AbilityToHelp1/Toileting.png');
      break;
    case 'Cooking':
      imageSource = require('../../../../../../assets/Images/AbilityToHelp1/Cooking.png');
      break;
    case 'House Cleaning':
      imageSource = require('../../../../../../assets/Images/AbilityToHelp1/HouseCleaning.png');
      break;
    case 'Taking Medication':
      imageSource = require('../../../../../../assets/Images/AbilityToHelp1/TakingMedication.png');
      break;
    case 'Laundry':
      imageSource = require('../../../../../../assets/Images/AbilityToHelp1/Laundry.png');
      break;
    case 'Service Coordination':
      imageSource = require('../../../../../../assets/Images/AbilityToHelp1/Shopping.png');
      break;
    case 'Personal Finance':
      imageSource = require('../../../../../../assets/Images/AbilityToHelp1/PersonalFinance.png');
      break;
    case 'Communication':
      imageSource = require('../../../../../../assets/Images/AbilityToHelp1/ServiceCordination.png');
      break;
    case 'Transportation':
      imageSource = require('../../../../../../assets/Images/AbilityToHelp1/Transportation.png');
      break;
    case 'Catheter':
      imageSource = require('../../../../../../assets/Images/MedicalAndNursingTasks/Catheter.png');
      break;
    case 'Injections':
      imageSource = require('../../../../../../assets/Images/MedicalAndNursingTasks/Injection.png');
      break;
    case 'Prepping Food':
      imageSource = require('../../../../../../assets/Images/MedicalAndNursingTasks/PreppingFoods.png');
      break;
    case 'Tube Feeding':
      imageSource = require('../../../../../../assets/Images/MedicalAndNursingTasks/TubeFeeding.png');
      break;
    case 'Wound Care':
      imageSource = require('../../../../../../assets/Images/MedicalAndNursingTasks/WoundCare.png');
      break;
    case 'Blood Pressure':
      imageSource = require('../../../../../../assets/Images/MedicalAndNursingTasks/BloodPressure.png');
      break;
    default:
      imageSource = require('../../../../../../assets/Images/AbilityToHelp1/Eating.png');
      break;
  }

  const handleNext = () => {
    setSelectedButton(null)

    if (currentIndex < dataLength - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
    else if (route?.params?.mainText == 'Ability to Help 1') {
      navigation.navigate('AbilityToHelp1', { mainText: 'Ability to Help 2' });
    }
    else if (route?.params?.mainText == 'Ability to Help 2') {
      navigation.navigate('AbilityToHelp1', { mainText: 'Medical & Nursing Task' });
    }
    else if (route.params.mainText == 'Medical & Nursing Task') {
      navigation.navigate('AbilityToHelp1', { mainText: 'Medical Assistance' });
    }
    else if (route.params.mainText == 'Medical Assistance') {
      navigation.navigate('AbilityToHelp1', { mainText: 'Supervision and Safety' });
    }
    else if (route.params.mainText == 'Supervision and Safety') {
      navigation.navigate('AbilityToHelp1', { mainText: 'SDOH Assessment', });
    }
    else if (currentIndex == dataLength - 1) {
      navigation.navigate('ResearchPrompt')
    }
  };

  const handlePrevious = () => {

    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
    else if (route?.params?.mainText == 'Ability to Help 2') {
      navigation.navigate('AbilityToHelp1', { mainText: 'Ability to Help 2', selectedItems: route?.params?.selectedItems });
    }
    else if (route?.params?.mainText == 'Medical & Nursing Task') {
      navigation.navigate('AbilityToHelp1', { mainText: 'Medical & Nursing Task', selectedItems: route?.params?.selectedItems });
    }
    else {
      navigation.navigate('AbilityToHelp1', { mainText: 'Ability to Help 1', selectedItems: route?.params?.selectedItems });
    }
  };


  const handleButtonPress = (buttonNumber) => {
    // Check if the button is already selected
    if (selectedButton === buttonNumber) {
      // Deselect the button
      setSelectedButton(null);
    } else {
      // Select the button
      setSelectedButton(buttonNumber);
    }
  };

  const OpenModal = () => {
    setModalOpen(true)
    setTimeout(() => {
      setModalOpen(false)
    }, 1000)
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor={BACKGROUNDWHITE} barStyle={'dark-content'} style={{ flex: 0 }} />
      <View>
        <View style={{ marginLeft: GlobalSize(10) }}>
          <Text style={styles.heading}>{route?.params?.selectedItems[currentIndex]?.name}</Text>
          <Text style={styles.subHeading} onPress={() => setModalOpen(true)}>{RateYourAbilityText}</Text>
        </View>
        <Image style={styles.imageStyle} source={imageSource} />
        <View style={{ marginHorizontal: GlobalSize(15) }}>

          <View style={styles.difChooser}>


            <TouchableOpacity
              style={[styles.difChooserButton, { borderColor: selectedButton == 1 ? PRIMARYCOLOR : BORDERCOLOR5 }]}
              onPress={() => { handleButtonPress(1), setMessage("I can't help them."), OpenModal() }}>
              <Text style={styles.difChooserButtonText}>1</Text>
            </TouchableOpacity>


            <TouchableOpacity
              style={[styles.difChooserButton, { borderColor: selectedButton == 2 ? PRIMARYCOLOR : BORDERCOLOR5 }]}
              onPress={() => { handleButtonPress(2), setMessage("I help but need training or extra support."), OpenModal() }}>
              <Text style={styles.difChooserButtonText}>2</Text>
            </TouchableOpacity>


            <TouchableOpacity
              style={[styles.difChooserButton, { borderColor: selectedButton == 3 ? PRIMARYCOLOR : BORDERCOLOR5 }]}
              onPress={() => { handleButtonPress(3), setMessage("I'm helping them"), OpenModal() }}>
              <Text style={styles.difChooserButtonText}>3</Text>
            </TouchableOpacity>


          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.difChooserText}>Some Help</Text>
            <Text style={styles.difChooserText}>A Lot of Help</Text>
          </View>
        </View>

      </View>


      <View style={styles.bottomBar}>
        <Button
          style={styles.buttonStyle}
          onPress={() => handlePrevious()}>
          <Text style={styles.buttonTextStyle}>Back</Text>
        </Button>
        <Button style={styles.buttonStyle} onPress={() => navigation.navigate('EnrollmentProgress')}>
          <Text style={styles.buttonTextStyle}>Save & Exit</Text>
        </Button>

        <Button
          onPress={() => selectedButton ? handleNext() : console.log("null")}
          style={[styles.buttonStyle, { borderColor: !selectedButton ? LINECOLOR1 : BORDERCOLOR4 }]}>
          <Text style={[styles.buttonTextStyle, { color: selectedButton ? TEXTCOLOR7 : BORDERCOLOR4 }]}>Next</Text>
        </Button>
      </View>

      <SupportModal
        Task={route?.params?.selectedItems[currentIndex]?.name}
        ModalOpen={ModalOpen}
        Message={Message}
        setModalOpen={setModalOpen} />
    </SafeAreaView>
  );
};

const styles = new StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: GlobalSize(5),
    backgroundColor: BACKGROUNDWHITE
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: GlobalSize(20),
    marginLeft: GlobalSize(5),
    width: '100%',
  },
  heading: {
    fontSize: fontSize(24),
    fontFamily: FONTS.FontBold,
    color: TEXTCOLOR8,
    marginLeft: GlobalSize(7),
    marginTop: '5%',
  },
  subHeading: {
    color: TEXTCOLOR5,
    fontSize: GlobalSize(14),
    fontFamily: FONTS.FontMedium,
    marginLeft: GlobalSize(8),
  },
  buttonStyle: {
    width: GlobalSize(110),
    height: GlobalSize(40),
    borderWidth: 1,
    borderColor: BORDERCOLOR4,
    borderRadius: GlobalSize(8),
  },
  buttonTextStyle: {
    color: TEXTCOLOR7,
    fontFamily: FONTS.FontMedium,
    fontSize: GlobalSize(14),
  },
  imageStyle: {
    width: '100%',
    height: '65%',
    marginBottom:GlobalSize(20),
  },
  difChooser: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  difChooserButtonText: {
    color: BOTTOMTABTEXT1,
    fontSize: GlobalSize(20),
    fontFamily: FONTS.FontMedium,
    //top: GlobalSize(2)
  },
  difChooserButton: {
    borderWidth: 1,
    borderRadius: GlobalSize(10),
    borderColor: BORDERCOLOR5,
    alignItems: 'center',
    justifyContent: 'center',
    width: GlobalSize(100),
    padding: GlobalSize(15)
    // height: GlobalSize(65)
  },
  difChooserText: {
    fontSize: fontSize(14),
    color: TEXTCOLOR5,
    fontFamily: FONTS.FontRegular,
    top: GlobalSize(5)
  },
  TextBtn: {
    fontSize: fontSize(14),
    color: PRIMARYCOLOR,
    fontFamily: FONTS.FontMedium,
    textAlign: 'center'
  },

  TouchBtn: {
    marginBottom: DEFAULTWIDTH * 0.05,
    width: DEFAULTWIDTH * 0.84,
    height: DEFAULTWIDTH * 0.15,
    backgroundColor: BACKGROUNDWHITE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    padding: GlobalSize(5),
    marginLeft: GlobalSize(10),
    marginRight: GlobalSize(10),
    elevation: 2,
  },
});

export default RateYourAbilityToHelp;
