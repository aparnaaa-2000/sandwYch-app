import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, TouchableOpacity, Platform } from 'react-native'
import { BACKGROUNDWHITE, LINECOLOR1, PRIMARYCOLOR, PUREBLACK, PUREWHITE, TEXTCOLOR10,TEXTCOLORG } from '../../../../Constants/Colors/Colors'
import DEFAULTSTYLES, { DEFAULTWIDTH } from '../../../../Constants/styles/styles';
import { FONTS } from '../../../../Constants/Fonts'
import RequestModal from '../../../../Components/Common/Modal/RequestModal';
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts';
import ResourceHeader from '../../../../Components/Common/Headers/ResourceHeader';

const ResourceList = ({ navigation }) => {

    const Data = [
        {
            id: 1,
            Title: 'Nourish Nation',
            Type: 'Breakfast',
            Satisfaction: '60%'
        },
        {
            id: 2,
            Title: 'United Harvest',
            Type: 'Breakfast',
            Satisfaction: '50%'
        },
    ]

    const [ModalOpen, setModalOpen] = useState(false)

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('ResourceDetail')}
                style={[styles.cardRS,
                Platform.OS == 'android' ?
                    DEFAULTSTYLES.androidShadow :
                    DEFAULTSTYLES.iosShadow]}>
                <View>
                    <Text style={styles.textTitle}>{item.Title}</Text>
                </View>

                <View style={styles.viewCommon}>
                    <View>
                        <Text style={styles.textType}>Type</Text>
                        <Text style={styles.textValue}>{item.Type}</Text>
                    </View>

                    <View>
                        <Text style={styles.textType}>Satisfaction</Text>
                        <Text style={styles.textValue}>{item.Satisfaction}</Text>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.btnView} onPress={() => setModalOpen(true)}>
                            <Text style={styles.textBtn}>Apply</Text>
                        </TouchableOpacity>
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
            <ResourceHeader navigation={navigation} title={'Resources'}/>

                <View style={styles.lineBorder} />

                <View style={DEFAULTSTYLES.alignView}>
                    <FlatList
                        data={Data}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem} />
                </View>
                <RequestModal
                    ModalOpen={ModalOpen}
                    title={'Are you sure you want to confirm this resource?'}
                    setModalOpen={setModalOpen}
                    navigation={navigation} />
            </View>
        </SafeAreaView>
    )
}

export default ResourceList

const styles = StyleSheet.create({
    textRes: {
        fontSize: fontSize(20),
        fontFamily: FONTS.FontMedium,
        color: TEXTCOLOR10
    },
    lineBorder: {
        backgroundColor: LINECOLOR1,
        height: 1,
        margin: GlobalSize(15),
        marginLeft: DEFAULTWIDTH * 0.05,
        marginRight: DEFAULTWIDTH * 0.05,
        marginTop: GlobalSize(1),
        marginBottom:GlobalSize(20)
    },
    textTitle: {
        fontSize: fontSize(14),
        fontFamily: FONTS.FontSemiB,
        color: PUREBLACK
    },
    cardRS: {
        width: DEFAULTWIDTH * 0.90,
        padding: GlobalSize(15),
        backgroundColor: PUREWHITE,
        marginBottom: GlobalSize(12),
        borderRadius: 8,
        margin: GlobalSize(2)
    },
    textType: {
        fontSize: fontSize(12),
        fontFamily: FONTS.FontRegular,
        color: TEXTCOLORG
    },
    textValue: {
        fontFamily: FONTS.FontSemiB,
        color: PUREBLACK,
        fontSize: fontSize(12)
    },
    btnView: {
        width: DEFAULTWIDTH * 0.18,
        height: DEFAULTWIDTH * 0.1,
        backgroundColor: PRIMARYCOLOR,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    textBtn: {
        fontSize: fontSize(13),
        color: PUREWHITE,
        fontFamily: FONTS.FontRegular,
        textAlign: 'center',
    },
    viewCommon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: GlobalSize(10)
    }

})