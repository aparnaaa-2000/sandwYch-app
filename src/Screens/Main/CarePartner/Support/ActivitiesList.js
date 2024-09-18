import { StyleSheet, Text, View, StatusBar, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react';
import { BACKGROUNDWHITE, BORDERCOLOR5, PRIMARYCOLOR, PUREBLACK, PUREWHITE, TEXTCOLOR2, TEXTCOLORRS } from '../../../../Constants/Colors/Colors';
import DEFAULTSTYLES, { DEFAULTWIDTH } from '../../../../Constants/styles/styles';
import ResourceHeader from '../../../../Components/Common/Headers/ResourceHeader';
import { FONTS } from '../../../../Constants/Fonts';
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts';

const ActivitiesList = ({navigation}) => {

    const [selectedIds,setSelectedIds] =  useState([])

    const Activities = [
        {
            id: 1,
            Name: 'Cooking',
            image: require('../../../../../assets/Images/AbilityToHelp1/Cooking.png'),
            Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ...'
        },
        {
            id: 2,
            Name: 'Transportation',
            image: require('../../../../../assets/Images/AbilityToHelp1/Transportation.png'),
            Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ...'
        },
        {
            id: 3,
            Name: 'Bathing',
            image: require('../../../../../assets/Images/AbilityToHelp1/Bathing.png'),
            Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ...'
        },
        {
            id: 4,
            Name: 'Transfer & Mobility',
            image: require('../../../../../assets/Images/AbilityToHelp1/Transfre&Mobiity.png'),
            Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ...'
        },
    ]

const toggleSelection = (id)=>{
    console.log("................no action",id,selectedIds)
    const isSelected = selectedIds.includes(id);
    if (isSelected) {
        setSelectedIds(selectedIds.filter((selectedIds) => selectedIds !== id));
    } else {
        setSelectedIds([...selectedIds, id]);
    }
}
    return (
        <SafeAreaView style={DEFAULTSTYLES.AndroidSafeArea}>
            <StatusBar
                backgroundColor={BACKGROUNDWHITE}
                barStyle={'dark-content'}
                style={{ flex: 0 }} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <ResourceHeader title={'Activities-ADL'} navigation={navigation}/>
                <View>

                    <View style={styles.viewAlign}>

                        <View>
                            <Text style={styles.textHelp}>Ability to help</Text>
                            <Text style={styles.textFollow}>Which the following do you think</Text>
                            <Text style={styles.textFollow}>you need help?</Text>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.btnView}>
                                <Text style={styles.textBtn}>ADL</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.mapView}>
                        {Activities.map((item) => {
                             const isSelected = selectedIds.includes(item.id);
                            return (
                                <View key={item.id}>
                                    <TouchableOpacity style={[styles.cardView,{
                                        borderColor:isSelected ?
                                          PRIMARYCOLOR : BORDERCOLOR5}]} onPress={()=>toggleSelection(item.id)}>
                                        <View>
                                            <Image source={item.image} style={{ width: 100, height: 80 }} />
                                        </View>

                                        <View>
                                            <Text style={styles.textName}>{item.Name}</Text>
                                            <Text style={styles.textDesc} >{item.Description}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        })}
                    </View>
                </View>
            </ScrollView>

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={ styles.absoluteView }>
                    <TouchableOpacity onPress={()=>navigation.navigate('SupportPersonList')}
                    style={[styles.btnView, { width: DEFAULTWIDTH * 0.85, height: 40 }]}>
                        <Text style={[styles.textBtn, { fontSize: 14 }]}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ActivitiesList

const styles = StyleSheet.create({
    textHelp: {
        fontSize: fontSize(17),
        color: PRIMARYCOLOR,
        fontFamily: FONTS.FontSemiB
    },
    textFollow: {
        fontFamily: FONTS.FontRegular,
        fontSize: fontSize(13),
        color: TEXTCOLORRS
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
        borderRadius: 4,
        padding: GlobalSize(5)
    },
    cardView: {
        width: DEFAULTWIDTH * 0.86,
        borderWidth: 1,
        borderRadius: 10,
        padding: GlobalSize(10),
        flexDirection: 'row',
        alignItems:'center',
        marginBottom: GlobalSize(12)
    },
    textName: {
        fontFamily: FONTS.FontMedium,
        fontSize: fontSize(14),
        color: TEXTCOLOR2
    },
    textDesc: {
        fontSize: fontSize(12),
        color: PUREBLACK,
        fontFamily: FONTS.FontRegular,
        maxWidth: DEFAULTWIDTH * 0.45
    },
    viewAlign: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: GlobalSize(15),
        marginLeft:DEFAULTWIDTH*0.07,
        marginRight:DEFAULTWIDTH*0.07
    },
    mapView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: GlobalSize(10)
    },
    absoluteView: {
        position: 'absolute',
        bottom: GlobalSize(20),
        alignItems: 'center'
    }
})