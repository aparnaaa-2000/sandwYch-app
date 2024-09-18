import { StyleSheet, Text, View, SafeAreaView, StatusBar, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import DEFAULTSTYLES, { DEFAULTWIDTH } from '../../../../Constants/styles/styles'
import { BACKGROUNDCOLOR, BACKGROUNDWHITE, BORDERCOLOR1, BORDERCOLOR4, PRIMARYCOLOR, PUREWHITE, SECONDARYCOLOR, TEXTCOLOR10, TEXTCOLOR7, TEXTCOLORRS, THIRDCOLOR, VALIDCOLOR } from '../../../../Constants/Colors/Colors'
import TaskHeader from '../TaskHeader'
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts'
import { FONTS } from '../../../../Constants/Fonts'
import { BlackCalender } from '../../../../../assets'
import moment from 'moment';
import { Dropdown } from "react-native-element-dropdown";


const CreateGoals = ({ navigation }) => {

    const TitleRef = useRef();
    const CreateRef = useRef();
    const DescRef = useRef();
    const [Title, setTitle] = useState(null)
    const [TitleStatus, setTitleStatus] = useState(true)
    const [Desc, setDesc] = useState(null)
    const [Date, setDate] = useState(moment().format('MMMM D, YYYY h:mm A'))
    const [DescStatus, setDescStatus] = useState(true)
    const [CategStatus, setCategStatus] = useState(true)
    const [selectedOption, setSelectedOption] = useState(null);
    const [FreqStatus, setFreqStatus] = useState(true)
    const [CreateBy, setCreateBy] = useState(null)
    const [CreateStatus, setCreateStatus] = useState(true)

    // Category 
    const [categValue, setCategValue] = useState(null)
    const [Category, setCategory] = useState([
        { label: 'Walk', value: 'Walk' },
        { label: 'Weight loss', value: 'Weight loss' }
    ])

    //TITLE VALIDATION
    const handleTitleChange = (text) => {
        const isValidTitle = /^[A-Za-z.,0-9 ]{2,}$/.test(text);
        setTitleStatus(isValidTitle)
        setTitle(text);
    };

    //CREATED BY VALIDATION
    const handleCreateChange = (text) => {
        const isValidCreate = /^[A-Za-z.,0-9 ]{2,}$/.test(text);
        setCreateStatus(isValidCreate)
        setCreateBy(text);
    };

    //DESC VALIDATION
    const handleDescChange = (text) => {
        const isValidAddress = /^[A-Za-z1234567890 ,./-_()&@;:\s]{2,50}$/.test(text);
        setDescStatus(isValidAddress)
        setDesc(text);
    };

    // FUNCTION FOR SELECTING FREQUENCY
    const handleOptionPress = (option) => {
        setSelectedOption(option);
        setFreqStatus(true)
    };

    const OnSubmitValidation = () => {
        console.log("categ..................",categValue,CategStatus)
        if (categValue == null) {
            setCategStatus(false)
            console.log("inside.......................",categValue)
        }
        else if (Title == null) {
            TitleRef.current.focus();
            setTitleStatus(false)
        }
        else if (Desc == null) {
            DescRef?.current.focus();
            setDescStatus(false)
        }
        else if(CreateBy == null){
            setCreateStatus(false)
        }
        else{
            navigation.goBack()
        }
    }

    return (
        <SafeAreaView style={DEFAULTSTYLES.AndroidSafeArea}>
            <StatusBar
                backgroundColor={BACKGROUNDWHITE}
                barStyle={'dark-content'}
                style={{ flex: 0 }} />

            <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:BACKGROUNDWHITE}} >
                <View>
                    <TaskHeader name={'New goal'} navigation={navigation} />

                    <View style={DEFAULTSTYLES.marginLeft}>
                        <Text style={styles.textCatg}>Goal Category</Text>
                    </View>

                    <View style={[DEFAULTSTYLES.alignView, { marginBottom: GlobalSize(10) }]}>
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


                    {!CategStatus && (
                        <View style={styles.marginView}>
                            <Text style={{ color: VALIDCOLOR }}>Goal category is required</Text>
                        </View>
                    )}

                    <View style={DEFAULTSTYLES.marginLeft}>
                        <Text style={styles.textCatg}>Title</Text>
                    </View>
                    <View style={[DEFAULTSTYLES.alignView, { marginBottom: GlobalSize(10) }]}>
                        <TextInput
                            ref={TitleRef}
                            value={Title}
                            onChangeText={(text) => handleTitleChange(text)}
                            style={[styles.textIn, { borderColor: TitleStatus ? BORDERCOLOR4 : VALIDCOLOR }]} />
                    </View>

                    {!TitleStatus && (

                        <View style={styles.marginView}>
                            <Text style={{ color: VALIDCOLOR }}>Title is required</Text>
                        </View>
                    )}


                    <View style={DEFAULTSTYLES.marginLeft}>
                        <Text style={styles.textCatg}>Date & Time</Text>
                    </View>
                    <View style={DEFAULTSTYLES.alignView}>
                        <View style={[styles.viewCateg, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                            <View>
                                <Text style={styles.inputCateg}>{Date}</Text>
                            </View>

                            <View>
                                <TouchableOpacity onPress={() => showDatePicker()}>
                                    <BlackCalender />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* <View style={DEFAULTSTYLES.marginLeft}>
                        <Text style={styles.textField}>Frequency</Text>
                    </View>

                    <View style={styles.rowView}>
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
                    )} */}

                    <View style={DEFAULTSTYLES.marginLeft}>
                        <Text style={styles.textCatg}>Description</Text>
                    </View>
                    <View style={[DEFAULTSTYLES.alignView, { marginBottom: GlobalSize(0) }]}>
                        <TextInput
                            ref={DescRef}
                            multiline
                            style={[styles.viewCateg,
                            {
                                height: GlobalSize(100),
                                alignItems: 'flex-start',
                                textAlignVertical: 'top',
                                borderColor: DescStatus ? BORDERCOLOR1 : VALIDCOLOR
                            }]}
                            value={Desc}
                            onChangeText={(text) => handleDescChange(text)} />
                    </View>


                    {!DescStatus && (
                        <View style={styles.marginView}>
                            <Text style={{ color: VALIDCOLOR }}>Description is required</Text>
                        </View>
                    )}

                    <View style={DEFAULTSTYLES.marginLeft}>
                        <Text style={styles.textCatg}>Created By</Text>
                    </View>
                    <View style={[DEFAULTSTYLES.alignView, { marginBottom: GlobalSize(10) }]}>
                        <TextInput
                            ref={CreateRef}
                            value={CreateBy}
                            onChangeText={(text) => handleCreateChange(text)}
                            style={[styles.textIn, { borderColor: CreateStatus ? BORDERCOLOR4 : VALIDCOLOR }]} />
                    </View>

                    {!CreateStatus && (
                        <View style={styles.marginView}>
                            <Text style={{ color: VALIDCOLOR }}>Created by is required</Text>
                        </View>
                    )}

                    <View style={[DEFAULTSTYLES.alignView,{marginTop:GlobalSize(10)}]}>
                        <TouchableOpacity style={styles.btnView} onPress={() => OnSubmitValidation()}>
                            <Text style={styles.textBtn}>Save Goal</Text>
                        </TouchableOpacity>
                        <View style={{ marginTop: DEFAULTWIDTH * 0.05, marginBottom: GlobalSize(15) }}>
                            <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: GlobalSize(5) }}>
                                <Text style={styles.textCancel}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </ScrollView>



            {/* 
            <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="datetime"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    /> */}
        </SafeAreaView>
    )
}

export default CreateGoals

const styles = StyleSheet.create({
    textIn: {
        fontSize: fontSize(12),
        fontFamily: FONTS.FontRegular,
        fontWeight: '400',
        color: TEXTCOLOR7,
        width: DEFAULTWIDTH * 0.88,
        height: DEFAULTWIDTH * 0.13,
        borderWidth: 1,
        borderRadius: GlobalSize(4),
        borderColor: BORDERCOLOR4,
        paddingLeft: GlobalSize(15),
        paddingRight: GlobalSize(10),
        backgroundColor: BACKGROUNDWHITE
    },
    textArea: {
        fontSize: fontSize(14),
        fontFamily: FONTS.FontRegular,
        fontWeight: '400',
        color: TEXTCOLOR10,
    },
    viewPost: {
        position: 'absolute',
        bottom: GlobalSize(20),
        //marginTop: GlobalSize(20),
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: BACKGROUNDWHITE
    },
    textCancel: {
        fontFamily: FONTS.FontMedium,
        fontSize: fontSize(12),
        color: THIRDCOLOR,
        fontWeight: '700'
    },
    rowView: {
        flexDirection: 'row',
        marginLeft: GlobalSize(10),
        marginBottom: GlobalSize(5)
    },
    textField: {
        fontFamily: FONTS.FontMedium,
        fontWeight: '600',
        fontSize: GlobalSize(14),
        color: SECONDARYCOLOR,
        marginBottom: GlobalSize(10)
    },
    dropView: {
        borderRadius: GlobalSize(8),
        borderColor: BORDERCOLOR4,
        width: DEFAULTWIDTH * 0.88,
        padding: GlobalSize(5),
    },
    placeholderS: {
        color: BORDERCOLOR4,
        fontSize: GlobalSize(12),
        fontFamily: FONTS.FontRegular
    },
    marginView: {
        marginLeft: DEFAULTWIDTH * 0.06,
        marginBottom: GlobalSize(15)
    },
    viewCateg: {
        borderWidth: 1,
        borderColor: BORDERCOLOR4,
        borderRadius: GlobalSize(4),
        width: DEFAULTWIDTH * 0.88,
        padding: GlobalSize(10),
        marginBottom: GlobalSize(10),
        color: TEXTCOLOR10,
    },
    inputCateg: {
        color: TEXTCOLORRS,
        fontFamily: FONTS.FontRegular,
        fontSize: fontSize(15)
    },
    textCatg: {
        color: TEXTCOLOR7,
        fontFamily: FONTS.FontMedium,
        fontSize: fontSize(14),
        marginBottom: GlobalSize(10)
    },
    textBtn: {
        fontSize: fontSize(14),
        color: PUREWHITE,
        fontWeight: '700',
        fontFamily: FONTS.FontMedium,
        textAlign: 'center',
    },
    btnView: {
        width: DEFAULTWIDTH * 0.88,
        height: DEFAULTWIDTH * 0.125,
        backgroundColor: PRIMARYCOLOR,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
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
})