import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, Image, Platform, TouchableOpacity, ScrollView } from 'react-native';
import { BACKGROUNDGREY, BACKGROUNDWHITE, PRIMARYCOLOR, PUREBLACK, PUREWHITE, TEXTCOLOR10, TEXTCOLOR5 } from '../../../../Constants/Colors/Colors'
import DEFAULTSTYLES, { DEFAULTHEIGHT, DEFAULTWIDTH } from '../../../../Constants/styles/styles'
import { FONTS } from '../../../../Constants/Fonts'
import { GreyCall, GreyEmail, GreyLocation } from '../../../../../assets'
import RequestModal from '../../../../Components/Common/Modal/RequestModal';
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts';
import ResourceHeader from '../../../../Components/Common/Headers/ResourceHeader';

const ResourceDetail = ({navigation}) => {

    const [ModalOpen, setModalOpen] = useState(false)

    return (
        <SafeAreaView style={DEFAULTSTYLES.AndroidSafeArea}>
            <StatusBar
                backgroundColor={BACKGROUNDWHITE}
                barStyle={'dark-content'}
                style={{ flex: 0 }} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
            
                <ResourceHeader navigation={navigation} title={'Resources'}/>
                    <View style={styles.outerImage}>
                        <View
                            style={[styles.imageView,
                            Platform.OS == 'android' ?
                                DEFAULTSTYLES.androidShadow :
                                DEFAULTSTYLES.iosShadow]}>
                            <Image
                                source={require('../../../../../assets/Images/Resource.png')}
                                style={{ width: DEFAULTWIDTH * 0.82, height: DEFAULTWIDTH * 0.8 }}
                            />
                        </View>
                    </View>

                    <View>

                        <View style={{ marginLeft: DEFAULTWIDTH * 0.05, marginBottom: GlobalSize(5) }}>
                            <Text style={[styles.textRes, { fontSize: fontSize(20) }]}>Nourish Nation</Text>
                        </View>

                        <View style={styles.viewDetails}>

                            <View style={{ marginRight: GlobalSize(10) }}>
                                <GreyCall />
                            </View>

                            <View>
                                <Text style={styles.textDetails}>0345 640 2020</Text>
                            </View>
                        </View>



                        <View style={styles.viewDetails}>

                            <View style={{ marginRight: GlobalSize(10) }}>
                                <GreyEmail />
                            </View>

                            <View>
                                <Text style={styles.textDetails}>NourishNation@gmail.com</Text>
                            </View>
                        </View>



                        <View style={styles.viewDetails}>

                            <View style={{ marginRight: GlobalSize(10) }}>
                                <GreyLocation />
                            </View>

                            <View style={{ maxWidth: DEFAULTWIDTH * 0.5 }}>
                                <Text style={styles.textDetails}>Argos Limited Royal Avenue Widnes WA8 8HS</Text>
                            </View>
                        </View>


                        <View style={styles.viewDesc}>
                            <Text style={styles.textDesc}>
                                The healthy food competitions to be organised on the occasion of World Food Day 2023 play a pivotal role in spotlighting the significance of sustainable food practices and nutritious eating. Australia, with its diverse culinary heritage and agricultural potential, recognizes the importance of addressing global hunger and promoting healthy diets.
                            </Text>
                        </View>

                        <View style={styles.viewBtn}>
                            <TouchableOpacity style={styles.btnView} onPress={() => setModalOpen(true)}>
                                <Text style={styles.textBtn}>Request Resource</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <RequestModal
                    ModalOpen={ModalOpen}
                    title={'Are you sure you want to confirm this resource?'}
                    setModalOpen={setModalOpen}
                    navigation={navigation} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default ResourceDetail

const styles = StyleSheet.create({
    textRes: {
        fontSize: fontSize(24),
        fontFamily: FONTS.FontMedium,
        color: TEXTCOLOR10
    },
    imageView: {
        backgroundColor: PUREWHITE,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        padding: GlobalSize(15),
    },
    textDesc: {
        fontSize: fontSize(13),
        fontFamily: FONTS.FontRegular,
        color: TEXTCOLOR5,
        textAlign: 'justify'
    },
    btnView: {
        width: DEFAULTWIDTH * 0.90,
        height: DEFAULTWIDTH * 0.125,
        backgroundColor:PRIMARYCOLOR,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    textBtn: {
        fontSize: fontSize(16),
        color: PUREWHITE,
        fontFamily: FONTS.FontMedium,
        textAlign: 'center',
    },
    viewDetails: {
        width: DEFAULTWIDTH,
        padding: GlobalSize(12),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: BACKGROUNDGREY,
        marginBottom: GlobalSize(2),
        paddingLeft: GlobalSize(18)
    },
    textDetails: {
        fontFamily: FONTS.FontRegular,
        color: PUREBLACK,
        fontSize: fontSize(14),
    },
    outerImage: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: DEFAULTWIDTH * 0.05
    },
    viewDesc: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: GlobalSize(16),
        marginBottom: DEFAULTHEIGHT * 0.03,
        marginTop: DEFAULTHEIGHT * 0.02
    },
    viewBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: DEFAULTHEIGHT * 0.03
    }
})
