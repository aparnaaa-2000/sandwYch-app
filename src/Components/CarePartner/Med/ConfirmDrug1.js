import React from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    SafeAreaView
} from 'react-native';
import { PRIMARYCOLOR, PUREWHITE, TEXTCOLOR5, TEXTCOLOR8,BACKGROUNDWHITE, TEXTCOLOR10 } from '../../../Constants/Colors/Colors';
import { FONTS } from '../../../Constants/Fonts';
import { DEFAULTWIDTH } from '../../../Constants/styles/styles';
import { GlobalSize, fontSize } from '../../../Constants/ResponsiveFont/ResponsiveFonts';


const ConfirmDrug1 = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor:BACKGROUNDWHITE, flex: 1 }}>
            <StatusBar backgroundColor={BACKGROUNDWHITE} barStyle={'dark-content'} style={{ flex: 0 }} />

            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TouchableOpacity style={{ margin: GlobalSize(15) }} onPress={() => navigation.goBack()}>
                        <Text style={styles.textBack}>Back</Text>
                    </TouchableOpacity>
                    <View style={styles.viewMain}>
                        <View style={styles.viewC}>
                            <Text style={styles.textConfirm}>Confirm Drug-Drug Interaction</Text>
                        </View>

                        <View style={{ marginBottom: GlobalSize(15) }}>
                            <Text style={styles.supText}>Interactions can be between two drugs, drugs and food, and drugs taken with over-the-counter medications.</Text>
                        </View>

                        <View>
                            <Text style={styles.supText}>Run a report of potential interactions.</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>


            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.btnView} onPress={() => navigation.navigate('ConfirmDrug2')}>
                    <Text style={styles.textBtn}>Run a Report</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUNDWHITE,
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
        bottom: DEFAULTWIDTH*0.1,
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
    viewMain: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: DEFAULTWIDTH * 0.65
    },
    viewC: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: GlobalSize(10)
    }
});

export default ConfirmDrug1;
