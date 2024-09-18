import React, { useRef, useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView
} from 'react-native';
import {
    PUREWHITE,
    SECONDARYCOLOR,
    TEXTCOLOR7,
    BORDERCOLOR1,
    BORDERCOLOR4,
    THIRDCOLOR,
    BACKGROUNDWHITE,
    PRIMARYCOLOR,
    VALIDCOLOR,
    TEXTCOLOR10
} from '../../../Constants/Colors/Colors';
import moment from 'moment';
import { FONTS } from '../../../Constants/Fonts';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import TaskHeader from './TaskHeader';
import { Dropdown } from "react-native-element-dropdown";
import { CalenderLine } from '../../../../assets';
import { ScrollView } from 'react-native';
import DEFAULTSTYLES, { DEFAULTHEIGHT, DEFAULTWIDTH } from '../../../Constants/styles/styles';
import { GlobalSize, fontSize } from '../../../Constants/ResponsiveFont/ResponsiveFonts';


const CreateTask = ({ navigation, route }) => {

    const TitleRef = useRef();
    const DescRef = useRef();
    const PhysicianRef = useRef();
    const AddressRef = useRef();
    const AppointmentRef = useRef();
    const TeamRef = useRef();

    const [Title, setTitle] = useState(null)
    const [Desc, setDesc] = useState(null)
    const [date, setDate] = useState(null)
    const [Address, setAddress] = useState(null)
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [TitleStatus, setTitleStatus] = useState(true)
    const [CategStatus, setCategStatus] = useState(true)
    const [DescStatus, setDescStatus] = useState(true)
    const [FreqStatus, setFreqStatus] = useState(true)
    const [PhysicianStatus, setPhysicianStatus] = useState(true)
    const [AddStatus, setAddStatus] = useState(true)
    const [TeamStatus, setTeamStatus] = useState(true)
    const [NewDate, setNewDate] = useState(new Date())
    const [AppointmentStatus, setAppointmentStatus] = useState(true)

    const [selectedOption, setSelectedOption] = useState(null);


    //To open Physician name
    const [valueP, setValueP] = useState(null)
    const [physician, setPhysicianNm] = useState([
        { label: 'Dr Yang', value: 'Dr Yang' },
        { label: 'Dr Mathew', value: 'Dr Mathew' },

    ]);

    //To open care team
    const [valueTeam, setValueTeam] = useState(null);
    const [Team, setTeam] = useState([
        { label: 'Betty M', value: 'Betty M' },
        { label: 'Ava Lounge', value: 'Ava Lounge' },

    ]);

    // Category 
    const [categValue, setCategValue] = useState(null)
    const [Category, setCategory] = useState([
        { label: 'Appointment', value: 'Appointment' },
        { label: 'Others', value: 'Others' }
    ])


    const hideDatePicker = () => {
        setAppointmentStatus(true)
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        const ConvertDate = moment(date).format('MMMM D, YYYY h:mm A')
        console.warn("A date has been picked: ", ConvertDate);
        setDate(ConvertDate)
        hideDatePicker();
    };

    //TITLE VALIDATION
    const handleTitleChange = (text) => {
        const isValidTitle = /^[A-Za-z.,0-9 ]{2,}$/.test(text);
        setTitleStatus(isValidTitle)
        setTitle(text);
    };

    console.log("converted state...................", date)

    //ADDRESS VALIDATION
    const handleAddressChange = (text) => {
        const isValidAddress = /^[A-Za-z1234567890 ,./-_()&@;:\s]{2,50}$/.test(text);
        setAddStatus(isValidAddress)
        setAddress(text);
    };

    //DESCRIPTION VALIDATION
    const handleDescChange = (text) => {
        const isValidDesc = /^[A-Za-z1234567890 ,./-_()&@;:\s]{2,50}$/.test(text);
        setDescStatus(isValidDesc)
        setDesc(text);
    };

    // FUNCTION FOR SELECTING FREQUENCY
    const handleOptionPress = (option) => {
        setSelectedOption(option);
        setFreqStatus(true)
    };

    const OnSubmitValidation = () => { // TO VALIDATE ALL THE FIELDS ARE FILLED AND CALLING THE API

        if (categValue == null) {
            setCategStatus(false)
        }
        else if (Title == null) {
            TitleRef.current.focus();
            setTitleStatus(false)
        }
        else if (selectedOption == null) {
            setFreqStatus(false)
        }

        else if (categValue == 'Appointment' && valueP == null) {
            PhysicianRef?.current?.focus();
            setPhysicianStatus(false)
        }

        else if (Desc == null) {
            DescRef?.current.focus();
            setDescStatus(false)
        }

        else if (categValue == 'Appointment' && Address == null) {
            AddressRef?.current?.focus()
            setAddStatus(false)
        }
        else if (categValue == 'Appointment' && valueTeam == null) {
            TeamRef?.current?.focus()
            setTeamStatus(false)
        }
        else {
            navigation.navigate('TasksLandingPage')
        }
    }

    const SaveTask = () => { //To create a task
        const TasksList = {
            id: route.params.Task?.length + 1,
            Title: Title,
            Dosage: valueP,
            Time: date,
            Address: Address,
            Team: valueTeam,
            Status: valueTeam ? valueTeam : 'Unassigned',
            type: 'Appointment',
            DateFilter: route?.params?.selectedDate?.toDateString()
        }
        route.params.setTask([...route.params.Task, TasksList])
        // navigation.navigate('TaskList')
    }

    return (

        <KeyboardAvoidingView
          //  behavior="height"
            style={{ flex: 1, backgroundColor:BACKGROUNDWHITE}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>

                    <TaskHeader name={'New Task'} navigation={navigation} />

                    <View style={DEFAULTSTYLES.marginLeft}>
                        <Text style={styles.textField}>Task Category</Text>
                    </View>

                    <View style={styles.alignView}>
                        <Dropdown
                            style={[styles.textIn, { borderColor: CategStatus ? BORDERCOLOR1 : VALIDCOLOR }]}
                            placeholderStyle={styles.placeholderS}
                            itemTextStyle={styles.textArea}
                            selectedTextStyle={styles.textArea}
                            containerStyle={styles.dropView}
                            data={Category}
                            search={false}
                            labelField="label"
                            valueField="value"
                            placeholder={''}
                            value={categValue}
                            showsVerticalScrollIndicator={false}
                            onChange={item => {
                                setCategValue(item.value)
                                setCategStatus(true)
                            }}
                        />
                    </View>

                    <View style={styles.marginView}>
                        {!CategStatus && (
                            <Text style={{ color: VALIDCOLOR }}>Task category is required</Text>
                        )}
                    </View>

                    <View style={DEFAULTSTYLES.marginLeft}>
                        <Text style={styles.textField}>Title</Text>
                    </View>
                    <View style={styles.alignView}>
                        <TextInput
                            ref={TitleRef}
                            value={Title}
                            onChangeText={(text) => handleTitleChange(text)}
                            style={[styles.textIn, { borderColor: TitleStatus ? BORDERCOLOR1 : VALIDCOLOR }]} />
                    </View>

                    <View style={styles.marginView}>
                        {!TitleStatus && (
                            <Text style={{ color: VALIDCOLOR }}>Title is required</Text>
                        )}
                    </View>

                    <View style={DEFAULTSTYLES.marginLeft}>
                        <Text style={styles.textField}>Date and Time</Text>
                    </View>

                    <View style={[DEFAULTSTYLES.alignView, { marginBottom: GlobalSize(10) }]}>
                        <View style={[styles.dateView, { flexDirection: 'row', borderColor: AppointmentStatus ? BORDERCOLOR4 : VALIDCOLOR }]}>
                            <Text style={styles.dateText}>{date ? date : moment(NewDate).format('MMMM D, YYYY h:mm A')}</Text>
                            <View style={DEFAULTSTYLES.alignView}>
                                <TouchableOpacity onPress={() => setDatePickerVisibility(true)} style={{ padding: 5 }}>
                                    <CalenderLine />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {!AppointmentStatus && (
                        <View style={styles.marginView}>
                            <Text style={{ color: VALIDCOLOR }}>Date and time is required</Text>
                        </View>
                    )}

                    <View style={DEFAULTSTYLES.marginLeft}>
                        <Text style={styles.textField}>Frequency</Text>
                    </View>

                    <View style={styles.rowFlex}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                style={styles.radioButton}
                                onPress={() => handleOptionPress('Repeated')}>

                                <View style={[styles.radioIcon, selectedOption == 'Repeated' && styles.radioIconSelected]}>
                                    {selectedOption == 'Repeated' && <View style={styles.radioBorder} />}
                                </View>
                            </TouchableOpacity>

                            <View style={{ marginTop: GlobalSize(7) }}>
                                <Text style={styles.textField}>Repeated</Text>
                            </View>

                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                style={styles.radioButton}
                                onPress={() => handleOptionPress('Once')}>

                                <View style={[styles.radioIcon, selectedOption == 'Once' && styles.radioIconSelected]}>
                                    {selectedOption == 'Once' && <View style={styles.radioBorder} />}
                                </View>

                            </TouchableOpacity>

                            <View style={{ marginTop: GlobalSize(7) }}>
                                <Text style={styles.textField}>Once</Text>
                            </View>
                        </View>
                    </View>

                    {!FreqStatus && (
                        <View style={styles.marginView}>
                            <Text style={{ color: VALIDCOLOR }}>Frequency is required</Text>
                        </View>
                    )}

                    {categValue == 'Appointment' &&
                        <>
                            <View style={DEFAULTSTYLES.marginLeft}>
                                <Text style={styles.textField}>Assign Physician</Text>
                            </View>
                            <View style={styles.alignView}>

                                <Dropdown
                                    style={[styles.textIn, { borderColor: PhysicianStatus ? BORDERCOLOR1 : VALIDCOLOR }]}
                                    placeholderStyle={styles.placeholderS}
                                    itemTextStyle={styles.textArea}
                                    selectedTextStyle={styles.textArea}
                                    containerStyle={styles.dropView}
                                    data={physician}
                                    search={false}
                                    labelField="label"
                                    valueField="value"
                                    placeholder={''}
                                    value={valueP}
                                    showsVerticalScrollIndicator={false}
                                    onChange={item => {
                                        setValueP(item.value)
                                        setPhysicianStatus(true)
                                    }}
                                />
                            </View>

                            <View style={styles.marginView}>
                                {!PhysicianStatus && (
                                    <Text style={{ color: VALIDCOLOR }}>Physician is required</Text>
                                )}
                            </View>
                        </>}



                    <View style={DEFAULTSTYLES.marginLeft}>
                        <Text style={styles.textField}>Description</Text>
                    </View>

                    <View style={styles.alignView}>
                        <TextInput
                            ref={DescRef}
                            value={Desc}
                            onChangeText={(text) => handleDescChange(text)}
                            style={[styles.textIn,
                            {
                                borderColor: DescStatus ? BORDERCOLOR1 : VALIDCOLOR,
                                height: DEFAULTHEIGHT * 0.15,
                                textAlignVertical: 'top'
                            }]} />
                    </View>

                    <View style={styles.marginView}>
                        {!DescStatus && (
                            <Text style={{ color: VALIDCOLOR }}>Description is required</Text>
                        )}
                    </View>

                    {categValue == 'Appointment' &&
                        <>
                            <View style={DEFAULTSTYLES.marginLeft}>
                                <Text style={styles.textField}>Address</Text>
                            </View>

                            <View style={styles.alignView}>
                                <TextInput
                                    ref={AddressRef}
                                    value={Address}
                                    onChangeText={(text) => handleAddressChange(text)}
                                    style={[styles.textIn, { borderColor: AddStatus ? BORDERCOLOR1 : VALIDCOLOR }]} />
                            </View>


                            <View style={styles.marginView}>
                                {!AddStatus && (
                                    <Text style={{ color: VALIDCOLOR }}>Address is required</Text>
                                )}
                            </View>
                        </>}

                    {categValue == 'Appointment' &&
                        <>
                            <View style={DEFAULTSTYLES.marginLeft}>
                                <Text style={styles.textField}>Assign Care Team Member or Support Member</Text>
                            </View>

                            <View style={styles.alignView}>

                                <Dropdown
                                    style={[styles.textIn, { borderColor: TeamStatus ? BORDERCOLOR1 : VALIDCOLOR }]}
                                    placeholderStyle={styles.placeholderS}
                                    itemTextStyle={styles.textArea}
                                    selectedTextStyle={styles.textArea}
                                    containerStyle={styles.dropView}
                                    data={Team}
                                    search={false}
                                    labelField="label"
                                    valueField="value"
                                    placeholder={'Assign'}
                                    value={valueTeam}
                                    showsVerticalScrollIndicator={false}
                                    onChange={item => {
                                        setValueTeam(item.value)
                                        setTeamStatus(true)
                                    }}
                                />
                            </View>


                            <View style={styles.marginView}>
                                {!TeamStatus && (
                                    <Text style={{ color: VALIDCOLOR }}>Care team is required</Text>
                                )}
                            </View>
                        </>}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.btnView} onPress={() => OnSubmitValidation()}>
                            <Text style={styles.textBtn}>Save Task</Text>
                        </TouchableOpacity>
                        <View style={{ marginTop: DEFAULTWIDTH * 0.05, marginBottom: GlobalSize(15) }}>
                            <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: GlobalSize(5) }}>
                                <Text style={styles.textCancel}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="datetime"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUNDWHITE,
    },
    buttonContainer: {
        top: 10,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 5,
    },
    btnView: {
        width: DEFAULTWIDTH * 0.88,
        height: DEFAULTWIDTH * 0.125,
        backgroundColor: PRIMARYCOLOR,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: GlobalSize(4),
    },
    radioIcon: {
        marginLeft: GlobalSize(10),
        width: GlobalSize(20),
        height: GlobalSize(20),
        borderRadius: GlobalSize(10),
        borderWidth: 2,
        borderColor: BORDERCOLOR4,
        marginRight: GlobalSize(8),
        backgroundColor: PUREWHITE
    },
    radioIconSelected: {
        backgroundColor: PUREWHITE,
        width: GlobalSize(20),
        height: GlobalSize(20),
        borderRadius: GlobalSize(10),
        borderColor: PRIMARYCOLOR,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    radioBorder: {
        width: GlobalSize(10),
        height: GlobalSize(10),
        borderRadius: GlobalSize(5),
        borderWidth: 2,
        borderColor: PRIMARYCOLOR,
        backgroundColor: PRIMARYCOLOR
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: GlobalSize(8),
    },
    textArea: {
        fontSize: fontSize(14),
        fontFamily: FONTS.FontRegular,
        fontWeight: '400',
        color: TEXTCOLOR10,
    },
    dropView: {
        borderRadius: GlobalSize(8),
        borderColor: BORDERCOLOR4,
        width: DEFAULTWIDTH * 0.9,
        padding: GlobalSize(5),
    },
    rowFlex: {
        flexDirection: 'row',
        marginLeft: GlobalSize(10),
        marginBottom: GlobalSize(2)
    },
    placeholderS: {
        color: BORDERCOLOR4,
        fontSize: GlobalSize(12),
        fontFamily: FONTS.FontRegular
    },
    textBtn: {
        fontSize: GlobalSize(12),
        color: PUREWHITE,
        fontWeight: '700',
        fontFamily: FONTS.FontMedium,
        textAlign: 'center',
    },
    textField: {
        fontFamily: FONTS.FontMedium,
        fontWeight: '600',
        fontSize: GlobalSize(14),
        color: SECONDARYCOLOR
    },
    alignView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: DEFAULTWIDTH * 0.0,
        marginTop: DEFAULTWIDTH * 0.02
    },
    textIn: {
        fontSize: fontSize(12),
        fontFamily: FONTS.FontRegular,
        fontWeight: '400',
        color: TEXTCOLOR7,
        width: DEFAULTWIDTH * 0.88,
        height: DEFAULTWIDTH * 0.13,
        borderWidth: 1,
        borderRadius: GlobalSize(4),
        borderColor: BORDERCOLOR1,
        paddingLeft: GlobalSize(15),
        backgroundColor: BACKGROUNDWHITE,
        paddingRight: GlobalSize(10)
    },
    dateView: {
        width: DEFAULTWIDTH * 0.88,
        height: DEFAULTWIDTH * 0.13,
        borderWidth: 1,
        borderRadius: GlobalSize(4),
        borderColor: BORDERCOLOR1,
        paddingLeft: GlobalSize(15),
        alignItems: 'center',
        backgroundColor: BACKGROUNDWHITE,
        paddingRight: GlobalSize(10),
        justifyContent: 'space-between',
        marginBottom: DEFAULTWIDTH * 0.01,
        marginTop: DEFAULTWIDTH * 0.02
    },
    dateText: {
        fontSize: fontSize(12),
        fontFamily: FONTS.FontRegular,
        fontWeight: '400',
        color: TEXTCOLOR7,
        left: GlobalSize(-5)
    },
    textCancel: {
        fontFamily: FONTS.FontMedium,
        fontSize: fontSize(12),
        color: THIRDCOLOR,
        fontWeight: '700'
    },
    marginView: {
        marginLeft: DEFAULTWIDTH * 0.06,
        marginBottom: GlobalSize(10),
        marginTop: GlobalSize(5)
    },
})
export default CreateTask;