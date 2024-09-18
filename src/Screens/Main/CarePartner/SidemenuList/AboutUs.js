import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { BACKGROUNDWHITE, PUREBLACK, TEXTCOLOR10, TEXTCOLOR5, TEXTCOLOR8 } from '../../../../Constants/Colors/Colors'
import DEFAULTSTYLES, { DEFAULTHEIGHT, DEFAULTWIDTH } from '../../../../Constants/styles/styles'
import { FONTS } from '../../../../Constants/Fonts'
import { LogoSmall } from '../../../../../assets'
import { ADR, AVALONG, SALLYBROWN1, SALLYBROWN2 } from '../../../../Constants/DummyImages'
import AboutUsModal from '../../../../Components/CarePartner/AboutUs/AboutUsModal'
import SubHeader from '../../../../Components/Common/Headers/SubHeader'
import { GlobalSize, fontSize, height, width } from '../../../../Constants/ResponsiveFont/ResponsiveFonts'

const AboutUs = ({ navigation }) => {

    const [ModalOpen, setModalOpen] = useState(false)
    const [Item, setItem] = useState([])
    const Team = [
        {
            id: 1,
            Name: 'Iva Milanovic',
            Image: ADR
        },
        {
            id: 2,
            Name: 'Ava Loung',
            Image: AVALONG
        },
        {
            id: 3,
            Name: 'Iva Milanovic',
            Image: SALLYBROWN2
        },
        {
            id: 4,
            Name: 'Sally Brown',
            Image: SALLYBROWN1
        }
    ]


    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => { setModalOpen(true), setItem(item) }}>
                <View style={{ margin: GlobalSize(20), alignItems: 'center'}}>
                    <Image source={{ uri: item.Image }} 
                    style={styles.imageView} />
                    <Text style={styles.textDesc}>{item.Name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={DEFAULTSTYLES.AndroidSafeArea}>
            <StatusBar
                backgroundColor={BACKGROUNDWHITE}
                barStyle={'dark-content'}
                style={{ flex: 0 }} />

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ marginBottom: DEFAULTHEIGHT * 0.02 }}>
                    <SubHeader title={'About Us'} navigation={navigation} />
                </View>
                <View style={{ padding: 20 }}>

                    <View style={DEFAULTSTYLES.alignView}>
                        <Image
                            source={require('../../../../../assets/Images/ABOUTUS.png')}
                            style={{ width: DEFAULTWIDTH * 0.89, height: DEFAULTHEIGHT * 0.3 }} />


                        <LogoSmall width={120} height={100} />

                        <View>
                            <Text style={styles.textDesc}>
                                “There are only four kinds of people in the world. Those who have been caregivers. Those who are currently caregivers. Those who will be caregivers, and those who will need a caregiver.”
                            </Text>

                            <Text style={[styles.textDesc, { fontFamily: FONTS.FontRegular }]}>― Rosalyn Carter, Former First Lady of the United States</Text>
                            <Text style={styles.textDesc}>How Do You Define Caregiver?</Text>
                            <Text style={[styles.textDesc, { fontFamily: FONTS.FontRegular }]}>
                                If you provide help to another person in need, you are a caregiver. Caregivers help individuals achieve tasks and functions necessary for daily life that may have, for a number of reasons, become inaccessible to them.

                                When the challenges of daily life begin to threaten someone’s independence, a caregiver becomes essential to basic functioning and helping someone do what they need to do to “get by.”  When the role of caregiver falls upon at-home caregivers or family members who work (and maybe even have children and additional family to care for), this burden can become very challenging. Caregiver burnout is a very real phenomenon for family and friends taking it all on themselves.
                                Professional caregivers are a very popular option that can provide the support needed to supplement the compassion and care many seek to provide for their loved ones. </Text>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.ourTeam}>Our Team</Text>
                    </View>

                    <View style={DEFAULTSTYLES.alignView}>
                        <FlatList
                            data={Team}
                            numColumns={2}
                            keyExtractor={(item) => item.id}
                            renderItem={renderItem} />
                    </View>

                </View>
            </ScrollView>

            <AboutUsModal
                item={Item}
                ModalOpen={ModalOpen}
                setModalOpen={setModalOpen} />

        </SafeAreaView>
    )
}

export default AboutUs

const styles = StyleSheet.create({
    textRes: {
        fontSize: fontSize(24),
        fontFamily: FONTS.FontMedium,
        color: TEXTCOLOR10
    },
    textDesc: {
        fontFamily: FONTS.FontSemiB,
        fontSize: fontSize(13),
        color: TEXTCOLOR5,
        lineHeight: GlobalSize(20),
        marginBottom: GlobalSize(10),
        textAlign: 'left',
        marginTop:GlobalSize(10)
    },
    ourTeam: {
        fontFamily: FONTS.FontMedium,
        color: TEXTCOLOR8,
        fontSize: fontSize(24)
    },
    imageView:{ 
        width: GlobalSize(120), 
        height: GlobalSize(120), 
        borderRadius: GlobalSize(60) 
    }
})