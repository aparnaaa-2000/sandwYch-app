import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import DEFAULTSTYLES from '../../../../Constants/styles/styles'
import { BACKGROUNDWHITE, TEXTCOLOR5 } from '../../../../Constants/Colors/Colors'

import { FONTS } from '../../../../Constants/Fonts'
import SubHeader from '../../../../Components/Common/Headers/SubHeader'
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts'

const PrivacyPolicy = ({ navigation }) => {
    return (
        <SafeAreaView style={DEFAULTSTYLES.AndroidSafeArea}>
            <StatusBar
                backgroundColor={BACKGROUNDWHITE}
                barStyle={'dark-content'}
                style={{ flex: 0 }} />

            <ScrollView showsVerticalScrollIndicator={false}>

                <SubHeader title={'Privacy Policy'} navigation={navigation} />

                <View style={styles.subView}>
                    <Text style={styles.textDesc}>National Hospice and Palliative Care Organization (“NHPCO”) is committed to maintaining robust privacy protections for its users. Our Privacy Policy (“Privacy Policy”) is designed to help you understand how we collect, use, and safeguard the information you provide to us and to assist you in making informed decisions when using CaringInfo, a program of NHPCO.

                        For purposes of this Agreement:

                        “Site” or “CaringInfo” refers to the CaringInfo.org, which can be accessed here: https://www.caringinfo.org
                        The terms “we,” “us,” and “our” refer to NHPCO.
                        “You” refers to you, as a user of our Site.

                        By accessing CaringInfo, you accept our Privacy Policy, and you consent to our collection, storage, use and disclosure of your Personal Information as described in this Privacy Policy.
                        I. Information We Collect

                        We collect “Non-Personal Information” and “Personal Information.”

                        Non-Personal Information includes information that cannot be used to personally identify you, such as:

                        How our content was accessed (For example: Google search results, website link)
                        Date and time of access;
                        Content (For example: webpages, files, and resources) accessed;
                        Navigational path through our content;
                        Volume of data transferred;
                        Browser type;
                        Requesting domain;
                        Country and region of origin (such as state) of requesting domain.
                        Gender
                        Age

                        Personal Information includes your name and email, if you submit an inquiry to us through the Contact CaringInfo form.
                        1. Information collected via Technology</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PrivacyPolicy

const styles = StyleSheet.create({
    textDesc: {
        fontFamily: FONTS.FontRegular,
        fontSize: fontSize(13),
        color: TEXTCOLOR5,
        lineHeight: GlobalSize(20),
        marginTop: GlobalSize(10)
    },
    subView: {
        marginHorizontal: GlobalSize(22),
        marginTop: GlobalSize(10),
        marginVertical:GlobalSize(20)
    }
})