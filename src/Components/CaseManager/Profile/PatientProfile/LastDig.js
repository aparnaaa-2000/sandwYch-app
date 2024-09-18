import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { FONTS } from '../../../../Constants/Fonts';
import { BACKGROUNDWHITE, BORDERCOLOR7, PRIMARYCOLOR,PUREWHITE, TEXTCOLOR10, TEXTCOLOR7, TEXTCOLORSC1 } from '../../../../Constants/Colors/Colors';


const LastDig = () => {
    return (

        <View>

            <View style={{ marginLeft: 7, marginBottom: DEFAULTWIDTH * 0.05 }}>
                <Text style={styles.textLast}>Last Diagnose</Text>
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center' }} >
                <View style={styles.viewCard}>

                    <View>
                        <Text style={styles.textDetails}>Diagnosis</Text>
                        <Text style={styles.textDetails}>ICD Code</Text>
                        <Text style={styles.textDetails}>Physician</Text>
                    </View>

                    <View>
                        <Text style={styles.textSubDetails}>Alzheimer</Text>
                        <Text style={styles.textSubDetails}>G30.9</Text>
                        <Text style={styles.textSubDetails}>Flores, Mark MD</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.btnView} onPress={() => SaveTask()}>
                    <Text style={styles.textBtn}>Add Diagnosis</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    textLast: {
        fontFamily: FONTS.FontSemiB,
        color: TEXTCOLOR7,
        fontSize: 22
    },
    textSubDetails: {
        fontSize: 14,
        fontFamily: FONTS.FontMedium,
        color: TEXTCOLOR10,
        margin: 5,
        textAlign: 'right'
    },
    textDetails: {
        fontFamily: FONTS.FontRegular,
        fontSize: 15,
        color: TEXTCOLORSC1,
        margin: 5
    },
    viewCard: {
        backgroundColor: BACKGROUNDWHITE,
        width: DEFAULTWIDTH * 0.88,
        elevation: 2,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderColor: BORDERCOLOR7,
        padding: DEFAULTWIDTH * 0.04,
        marginBottom:15
    },
    btnView: {
        width: DEFAULTWIDTH * 0.88,
        height: DEFAULTWIDTH * 0.125,
        backgroundColor: PRIMARYCOLOR,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        marginBottom:DEFAULTWIDTH*0.07
    },
    textBtn: {
        fontSize: 12,
        color: PUREWHITE,
        fontWeight: '700',
        fontFamily: FONTS.FontMedium,
        textAlign: 'center',
    },
})
export default LastDig;