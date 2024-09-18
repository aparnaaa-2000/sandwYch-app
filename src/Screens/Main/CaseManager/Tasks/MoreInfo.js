import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import DEFAULTSTYLES, { DEFAULTWIDTH } from '../../../../Constants/styles/styles'
import { BACKGROUNDWHITE, BORDERCOLORSC1, PRIMARYCOLOR, PUREBLACK, PUREWHITE, TEXTCOLOR8 } from '../../../../Constants/Colors/Colors'
import PatientHeader from '../../../../Components/CaseManager/Profile/PatientProfile/PatientHeader'
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts'
import { FONTS } from '../../../../Constants/Fonts'
import { ArrowB, BlackPencil, WhiteRightArrow } from '../../../../../assets'

const MoreInfo = () => {

    const MedData = [
        {
            id: 1,
            Name: 'Cequa',
            Title: 'Eye drop',
            Time: 'Everyday',
            Image: require('../../../../../assets/Images/SocialWorker/eye.png')
        },
        {
            id: 2,
            Name: 'Cyanocobalamin',
            Title: 'Tablet',
            Time: 'Everyday',
            Image: require('../../../../../assets/Images/SocialWorker/drop.png')
        },
        {
            id: 3,
            Name: 'Vitamin D',
            Title: 'Tablet',
            Time: 'Everyday',
            Image: require('../../../../../assets/Images/SocialWorker/tab.png')
        }
    ]

    return (
        <SafeAreaView style={DEFAULTSTYLES.AndroidSafeArea}>
            <StatusBar
                backgroundColor={BACKGROUNDWHITE}
                barStyle={'dark-content'}
                style={{ flex: 0 }} />

            <View>
                <PatientHeader Header={'More Info'} />
            </View>

            <View>

                <View style={styles.row}>
                    <View>
                        <Text style={styles.textMed}>Betty’s Medication</Text>
                    </View>

                    <View>
                        <BlackPencil />
                    </View>
                </View>
                <View style={DEFAULTSTYLES.alignView}>
                <View>
                    {MedData.map((item) => {
                        return (
                            <View style={styles.card}>
                                <View>
                                </View>

                                <View>
                                </View>

                                <View>
                                  
                                </View>
                            </View>
                        )
                    })}
                </View>

          
                    <TouchableOpacity style={styles.medBtn}>
                        <Text style={styles.textBtn}>Medication Allergies</Text>
                        <WhiteRightArrow width={12} height={12} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnView}>
                        <Text style={styles.textMed}>Active Medication</Text>
                        <ArrowB />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnView}>
                        <Text style={styles.textMed}>Medication Tasks</Text>
                        <ArrowB />
                    </TouchableOpacity>

                </View>
            </View>

        </SafeAreaView>
    )
}

export default MoreInfo;

const styles = StyleSheet.create({
    textMed: {
        color: TEXTCOLOR8,
        fontFamily: FONTS.FontRegular,
        fontSize: fontSize(14)
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: GlobalSize(20)
    },
    textBtn: {
        color: PUREWHITE,
        fontFamily: FONTS.FontMedium,
        fontSize: fontSize(15)
    },
    medBtn: {
        backgroundColor: PRIMARYCOLOR,
        width: DEFAULTWIDTH * 0.90,
        height: GlobalSize(50),
        borderRadius: GlobalSize(8),
        justifyContent: 'space-between',
        paddingLeft: GlobalSize(15),
        paddingRight: GlobalSize(15),
        marginBottom: GlobalSize(5),
        flexDirection: 'row',
        alignItems: 'center'
    },
    textMed: {
        fontFamily: FONTS.FontMedium,
        fontSize: fontSize(15),
        color: PUREBLACK
    },
    btnView: {
        borderWidth: 1,
        borderRadius: GlobalSize(8),
        borderColor: BORDERCOLORSC1,
        width: DEFAULTWIDTH * 0.90,
        height: GlobalSize(50),
        justifyContent: 'space-between',
        paddingLeft: GlobalSize(15),
        paddingRight: GlobalSize(20),
        marginBottom: GlobalSize(5),
        flexDirection: 'row',
        alignItems: 'center'
    },
    card:{
        borderWidth:1,
        borderColor:BORDERCOLORSC1,
        borderRadius:GlobalSize(4),
        height:GlobalSize(100),
        width:DEFAULTWIDTH*0.90,
        marginBottom:GlobalSize(10)
    }
})