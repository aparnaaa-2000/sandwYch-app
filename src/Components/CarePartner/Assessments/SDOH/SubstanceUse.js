import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react';
import { PUREWHITE, TEXTCOLOR5 } from '../../../../Constants/Colors/Colors'
import { DEFAULTWIDTH, DEFAULTHEIGHT } from '../../../../Constants/styles/styles';
import { FONTS } from '../../../../Constants/Fonts';
import { SubstanceData } from '../../../../Constants/Texts/Assessments/SDOH/SDOH';
import SDOHTextInputWithout from '../../../Common/SDOHTextInput/SDOHTextInputWithOut';
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts';

const SubstanceUse = ({
    Heading,
    SubstanceValue,
    setSubstanceValue
}) => {

    switch (Heading) {
        case 0:
            imageSource = require('../../../../../assets/Images/SDOH/PSC5.png');
            Description = 'How many times in the past 12 months have you had 5 or more drinks in a day (males) or 4 or more drinks in a day (females)? One drink is 12 ounces of beer, 5 ounces of wine,or 1.5 ounces of 80-proof spirits.'
            break;

        case 1:
            imageSource = require('../../../../../assets/Images/SDOH/PSC6.png');
            Description = 'How many times in the past 12 months have you used tobacco products (like cigarettes, cigars, snuff, chew, electronic cigarettes):'
            break;

        case 2:
            imageSource = require('../../../../../assets/Images/SDOH/PSC6.png');
            Description = 'How many times in the past year have you used prescription drugs for non-medical reasons?';
            break;

        case 3:
            imageSource = require('../../../../../assets/Images/SDOH/PSC6.png');
            Description = 'How many times in the past year have you used illegal drugs?';
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

            <View style={{ marginLeft: 10 }}>
                <SDOHTextInputWithout
                    Data={SubstanceData}
                    Heading={Heading}
                    radioBtnValue={SubstanceValue}
                    setRadioBtnValue={setSubstanceValue}
                />

            </View>
        </View>
    )
}

export default SubstanceUse;

const styles = StyleSheet.create({
    imageStyle: {
        width: DEFAULTWIDTH * 0.8,
        height: DEFAULTWIDTH * 0.6,
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
        padding: GlobalSize(10)
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