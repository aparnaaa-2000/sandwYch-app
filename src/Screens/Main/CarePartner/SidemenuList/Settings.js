import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, Platform } from 'react-native'
import React, { useState } from 'react'
import { BACKGROUNDWHITE, LINECOLOR1, PUREBLACK } from '../../../../Constants/Colors/Colors'
import DEFAULTSTYLES, { DEFAULTHEIGHT, DEFAULTWIDTH } from '../../../../Constants/styles/styles'
import ResourceHeader from '../../../../Components/Common/Headers/ResourceHeader'
import { FONTS } from '../../../../Constants/Fonts'
import SubHeader from '../../../../Components/Common/Headers/SubHeader'
import LogOutModal from './LogOutModal'
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts'

const Settings = ({ navigation }) => {

    const [ModalOpen, setModalOpen] = useState(false)
    const ItemData = [
        {
            id: 1,
            title: 'Privacy Policy',

        },
        {
            id: 2,
            title: 'Logout',

        }
    ]

    const ModalOpens = () => {
        setModalOpen(true)
    }

    return (
        <SafeAreaView style={DEFAULTSTYLES.AndroidSafeArea}>
            <StatusBar
                backgroundColor={BACKGROUNDWHITE}
                barStyle={'dark-content'}
                style={{ flex: 0 }} />

            <SubHeader title='Settings' navigation={navigation} />


            <View style={styles.mapView}>
                {ItemData?.map((item) => {
                    return (
                        <TouchableOpacity
                            onPress={() => item.id == 1 ? navigation.navigate('MenuStack', { screen: 'PrivacyPolicy' }) : ModalOpens()}
                            style={[styles.cardView,
                            Platform.OS == 'android' ?
                                DEFAULTSTYLES.androidShadow :
                                DEFAULTSTYLES.iosShadow]}>
                            <Text style={styles.textTitle}>{item.title}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>


            <LogOutModal
                ModalOpen={ModalOpen}
                setModalOpen={setModalOpen}
                navigation={navigation}
            />
        </SafeAreaView>
    )
}

export default Settings

const styles = StyleSheet.create({
    cardView: {
        width: DEFAULTWIDTH * 0.86,
        backgroundColor: BACKGROUNDWHITE,
        borderRadius: 8,
        marginBottom: GlobalSize(15),
        justifyContent: 'center',
        padding: GlobalSize(15)
    },
    textTitle: {
        fontSize: fontSize(12),
        color: PUREBLACK,
        fontFamily: FONTS.FontMedium
    },
    mapView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: GlobalSize(25)
    }
})