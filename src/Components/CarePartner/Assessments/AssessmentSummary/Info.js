import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { BACKGROUNDCOLORGREEN, BACKGROUNDCOLORGREYS, BACKGROUNDCOLORORANGE, BORDERCOLOR9, PRIMARYCOLOR, TEXTCOLOR15 } from '../../../../Constants/Colors/Colors'
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts'
import { FONTS } from '../../../../Constants/Fonts'
import { GreyUpArrow, GreyDownArrow, WhiteCondition, WhitePartner, WhitePerson } from '../../../../../assets'
import { DEFAULTHEIGHT } from '../../../../Constants/styles/styles'

const Info = () => {

    const [PersonalInfo, setPersonalInfo] = useState(false)
    const [CarePartnerInfo, setCarePartnerInfo] = useState(false)
    const [Conditions, setConditions] = useState(false)

    return (

        <View>

            <TouchableOpacity
                style={styles.touchCard}
                onPress={() => setPersonalInfo(!PersonalInfo)}>
                <View style={styles.imgView}>
                    <ImageBackground
                        source={require('../../../../../assets/Images/summary/blueRect.png')}
                        style={styles.imgBack}>
                        <WhitePerson width={18} height={18} />
                    </ImageBackground>
                </View>

                <View>
                    <Text style={styles.textHead}>Personal Information</Text>
                </View>

                <View>
                    {PersonalInfo ?
              <GreyUpArrow width={20} height={20} /> :
              <GreyDownArrow width={20} height={20} />}
                </View>

            </TouchableOpacity>

            {PersonalInfo &&
                <View style={styles.cardView}>

                    <View>
                        <Text style={styles.textType}>Patient Name</Text>
                        <Text style={styles.textType}>DOB</Text>
                        <Text style={styles.textType}>Gender</Text>
                        <Text style={styles.textType}>Zipcode</Text>
                    </View>

                    <View>
                        <Text style={styles.textValue}>Betty Smith</Text>
                        <Text style={styles.textValue}>02/28/1945</Text>
                        <Text style={styles.textValue}>Female</Text>
                        <Text style={styles.textValue}>74758</Text>
                    </View>
                </View>
            }

            <TouchableOpacity
                style={[styles.touchCard, { backgroundColor: BACKGROUNDCOLORORANGE }]}
                onPress={() => setCarePartnerInfo(!CarePartnerInfo)}>
           <View style={styles.imgView}>
                    <ImageBackground
                        source={require('../../../../../assets/Images/summary/OrangeRect.png')}
                        style={styles.imgBack}>
                        <WhitePartner width={18} height={18} />
                    </ImageBackground>
                </View>

                <View>
                    <Text style={styles.textHead}>Primary Carepartner info</Text>
                </View>

                <View>
                    {CarePartnerInfo ?
                        <GreyUpArrow width={20} height={20} /> :
                        <GreyDownArrow width={20} height={20} />}
                </View>

            </TouchableOpacity>

            {CarePartnerInfo &&
                <View style={styles.cardView}>

                    <View>
                        <Text style={styles.textType}>Primary Carepartner</Text>
                        <Text style={styles.textType}>Relation</Text>
                        <Text style={styles.textType}>Email</Text>
                        <Text style={styles.textType}>Phone</Text>
                    </View>

                    <View>
                        <Text style={styles.textValue}>Joseph</Text>
                        <Text style={styles.textValue}>Son</Text>
                        <Text style={styles.textValue}>Joseph123@gmail.com</Text>
                        <Text style={styles.textValue}>+1 5865147895</Text>
                    </View>
                </View>}

            <TouchableOpacity
                style={[styles.touchCard, { backgroundColor: BACKGROUNDCOLORGREEN }]}
                onPress={() => setConditions(!Conditions)}>
                <View style={styles.imgView}>
                    <ImageBackground
                        source={require('../../../../../assets/Images/summary/GreenRect.png')}
                        style={styles.imgBack}>
                        <WhiteCondition width={18} height={18} />
                    </ImageBackground>
                </View>

                <View>
                    <Text style={styles.textHead}>Conditions</Text>
                </View>

                <View>
                    {Conditions ?
                      <GreyUpArrow width={20} height={20} /> :
                      <GreyDownArrow width={20} height={20} />}
                </View>

            </TouchableOpacity>

            {Conditions &&
                <View style={[styles.cardView, { flexDirection: 'column', justifyContent: 'flex-start' }]}>

                    <View>
                        <Text style={[styles.textType, { marginBottom: 0 }]}>Health Challenges</Text>

                        <Text style={[styles.textValue, { textAlign: 'left' }]}>Cancer - Behavioral Problem</Text>
                    </View>

                    <View>
                        <Text style={[styles.textType, { marginBottom: 0 }]}>Main Diagnosis Care and Support</Text>
                        <Text style={[styles.textValue, { textAlign: 'left' }]}>Alzheimer</Text>
                    </View>
                </View>}

        </View>
    )
}

export default Info

const styles = StyleSheet.create({
    cardView: {
        borderWidth: 1,
        borderRadius: GlobalSize(8),
        borderColor: BORDERCOLOR9,
        padding: GlobalSize(15),
        paddingBottom: GlobalSize(5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: GlobalSize(10)
    },
    textType: {
        fontFamily: FONTS.FontRegular,
        fontSize: fontSize(14),
        color: TEXTCOLOR15,
        marginBottom: GlobalSize(10)
    },
    textValue: {
        fontFamily: FONTS.FontSemiB,
        fontSize: fontSize(14),
        color: PRIMARYCOLOR,
        marginBottom: GlobalSize(10),
        textAlign: 'right'
    },
    touchCard: {
        borderWidth: 1,
        borderRadius: GlobalSize(8),
        borderColor: BORDERCOLOR9,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: BACKGROUNDCOLORGREYS,
        //padding: GlobalSize(13),
        marginBottom: 1,
        height: DEFAULTHEIGHT * 0.07,
        paddingRight: GlobalSize(15)
    },
    textHead: {
        color: PRIMARYCOLOR,
        fontFamily: FONTS.FontMedium,
        fontSize: fontSize(18)
    },
    imgView: {
        borderBottomLeftRadius: GlobalSize(8),
        borderTopLeftRadius: GlobalSize(8),
        overflow: 'hidden'
    },
    imgBack: {
        width: GlobalSize(48),
        height: GlobalSize(48),
        alignItems: 'center',
        justifyContent: 'center'
    }
})