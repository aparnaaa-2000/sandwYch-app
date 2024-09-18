import { FlatList, StyleSheet, Text, View, Image, Platform, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { PRIMARYCOLOR, PUREWHITE, TEXTCOLOR5, TEXTCOLOR7, TEXTCOLORW } from '../../../Constants/Colors/Colors'
import { FONTS } from '../../../Constants/Fonts'
import DEFAULTSTYLES, { DEFAULTHEIGHT, DEFAULTWIDTH } from '../../../Constants/styles/styles'
import { BlueSts } from '../../../../assets'
import OngoingDgModal from '../../CarePartner/PatientJourney/OngoingDgModal'
import { GlobalSize, fontSize } from '../../../Constants/ResponsiveFont/ResponsiveFonts'



export default function Diagnosis({ title }) {

    const OngoingData = [
        {
            id: 1,
            Name: 'Alzheimer',
            Code: 'G30.9',
            Doctor: 'Flores Mark, MD',
            Date: '05/01/2024',
            Period: 'For 1 Month',
            image: require('../../../../assets/Images/Diagnosis.png')
        },
        {
            id: 2,
            Name: 'Hypertension',
            Code: 'G31.9',
            Doctor: 'John Samuel, MD',
            Date: '03/01/2024',
            Period: 'For 1 Week',
            image: require('../../../../assets/Images/Treatment.png')
        }
    ]

    const [ModalOpen, setModalOpen] = useState(false)
    const [Item, setItem] = useState([])

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => { setItem(item), setModalOpen(true) }}
                style={[
                    styles.cardOnDg,
                    {
                        marginRight: OngoingData?.length - 1 === index ? 20 : 0,
                    },
                    Platform.OS == 'android'
                        ? DEFAULTSTYLES.androidShadow
                        : DEFAULTSTYLES.iosShadow,
                ]}>
                <Image
                    source={item.image}
                    style={{ width: GlobalSize(40), height: GlobalSize(40) }} />

                <View style={styles.textView}>
                    <Text style={styles.textDgNm}>{item.Name}</Text>
                    <Text style={styles.textCode}>ICD Code - {item.Code}</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ marginRight: 8 }}>
                        <BlueSts />
                    </View>

                    <View>
                        <Text style={styles.textDR}>{item.Doctor}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                    <View style={styles.viewDisplay}>
                        <Text style={styles.textDT} >{item.Date}</Text>
                    </View>

                    <View style={styles.viewDisplay}>
                        <Text style={styles.textDT}>{item.Period}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <View style={{ marginLeft: DEFAULTWIDTH * 0.05, marginBottom: DEFAULTHEIGHT * 0.015 }}>
                <Text style={styles.textRecent}>{title}</Text>
            </View>

            <View style={{}}>
                <FlatList
                    data={OngoingData}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(Item => Item.id)}
                    renderItem={renderItem} />
            </View>

            <OngoingDgModal
                item={Item}
                ModalOpen={ModalOpen}
                setModalOpen={setModalOpen} />
        </View>
    )
}

const styles = StyleSheet.create({
    textRecent: {
        fontSize: fontSize(14),
        fontFamily: FONTS.FontMedium,
        color: TEXTCOLOR7
    },
    cardOnDg: {
        backgroundColor: PUREWHITE,
        width: DEFAULTWIDTH * 0.52,
        paddingTop: DEFAULTHEIGHT * 0.03,
        borderRadius: GlobalSize(15),
        padding: GlobalSize(10),
        marginLeft: DEFAULTWIDTH * 0.05,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: GlobalSize(10),
    },
    textDgNm: {
        fontFamily: FONTS.FontSemiB,
        fontSize: fontSize(16),
        color: TEXTCOLOR5
    },
    textCode: {
        fontSize: fontSize(10),
        color: TEXTCOLORW,
        fontFamily: FONTS.FontRegular
    },
    textDR: {
        fontFamily: FONTS.FontRegular,
        fontSize: fontSize(13),
        color: TEXTCOLORW
    },
    viewDisplay: {
        width: DEFAULTWIDTH * 0.2,
        padding: GlobalSize(5),
        backgroundColor: PRIMARYCOLOR,
        borderRadius: GlobalSize(15),
        alignItems: 'center',
        justifyContent: 'center',
        margin: GlobalSize(10)
    },
    textDT: {
        fontSize: fontSize(10),
        color: PUREWHITE,
        fontFamily: FONTS.FontMedium
    },
    textView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: GlobalSize(10),
        marginBottom: GlobalSize(10)
    }
})