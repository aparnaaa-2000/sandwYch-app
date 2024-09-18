import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SupportListing from '../../Common/Profile/SupportListing'
import { FONTS } from '../../../Constants/Fonts'
import { PRIMARYCOLOR, PUREBLACK, PUREWHITE } from '../../../Constants/Colors/Colors'
import DEFAULTSTYLES, { DEFAULTHEIGHT, DEFAULTWIDTH } from '../../../Constants/styles/styles'
import { OrangePen } from '../../../../assets'
import SupportSelectionModal from './SupportSelectionModal'
import { GlobalSize, fontSize } from '../../../Constants/ResponsiveFont/ResponsiveFonts'

const SupportList = ({ navigation }) => {

    const ADL = [
        {
            id: 1,
            Title: 'Eating',
            Image: require('../../../../assets/Images/Support/EatingFrame.png'),
        },
        {
            id: 2,
            Title: 'Toileting',
            Image: require('../../../../assets/Images/Support/BathFrame.png'),
        },
        {
            id: 3,
            Title: 'Eating',
            Image: require('../../../../assets/Images/Support/EatingFrame.png'),
        },
        {
            id: 4,
            Title: 'Dressing',
            Image: require('../../../../assets/Images/Support/DressingFrame.png'),
        },

    ]

    const IADL = [
        {
            id: 1,
            Title: 'Cooking',
            Image: require('../../../../assets/Images/Support/CookFrame.png'),
        },
        {
            id: 2,
            Title: 'Managing Finances',
            Image: require('../../../../assets/Images/Support/FinanceFrame.png'),
        },
        {
            id: 3,
            Title: 'Shopping',
            Image: require('../../../../assets/Images/Support/ShopFrame.png'),
        },
        {
            id: 4,
            Title: 'House Keeping',
            Image: require('../../../../assets/Images/Support/HouseFrame.png'),
        },
        {
            id: 5,
            Title: 'Transportation',
            Image: require('../../../../assets/Images/Support/TransFrame.png'),
        },
        {
            id: 4,
            Title: 'Managing Medications',
            Image: require('../../../../assets/Images/Support/MedFrame.png'),
        },
        {
            id: 4,
            Title: 'Communication',
            Image: require('../../../../assets/Images/Support/CommFrame.png'),
        },
        {
            id: 4,
            Title: 'Managing Technology',
            Image: require('../../../../assets/Images/Support/ResearchFrame.png'),
        },
        {
            id: 4,
            Title: 'Community Mobility',
            Image: require('../../../../assets/Images/Support/MobilityFrame.png'),
        },

    ]

    const [ModalOpen, setModalOpen] = useState(false)

    return (
        <View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ marginBottom: DEFAULTHEIGHT * 0.1 }}>
                <View style={styles.viewText}>
                    <Text style={styles.textSupport}>Supports which caregiver can provide to patient</Text>
{/* 
                    <TouchableOpacity
                        onPress={() => navigation.navigate('EditSupport')}
                        style={{ marginLeft: DEFAULTWIDTH * 0.06 }}>
                        <OrangePen />
                    </TouchableOpacity> */}
                </View>

                <View style={DEFAULTSTYLES.alignView}>
                    <SupportListing
                        data={ADL}
                        Title={'Activities of Daily Living'} />

                    <SupportListing
                        data={IADL}
                        Title={'Instrumental Activities of Daily Living'} />
                </View>
            </ScrollView>

            <View style={styles.viewPost}>
                <TouchableOpacity style={styles.touchBtn} onPress={()=>setModalOpen(true)}>
                    <Text style={styles.textBtn}>+</Text>
                </TouchableOpacity>
            </View>

            <SupportSelectionModal
                ModalOpen={ModalOpen}
                setModalOpen={setModalOpen}
                navigation={navigation} />
        </View>
    )
}

export default SupportList

const styles = StyleSheet.create({
    textSupport: {
        fontFamily: FONTS.FontRegular,
        color: PUREBLACK,
        fontSize: fontSize(12)
    },
    textBtn: {
        fontSize: fontSize(24),
        color: PUREWHITE,
        fontFamily: FONTS.FontLight,
    },
    touchBtn: {
        marginBottom: DEFAULTWIDTH * 0.05,
        width: DEFAULTWIDTH * 0.12,
        height: DEFAULTWIDTH * 0.12,
        backgroundColor: PRIMARYCOLOR,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: GlobalSize(8),
        marginLeft: GlobalSize(10),
        marginRight: GlobalSize(10),
    },
    viewPost: {
        position: 'absolute',
        left: 0,
        right: GlobalSize(9),
        bottom: GlobalSize(10),
        alignItems: 'flex-end'
    },
    viewText: {
        marginLeft: DEFAULTWIDTH * 0.05,
        marginBottom: GlobalSize(10),
        flexDirection: 'row'
    }
})