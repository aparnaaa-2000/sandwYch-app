import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    TextInput,
    ScrollView,
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
import moment from 'moment';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DEFAULTSTYLES, { DEFAULTWIDTH } from '../../../../../Constants/styles/styles';

const CarePartnerInfo = ({ navigation }) => {

    const [Name, setName] = useState(null)
    const [Email, setEmail] = useState(null)
    const [Phone,setPhone] = useState(null)
    const [Address,setAddress] = useState(null)

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    //Open Ethinicity dropdown
    const [valueRelation, setValueRelation] = useState('');
    const [relationship, setRelationship] = useState([
        { label: 'Spouse / Partner', value: 'Spouse / Partner' },
        { label: 'Mother / Father', value: 'Mother / Father' },
        {label:'Mother-in-law / Father-in-law ',value:'Mother-in-law / Father-in-law'},
        {label:'Grandparent',value:'Grandparent'},
        {label:'Grandparent-in-law',value:'Grandparent-in-law'},
        {label:'Brother / Sister',value:'Brother / Sister'},
        {label:'Son / Daughter',value:'Son / Daughter'},
        {label:'Daughter- or Son-in-Law',value:'Daughter- or Son-in-Law'},
        {label:'Uncle or Aunt',value:'Uncle or Aunt'},
        {label:'Nephew or Niece',value:'Nephew or Niece'},
        {label:'Foster child',value:'Foster child'},
        {label:'Friend',value:'Friend'},
        {label:'Neighbor',value:'Neighbor'},
        {label:'Other',value:'Other'}
      ])


    //To open Language dropdown
    const [valueLang, setValueLang] = useState('');
    const [Lang, setLang] = useState([
        { label: 'English', value: 'English' },
        { label: 'German', value: 'German' },
    ]);

    //Title 
    const [valueTitle, setValueTitle] = useState('');
    const [Title, setTitle] = useState([
        { label: 'Mr', value: 'Mr' },
        { label: 'Ms', value: 'Ms' },
    ]);

    //To open Gender dropdown
    const [valueGd, setValueGd] = useState('');
    const [Gd, setGd] = useState([
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
    ]);

    const [valueSalary,setValueSalary] = useState('')
    const [Salary,setSalary] = useState([
        {label:'< $30,000',value:'< $30,000'},
        {label:'$30,000 - $39,999',value:'$30,000 - $39,999'},
        {label:'$40,000 - $59,999',value:'$40,000 - $59,999'},
        {label:'$60,000 - $79,999',value:'$60,000 - $79,999'},
        {label:'$80,000 - $99,999',value:'$80,000 - $99,999'},
        {label:'$100,000 - $149,999',value:'$100,000 - $149,999'},
        {label:'$150,000 - $199,999',value:'$150,000 - $199,999'},
        {label:'> $200,000',value:'> $200,000'}
    ])

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        const ConvertDate = moment(date).format('DD MMMM YYYY')
        console.warn("A date has been picked: ", ConvertDate);
        setDOB(ConvertDate)
        hideDatePicker();
    };

    const NextNavigation = () => { //After enter all the details Next button will enable.
        if (valueTitle && Name && Email &&valueRelation && valueLang &&valueSalary) {
            navigation.navigate('BehaviorDetails');
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
            <ScrollView  showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.mainHeader}>Care partner Demographics</Text>
                        <View>
                            <Text style={styles.subHeader1}>Basic demographic information allows us to personalize the app to your preferences.</Text>
                        </View>
                    </View>
                    
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View style={{marginRight:15 }} >
                        <Text style={styles.subHeader}>Title</Text>

                        <Dropdown
                            style={[styles.textIn,{width:DEFAULTWIDTH*0.2,height:DEFAULTWIDTH*0.132}]}
                            placeholderStyle={styles.placeholderS}
                            itemTextStyle={styles.textArea}
                            selectedTextStyle={styles.textArea}
                            containerStyle={[styles.dropView,{width:DEFAULTWIDTH*0.2}]}
                            data={Title}
                            search={false}
                            labelField="label"
                            valueField="value"
                            placeholder={''}
                            dropdownPosition='TOP'
                            showsVerticalScrollIndicator={false}
                            value={valueTitle}
                            onChange={item => {
                                setValueTitle(item.value);
                            }}

                        />
                    </View>
                        <View>

                            <Text style={styles.subHeader}>Name</Text>

                            <View style={DEFAULTSTYLES.alignView}>
                            <TextInput
                                value={Name}
                                style={[styles.textIn, {height:DEFAULTWIDTH*0.132 ,width:DEFAULTWIDTH*0.66 }]}
                                onChangeText={(text) => setName(text)} />
                                </View>
                        </View>
                        </View>
                        <View>
                            <Text style={styles.subHeader}>Email / Phone number</Text>

                            <View style={DEFAULTSTYLES.alignView}>
                            <TextInput
                                value={Email}
                                style={[styles.textIn, {height:DEFAULTWIDTH*0.132  }]}
                                onChangeText={(text) => setEmail(text)} />
                                </View>
                        </View>

                    <View style={{ marginTop: 5 }} >
                        <Text style={styles.subHeader}>Language</Text>

                        <Dropdown
                            style={styles.textIn}
                            placeholderStyle={styles.placeholderS}
                            itemTextStyle={styles.textArea}
                            selectedTextStyle={styles.textArea}
                            containerStyle={styles.dropView}
                            data={Lang}
                            search={false}
                            showsVerticalScrollIndicator={false}
                            labelField="label"
                            valueField="value"
                            placeholder={'Select'}
                            dropdownPosition='TOP'
                            value={valueLang}
                            onChange={item => {
                                setValueLang(item.value);
                            }}

                        />
                    </View>

                    <View style={{ marginTop: 5 }}>
                        <Text style={styles.subHeader}>What is your relationship to (Patient)? Are they your...</Text>
                        <Dropdown
                            style={styles.textIn}
                            dropdownPosition='TOP'
                            placeholderStyle={styles.placeholderS}
                            itemTextStyle={styles.textArea}
                            selectedTextStyle={styles.textArea}
                            containerStyle={styles.dropView}
                            data={relationship}
                            showsVerticalScrollIndicator={false}
                            search={false}
                            labelField="label"
                            valueField="value"
                            placeholder={'Select'}
                            value={valueRelation}
                            onChange={item => {
                                setValueRelation(item.value);
                            }}

                        />
                    </View>

                    <View style={{ marginTop: 5 }}>
                        <Text style={styles.subHeader}>What is your annual household income?</Text>
                        <Dropdown
                            style={styles.textIn}
                            placeholderStyle={styles.placeholderS}
                            itemTextStyle={styles.textArea}
                            selectedTextStyle={styles.textArea}
                            iconStyle={styles.iconStyle}
                            data={Salary}
                            containerStyle={styles.dropView}
                            search={false}
                            labelField="label"
                            dropdownPosition='TOP'
                            showsVerticalScrollIndicator={false}
                            valueField="value"
                            placeholder={'Select'}
                            value={valueSalary}
                            onChange={item => {
                                setValueSalary(item.value);
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
                                style={[styles.buttonStyle, { marginRight:0 }]}>
                                <Text style={styles.buttonText}>Back</Text>
                            </Button>

                            <Button
                                onPress={() => backToEnrollment()}
                                style={[styles.buttonStyle, { marginRight: 0}]}>
                                <Text style={styles.buttonText}>Save & Exit</Text>
                            </Button>

                            <Button
                                onPress={() => NextNavigation()}
                                style={[styles.buttonStyle, { borderColor: valueTitle && Name && Email &&valueRelation && valueLang &&valueSalary ? BORDERCOLOR4 : LINECOLOR1 }]}>
                                <Text style={[styles.buttonText, { color: valueTitle && Name && Email &&valueRelation && valueLang &&valueSalary ? TEXTCOLOR7 : LINECOLOR1 }]}>Next</Text>
                            </Button>
                       
                    </View>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
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
        padding: DEFAULTWIDTH * 0.05
    },
    mainHeader: {
        fontFamily: 'Inter-Bold',
        fontSize: 23,
        color: TEXTCOLOR8,
    },
    dropView: {
        borderRadius: 8,
        borderColor: BORDERCOLOR4,
        width: DEFAULTWIDTH * 0.90,
        padding: 5,
        marginBottom:10
    },
    subHeader1: {
        marginTop: 8,
        marginBottom: 8,
        color: TEXTCOLOR5,
        fontSize: 14,
        fontFamily: 'Inter-Medium',
    },
    DateView: {
        width: DEFAULTWIDTH * 0.43,
        height: DEFAULTWIDTH * 0.12,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: BORDERCOLOR1,
        paddingLeft: 15,
        backgroundColor: BACKGROUNDWHITE,
        paddingRight: 10,
        justifyContent: 'space-between',
    },
    DateText: {
        fontSize: 10,
        fontFamily: FONTS.FontRegular,
        fontWeight: '400',
        color: TEXTCOLOR7,
        left: -5
    },
    subHeader: {
        marginTop: 8,
        marginBottom: 8,
        color: TEXTCOLOR7,
        fontSize: 14,
        fontFamily: 'Inter-Medium',
    },
    placeholderS: {
        fontSize: 14,
        fontFamily: FONTS.FontRegular,
        color: BOTTOMTABTEXT1
    },
    textIn: {
        backgroundColor: BACKGROUNDWHITE,
        width: DEFAULTWIDTH * 0.90,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: BORDERCOLOR1,
        paddingLeft: 15,
        padding: 5,
        color: TEXTCOLOR7
    },
    textArea: {
        fontSize: 14,
        fontFamily: FONTS.FontRegular,
        fontWeight: '400',
        color: TEXTCOLOR10,
    },
    buttonText: {
        color: TEXTCOLOR7,
        fontFamily: 'Inter-Medium',
        fontSize: 14,
    },
    buttonStyle: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: BORDERCOLOR4,
        width: DEFAULTWIDTH * 0.29,
    },
    buttonPos: {
        position: 'relative',
        bottom: 20,
        justifyContent: 'space-around',
        marginTop: DEFAULTWIDTH * 0.15
    },
    viewButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

})
export default CarePartnerInfo;



