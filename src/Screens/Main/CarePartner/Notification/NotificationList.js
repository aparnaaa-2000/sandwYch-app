import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, TouchableOpacity, Platform, Image } from 'react-native'
import { BACKGROUNDWHITE, BORDERCOLORNOT, LINECOLOR1, PRIMARYCOLOR, PUREBLACK, PUREWHITE } from '../../../../Constants/Colors/Colors'
import DEFAULTSTYLES, { DEFAULTWIDTH } from '../../../../Constants/styles/styles'
import ResourceHeader from '../../../../Components/Common/Headers/ResourceHeader'
import { AVALONG, SALLYBROWN1 } from '../../../../Constants/DummyImages'
import { GreenTick, GreyAccount, GreyCalender, GreyClockLine, RedClose } from '../../../../../assets'
import { FONTS } from '../../../../Constants/Fonts'
import NotificationModal from '../../../../Components/CarePartner/Notification/NotificationModal';
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts';

const NotificationList = ({ navigation }) => {
    
    const [ModalOpen, setModalOpen] = useState(false)

    const NotificationData = [
        {
            id: 1,
            Title: 'Appointment',
            Message: "Plan what you'd like to discuss with doctor before you visit. make a list concerns & medications.....",
            Doctor: 'Dr. George',
            Position: 'Physiotherapist',
            Image: SALLYBROWN1,
            Date: '25 th Jan 2024',
            Time: '05:00 pm - 05:30 pm'
        },
        {
            id: 2,
            Title: 'Appointment',
            Message: "Plan what you'd like to discuss with doctor before you visit. make a list concerns & medications.....",
            Doctor: 'Dr. George',
            Position: 'Physiotherapist',
            Image: SALLYBROWN1,
            Date: '25 th Jan 2024',
            Time: '05:00 pm - 05:30 pm'
        },
    ]

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('NotificationDetails')}
                style={[styles.cardView,
                Platform.OS == 'android' ?
                    DEFAULTSTYLES.androidShadow :
                    DEFAULTSTYLES.iosShadow]}>

                <View style={styles.viewFlex}>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginRight: GlobalSize(10) }}>
                            <GreyAccount />
                        </View>

                        <View>
                            <Text style={styles.textTitle}>{item.Title}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>

                        <View style={{ marginRight: GlobalSize(5) }}>
                            <GreenTick />
                        </View>

                        <View>
                            <TouchableOpacity onPress={() => setModalOpen(true)}>
                                <RedClose />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.borderLine}>
                    <Text style={styles.textMsg}>{item.Message}</Text>
                </View>

                <View style={styles.viewSub}>
                    <View style={{ marginRight: GlobalSize(10) }}>
                        <Image
                            source={{ uri: AVALONG }}
                            style={styles.imageView} />
                    </View>

                    <View>
                        <Text style={styles.textDoc}>{item.Doctor}</Text>
                        <Text style={[styles.textPost, { fontSize: fontSize(12) }]}>{item.Position}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginLeft: DEFAULTWIDTH * 0.16 }}>
                    <View style={styles.viewCal}>
                        <GreyCalender />
                        <Text style={[styles.textPost, { left: GlobalSize(5) }]}>{item.Date}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <GreyClockLine />
                        <Text style={[styles.textPost, { left: GlobalSize(5) }]}>{item.Time}</Text>
                    </View>
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

            <View>
                <ResourceHeader
                    navigation={navigation}
                    title={'Notification'} />
                <View style={{ top: GlobalSize(-25) }}>
                    <View style={styles.lineBorder} />

                    <View style={DEFAULTSTYLES.alignView}>
                        <FlatList
                            data={NotificationData}
                            keyExtractor={item => item.id}
                            renderItem={renderItem} />
                    </View>
                </View>
            </View>
            <NotificationModal
                ModalOpen={ModalOpen}
                setModalOpen={setModalOpen}
            />
        </SafeAreaView>
    )
}

export default NotificationList

const styles = StyleSheet.create({
    cardView: {
        width: DEFAULTWIDTH * 0.90,
        backgroundColor: PUREWHITE,
        borderRadius: GlobalSize(10),
        marginBottom: GlobalSize(15),
        margin: GlobalSize(1),
        padding: GlobalSize(18)
    },
    textTitle: {
        fontSize: fontSize(15),
        fontFamily: FONTS.FontSemiB,
        color: PRIMARYCOLOR
    },
    textMsg: {
        fontFamily: FONTS.FontRegular,
        color: PUREBLACK,
        fontSize: fontSize(12)
    },
    borderLine: {
        borderWidth: 1,
        borderColor: BORDERCOLORNOT,
        borderRadius: 8,
        padding: GlobalSize(8),
        marginLeft: DEFAULTWIDTH * 0.08,
        marginBottom: GlobalSize(10)
    },
    textPost: {
        color: PUREBLACK,
        fontFamily: FONTS.FontRegular,
        fontSize: fontSize(10.5)
    },
    textDoc: {
        fontFamily: FONTS.FontSemiB,
        color: PUREBLACK,
        fontSize: fontSize(15)
    },
    lineBorder: {
        backgroundColor: LINECOLOR1,
        height: GlobalSize(1),
        margin: DEFAULTWIDTH * 0.06,
        marginBottom: DEFAULTWIDTH * 0.06,
    },
    viewFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: GlobalSize(10)
    },
    imageView: {
        width: GlobalSize(50),
        height: GlobalSize(50),
        borderRadius: GlobalSize(25)
    },
    viewSub: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: GlobalSize(5)
    },
    viewCal: {
        flexDirection: 'row',
        marginRight: GlobalSize(15),
        alignItems: 'center'
    }
})