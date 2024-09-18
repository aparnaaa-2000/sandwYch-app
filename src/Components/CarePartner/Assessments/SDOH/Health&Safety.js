import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { BACKGROUNDWHITE, BORDERCOLOR1, BORDERCOLOR4, BOTTOMTABTEXT1, PRIMARYCOLOR, PUREWHITE,TEXTCOLOR5, TEXTCOLOR7, TEXTCOLOR10 } from '../../../../Constants/Colors/Colors';
import { DEFAULTWIDTH } from '../../../../Constants/styles/styles';
import { FONTS } from '../../../../Constants/Fonts';
import {Dropdown} from 'react-native-element-dropdown';
import SDOHTextInputWithout from '../../../Common/SDOHTextInput/SDOHTextInputWithOut';
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts';

const HealthSafety = ({HealthValue,setHealthValue,scaleValue,setScaleValue,WorkValue,setWorkValue,Heading}) => {

    const HealthData = [
        {
            id: 1,
            Title: 'Always Can',
            isSelected: false,
        },
        {
            id: 2,
            Title: "Sometimes Can't",
            isSelected: false,
        },
        {
            id: 3,
            Title: "Often Can't",
            isSelected: false,
        },
    ]

    const [Work, setWork] = useState([
        // Money and Resource 2
        {label: '0', value: '0'},
        {label: '10', value: '10'},
        {label: '20', value: '20'},
        {label: '30', value: '30'},
        {label: '40', value: '40'},
        {label: '50', value: '50'},
        {label: '60', value: '60'},
        {label: '90', value: '90'},
        {label: '120', value: '120'},
        {label: '150+', value: '150+'},
      ]);
    


    return (
        <View style={{ paddingLeft: 15 }}>

            <View style={{ marginBottom: 5 }}>
                <Text style={styles.textDesc}>Can you get medical care when you need it?</Text>
            </View>
            <View style={{ marginBottom: 10 }}>
            <SDOHTextInputWithout
                        Heading={Heading}
                        Data={HealthData}
                        radioBtnValue={HealthValue}
                        setRadioBtnValue={setHealthValue}
                    />
            </View>

            <View style={{ marginBottom: 10 }}>
                <Text style={styles.textDesc}>In the last 30 days, other than the activities you did for work, on
                    average, how many days per week did you engage in moderate exercise (like walking fast,
                    running, jogging, dancing, swimming, biking, or other similar activities)? Scale is 0 to 7.</Text>
            </View>

            <View style={styles.textInView}>
                <TextInput 
                style={styles.inputWrite}
                value={scaleValue}
                maxLength={1}
                keyboardType='number-pad'
                onChangeText={(text)=>setScaleValue(text)}/>
            </View>

            <View style={{ marginBottom: 10 }}>
                <Text style={styles.textDesc}>On average, how many minutes did you usually spend exercising at this
                    level on one of those days?</Text>
            </View>

            <View>
            <Dropdown
              style={styles.dropDnContainer}
              placeholderStyle={styles.placeholderS}
              itemTextStyle={styles.textArea}
              selectedTextStyle={styles.textArea}
              containerStyle={styles.dropView}
              data={Work}
              search={false}
              showsVerticalScrollIndicator={false}
              labelField="label"
              valueField="value"
              placeholder={'Select'}
              dropdownPosition='top'
              value={WorkValue}
              onChange={item => {
                setWorkValue(item.value)
              }}
            />
            </View>
        </View>
    )
}

export default HealthSafety;

const styles = StyleSheet.create({
    textDesc: {
        fontSize: fontSize(14),
        fontFamily: FONTS.FontRegular,
        color: TEXTCOLOR5,
        maxWidth: DEFAULTWIDTH * 0.9,
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
    inputWrite: {
        color:TEXTCOLOR10,
        fontSize: fontSize(12),
        fontFamily: FONTS.FontRegular,
        paddingLeft: GlobalSize(15),
      },
      textInView: {
        width: DEFAULTWIDTH* 0.89,
        height: DEFAULTWIDTH * 0.13,
        borderRadius: GlobalSize(8),
        borderColor: BORDERCOLOR1,
        borderWidth: 1,
        marginBottom: GlobalSize(15),
      },
      dropDnContainer: {
        backgroundColor: BACKGROUNDWHITE,
        width: DEFAULTWIDTH * 0.89,
        borderWidth: 1,
        borderRadius: GlobalSize(8),
        borderColor: BORDERCOLOR1,
        paddingLeft: GlobalSize(15),
        padding: GlobalSize(5),
        color: TEXTCOLOR7,
      },
      textArea: {
        fontSize: fontSize(14),
        fontFamily: FONTS.FontRegular,
        fontWeight: '400',
        color: TEXTCOLOR10,
      },
      placeholderS: {
        fontSize: fontSize(14),
        fontFamily: FONTS.FontRegular,
        color: BOTTOMTABTEXT1,
      },
      dropView: {
        borderRadius: GlobalSize(8),
        borderColor: BORDERCOLOR4,
        width: DEFAULTWIDTH * 0.9,
        padding: GlobalSize(5),
      },
})