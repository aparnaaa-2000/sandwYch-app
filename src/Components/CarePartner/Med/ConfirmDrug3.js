import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { BACKGROUNDWHITE, PRIMARYCOLOR, PUREWHITE, TEXTCOLOR10, TEXTCOLOR5, TEXTCOLOR8 } from '../../../Constants/Colors/Colors';
import { FONTS } from '../../../Constants/Fonts';
import { Feature } from '../../../../assets';
import { DEFAULTHEIGHT, DEFAULTWIDTH } from '../../../Constants/styles/styles';
import { GlobalSize, fontSize } from '../../../Constants/ResponsiveFont/ResponsiveFonts';

const ConfirmDrug3 = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor:BACKGROUNDWHITE, flex: 1 }}>
            <StatusBar backgroundColor={BACKGROUNDWHITE} barStyle={'dark-content'} style={{ flex: 0 }} />

            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TouchableOpacity style={{ margin: GlobalSize(15) }} onPress={() => navigation.goBack()}>
                        <Text style={styles.textBack}>Back</Text>
                    </TouchableOpacity>
                    <View style={styles.viewMain}>
                        <View style={{ marginBottom: GlobalSize(15) }}>
                            <Feature />
                        </View>
                        <View style={styles.viewConfirm}>
                            <Text style={styles.textConfirm}>Confirm Drug-Drug Interaction</Text>
                        </View>

                        <View style={{ marginBottom: GlobalSize(20), marginHorizontal: GlobalSize(10) }}>
                            <Text style={styles.supText}>A potential drug-drug interaction has been identified within the current medication list you have entered. Taking medications together can cause serious health risks.</Text>
                        </View>

                        <View style={{ marginHorizontal: GlobalSize(12) }}>
                            <Text style={[styles.supText, { textDecorationLine: 'underline', color: PRIMARYCOLOR }]}>Contact your physician with your full medication list for review.</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>


            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.btnView} onPress={() => navigation.navigate('ConfirmDrug4')}>
                    <Text style={styles.textBtn}>Close</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:BACKGROUNDWHITE,
        alignItems: 'center',
        justifyContent: 'center',

    },
    textConfirm: {
        fontSize: fontSize(18),
        fontFamily: FONTS.FontMedium,
        fontWeight: '500',
        color: TEXTCOLOR10,
    },
    supText: {
        fontSize: fontSize(14),
        fontFamily: FONTS.FontRegular,
        fontWeight: '400',
        color: TEXTCOLOR8,
        textAlign: 'center',
        lineHeight: GlobalSize(18)
    },
    textBtn: {
        fontSize: fontSize(16),
        color: PUREWHITE,
        fontWeight: '500',
        fontFamily: FONTS.FontMedium,
        textAlign: 'center',
    },
    buttonContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        bottom:DEFAULTWIDTH*0.1,
    },
    btnView: {
        width: DEFAULTWIDTH * 0.88,
        height: DEFAULTWIDTH * 0.125,
        backgroundColor: PRIMARYCOLOR,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: GlobalSize(10),
    },
    textBack: {
        fontSize: fontSize(14),
        fontFamily: FONTS.FontMedium,
        color: TEXTCOLOR5
    },
    viewConfirm: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: GlobalSize(10)
    },
    viewMain: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: DEFAULTHEIGHT*0.2
    }
});

export default ConfirmDrug3;
