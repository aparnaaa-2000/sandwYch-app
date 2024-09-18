import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

//COLORS IMPORTED GLOBALLY
import {
  BACKGROUNDWHITE,
  BORDERCOLOR5,
  BOTTOMTABTEXT1,
  LINECOLOR1,
  TEXTCOLOR5,
  TEXTCOLOR7,
  TEXTCOLOR8,
  BORDERCOLOR4
} from '../../../../../Constants/Colors/Colors';

import { FONTS } from '../../../../../Constants/Fonts';

//COMPONENTS
import FamilyHome from '../../../../../Components/CarePartner/Assessments/SDOH/Family&Home';
import MoneyResources6 from '../../../../../Components/CarePartner/Assessments/SDOH/Money&R6';
import Personal from '../../../../../Components/CarePartner/Assessments/SDOH/Personal';
import SocialCommunity from '../../../../../Components/CarePartner/Assessments/SDOH/Social&Community';
import OptionalQ from '../../../../../Components/CarePartner/Assessments/SDOH/Optional';

import { DEFAULTWIDTH } from '../../../../../Constants/styles/styles';
import LivingSituation from '../../../../../Components/CarePartner/Assessments/SDOH/LivingSituation';
import Food from '../../../../../Components/CarePartner/Assessments/SDOH/Food';
import Safety from '../../../../../Components/CarePartner/Assessments/SDOH/Safety';
import HealthSafety from '../../../../../Components/CarePartner/Assessments/SDOH/Health&Safety';
import MobilityAccess from '../../../../../Components/CarePartner/Assessments/SDOH/Mobility&Access';
import SubstanceUse from '../../../../../Components/CarePartner/Assessments/SDOH/SubstanceUse';

import MoreAbout from '../../../../../Components/CarePartner/Assessments/SDOH/MoreAbout';
import MentalHealthScreening from '../../../../../Components/CarePartner/Assessments/SDOH/MentalHealthScreening';
import { GlobalSize, fontSize } from '../../../../../Constants/ResponsiveFont/ResponsiveFonts';



const SDOHSelection = ({ navigation, route }) => {


  const [currentIndex, setCurrentIndex] = useState(0);

  const [TotalIndex, setTotalIndex] = useState(1);
  const [Length, setLength] = useState(0);

  const [valueDay, setValueDay] = useState(null);


  const [SelectTitle, setSelectTitle] = useState(
    route?.params?.selectedItems[currentIndex]?.name,
  );
  const [PersQ1, setPersQ1] = useState(null);
  const [NotAns, setNotAns] = useState('No');

  const [ValueFam, setValueFam] = useState(null);
  const [ValueFam2, setValueFam2] = useState(null);

  const [OptState1, setOptState1] = useState('');
  const [OptState2, setOptState2] = useState('');
  const [OptState3, setOptState3] = useState('');
  const [SocialState, setSocialState] = useState(null);

  const [MoneyRs1, setMoneyRs1] = useState(null);
  const [MoneyRs2, setMoneyRs2] = useState(null);
  const [TextInRs2, setTextInRs2] = useState(null);
  const [MoneyRsRB2, setMoneyRsRB2] = useState(null);
  const [TextInRs5, setTextInRs5] = useState(null);
  const [MoneyRsRB5, setMoneyRsRB5] = useState(null);
  const [MoneyRs6, setMoneyRs6] = useState(null);
  const [MoneyRs7, setMoneyRs7] = useState(null);

  // LIVING SITUATION STATE
const [LivingValue,setLivingValue] = useState(null)
const [LivingArray,setLivingArray] = useState([])

  //FOOD STATE
  const [FoodValue, setFoodValue] = useState('')

  //SAFETY QUESTIONS

  const [SafetyValue, setSafetyValue] = useState('')


  //HEALTH AND SAFETY

  const [HealthValue, setHealthValue] = useState('')
  const [scaleValue, setScaleValue] = useState('')
  const [WorkValue, setWorkValue] = useState('')

  //MOBILITY AND ACCESS
  const [MobilityValue, setMobilityValue] = useState(null)

  //SUBSTANCES USE

  const [SubstanceValue, setSubstanceValue] = useState(null)
  //SOCIAL AND COMMUNITY 

  const [SocialValue, setSocialValue] = useState(null)


  //MORE ABOUT YOU

  const [LangValue, setLangValue] = useState(null)
  const [LangInput, setLangInput] = useState(null)
  const [veteranValue, setVeteranValue] = useState(null)

  const [CogDisableValue, setCogDisableValue] = useState(null)
  const [CogDisableInput, setCogDisableInput] = useState(null)
  const [CogDisableSelect, setCogDisableSelect] = useState(null)

  const [InStoryValue, setInStoryValue] = useState(null)
  const [InstorySelection, setInstorySelection] = useState(null)
  const [InstoryInput, setInstoryInput] = useState(null)

 

  // MENTAL HEALTH SCREENING
  const [ScreenValue, setScreenValue] = useState(null)

  const [Fam, setFam] = useState([
    { label: '5 Members', value: '5 Members' },
    { label: 'More than 5', value: 'More than 5' },
  ]);

  const RouteLevel = route?.params?.selectedItems[Length]?.name;

  switch (route?.params?.selectedItems[currentIndex]?.name) {
    case 'Personal Characteristics':
      imageSource = require('../../../../../../assets/Images/SDOH/PSC1.png');
      break;
    case 'Family & Home':
      imageSource = require('../../../../../../assets/Images/SDOH/SDOH2.png');
      break;
    case 'Money & Resources':
      imageSource = require('../../../../../../assets/Images/SDOH/SDOH3.png');
      break;
    case 'Social & Community':
      imageSource = require('../../../../../../assets/Images/SDOH/SDOH1.png');
      break;
    case 'Living Situation':
      imageSource = require('../../../../../../assets/Images/SDOH/SDOH3.png');
      break;
    case 'Food':
      imageSource = require('../../../../../../assets/Images/SDOH/SDOH3.png');
      break;
    case 'Safety':
      imageSource = require('../../../../../../assets/Images/SDOH/SDOH3.png');
      break;
    case 'Optional':
      Heading = 'Optional Questions';
      break;
    default:
      break;
  }

  const handlePrevious = () => {
  ClearValues()
    if (currentIndex > 0) {
      // Move to the previous index
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
    else if (TotalIndex > 1) {
      // Move to the last index of the previous array
      setLength(prevLength => prevLength - 1);
      setTotalIndex(prevIndex => prevIndex - 1);
      setCurrentIndex(route.params.selectedItems[TotalIndex - 2].length - 1);
    }
    else {
      navigation.goBack();
    }
  };

  const CheckingData = () => {
    { console.log("vetrean value..........",CogDisableInput,CogDisableSelect,CogDisableValue) }
    if (
      route?.params?.selectedItems[Length]?.name ==
      'Personal Characteristics' &&
      valueDay !== null || PersQ1 !== null
    ) {
      handleNext();
    }
    else if (
      (route?.params?.selectedItems[Length]?.name == 'Family & Home' &&
        NotAns == 'Yes' ||
      ValueFam !== null || ValueFam2 !== null)
    ) {
      handleNext();
    } 

    else if (
      route?.params?.selectedItems[Length]?.name == 'Money & Resources' &&
      MoneyRs1 !== null ||  MoneyRs2 && TextInRs2 || MoneyRsRB2 == 'Yes' || TextInRs5 && MoneyRsRB5 == 'Yes'
      || MoneyRsRB5 == 'No' || MoneyRs6?.length > 0
    ) {
      handleNext();
    }
   else if (
      route?.params?.selectedItems[Length]?.name == 'Social & Community' &&
      SocialState) {
      handleNext();
    }
    else if (
      route?.params?.selectedItems[Length]?.name == 'Living Situation' &&
      LivingValue !== null || LivingArray?.length>0 ) {
      handleNext();
    }

    else if (
      route?.params?.selectedItems[Length]?.name == 'Food' &&
      FoodValue
    ) {
      handleNext();
    }

    else if (
      route?.params?.selectedItems[Length]?.name == 'Safety' &&
      SafetyValue
    ) {
      handleNext();
    }

    else if (
      route?.params?.selectedItems[Length]?.name == 'Health & Safety' &&
      HealthValue && scaleValue && WorkValue
    ) {
      handleNext();
    }

    else if (
      route?.params?.selectedItems[Length]?.name == 'Substance use' &&
     SubstanceValue
    ) {
      handleNext();
    }
    else if (
      route?.params?.selectedItems[Length]?.name == 'Mobility & Access' &&
      MobilityValue
    ) {
      handleNext();
    }
    else if (
      route?.params?.selectedItems[Length]?.name == 'Mental Health Screening' &&
      ScreenValue
    ) {
      handleNext();
    }

    else if (
      route?.params?.selectedItems[Length]?.name == 'More about you' &&
      LangInput && LangValue == 'Yes' || LangValue == 'No' || veteranValue ||
      CogDisableValue == 1 && CogDisableInput 
      || CogDisableValue !== 1 && CogDisableValue !== null)
      {
        handleNext();
      }

       else if (
      route?.params?.selectedItems[Length]?.name == 'Optional' &&
      OptState1 &&
      OptState2 &&
      OptState3
    ) {
      handleNext();
    }

  };

const ClearValues = ()=>{
  setValueDay(null);
  setPersQ1(null);
  setNotAns(null);
  setValueFam(null);
  setValueFam2(null);
  setSocialState(null);
  setMoneyRs1(null);
  setMoneyRs2(null);
  setTextInRs2(null);
  setMoneyRsRB2(null);

  setMoneyRsRB5(null);
  setTextInRs5(null);
  setMoneyRs6(null);
  setOptState1(null);
  setOptState2(null);
  setOptState3(null);
  setMoneyRs7(null);
  setLivingValue(null)
  setLivingArray([]);
  setFoodValue(null)

  setSafetyValue(null)
  setSubstanceValue(null)
  setSocialValue(null)

  setMobilityValue(null)

  setLangInput(null)
  setLangValue(null)

  setVeteranValue(null)

  setScreenValue(null)

  setCogDisableValue(null)
  setCogDisableInput(null)
  setCogDisableSelect(null)
}
  const handleNext = () => {
    ClearValues()
    if (
      currentIndex < route?.params?.selectedItems[Length]?.length - 1 &&
      TotalIndex !== route?.params?.selectedItems?.length
    ) {
      setCurrentIndex(prevIndex => prevIndex + 1);
      console.log('inside this.............');
    } else if (
      currentIndex == route?.params?.selectedItems[Length]?.length - 1 &&
      TotalIndex !== route?.params?.selectedItems?.length
    ) {
      setLength(prevLength => prevLength + 1);
      setTotalIndex(prevIndex => prevIndex + 1);
      setCurrentIndex(0);
      console.log(
        'inside else if................',
        currentIndex,
        route?.params?.selectedItems[Length]?.length - 1,
      );
    } else if (
      TotalIndex == route?.params?.selectedItems?.length &&
      currentIndex == route?.params?.selectedItems[Length]?.length - 1
    ) {
      navigation.navigate('EnrollmentProgress');
      console.log('else if totalIndex equal.............', TotalIndex, currentIndex,);
    } else if (TotalIndex == route?.params?.selectedItems?.length) {
      setCurrentIndex(prevIndex => prevIndex + 1);
      //setLength(prevLength => prevLength + 1)
      console.log('else if totalIndex equal2.............Tota===', TotalIndex, route?.params?.selectedItems?.length);
    }
  };

  {
    console.log('Values........................', NotAns, ValueFam, ValueFam2);
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: BACKGROUNDWHITE }}>
      <View style={styles.mainContainer}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <View>
            {route?.params?.selectedItems[Length]?.name !== 'Optional' ? (
              <View>
                <Text style={styles.heading}>
                  {route?.params?.selectedItems[Length]?.name}
                </Text>
              </View>
            ) : (
              <View>
                <Text style={styles.heading}>Optional Questions</Text>
              </View>
            )}
           
            <View style={{ marginTop: DEFAULTWIDTH * 0.05 }}>
              {route?.params?.selectedItems[Length]?.name ==
                'Personal Characteristics' ? (
                <View>
                  <Personal
                    Heading={currentIndex}
                    valueDay={valueDay}
                    setValueDay={setValueDay}
                    PersQ1={PersQ1}
                    setPersQ1={setPersQ1}
                  />
                </View>
              ) : route?.params?.selectedItems[Length]?.name ==
                'Family & Home' ? (
                <View>
                  <FamilyHome
                    NotAns={NotAns}
                    setNotAns={setNotAns}
                    Heading={currentIndex}
                    ValueFam={ValueFam}
                    setValueFam={setValueFam}
                    ValueFam2={ValueFam2}
                    fam={Fam}
                    setValueFam2={setValueFam2}
                  />
                </View>
              ) : route?.params?.selectedItems[Length]?.name ==
                'Money & Resources' ? (
                <View>
                  <MoneyResources6
                    Heading={currentIndex}
                    MoneyRs1={MoneyRs1}
                    MoneyRs2={MoneyRs2}
                    setMoneyRs1={setMoneyRs1}
                    setMoneyRs2={setMoneyRs2}
                    MoneyRsRB2={MoneyRsRB2}
                    setMoneyRsRB2={setMoneyRsRB2}
                    TextInRs2={TextInRs2}
                    setTextInRs2={setTextInRs2}
          
                    MoneyRsRB5={MoneyRsRB5}
                    setMoneyRsRB5={setMoneyRsRB5}
                    TextInRs5={TextInRs5}
                    setTextInRs5={setTextInRs5}
                    MoneyRs6={MoneyRs6}
                    setMoneyRs6={setMoneyRs6}
                    // MoneyRs7={MoneyRs7}
                    // setMoneyRs7={setMoneyRs7}
                  />
                </View>
              ) : route?.params?.selectedItems[Length]?.name ==
                'Social & Community' ? (
                <View>
                  <SocialCommunity
                    Heading={currentIndex}
                    SocialState={SocialState}
                    setSocialState={setSocialState}
                  />
                </View>
              ) : route?.params?.selectedItems[Length]?.name ==
                'Living Situation' ? (
                <View>
                  <LivingSituation
                    Heading={currentIndex}
                    LivingValue={LivingValue}
                    setLivingValue={setLivingValue}
                    LivingArray={LivingArray}
                    setLivingArray={setLivingArray}
                  />
                </View>
              ) : route?.params?.selectedItems[Length]?.name ==
                'Food' ? (
                <View>
                  <Food
                    Heading={currentIndex}
                    FoodValue={FoodValue}
                    setFoodValue={setFoodValue}
                  />
                </View>) :
                route?.params?.selectedItems[Length]?.name ==
                  'Safety' ? (
                  <View>
                    <Safety
                      Heading={currentIndex}
                      SafetyValue={SafetyValue}
                      setSafetyValue={setSafetyValue}
                    />
                  </View>) :
                  route?.params?.selectedItems[Length]?.name ==
                    'Health & Safety' ? (
                    <View>
                      <HealthSafety
                        HealthValue={HealthValue}
                        setHealthValue={setHealthValue}
                        scaleValue={scaleValue}
                        setScaleValue={setScaleValue}
                        WorkValue={WorkValue}
                        setWorkValue={setWorkValue}
                      />
                    </View>)
                    : route?.params?.selectedItems[Length]?.name ==
                      'Substance use' ? (
                      <View>
                        <SubstanceUse
                          Heading={currentIndex}
                          SubstanceValue={SubstanceValue}
                          setSubstanceValue={setSubstanceValue}
                        />
                      </View>)
                      : route?.params?.selectedItems[Length]?.name ==
                        'Mobility & Access' ? (
                        <View>
                          <MobilityAccess
                            Heading={currentIndex}
                            MobilityValue={MobilityValue}
                            setMobilityValue={setMobilityValue}
                          />
                        </View>)
                          : route?.params?.selectedItems[Length]?.name == 'Mental Health Screening' ? (
                            <MentalHealthScreening
                              ScreenValue={ScreenValue}
                              setScreenValue={setScreenValue} />
                          )
                            : route?.params?.selectedItems[Length]?.name ==
                              'More about you' ? (
                              <View>
                                <MoreAbout
                                  Heading={currentIndex}
                                  LangInput={LangInput}
                                  setLangInput={setLangInput}
                                  LangValue={LangValue}
                                  setLangValue={setLangValue}
                                
                                  veteranValue={veteranValue}
                                  setVeteranValue={setVeteranValue}
                               
                               
                                  CogDisableValue={CogDisableValue}
                                  setCogDisableValue={setCogDisableValue}
                                  CogDisableInput={CogDisableInput}
                                  setCogDisableInput={setCogDisableInput}
                                  CogDisableSelect={CogDisableSelect}
                                  setCogDisableSelect={setCogDisableSelect}
                                     
                                />
                              </View>)
                              : route?.params?.selectedItems[Length]?.name == 'Optional' ? (
                                <OptionalQ
                                  OptState1={OptState1}
                                  setOptState1={setOptState1}
                                  OptState2={OptState2}
                                  setOptState2={setOptState2}
                                  OptState3={OptState3}
                                  setOptState3={setOptState3}
                                />
                              ) : null}
            </View>
          </View>
        </ScrollView>

        <View style={styles.bottomBar}>
          <Button style={styles.buttonStyle} onPress={() => handlePrevious()}>
            <Text style={styles.buttonTextStyle}>Back</Text>
          </Button>

          <Button
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('EnrollmentProgress')}>
            <Text style={styles.buttonTextStyle}>Save & Exit</Text>
          </Button>

          {RouteLevel == 'Personal Characteristics' ? (
            <Button
              onPress={() => CheckingData()}
              style={[
                styles.buttonStyle,
                {
                  borderColor: valueDay
                    ? BORDERCOLOR4
                    : PersQ1
                      ? BORDERCOLOR4
                      : LINECOLOR1,
                },
              ]}>
              <Text
                style={[
                  styles.buttonTextStyle,
                  {
                    color: valueDay
                      ? TEXTCOLOR7
                      : PersQ1
                        ? TEXTCOLOR7
                        : BORDERCOLOR4,
                  },
                ]}>
                Next
              </Text>
            </Button>
          ) : RouteLevel == 'Family & Home' ? (
            <Button
              onPress={() => CheckingData()}
              style={[
                styles.buttonStyle,
                {
                  borderColor: ValueFam
                    ? BORDERCOLOR4
                    : NotAns == 'Yes'
                      ? BORDERCOLOR4
                      : ValueFam == null && NotAns == 'No'
                        ? LINECOLOR1
                        : ValueFam2
                          ? BORDERCOLOR4
                          : LINECOLOR1,
                },
              ]}>
              <Text
                style={[
                  styles.buttonTextStyle,
                  {
                    color: ValueFam
                      ? TEXTCOLOR7
                      : NotAns == 'Yes'
                        ? TEXTCOLOR7
                        : ValueFam == null && NotAns == 'No'
                          ? BORDERCOLOR4
                          : ValueFam2
                            ? TEXTCOLOR7
                            : BORDERCOLOR4,
                  },
                ]}>
                Next
              </Text>
            </Button>
          )
            : RouteLevel == 'Money & Resources' ? (
              <Button
                onPress={() => CheckingData()}
                style={[
                  styles.buttonStyle,
                  {
                    borderColor:
                    
                        MoneyRs2 && TextInRs2 ||
                        MoneyRsRB2 == 'Yes' ||
                        TextInRs5 && MoneyRsRB5 == 'Yes' ||
                        MoneyRsRB5 == 'No' ||
                        MoneyRs6?.length > 0 ||
                        MoneyRs1 

                        ? BORDERCOLOR4
                        : LINECOLOR1,
                  },
                ]}>
                <Text
                  style={[
                    styles.buttonTextStyle,
                    {
                      color:
                    
                          MoneyRs2 && TextInRs2 ||
                          MoneyRsRB2 == 'Yes' ||
                          TextInRs5 && MoneyRsRB5 == 'Yes' ||
                          MoneyRsRB5 == 'No' ||
                          MoneyRs6?.length > 0 ||
                           MoneyRs1 
                          ? TEXTCOLOR7
                          : BORDERCOLOR4,
                    },
                  ]}>
                  Next
                </Text>
                {console.log("money rsbe..........", MoneyRsRB2)}
              </Button>) : RouteLevel == 'Optional' ? (
                <Button
                  onPress={() => CheckingData()}
                  style={[
                    styles.buttonStyle,
                    {
                      borderColor:
                        OptState1 && OptState2 && OptState3
                          ? BORDERCOLOR4
                          : LINECOLOR1,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.buttonTextStyle,
                      {
                        color:
                          OptState1 && OptState2 && OptState3
                            ? TEXTCOLOR7
                            : BORDERCOLOR4,
                      },
                    ]}>
                    Next
                  </Text>
                </Button>
              ) : RouteLevel == 'Social & Community' ? (
                <Button
                  onPress={() => CheckingData()}
                  style={[
                    styles.buttonStyle,
                    {
                      borderColor:
                        SocialState
                          ? BORDERCOLOR4
                          : LINECOLOR1,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.buttonTextStyle,
                      {
                        color:
                          SocialState
                            ? TEXTCOLOR7
                            : BORDERCOLOR4,
                      },
                    ]}>
                    Next
                  </Text>
                </Button>
              ) :
              RouteLevel == 'Living Situation' ? (
                <Button
                  onPress={() => CheckingData()}
                  style={[
                    styles.buttonStyle,
                    {
                      borderColor:
                      LivingValue || LivingArray?.length>0
                          ? BORDERCOLOR4
                          : LINECOLOR1,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.buttonTextStyle,
                      {
                        color:
                          LivingValue || LivingArray?.length>0
                            ? TEXTCOLOR7
                            : BORDERCOLOR4,
                      },
                    ]}>
                    Next
                  </Text>
                </Button>
              ) :
                RouteLevel == 'Food' ? (
                  <Button
                    onPress={() => CheckingData()}
                    style={[
                      styles.buttonStyle,
                      {
                        borderColor:
                          FoodValue
                            ? BORDERCOLOR4
                            : LINECOLOR1,
                      },
                    ]}>
                    <Text
                      style={[
                        styles.buttonTextStyle,
                        {
                          color:
                            FoodValue
                              ? TEXTCOLOR7
                              : BORDERCOLOR4,
                        },
                      ]}>
                      Next
                    </Text>
                  </Button>
                ) :
                  RouteLevel == 'Safety' ? (
                    <Button
                      onPress={() => CheckingData()}
                      style={[
                        styles.buttonStyle,
                        {
                          borderColor:
                            SafetyValue
                              ? BORDERCOLOR4
                              : LINECOLOR1,
                        },
                      ]}>
                      <Text
                        style={[
                          styles.buttonTextStyle,
                          {
                            color:
                              SafetyValue
                                ? TEXTCOLOR7
                                : BORDERCOLOR4,
                          },
                        ]}>
                        Next
                      </Text>
                    </Button>
                  ) :
                    RouteLevel == 'Health & Safety' ? (
                      <Button
                        onPress={() => CheckingData()}
                        style={[
                          styles.buttonStyle,
                          {
                            borderColor:
                              HealthValue && scaleValue && WorkValue
                                ? BORDERCOLOR4
                                : LINECOLOR1,
                          },
                        ]}>
                        <Text
                          style={[
                            styles.buttonTextStyle,
                            {
                              color:
                                HealthValue && scaleValue && WorkValue
                                  ? TEXTCOLOR7
                                  : BORDERCOLOR4,
                            },
                          ]}>
                          Next
                        </Text>
                      </Button>
                    ) :
                      RouteLevel == 'Substance use' ? (
                        <Button
                          onPress={() => CheckingData()}
                          style={[
                            styles.buttonStyle,
                            {
                              borderColor:
                               SubstanceValue
                                  ? BORDERCOLOR4
                                  : LINECOLOR1,
                            },
                          ]}>
                          <Text
                            style={[
                              styles.buttonTextStyle,
                              {
                                color:
                                SubstanceValue
                                    ? TEXTCOLOR7
                                    : BORDERCOLOR4,
                              },
                            ]}>
                            Next
                          </Text>
                        </Button>
                      ) :
                        RouteLevel == 'Mobility & Access' ? (
                          <Button
                            onPress={() => CheckingData()}
                            style={[
                              styles.buttonStyle,
                              {
                                borderColor:
                                  MobilityValue
                                    ? BORDERCOLOR4
                                    : LINECOLOR1,
                              },
                            ]}>
                            <Text
                              style={[
                                styles.buttonTextStyle,
                                {
                                  color:
                                    MobilityValue
                                      ? TEXTCOLOR7
                                      : BORDERCOLOR4,
                                },
                              ]}>
                              Next
                            </Text>
                          </Button>
                        ) :
                          RouteLevel == 'Social & Community Support' ? (
                            <Button
                              onPress={() => CheckingData()}
                              style={[
                                styles.buttonStyle,
                                {
                                  borderColor:
                                    SocialValue
                                      ? BORDERCOLOR4
                                      : LINECOLOR1,
                                },
                              ]}>
                              <Text
                                style={[
                                  styles.buttonTextStyle,
                                  {
                                    color:
                                      SocialValue
                                        ? TEXTCOLOR7
                                        : BORDERCOLOR4,
                                  },
                                ]}>
                                Next
                              </Text>
                            </Button>
                          ) :
                            RouteLevel == 'Mental Health Screening' ? (
                              <Button
                                onPress={() => CheckingData()}
                                style={[
                                  styles.buttonStyle,
                                  {
                                    borderColor:
                                      ScreenValue
                                        ? BORDERCOLOR4
                                        : LINECOLOR1,
                                  },
                                ]}>
                                <Text
                                  style={[
                                    styles.buttonTextStyle,
                                    {
                                      color:
                                        ScreenValue
                                          ? TEXTCOLOR7
                                          : BORDERCOLOR4,
                                    },
                                  ]}>
                                  Next
                                </Text>
                              </Button>
                            ) :
                              RouteLevel == 'More about you' ? (
                                <Button
                                  onPress={() => CheckingData()}
                                  style={[
                                    styles.buttonStyle,
                                    {
                                      borderColor:
                                        LangValue == 'No' ||
                                          LangValue == 'Yes' && LangInput  ||
                                          veteranValue ||
                                          CogDisableValue == 1 && CogDisableInput 
                                          || CogDisableValue !== 1 && CogDisableValue !== null
                                          

                                          ? BORDERCOLOR4
                                          : LINECOLOR1,
                                    },
                                  ]}>
                                  <Text
                                    style={[
                                      styles.buttonTextStyle,
                                      {
                                        color:
                                          LangValue == 'No' ||
                                            LangValue == 'Yes' && LangInput ||  
                                            veteranValue !== null ||
                                            CogDisableValue == 1 && CogDisableInput 
                                            || CogDisableValue !== 1 && CogDisableValue !== null
                                            
                                            ? TEXTCOLOR7
                                            : BORDERCOLOR4,
                                      },
                                    ]}>
                                    Next
                                  </Text>
                                  {console.log("LangInput...........................",LangInput)}
                                </Button>
                              ) : (
                                <Button
                                  onPress={() => CheckingData()}
                                  style={[
                                    styles.buttonStyle,
                                    {
                                      borderColor: 
                                         MoneyRs2 && TextInRs2
                                          ? BORDERCOLOR4
                                          : MoneyRs1 == null &&
                                            TextInRs2 == null &&
                                            MoneyRsRB2 == 'Yes'
                                            ? BORDERCOLOR4
                                                : TextInRs5
                                                  ? BORDERCOLOR4
                                                  : MoneyRsRB5 == 'No'
                                                    ? BORDERCOLOR4
                                                    : MoneyRs6?.length > 0
                                                      ? BORDERCOLOR4
                                                      :   MoneyRs1?
                                                        BORDERCOLOR4
                                                        : LivingValue || LivingArray?.length>0?
                                                          BORDERCOLOR4

                                                          : InStoryValue !== 'Yes' ?
                                                            BORDERCOLOR4
                                                            : LINECOLOR1,
                                    },
                                  ]}>
                                  <Text
                                    style={[
                                      styles.buttonTextStyle,
                                      {
                                        color:
                                      
                                          MoneyRs2 && TextInRs2
                                            ? TEXTCOLOR7
                                            : MoneyRs1 == null &&
                                              TextInRs2 == null &&
                                              MoneyRsRB2 == 'Yes'
                                              ? TEXTCOLOR7
                                                  : TextInRs5
                                                    ? TEXTCOLOR7
                                                    : MoneyRsRB5 == 'No'
                                                      ? TEXTCOLOR7
                                                      : MoneyRs6?.length > 0
                                                        ? TEXTCOLOR7
                                                    :  MoneyRs1?
                                                          TEXTCOLOR7
                                                          : LivingValue || LivingArray?.length>0 ?
                                                         
                                                              TEXTCOLOR7

                                                                  : SafetyValue1 ?
                                                                    TEXTCOLOR7
                                                                    : SafetyValue2 ?
                                                                      TEXTCOLOR7
                                                                      : SafetyValue3 ?
                                                                        TEXTCOLOR7
                                                                        : SafetyValue4 ?
                                                                          TEXTCOLOR7
                                                                          : HealthValue && scaleValue && WorkValue ?

                                                                            TEXTCOLOR7
                                                                            : SubstanceValue ?
                                                                                    TEXTCOLOR7
                                                                                    : SocialValue ?

                                                                                      TEXTCOLOR7
                                                                                      : LangValue == 'No' ?
                                                                                        TEXTCOLOR7
                                                                                        : LangInput !== null && LangValue == 'Yes' ?
                                                                                          TEXTCOLOR7
                                                                                          : veteranValue ?
                                                                                            TEXTCOLOR7
                                                                                                : InStoryValue == 'Yes' && InstoryInput !== null ?
                                                                                                  TEXTCOLOR7
                                                                                                  : InStoryValue !== 'Yes' && InstoryInput == null ?
                                                                                                    TEXTCOLOR7
                                                                                                    : BORDERCOLOR4


                                      },
                                    ]}>
                                    Next
                                  </Text>
                                </Button>
                              )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = new StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: GlobalSize(5),
    backgroundColor: BACKGROUNDWHITE,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: GlobalSize(20),
    backgroundColor:BACKGROUNDWHITE,
    marginTop:GlobalSize(45)
  },
  placeholderS: {
    fontSize: fontSize(14),
    fontFamily: FONTS.FontRegular,
    color: BOTTOMTABTEXT1,
  },
  heading: {
    fontSize: fontSize(26),
    fontFamily: FONTS.FontBold,
    color: TEXTCOLOR8,
    marginLeft:DEFAULTWIDTH*0.03,
    marginTop: '5%',
  },
  subHeading: {
    color: TEXTCOLOR5,
    fontSize: fontSize(14),
    fontFamily: FONTS.FontMedium,
    marginLeft: fontSize(7),
    // marginBottom: '5%',
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
    fontSize: fontSize(14),
  },
  imageStyle: {
    width: DEFAULTWIDTH * 0.9,
    height: DEFAULTWIDTH * 0.82,
    //marginBottom: '4%',
  },
  difChooser: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '2%',
  },
  difChooserButtonText: {
    color: BOTTOMTABTEXT1,
    fontSize: GlobalSize(20),
    fontFamily: FONTS.FontMedium,
    top: GlobalSize(2)
  },
  difChooserButton: {
    borderWidth: 1,
    borderRadius: GlobalSize(10),
    borderColor: BORDERCOLOR5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  difChooserText: {
    fontSize: fontSize(14),
    color: TEXTCOLOR5,
    fontFamily: FONTS.FontRegular,
  },
  textDesc: {
    fontSize: fontSize(14),
    fontFamily: FONTS.FontRegular,
    color: TEXTCOLOR5,
    lineHeight: GlobalSize(20),
  },
});

export default SDOHSelection;
