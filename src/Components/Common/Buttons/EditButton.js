import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DEFAULTWIDTH } from '../../../Constants/styles/styles'
import { FONTS } from '../../../Constants/Fonts'
import { PRIMARYCOLOR, PUREWHITE } from '../../../Constants/Colors/Colors'

const EditButton = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity
                style={styles.btnView}
                onPress={() => navigation.goBack()}>
                <Text style={styles.textBtn}>Submit</Text>
            </TouchableOpacity>
            <View style={styles.centerView}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.textCancel}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default EditButton

const styles = StyleSheet.create({
    btnView: {
        width: DEFAULTWIDTH * 0.88,
        height: DEFAULTWIDTH * 0.125,
        backgroundColor: PRIMARYCOLOR,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    centerView: {
        marginTop: DEFAULTWIDTH * 0.05,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBtn: {
        fontSize: 12,
        color: PUREWHITE,
        fontWeight: '700',
        fontFamily: FONTS.FontMedium,
        textAlign: 'center',
    },
    textCancel: {
        fontFamily: FONTS.FontMedium,
        fontSize: 12,
        color: PRIMARYCOLOR,
        fontWeight: '700'
    },
})