import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { BACKGROUNDWHITE, PRIMARYCOLOR, PUREWHITE } from '../../../../../Constants/Colors/Colors'
import DEFAULTSTYLES, { DEFAULTWIDTH } from '../../../../../Constants/styles/styles'
import InitialAssessment from '../../../../../Components/CarePartner/Assessments/AssessmentSummary/InitialAssessment'
import { GlobalSize, fontSize } from '../../../../../Constants/ResponsiveFont/ResponsiveFonts'
import Info from '../../../../../Components/CarePartner/Assessments/AssessmentSummary/Info'
import AssessInfo from '../../../../../Components/CarePartner/Assessments/AssessmentSummary/AssessInfo'
import { FONTS } from '../../../../../Constants/Fonts'


const AssessmentSummary = ({navigation}) => {
    return (
        <SafeAreaView style={DEFAULTSTYLES.AndroidSafeArea}>
            <StatusBar backgroundColor={BACKGROUNDWHITE} barStyle={'dark-content'} style={{ flex: 0 }} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ padding: GlobalSize(15) }}>
                    <InitialAssessment />
                    <Info />
                    <AssessInfo />

                    <View style={[DEFAULTSTYLES.alignView,{marginTop:GlobalSize(10)}]}>
                        <TouchableOpacity style={styles.touchBtn} onPress={()=> navigation.navigate('LandingScreen')}>
                            <Text style={styles.textBtn}>SUBMIT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AssessmentSummary

const styles = StyleSheet.create({
    textBtn: {
        fontSize: fontSize(15),
        color: PUREWHITE,
        fontFamily: FONTS.FontMedium,
        textAlign: 'center',
    },
    touchBtn: {
        marginBottom: GlobalSize(10),
        width: DEFAULTWIDTH * 0.9,
        height: DEFAULTWIDTH * 0.14,
        backgroundColor: PRIMARYCOLOR,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
})