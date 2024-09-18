import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import {
  PUREWHITE,
  TEXTCOLOR10,
  TEXTCOLOR5,
  TEXTCOLOR7,
} from '../../../../Constants/Colors/Colors';
import { FONTS } from '../../../../Constants/Fonts';
import SDOHDropdown from '../../../Common/SDOHTextInput/SDOHDropdown';
import DEFAULTSTYLES, { DEFAULTHEIGHT, DEFAULTWIDTH } from '../../../../Constants/styles/styles';
import { StressData, LonelinessData, SocialData } from '../../../../Constants/Texts/Assessments/SDOH/SDOH';
import SDOHTextInputWithout from '../../../Common/SDOHTextInput/SDOHTextInputWithOut';
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts';

const SocialCommunity = ({
  Heading,
  SocialState,
  setSocialState
}) => {

  const [Fam, setFam] = useState([
    { label: 'Once in a week', value: 'Once in a week' },
    { label: 'Daily', value: 'Daily' },
  ]);

  const [SC3, setSC3] = useState([
    { label: 'Yes', value: 'Yes' },
    { label: 'No', value: 'No' },
  ]);

  switch (Heading) {
    case 0:
      imageSource = require('../../../../../assets/Images/SDOH/C1.png');
      Description =
        'How often do you see or talk to people that you care about and feel close to? (For example: talking to friends on the phone, visiting friends or family, going to church or club meetings)';
      break;

    case 1:
      imageSource = require('../../../../../assets/Images/SDOH/C2.png');
      Description =
        'Stress is when someone feels tense, nervous, anxious, or can’t sleep at night because their mind is troubled. How stressed are you?';
      break;

    case 2:
      imageSource = require('../../../../../assets/Images/SDOH/C3.png');
      Description =
        'Within the last two weeks, have you had little interest or pleasure in doing things?';
      break;

    case 3:
      imageSource = require('../../../../../assets/Images/SDOH/C4.png');
      Description =
        'Within the last two weeks, have you been feeling down, depressed, or hopeless?';
      break;

    case 4:
      imageSource = require('../../../../../assets/Images/SDOH/PSC5.png');
      Description = 'If for any reason you need help with day-to-day activities such as bathing, preparing meals, shopping, managing finances, etc., do you get the help you need?';
      break;

    case 5:
      imageSource = require('../../../../../assets/Images/SDOH/PSC6.png');
      Description = "How often do you feel lonely or isolated from those around you?";
      break;

    case 6:
      imageSource = require('../../../../../assets/Images/SDOH/PSC6.png');
      Description = "Stress means a situation in which a person feels tense, restless, nervous, or anxious, or is unable to sleep at night because his or her mind is troubled all the time. Do you feel this kind of stress these days?";
      break;
  }
  return (
    <>

      <>
        <View
          style={DEFAULTSTYLES.alignView}>
          <View
            style={styles.imageView}>
            <Image style={styles.imageStyle} source={imageSource} />
          </View>
        </View>

        <View style={styles.dropBottom}>
          <Text style={[styles.textDesc, { marginLeft: GlobalSize(10) }]}>
            {Description}
          </Text>
        </View>
      </>

      {Heading == 0 ? (
        <View>
          <View
            style={styles.dropOut}>
            <SDOHDropdown
              data={Fam}
              value={SocialState}
              setValue={setSocialState} />

          </View>
        </View>
      ) : Heading == 1 ? (
        <View
          style={styles.dropOut}>
          <SDOHDropdown
            data={Fam}
            value={SocialState}
            setValue={setSocialState} />
        </View>
      ) : Heading == 2 ? (
        <View
          style={styles.dropOut}>
          <SDOHDropdown
            data={SC3}
            value={SocialState}
            setValue={setSocialState} />
        </View>
      ) : Heading == 3 ? (
        <View
          style={styles.dropOut}>
          <SDOHDropdown
            data={SC3}
            value={SocialState}
            setValue={setSocialState} />
        </View>
      ) :
        Heading == 4 ?

          <View style={{ marginLeft: GlobalSize(10), marginBottom: GlobalSize(10) }}>
            <SDOHTextInputWithout
              Heading={Heading}
              Data={SocialData}
              radioBtnValue={SocialState}
              setRadioBtnValue={setSocialState}
            />
          </View> :
          Heading == 5 ?
            <View style={{ marginLeft: GlobalSize(10) }}>
              <SDOHTextInputWithout
                Heading={Heading}
                Data={LonelinessData}
                radioBtnValue={SocialState}
                setRadioBtnValue={setSocialState}
              />
            </View> :
            Heading == 6 ?
              <View style={{ marginLeft: GlobalSize(10) }}>
                <SDOHTextInputWithout
                  Heading={Heading}
                  Data={StressData}
                  radioBtnValue={SocialState}
                  setRadioBtnValue={setSocialState}
                />
              </View> : null}
    </>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: DEFAULTWIDTH * 0.9,
    height: DEFAULTHEIGHT*0.38,
  },
  textDesc: {
    fontSize: fontSize(14),
    fontFamily: FONTS.FontRegular,
    color: TEXTCOLOR5,
    lineHeight:GlobalSize(20)
  },
  imageView: {
    alignItems: 'center',
    width: DEFAULTWIDTH * 0.9,
    backgroundColor: PUREWHITE,
    borderRadius: GlobalSize(10),
    elevation: 2,
    marginBottom: GlobalSize(15),
  },
  dropBottom: {
    marginLeft: GlobalSize(6),
    marginRight: GlobalSize(10),
    marginBottom: GlobalSize(5)
  },
  dropOut: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: GlobalSize(10),
  }
});
export default SocialCommunity;
