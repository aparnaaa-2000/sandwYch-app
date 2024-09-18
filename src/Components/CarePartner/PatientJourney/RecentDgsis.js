import { StyleSheet, Text, View, Image, Platform } from 'react-native'
import React from 'react'
import { FONTS } from '../../../Constants/Fonts'
import { PRIMARYCOLOR, PUREWHITE, TEXTCOLOR5, TEXTCOLOR7, TEXTCOLORW } from '../../../Constants/Colors/Colors'
import DEFAULTSTYLES, { DEFAULTHEIGHT, DEFAULTWIDTH } from '../../../Constants/styles/styles'
import { BlueSts } from '../../../../assets'
import { GlobalSize, fontSize } from '../../../Constants/ResponsiveFont/ResponsiveFonts'

export default function RecentDgsis() {
    return (
        <View>
            <View style={{ marginLeft: DEFAULTWIDTH * 0.05, marginBottom: DEFAULTHEIGHT * 0.015 }}>
                <Text style={styles.textRecent}>Recent Diagnosis</Text>
            </View>

            <View style={styles.viewOut}>
                <View style={[
                    styles.cardDg,
                    Platform.OS == 'android'
                        ? DEFAULTSTYLES.androidShadow
                        : DEFAULTSTYLES.iosShadow,
                ]} >

                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Image
                                source={require('../../../../assets/Images/Heart.png')}
                                style={styles.imageV} />
                        </View>

                        <View>
                            <Text style={styles.textDgNm}>Alzheimer</Text>
                            <Text style={styles.textCode}>ICD Code - G30.9</Text>

                            <View style={styles.viewIcon}>
                                <BlueSts />
                                <Text style={styles.textPlace}>Flores Mark, MD</Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                                <View style={[styles.dateView, { marginRight: DEFAULTWIDTH * 0.165 }]}>
                                    <Text style={styles.textDT}>05/01/2024</Text>
                                </View>

                                <View style={styles.dateView}>
                                    <Text style={styles.textDT}>For 1 month</Text>
                                </View>
                            </View>
                        </View>


                    </View>



                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textRecent: {
        fontSize: fontSize(14),
        fontFamily: FONTS.FontMedium,
        color: TEXTCOLOR7
    },
    cardDg: {
        backgroundColor: PUREWHITE,
        width: DEFAULTWIDTH * 0.90,
        borderRadius: fontSize(15),
        padding: GlobalSize(18)
    },
    textDgNm: {
        fontSize: fontSize(16),
        fontFamily: FONTS.FontMedium,
        color: TEXTCOLOR5
    },
    textCode: {
        fontFamily: FONTS.FontRegular,
        fontSize: fontSize(10),
        color: TEXTCOLORW
    },
    textPlace: {
        fontSize: fontSize(12),
        fontFamily: FONTS.FontRegular,
        color: TEXTCOLORW,
        paddingLeft: GlobalSize(10)
    },
    dateView: {
        borderWidth: 1,
        borderRadius: GlobalSize(10),
        borderColor: PRIMARYCOLOR,
        width: DEFAULTWIDTH * 0.2,
        padding: GlobalSize(2),
        alignItems: 'center',
        justifyContent: 'center'
    },
    textDT: {
        fontSize: fontSize(10),
        color: PRIMARYCOLOR,
        fontFamily: FONTS.FontMedium
    },
    viewOut: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: DEFAULTHEIGHT * 0.04
    },
    imageV: {
        width: GlobalSize(80),
        height: GlobalSize(90),
        marginRight: GlobalSize(10)
    },
    viewIcon: {
        flexDirection: 'row',
        marginTop: GlobalSize(8),
        marginBottom: GlobalSize(10)
    }
})