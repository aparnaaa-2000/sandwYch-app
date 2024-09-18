import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    Dimensions,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import {
    BACKGROUNDWHITE,
    BORDERCOLOR1,
    BORDERCOLOR4,
    BOTTOMTABTEXT1,
    LINECOLOR1,
    TEXTCOLOR10,
    TEXTCOLOR5,
    TEXTCOLOR7,
    TEXTCOLOR8
} from '../../../../../Constants/Colors/Colors';
import { Dropdown } from 'react-native-element-dropdown';
import { FONTS } from '../../../../../Constants/Fonts';
import { Button } from 'react-native-paper';
import { CalenderLine } from '../../../../../../assets';
import moment from 'moment';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DEFAULTSTYLES, { DEFAULTWIDTH } from '../../../../../Constants/styles/styles';
import { GlobalSize, fontSize } from '../../../../../Constants/ResponsiveFont/ResponsiveFonts';

const Demographics = ({ navigation }) => {

    const [Zipcode, setZipcode] = useState('')
    const [DOB, setDOB] = useState('')
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    //Open Ethinicity dropdown
    const [valueEthnicity, setValueEthinicity] = useState('');
    const [Ethnicity, setEthnicity] = useState([
        { label: 'American', value: 'American' },
        { label: 'Asian', value: 'Asian' },
    ]);


    //To open Language dropdown
    const [valueLang, setValueLang] = useState('');
    const [Lang, setLang] = useState([
        { label: 'English', value: 'English' },
        { label: 'German', value: 'German' },
    ]);

    //To open Gender dropdown
    const [valueGd, setValueGd] = useState('');
    const [Gd, setGd] = useState([
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
    ]);

    //To open Education dropdown
    const [valueEd, setValueEd] = useState('');
    const [Education, setEducation] = useState([
        { label: 'Bsc', value: 'Bsc' },
        { label: 'BCOM', value: 'BCOM' },
    ]);

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        const ConvertDate = moment(date).format('DD/MM/YYYY')
        console.warn("A date has been picked: ", ConvertDate);
        setDOB(ConvertDate)
        hideDatePicker();
    };

    const NextNavigation = () => { //After enter all the details Next button will enable.
        if (Zipcode && DOB && valueEthnicity && valueEd && valueLang && valueGd && valueEd) {
            navigation.navigate('LivingForm');
        } else {
            console.log("hey")
        }
    }

    const backToHC = () => {
        navigation.goBack();
    };

    const backToEnrollment = () => {
        navigation.navigate('EnrollmentProgress');
    };


    return (

        <SafeAreaView style={{ backgroundColor: BACKGROUNDWHITE, flex: 1 }}>
            <StatusBar backgroundColor={BACKGROUNDWHITE} barStyle={'dark-content'} style={{ flex: 0 }} />
            <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                <View>
                    <View>
                        <Text style={styles.mainHeader}>Demographics</Text>
                        <View>
                            <Text style={styles.subHeader1}>Patient basic information</Text>
                        </View>
                    </View>
                    <View style={styles.titleStart}>
                        <View style={{ marginRight: GlobalSize(15) }}>
                            <Text style={styles.subHeader}>Zipcode</Text>
                            <TextInput
                                value={Zipcode}
                                maxLength={5}
                                keyboardType='number-pad'
                                style={[styles.textIn, { width: DEFAULTWIDTH * 0.43, height: DEFAULTWIDTH * 0.12 }]}
                                onChangeText={(text) => setZipcode(text)} />
                        </View>

                        <View >
                            <Text style={styles.subHeader}>Date of Birth</Text>
                            <View style={DEFAULTSTYLES.alignView}>
                                <View style={[styles.dateView, { flexDirection: 'row' }]}>
                                    <TextInput
                                        value={DOB}
                                        onChangeText={(text) => setDOB(text)}
                                        style={styles.dateText}
                                    />
                                    <View style={DEFAULTSTYLES.alignView}>
                                        <TouchableOpacity
                                            onPress={() => setDatePickerVisibility(true)}
                                            style={{ padding: GlobalSize(5) }}>
                                            <CalenderLine />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>

                    <View>
                        <Text style={styles.subHeader}>Ethnicity</Text>
                        <Dropdown
                            style={styles.textIn}
                            placeholderStyle={styles.placeholderS}
                            itemTextStyle={styles.textArea}
                            selectedTextStyle={styles.textArea}
                            containerStyle={styles.dropView}
                            data={Ethnicity}
                            search={false}
                            labelField="label"
                            valueField="value"
                            placeholder={'Select'}
                            value={valueEthnicity}
                            showsVerticalScrollIndicator={false}
                            onChange={item => {
                                setValueEthinicity(item.value);
                            }}
                        />

                    </View>

                    <View style={{ marginTop: GlobalSize(5) }} >
                        <Text style={styles.subHeader}>Language Needs</Text>

                        <Dropdown
                            style={styles.textIn}
                            placeholderStyle={styles.placeholderS}
                            itemTextStyle={styles.textArea}
                            selectedTextStyle={styles.textArea}
                            containerStyle={styles.dropView}
                            data={Lang}
                            search={false}
                            labelField="label"
                            valueField="value"
                            placeholder={'Select'}
                            value={valueLang}
                            showsVerticalScrollIndicator={false}
                            onChange={item => {
                                setValueLang(item.value);
                            }}

                        />
                    </View>

                    <View style={{ marginTop: GlobalSize(5) }}>
                        <Text style={styles.subHeader}>Gender Identity</Text>
                        <Dropdown
                            style={styles.textIn}
                            placeholderStyle={styles.placeholderS}
                            itemTextStyle={styles.textArea}
                            selectedTextStyle={styles.textArea}
                            containerStyle={styles.dropView}
                            data={Gd}
                            search={false}
                            labelField="label"
                            showsVerticalScrollIndicator={false}
                            valueField="value"
                            placeholder={'Select'}
                            value={valueGd}
                            onChange={item => {
                                setValueGd(item.value);
                            }}

                        />
                    </View>

                    <View style={{ marginTop: GlobalSize(5) }}>
                        <Text style={styles.subHeader}>Education Level</Text>
                        <Dropdown
                            style={styles.textIn}
                            placeholderStyle={styles.placeholderS}
                            itemTextStyle={styles.textArea}
                            selectedTextStyle={styles.textArea}
                            iconStyle={styles.iconStyle}
                            data={Education}
                            containerStyle={styles.dropView}
                            search={false}
                            labelField="label"
                            valueField="value"
                            placeholder={'Select'}
                            value={valueEd}
                            showsVerticalScrollIndicator={false}
                            onChange={item => {
                                setValueEd(item.value);
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
            <View style={styles.buttonPos}>
                <View
                    style={styles.viewButton}>
                    <Button
                        onPress={() => backToHC()}
                        style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>Back</Text>
                    </Button>

                    <Button
                        onPress={() => backToEnrollment()}
                        style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>Save & Exit</Text>
                    </Button>

                    <Button
                        onPress={() => NextNavigation()}
                        style={[styles.buttonStyle, { borderColor: Zipcode && DOB && valueEthnicity && valueEd && valueLang && valueGd && valueEd ? BORDERCOLOR4 : LINECOLOR1 }]}>
                        <Text style={[styles.buttonText, { color: Zipcode && DOB && valueEthnicity && valueEd && valueLang && valueGd && valueEd ? TEXTCOLOR7 : LINECOLOR1 }]}>Next</Text>
                    </Button>

                </View>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    maximumDate={new Date()}
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
            </View>

        </SafeAreaView>


    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUNDWHITE,
        padding: DEFAULTWIDTH * 0.05,
    },
    mainHeader: {
        fontFamily: 'Inter-Bold',
        fontSize: fontSize(26),
        color: TEXTCOLOR8,
    },
    dropView: {
        borderRadius: GlobalSize(8),
        borderColor: BORDERCOLOR4,
        width: DEFAULTWIDTH * 0.90,
        padding: GlobalSize(5)
    },
    subHeader1: {
        marginTop: GlobalSize(8),
        marginBottom: GlobalSize(8),
        color: TEXTCOLOR5,
        fontSize: fontSize(14),
        fontFamily: 'Inter-Medium',
    },
    dateView: {
        width: DEFAULTWIDTH * 0.43,
        height: DEFAULTWIDTH * 0.12,
        borderWidth: 1,
        borderRadius: GlobalSize(4),
        borderColor: BORDERCOLOR1,
        paddingLeft: GlobalSize(15),
        backgroundColor: BACKGROUNDWHITE,
        paddingRight: GlobalSize(10),
        justifyContent: 'space-between',
        //marginBottom: DEFAULTWIDTH * 0.05,

    },
    dateText: {
        fontSize: fontSize(12),
        fontFamily: FONTS.FontRegular,
        fontWeight: '400',
        color: TEXTCOLOR7,
        left: GlobalSize(-5)
    },
    subHeader: {
        marginTop: GlobalSize(8),
        marginBottom: GlobalSize(8),
        color: TEXTCOLOR7,
        fontSize: fontSize(14),
        fontFamily: 'Inter-Medium',
    },
    placeholderS: {
        fontSize: fontSize(14),
        fontFamily: FONTS.FontRegular,
        color: BOTTOMTABTEXT1
    },
    textIn: {
        backgroundColor: BACKGROUNDWHITE,
        width: DEFAULTWIDTH * 0.90,
        borderWidth: 1,
        borderRadius: GlobalSize(8),
        borderColor: BORDERCOLOR1,
        paddingLeft: GlobalSize(15),
        padding: GlobalSize(5),
        color: TEXTCOLOR7
    },
    textArea: {
        fontSize: fontSize(14),
        fontFamily: FONTS.FontRegular,
        fontWeight: '400',
        color: TEXTCOLOR10,
    },
    buttonText: {
        color: TEXTCOLOR7,
        fontFamily: 'Inter-Medium',
        fontSize: fontSize(14),
    },
    buttonStyle: {
        borderRadius: GlobalSize(8),
        borderWidth: 1,
        borderColor: BORDERCOLOR4,
        width: DEFAULTWIDTH * 0.29,
    },
    buttonPos: {
        position: 'relative',
        bottom: GlobalSize(20),
        justifyContent: 'space-around',
    },
    viewButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    titleStart: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: GlobalSize(10)
    }
})
export default Demographics;



