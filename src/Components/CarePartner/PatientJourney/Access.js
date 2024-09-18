import { FlatList, Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { PUREWHITE, TEXTCOLOR7, PRIMARYCOLOR } from '../../../Constants/Colors/Colors'
import DEFAULTSTYLES, { DEFAULTWIDTH } from '../../../Constants/styles/styles'
import { FONTS } from '../../../Constants/Fonts';
import AccessModal from '../../CarePartner/PatientJourney/AccessModal'
import { GlobalSize, fontSize } from '../../../Constants/ResponsiveFont/ResponsiveFonts';

const Access = ({ GrantData, setGrantData, users, setUsers }) => {

    const [ModalOpen, setModalOpen] = useState(false)
    const [selectedId, setSelectedId] = useState(null)


    const renderItem = ({ item }) => {
        return (
            <View style={styles.mainView}>
                <View>
                    <Text style={styles.textTitle}>{item.Name}</Text>
                </View>

                <View>
                    <TouchableOpacity style={styles.touchBtn} onPress={() => {
                        setModalOpen(true),
                            setSelectedId(item.id)
                    }}>
                        <Text style={styles.textBtn}>{GrantData?.length > 0 && item.selected== true ? 'Access Granted' : 'Allow access'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    return (
        <View
            style={[styles.cardView,
            Platform.OS == 'android' ?
                DEFAULTSTYLES.androidShadow :
                DEFAULTSTYLES.iosShadow]}>

            <View>
                <FlatList
                    data={users}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                />
            </View>

            <AccessModal
                users={users}
                setUsers={setUsers}
                selectedId={selectedId}
                GrantData={GrantData}
                setGrantData={setGrantData}
                ModalOpen={ModalOpen}
                setModalOpen={setModalOpen} />
        
        </View>
    )
}

export default Access

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: PUREWHITE,
        width: DEFAULTWIDTH * 0.90,
        borderRadius: GlobalSize(15),
        marginBottom: GlobalSize(18),
        padding:GlobalSize(10)
    },
    textBtn: {
        fontSize: fontSize(12),
        color: PUREWHITE,
        fontFamily: FONTS.FontMedium
    },
    textTitle: {
        fontFamily: FONTS.FontMedium,
        fontSize: fontSize(12),
        color: TEXTCOLOR7
    },
    touchBtn: {
        padding: GlobalSize(5),
        backgroundColor: PRIMARYCOLOR,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    mainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: GlobalSize(15),
        alignItems: 'center',
    }
})