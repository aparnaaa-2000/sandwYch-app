import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react';
import { BORDERCOLOR4, PRIMARYCOLOR, PUREWHITE, TEXTCOLOR5 } from '../../../../Constants/Colors/Colors'
import { DEFAULTWIDTH, DEFAULTHEIGHT } from '../../../../Constants/styles/styles';
import { FONTS } from '../../../../Constants/Fonts';
import SDOHTextInputWithout from '../../../Common/SDOHTextInput/SDOHTextInputWithOut';
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts';

const MobilityAccess = ({ Heading, MobilityValue, setMobilityValue }) => {


    const TransportationData= [
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

    ]

    const EmploymentData = [
        {
            id: 1,
            Title: 'I do not need or want help',
            isSelected: false,
        },
        {
            id: 2,
            Title: 'Yes, help finding work',
            isSelected: false,
        },
        {
            id: 3,
            Title: 'Yes, help keeping work',
            isSelected: false,
        },
    ]




    switch (Heading) {
        case 0:
            imageSource = require('../../../../../assets/Images/SDOH/PSC5.png');
            Description = 'In the past 12 months, has lack of reliable transportation kept you from medical appointments, meetings, work or from getting things needed for daily living?';
            break;

        case 1:
            imageSource = require('../../../../../assets/Images/SDOH/PSC6.png');
            Description = 'Do you want help finding or keeping work or a job?';
            break;

    }

    return (
        <View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.imageView}>
                    <Image style={styles.imageStyle} source={imageSource} />
                </View>
            </View>
            <View style={styles.descView}>
                <Text style={[styles.textDesc, { marginLeft: 10 }]}>{Description}</Text>
            </View>

            {Heading == 0 ?
                <View>
                    <View style={{ marginLeft: 10 }}>
                        <SDOHTextInputWithout
                            Heading={Heading}
                            Data={TransportationData}
                            radioBtnValue={MobilityValue}
                            setRadioBtnValue={setMobilityValue}
                        />
                    </View>

                </View> :
                Heading == 1 ?
                    <View style={{ marginLeft: 10 }}>
                        <SDOHTextInputWithout
                            Heading={Heading}
                            Data={EmploymentData}
                            radioBtnValue={MobilityValue}
                            setRadioBtnValue={setMobilityValue}
                        />
                    </View> : null}
        </View>
    )
}

export default MobilityAccess

const styles = StyleSheet.create({
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
    imageStyle: {
        width: DEFAULTWIDTH * 0.9,
        height: DEFAULTWIDTH * 0.82,
        //marginBottom: '4%',
    },
    mainView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: GlobalSize(10),
    },
    imageView: {
        alignItems: 'center',
        width: DEFAULTWIDTH * 0.9,
        backgroundColor: PUREWHITE,
        borderRadius: GlobalSize(10),
        elevation: 2,
        marginBottom: GlobalSize(15),
    },
    textDesc: {
        fontSize: fontSize(14),
        fontFamily: FONTS.FontRegular,
        color: TEXTCOLOR5,
        maxWidth: DEFAULTWIDTH * 0.9,
        lineHeight: GlobalSize(20)
    },
    descView: {
        marginLeft: GlobalSize(6),
        marginRight: GlobalSize(10),
        marginBottom: DEFAULTHEIGHT * 0.01
    }
})