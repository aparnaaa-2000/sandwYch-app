import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { BACKGROUNDGREEN, BACKGROUNDWHITE, BORDERCOLOR5, BORDERCOLORSUPPORT, PRIMARYCOLOR, PUREBLACK, PUREWHITE, TEXTCOLORG } from '../../../../Constants/Colors/Colors'
import DEFAULTSTYLES, { DEFAULTHEIGHT, DEFAULTWIDTH } from '../../../../Constants/styles/styles'
import ResourceHeader from '../../../../Components/Common/Headers/ResourceHeader'
import { FONTS } from '../../../../Constants/Fonts'
import { BlueStar } from '../../../../../assets'
import DetailsSupport from '../../../../Components/CarePartner/Support/DetailsSupport'
import { AVALONG } from '../../../../Constants/DummyImages'
import RequestModal from '../../../../Components/Common/Modal/RequestModal'
import { GlobalSize, fontSize, height, width } from '../../../../Constants/ResponsiveFont/ResponsiveFonts'

const SupportDetail = ({ navigation }) => {
    const [ModalOpen, setModalOpen] = useState(false)

    const Star = [
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        },
        {
            id: 4
        },
        {
            id: 5
        }
    ]

    return (
        <SafeAreaView style={DEFAULTSTYLES.AndroidSafeArea}>
            <StatusBar
                backgroundColor={BACKGROUNDWHITE}
                barStyle={'dark-content'}
                style={{ flex: 0 }} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <ResourceHeader title={'Support'} navigation={navigation} />

                <View style={{ padding: GlobalSize(20) }}>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between',
                    }}>

                        <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                            <View style={styles.viewImage}>
                                <ImageBackground
                                    source={{ uri: AVALONG }}
                                    imageStyle={{ borderRadius: 40 }}
                                    style={{ width: GlobalSize(80), height: GlobalSize(80) }} >
                                    <View style={styles.onlineView} />
                                </ImageBackground>
                            </View>

                            <View style={{marginTop:GlobalSize(20)}}>
                                <Text style={styles.textNm}>Amelia</Text>
                                <Text style={styles.textGn}>Female</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                style={{ marginTop: GlobalSize(5) }}>

                                {Star.map((item) => {
                                    return (
                                        <View key={item.id} horizontal style={{ margin: GlobalSize(1) }}>
                                            <BlueStar />
                                        </View>
                                    )
                                })}

                            </ScrollView>
                            <View style={styles.btnView}>
                                <Text style={styles.textBtn}>Timing:10 am to 10 pm</Text>
                            </View>
                        </View>
                    </View>

                    <View style={DEFAULTSTYLES.alignView}>
                        <View style={styles.lineBorder} />
                    </View>
                    <DetailsSupport />

                    <View >
                        <TouchableOpacity
                            style={styles.touchBtn}
                            onPress={() => setModalOpen(true)}>
                            <Text
                                style={[styles.textBtn,
                                { fontSize: fontSize(14) }]}>Request Support</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <RequestModal
                    ModalOpen={ModalOpen}
                    title={'Are you sure you want to confirm this support?'}
                    setModalOpen={setModalOpen}
                    navigation={navigation} />
            </ScrollView>
        </SafeAreaView>

    )
}

export default SupportDetail

const styles = StyleSheet.create({
    textNm: {
        fontFamily: FONTS.FontSemiB,
        color: PUREBLACK,
        fontSize: fontSize(16)
    },
    textGn: {
        fontFamily: FONTS.FontRegular,
        color: TEXTCOLORG,
        fontSize: fontSize(12)
    },
    textBtn: {
        fontSize: fontSize(12),
        color: PUREWHITE,
        fontFamily: FONTS.FontMedium
    },
    btnView: {
        backgroundColor: PRIMARYCOLOR,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        padding: GlobalSize(7),
        top: GlobalSize(-20)
    },
    lineBorder: {
        width: DEFAULTWIDTH * 0.86,
        height: 1,
        marginBottom: GlobalSize(10),
        backgroundColor: BORDERCOLORSUPPORT,
        margin: GlobalSize(17),
        alignItems: 'center',
        justifyContent: 'center'
    },

    touchBtn: {
        backgroundColor: PRIMARYCOLOR,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        padding: GlobalSize(14),
        margin: GlobalSize(7),
        marginBottom: GlobalSize(10)
    },

    viewImage: {
        borderWidth: 1,
        borderColor: BORDERCOLOR5,
        borderRadius: GlobalSize(40),
        width: GlobalSize(80),
        height: GlobalSize(80),
        marginRight: GlobalSize(15)
    },
    onlineView: {
        width: GlobalSize(10),
        height: GlobalSize(10),
        borderRadius: GlobalSize(10),
        backgroundColor: BACKGROUNDGREEN,
        marginTop: GlobalSize(10),
        left: DEFAULTWIDTH * 0.18
    }
})