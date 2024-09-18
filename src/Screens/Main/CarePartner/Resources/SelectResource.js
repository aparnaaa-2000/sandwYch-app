import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, FlatList, TouchableOpacity } from 'react-native'
import { BACKGROUNDWHITE, BORDERCOLOR5, PUREBLACK, TEXTCOLOR10 } from '../../../../Constants/Colors/Colors'
import DEFAULTSTYLES, { DEFAULTWIDTH } from '../../../../Constants/styles/styles'
import { FONTS } from '../../../../Constants/Fonts'
import ResourceFilterModal from '../../../../Components/CarePartner/Resources/ResourceFilterModal'
import ResourceHeader from '../../../../Components/Common/Headers/ResourceHeader'
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts';

const SelectResource = ({ navigation }) => {

    const ResourceData = [ //DUMMY DATA
        {
            id: 1,
            Title: 'Food',
            image: require('../../../../../assets/Images/MedicalAndNursingTasks/PreppingFoods.png')
        },
        {
            id: 2,
            Title: 'Transportation',
            image: require('../../../../../assets/Images/AbilityToHelp1/Transportation.png')
        },
        // {
        //     id: 3,
        //     Title: 'Health',
        //     image: require('../../../../../assets/Images/AbilityToHelp1/Cooking.png')
        // },
        // {
        //     id: 4,
        //     Title: 'Communication',
        //     image: require('../../../../../assets/Images/AbilityToHelp1/ServiceCordination.png')
        // }
    ]

    const [ModalOpen, setModalOpen] = useState(false)
    const [MainCategory, setMainCategory] = useState('')

    const renderItem = ({ item }) => {
        return (
            <View style={{ marginBottom: GlobalSize(15) }}>
                <TouchableOpacity
                    style={styles.touchCard}
                    onPress={() => {
                        setMainCategory(item.Title),
                            setModalOpen(true)
                    }}>
                    <View style={styles.viewImage}>
                        <Image source={item.image} style={{ width: GlobalSize(70), height: GlobalSize(50) }} />
                    </View>

                    <View>
                        <Text style={styles.textTitle}>{item.Title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <SafeAreaView style={DEFAULTSTYLES.AndroidSafeArea}>
            <StatusBar
                backgroundColor={BACKGROUNDWHITE}
                barStyle={'dark-content'}
                style={{ flex: 0 }} />

            <View>
                <ResourceHeader navigation={navigation} title={'Resources'} />

                <View style={DEFAULTSTYLES.alignView}>
                    <FlatList
                        data={ResourceData}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem} />
                </View>

                <ResourceFilterModal
                    MainCategory={MainCategory}
                    navigation={navigation}
                    ModalOpen={ModalOpen}
                    setModalOpen={setModalOpen} />
            </View>
        </SafeAreaView>
    )
}

export default SelectResource

const styles = StyleSheet.create({
    textRes: {
        fontSize: fontSize(24),
        fontFamily: FONTS.FontMedium,
        color: TEXTCOLOR10
    },
    touchCard: {
        width: DEFAULTWIDTH * 0.88,
        borderWidth: 1,
        borderColor: BORDERCOLOR5,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: "center",
        padding: GlobalSize(6)
    },
    textTitle: {
        fontSize: fontSize(14),
        fontFamily: FONTS.FontMedium,
        color: PUREBLACK
    },
    viewImage: {
        marginRight: DEFAULTWIDTH * 0.08,
        borderWidth: 1,
        borderColor: BORDERCOLOR5,
        borderRadius: 4,
        padding: fontSize(10)
    }
})