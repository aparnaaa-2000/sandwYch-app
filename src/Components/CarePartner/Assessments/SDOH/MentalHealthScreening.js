import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { BORDERCOLOR4, PRIMARYCOLOR, PUREWHITE, TEXTCOLOR5 } from '../../../../Constants/Colors/Colors'
import { FONTS } from '../../../../Constants/Fonts'
import { DEFAULTWIDTH } from '../../../../Constants/styles/styles'
import { Options, RadioData } from '../../../../Constants/Texts/Assessments/SDOH/SDOH'
import SDOHTextInputWithout from '../../../Common/SDOHTextInput/SDOHTextInputWithOut'
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts'

const MentalHealthScreening = ({ ScreenValue, setScreenValue }) => {


    const onPressScreenValue = (itemId) => {
        setScreenValue(itemId)
    }
    return (
        <View style={{ marginLeft: 10 }}>

            <View>
                <View style={{ marginBottom: 10 }}>
                    <Text style={[styles.textDesc, { fontSize: 14 }]}>Over the last 2 weeks, how often have you been bothered by the
                        following problems?</Text>
                </View>
                {Options.map((item) => {
                    return (
                        <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                            <Text style={[styles.textDesc, { marginRight: 10 }]}>{item.Number}</Text>
                            <Text style={styles.textDesc}>{item.Title}</Text>
                        </View>
                    )
                })}

                <View style={{ marginTop: 10 }}>
                <SDOHTextInputWithout
                        Data={RadioData}
                        radioBtnValue={ScreenValue}
                        setRadioBtnValue={setScreenValue}
                    />
                </View>
            </View>
        </View>
    )
}

export default MentalHealthScreening

const styles = StyleSheet.create({
    textDesc: {
        fontSize: fontSize(13),
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
})