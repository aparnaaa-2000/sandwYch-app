import { Platform, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { AVALONG, BETTYSMITHPROFILE } from '../../../Constants/DummyImages'
import { PRIMARYCOLOR, PUREWHITE, TEXTCOLOR10, TEXTCOLOR5 } from '../../../Constants/Colors/Colors'
import DEFAULTSTYLES, { DEFAULTWIDTH } from '../../../Constants/styles/styles'
import { FONTS } from '../../../Constants/Fonts'
import { GlobalSize, fontSize } from '../../../Constants/ResponsiveFont/ResponsiveFonts'

const PatientList = () => {

    const Patients = [
        {
            id: 1,
            Name: 'Betty Smith',
            Email: 'Bettysmith@gmail.com',
            Image: BETTYSMITHPROFILE,
            Count: '85'
        },
        {
            id: 2,
            Name: 'Ava Loung',
            Email: 'Avaloung13@gmail.com',
            Image: AVALONG,
            Count: '78'
        }
    ]
    return (
        <View style={DEFAULTSTYLES.alignView}>
            {Patients.map((item) => {
                return (
                    <View
                        style={[styles.cardView,
                        Platform.OS == 'android' ?
                            DEFAULTSTYLES.androidShadow :
                            DEFAULTSTYLES.iosShadow]}>

                        <View>
                            <Image
                                source={{ uri: item.Image }}
                                style={styles.imageStyle} />
                        </View>

                        <View style={{left:GlobalSize(-18)}}>
                            <Text style={styles.textName}>{item.Name}</Text>
                            <Text style={styles.textEm}>{item.Email}</Text>
                        </View>

                        <View>
                            <Text style={[styles.textName, { color: PRIMARYCOLOR }]}>{item.Count}</Text>
                        </View>

                    </View>
                )
            })}
        </View>
    )
}

export default PatientList

const styles = StyleSheet.create({
    cardView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: PUREWHITE,
        padding: GlobalSize(15),
        borderRadius: GlobalSize(15),
        width: DEFAULTWIDTH * 0.90,
        marginBottom: GlobalSize(10),
        paddingRight:DEFAULTWIDTH*0.06
    },
    textName: {
        fontSize: fontSize(14),
        fontFamily: FONTS.FontMedium,
        color: TEXTCOLOR10
    },
    textEm: {
        fontSize: fontSize(14),
        fontFamily: FONTS.FontRegular,
        color: TEXTCOLOR5
    },
    imageStyle: {
        width: GlobalSize(54),
        height: GlobalSize(54),
        borderRadius: GlobalSize(27)
    }
})