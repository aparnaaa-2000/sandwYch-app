import { StyleSheet, Text, Image, View, ScrollView, SafeAreaView, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import DEFAULTSTYLES, { DEFAULTHEIGHT, DEFAULTWIDTH } from '../../../../Constants/styles/styles';
import { BACKGROUNDWHITE, BORDERCOLOR4, PRIMARYCOLOR, PUREWHITE, TEXTCOLOR5 } from '../../../../Constants/Colors/Colors';
import { FONTS } from '../../../../Constants/Fonts';
import { Check, Uncheck } from '../../../../../assets';
import SDOHTextInputWithout from '../../../Common/SDOHTextInput/SDOHTextInputWithOut';
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts';

const LivingSituation = ({
  Heading,
  LivingValue,
  setLivingValue,
  LivingArray,
  setLivingArray
}) => {

  switch (Heading) {
    case 0:
      imageSource = require('../../../../../assets/Images/SDOH/LIVING1.png');
      Description = 'What is your living situation today?';
      break;

    case 1:
      // imageSource = require('../../../../../assets/Images/SDOH/LIVING2.png');
      Description = 'Think about the place you live. Do you have any problems with any of the following?';
      break;
    case 2:
      imageSource = require('../../../../../assets/Images/SDOH/LIVING2.png');
      Description = 'How hard is it for you to pay for the very basics like food, housing, medicalcare, and heating? Would you say it is:';
      break;
    case 3:
      imageSource = require('../../../../../assets/Images/SDOH/LIVING3.png');
      Description = 'In the past 12 months has the electric, gas, oil, or water company threatened to shut off services in your home:'
      break;
  }


  const [HousingStability, setHousingStability] = useState([
    {
      id: 1,
      Title: 'I have a steady place to live',
      isSelected: false,
    },
    {
      id: 2,
      Title: 'I have a place to live today, but I am worried about losing it in the future',
      isSelected: false,
    },
    {
      id: 3,
      Title: 'I do not have a steady place to live (I am temporarily staying with others, in a hotel, in a shelter, living outside on the street, on a beach, in a car, abandoned building, bus or train station, or in a park)',
      isSelected: false,
    },
  ])


  const [FinancialStrain, setFinancialStrain] = useState([
    {
      id: 1,
      Title: 'Not hard at all',
      isSelected: false,
    },
    {
      id: 2,
      Title: 'Somewhat hard',
      isSelected: false,
    },
    {
      id: 3,
      Title: 'Very hard',
      isSelected: false,
    },
  ])




  const [Utilities, setUtilities] = useState([
    {
      id: 1,
      Title: 'Yes',
      isSelected: false,
    },
    {
      id: 2,
      Title: 'No',
      isSelected: false,
    },
    {
      id: 3,
      Title: 'already shut off',
      isSelected: false,
    },
  ])


  const [HousingProblemData, setHousingProblemData] = useState([
    {
      id: 1,
      Title: 'pests such as bugs, ants, or mice',
      isSelected: false,
    },
    {
      id: 2,
      Title: 'Mold',
      isSelected: false,
    },
    {
      id: 3,
      Title: 'lead paint or pipes',
      isSelected: false,
    },
    {
      id: 4,
      Title: 'lack of heat',
      isSelected: false,
    },
    {
      id: 5,
      Title: 'Oven or stove not working',
      isSelected: false,
    },
    {
      id: 7,
      Title: 'Smoke detectors missing or not working',
      isSelected: false,
    },
    {
      id: 8,
      Title: 'water leaks',
      isSelected: false,
    },
    {
      id: 9,
      Title: 'None of the above',
      isSelected: false,
    },
  ])


  const onPressHousingProblem = item => {
    const updatedData = HousingProblemData.map(dataItem => {
      if (dataItem.id === item.id) {
        return { ...dataItem, isSelected: !dataItem.isSelected };
      }
      return dataItem;
    });

    setHousingProblemData(updatedData);

    const selectedItems = updatedData.filter(item => item.isSelected);
    setLivingArray(selectedItems)
  };



  return (
    <SafeAreaView style={DEFAULTSTYLES.AndroidSafeArea}>
      <StatusBar
        backgroundColor={BACKGROUNDWHITE}
        barStyle={'dark-content'}
        style={{ flex: 0 }} />

      <ScrollView showsVerticalScrollIndicator={false}>
        {Heading !== 1 &&
          <View style={DEFAULTSTYLES.alignView}>

            <View style={styles.imageView}>
              <Image style={styles.imageStyle} source={imageSource} />
            </View>
          </View>}
        <View style={styles.viewDesc}>
          <Text style={[styles.textDesc, { marginLeft: GlobalSize(10) }]}>{Description}</Text>
        </View>
        {Heading == 0 ?
          <View>

            <SDOHTextInputWithout
              Heading={Heading}
              Data={HousingStability}
              radioBtnValue={LivingValue}
              setRadioBtnValue={setLivingValue}
            />


          </View> :
          Heading == 1 ?
            <View style={{ marginLeft: GlobalSize(10) }}>
              <View style={{ marginBottom: GlobalSize(10) }}>
                <Text style={[styles.textDesc, { fontFamily: FONTS.FontMedium, left: GlobalSize(5) }]}>Choose all that apply:</Text>
              </View>
              <View style={{ marginLeft: GlobalSize(10) }}>
                <FlatList
                  data={HousingProblemData}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => {
                    return (
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity
                          style={styles.radioButton}
                          onPress={() => onPressHousingProblem(item)}>
                          {item?.isSelected ? (

                            <Check style={{ marginTop: GlobalSize(4) }} />

                          ) : (

                            <Uncheck style={{ marginTop: GlobalSize(5) }} />

                          )}
                        </TouchableOpacity>

                        <View style={{ left: GlobalSize(10) }}>
                          <Text style={styles.textDesc}>{item.Title}</Text>
                        </View>
                      </View>
                    );
                  }}
                />
              </View>

            </View>
            : Heading == 2 ? <View>

              <SDOHTextInputWithout
                Heading={Heading}
                Data={Utilities}
                radioBtnValue={LivingValue}
                setRadioBtnValue={setLivingValue}
              />


            </View> :
              <View>

                <SDOHTextInputWithout
                  Heading={Heading}
                  Data={FinancialStrain}
                  radioBtnValue={LivingValue}
                  setRadioBtnValue={setLivingValue}
                />


              </View>}
      </ScrollView>
    </SafeAreaView>
  )
}

export default LivingSituation

const styles = StyleSheet.create({
  imageStyle: {
    width: DEFAULTWIDTH * 0.9,
    height: DEFAULTHEIGHT * 0.38,
    borderRadius: GlobalSize(10)
    //marginBottom: '4%',
  },
  imageView: {
    alignItems: 'center',
    marginBottom: GlobalSize(15)
  },
  textDesc: {
    fontSize: fontSize(14),
    fontFamily: FONTS.FontRegular,
    color: TEXTCOLOR5,
    // maxWidth: DEFAULTWIDTH * 0.8,
    lineHeight: GlobalSize(20)
  },
  radioIcon: {
    marginLeft: GlobalSize(10),
    width: GlobalSize(20),
    height: GlobalSize(20),
    borderRadius: GlobalSize(10),
    borderWidth: 2,
    borderColor: BORDERCOLOR4,
    marginRight: GlobalSize(8),
    backgroundColor: PUREWHITE,
  },
  radioIconSelected: {
    backgroundColor: PUREWHITE,
    width: GlobalSize(20),
    height: GlobalSize(20),
    borderRadius: GlobalSize(10),
    borderColor: PRIMARYCOLOR,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewDesc: {
    marginLeft: GlobalSize(6),
    marginRight: GlobalSize(10),
    marginBottom: DEFAULTHEIGHT * 0.01
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: GlobalSize(8),
  },
  radioBorder: {
    width: GlobalSize(10),
    height: GlobalSize(10),
    borderRadius: GlobalSize(5),
    borderWidth: 2,
    borderColor: PRIMARYCOLOR,
    backgroundColor: PRIMARYCOLOR,
  },
})