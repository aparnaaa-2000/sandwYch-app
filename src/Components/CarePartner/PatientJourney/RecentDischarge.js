import React from 'react'
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { FONTS } from '../../../Constants/Fonts'
import { BACKGROUNDWHITE, PRIMARYCOLOR, PUREWHITE, TEXTCOLOR5, TEXTCOLOR7 } from '../../../Constants/Colors/Colors'
import DEFAULTSTYLES, { DEFAULTWIDTH } from '../../../Constants/styles/styles'
import { BlueBed, BlueCalender, BlueHeart, BlueSts } from '../../../../assets'
import { GlobalSize, fontSize } from '../../../Constants/ResponsiveFont/ResponsiveFonts';

export default function RecentDischarge() {
    return (
        <View>

            <View style={{ marginLeft: DEFAULTWIDTH * 0.05, marginBottom: GlobalSize(10) }}>
                <Text style={styles.textRD}>Recent Discharge</Text>
            </View>

            <View style={styles.viewAlign}>
                <View style={[
                    styles.mainCard,
                    Platform.OS == 'android' ?
                        DEFAULTSTYLES.androidShadow :
                        DEFAULTSTYLES.iosShadow]}>

                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Image
                                source={require('../../../../assets/Images/Summary.png')}
                                style={{ width: GlobalSize(100), height: GlobalSize(100) }}
                            />
                        </View>

                        <View style={{ marginLeft: GlobalSize(10) }}>

                            <View style={styles.subView}>
                                <BlueCalender />
                                <Text style={styles.textDate}>05/01/2024</Text>
                            </View>

                            <View style={styles.subView}>
                                <BlueBed />
                                <Text style={styles.textSub}>Aster Medicity</Text>
                            </View>

                            <View style={styles.subView}>
                                <BlueHeart />
                                <Text style={styles.textSub}>Alzheimer</Text>
                            </View>

                            <View style={{ flexDirection: 'row',alignItems:'center' }}>
                                <BlueSts />
                                <Text style={styles.textSub}>Flores Mark, MD</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.cardMonth}>
                        <Text style={styles.textMonth}>For 1 month</Text>
                    </View>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textRD: {
        fontFamily: FONTS.FontMedium,
        fontSize: fontSize(15),
        color: TEXTCOLOR7
    },
    mainCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: DEFAULTWIDTH * 0.90,
        backgroundColor: PUREWHITE,
        borderRadius: GlobalSize(15),
        padding: GlobalSize(18),
    },
    textMonth: {
        fontFamily: FONTS.FontRegular,
        fontSize: fontSize(10),
        color: PRIMARYCOLOR
    },
    cardMonth: {
        borderColor: PRIMARYCOLOR,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: BACKGROUNDWHITE,
        height: GlobalSize(20),
        paddingLeft: GlobalSize(5),
        paddingRight: GlobalSize(5),
        borderRadius: GlobalSize(10),
        right:GlobalSize(10)
    },
    textDate: {
        fontSize: fontSize(13),
        color: PRIMARYCOLOR,
        fontFamily: FONTS.FontSemiB,
        paddingLeft: GlobalSize(8)
    },
    textSub: {
        fontSize: fontSize(13),
        color: TEXTCOLOR5,
        fontFamily: FONTS.FontRegular,
        paddingLeft: GlobalSize(8)
    },
    viewAlign: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: GlobalSize(10)
    },
    subView: {
        flexDirection: 'row',
        marginBottom: GlobalSize(10),
        alignItems:'center'
    }
})