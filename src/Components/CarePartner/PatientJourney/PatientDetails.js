import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TEXTCOLOR2, TEXTCOLOR10, TEXTCOLOR5 } from '../../../Constants/Colors/Colors'
import { FONTS } from '../../../Constants/Fonts'
import { DEFAULTWIDTH } from '../../../Constants/styles/styles'
import { Account } from '../../../../assets'
import { GlobalSize, fontSize } from '../../../Constants/ResponsiveFont/ResponsiveFonts'


export default function PatientDetails() {
    return (
        <View>
            <View style={styles.centerView}>

                <View style={{ marginRight: DEFAULTWIDTH * 0.05 }}>
                    <Account />
                </View>

                <View>
                    <Text style={styles.textName}>Betty Smith, 83</Text>
                    <Text style={styles.textId}>ID: 002145</Text>
                    <Text style={[styles.textId, { color:TEXTCOLOR2}]}>Cedars-Sinai Medical Center</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textName: {
        color: TEXTCOLOR10,
        fontFamily: FONTS.FontMedium,
        fontSize: fontSize(20)
    },
    textId: {
        fontSize: fontSize(14),
        color: TEXTCOLOR5,
        fontFamily: FONTS.FontMedium
    },
    centerView: {
        flexDirection: 'row',
        margin: GlobalSize(15),
        alignItems: 'center',
        justifyContent: 'center'
    }
})