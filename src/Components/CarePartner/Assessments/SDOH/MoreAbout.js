import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, TextInput } from 'react-native'
import { BORDERCOLOR1, BORDERCOLOR4, BORDERCOLOR5, PRIMARYCOLOR, PUREWHITE, TEXTCOLOR5, TEXTCOLOR10 } from '../../../../Constants/Colors/Colors'
import DEFAULTSTYLES, { DEFAULTWIDTH, DEFAULTHEIGHT } from '../../../../Constants/styles/styles';
import { FONTS } from '../../../../Constants/Fonts';
import SDOHTextInput from '../../../Common/SDOHTextInput/SDOHTextInput';
import SDOHTextInputRadioBtn from '../../../Common/SDOHTextInput/SDOHTextInputRadioBtn';
import SDOHTextInputWithout from '../../../Common/SDOHTextInput/SDOHTextInputWithOut';
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts';

const MoreAbout = ({
    Heading,
    LangValue,
    setLangValue,
    LangInput,
    setLangInput,
    veteranValue,
    setVeteranValue,

    CogDisableValue,
    setCogDisableValue,
    CogDisableInput,
    setCogDisableInput,
    CogDisableSelect,
    setCogDisableSelect,
    FunDisableInput,
    setFunDisableInput,
    FunDisableSelect,
    setFunDisableSelect,
    FunDisableValue,
    setFunDisableValue,
    culturalInput,
    setCulturalInput,
    culturalSelect,
    setCulturalSelect,
    culturalValue,
    setCulturalValue,
    OrValue,
    setOrValue,
    OrInput,
    setOrInput,
    OrSelect,
    setOrSelect,
    HomeInput,
    setHomeInput,
    HomeValue,
    setHomeValue,
    HomeSelect,
    setHomeSelect,
    InStoryValue,
    setInStoryValue,
    InstorySelection,
    setInstorySelection,
    InstoryInput,
    setInstoryInput,
    RefugeeValue,
    setRefugeeValue,
    RefugeeInput,
    setRefugeeInput,
    RefugeeSelection,
    setRefugeeSelection
}) => {

    const [borderStatus, setBorderStatus] = useState(true)
    const [InStoryData, setInStoryData] = useState([
        {
            id: 1,
            Title: 'Yes',
            isSelected: false,
        },
        {
            id: 2,
            Title: 'No',
            isSelected: false,
        },
        {
            id: 3,
            Title: 'Prefer Not to Answer',
            isSelected: false,
        },
    ])


    switch (Heading) {
        case 0:
            imageSource = require('../../../../../assets/Images/SDOH/PSC5.png');
            Description = 'Do you or your loved one need another language for communication?';
            break;

        case 1:
            imageSource = require('../../../../../assets/Images/SDOH/PSC6.png');
            Description = "Do you want help with school or training? For example, starting or completing job training or getting a high school diploma, GED or equivalent.";
            break;

        case 2:
            imageSource = require('../../../../../assets/Images/SDOH/PSC5.png');
            Description = 'Are you a veteran?';
            break;

        case 3:
            imageSource = require('../../../../../assets/Images/SDOH/PSC5.png');
            Description = 'Are you or have you been a migrant worker?';
            break;

        case 4:
            imageSource = require('../../../../../assets/Images/SDOH/PSC5.png');
            Description = 'How much money does your household earn in a year? This helps us check if you qualify for extra support or resources.';
            break;

        case 5:
            imageSource = require('../../../../../assets/Images/SDOH/PSC5.png');
            Description = 'How many people live in your home, including yourself? This number helps us understand what support you might need.';
            break;

        case 6:
            imageSource = require('../../../../../assets/Images/SDOH/PSC5.png');
            Description = 'Because of a physical, mental, or emotional condition, do you have serious difficulty concentrating, remembering, or making decisions?';
            break;

        case 7:
            imageSource = require('../../../../../assets/Images/SDOH/PSC5.png');
            Description = "Because of a physical, mental, or emotional condition,do you have difficulty doing errands alone such as visiting a doctor's office or shopping?";
            break;

        case 8:
            imageSource = require('../../../../../assets/Images/SDOH/PSC5.png');
            Description = 'Are there cultural practices or beliefs that are important for us to know about your care?';
            break;

        case 9:
            imageSource = require('../../../../../assets/Images/SDOH/PSC5.png');
            Description = 'Do you want to share your sexual orientation with us? This helps us understand you better.';
            break;

        case 10:
            imageSource = require('../../../../../assets/Images/SDOH/PSC5.png');
            Description = 'Have you ever faced homelessness or had trouble finding a stable place to live?';
            break;

        case 11:
            imageSource = require('../../../../../assets/Images/SDOH/PSC5.png');
            Description = 'Are you a refugee?';
            break;

        case 12:
            imageSource = require('../../../../../assets/Images/SDOH/PSC5.png');
            Description = 'Have you ever been incarcerated?';
            break;
    }


    const onPressInStory = option => {
        setInStoryValue(option.id)
        setInstorySelection(option.Title)
    }
    const onPressRefugee = option => {

        setRefugeeValue(option.id)
        setRefugeeSelection(option.Title)
        console.log("hello", RefugeeSelection, RefugeeValue)
    }
    return (
        <View>
            <View style={DEFAULTSTYLES.alignView}>
                <View style={styles.imageView}>
                    <Image style={styles.imageStyle} source={imageSource} />
                </View>
            </View>
            <View style={styles.descView}>
                <Text style={[styles.textDesc, { marginLeft: GlobalSize(10) }]}>{Description}</Text>
            </View>

            {Heading == 0 ?
                <View>
                    <SDOHTextInput
                        placeholder={'Please write....'}
                        radioBtnValue={LangValue}
                        setRadioBtnValue={setLangValue}
                        textInputValue={LangInput}
                        setTextInputValue={setLangInput} />
                </View> :
                Heading == 1 ?
                    <View>
                        <View >
                            <View style={{ flexDirection: 'row', marginLeft: GlobalSize(8) }}>
                                <TouchableOpacity
                                    style={styles.radioButton}
                                    onPress={() => { setLangValue('Yes') }}>
                                    <View
                                        style={[
                                            styles.radioIcon,
                                            LangValue == 'Yes' && styles.radioIconSelected,
                                        ]}>
                                        {LangValue == 'Yes' && <View style={styles.radioBorder} />}
                                    </View>
                                </TouchableOpacity>
                                <View style={{ marginTop: 7 }}>
                                    <Text style={styles.textDesc}>
                                        Yes
                                    </Text>
                                </View>
                            </View>

                            {LangValue == 'Yes' &&
                                <View style={styles.textInputEducation}>
                                    <TextInput
                                        value={LangInput}
                                        placeholder="Please describe briefly what kind of help you want."
                                        placeholderTextColor={BORDERCOLOR5}
                                        style={styles.inputWrite}
                                        multiline
                                        onChangeText={text => setLangInput(text)}
                                    />
                                </View>
                            }

                        </View>

                        <View style={{ flexDirection: 'row', marginLeft: GlobalSize(8) }}>
                            <TouchableOpacity
                                style={styles.radioButton}
                                onPress={() => { setLangValue('No'), setLangInput(null) }}>
                                <View
                                    style={[
                                        styles.radioIcon,
                                        LangValue == 'No' && styles.radioIconSelected,
                                    ]}>
                                    {LangValue == 'No' && <View style={styles.radioBorder} />}
                                </View>
                            </TouchableOpacity>
                            <View style={{ marginTop: 7 }}>
                                <Text style={styles.textDesc}>
                                    No
                                </Text>
                            </View>
                        </View>
                    </View> :
                    Heading == 2 || Heading == 3 ?
                        <View>
                            <SDOHTextInputWithout
                                Heading={Heading}
                                Data={InStoryData}
                                radioBtnValue={veteranValue}
                                setRadioBtnValue={setVeteranValue}
                            />
                        </View> :
                        Heading == 4 || Heading == 5 ?
                            <View style={DEFAULTSTYLES.alignView}>
                                <View style={styles.textInView}>
                                    <TextInput
                                        value={veteranValue}
                                        style={styles.inputWrite}
                                        keyboardType='number-pad'
                                        maxLength={Heading == 4 ? 35 : 3}
                                        onChangeText={(text) => setVeteranValue(text)} />
                                </View>
                            </View> :
                            Heading == 6 ?
                                <View >
                                    <SDOHTextInputRadioBtn
                                        Data={InStoryData}
                                        placeholder={"Please describe the disability briefly"}
                                        radioBtnValue={CogDisableValue}
                                        setRadioBtnValue={setCogDisableValue}
                                        textInputValue={CogDisableInput}
                                        setTextInputValue={setCogDisableInput}
                                        radioBtnSelect={CogDisableSelect}
                                        setRadioBtnSelect={setCogDisableSelect}
                                        borderStatus={borderStatus}
                                        setBorderStatus={setBorderStatus}
                                        onPress={onPressRefugee}
                                    />
                                </View> :
                                Heading == 7 ?
                                    <View >
                                        <SDOHTextInputRadioBtn
                                            Data={InStoryData}
                                            placeholder={"Please describe the disability briefly"}
                                            radioBtnValue={CogDisableValue}
                                            setRadioBtnValue={setCogDisableValue}
                                            textInputValue={CogDisableInput}
                                            setTextInputValue={setCogDisableInput}
                                            radioBtnSelect={CogDisableSelect}
                                            borderStatus={borderStatus}
                                            setBorderStatus={setBorderStatus}
                                            setRadioBtnSelect={setCogDisableSelect}
                                            onPress={onPressRefugee}
                                        />
                                    </View> :
                                    Heading == 8 ?
                                        <View >
                                            <SDOHTextInputRadioBtn
                                                Data={InStoryData}
                                                placeholder={"Please describe any important cultural practices or beliefs."}
                                                radioBtnValue={CogDisableValue}
                                                setRadioBtnValue={setCogDisableValue}
                                                textInputValue={CogDisableInput}
                                                setTextInputValue={setCogDisableInput}
                                                radioBtnSelect={CogDisableSelect}
                                                setRadioBtnSelect={setCogDisableSelect}
                                                onPress={onPressRefugee}
                                                borderStatus={borderStatus}
                                                setBorderStatus={setBorderStatus}
                                            />
                                        </View> :
                                        Heading == 9 ?
                                            <View >
                                                <SDOHTextInputRadioBtn
                                                    Data={InStoryData}
                                                    placeholder={"Please feel free to share your sexual orientation."}
                                                    radioBtnValue={CogDisableValue}
                                                    setRadioBtnValue={setCogDisableValue}
                                                    textInputValue={CogDisableInput}
                                                    setTextInputValue={setCogDisableInput}
                                                    radioBtnSelect={CogDisableSelect}
                                                    setRadioBtnSelect={setCogDisableSelect}
                                                    onPress={onPressRefugee}
                                                    borderStatus={borderStatus}
                                                    setBorderStatus={setBorderStatus}
                                                />
                                            </View> :
                                            Heading == 10 ?
                                                <View >
                                                    <SDOHTextInputRadioBtn
                                                        Data={InStoryData}
                                                        placeholder={"Please share any details you're comfortable with."}
                                                        radioBtnValue={CogDisableValue}
                                                        setRadioBtnValue={setCogDisableValue}
                                                        textInputValue={CogDisableInput}
                                                        setTextInputValue={setCogDisableInput}
                                                        radioBtnSelect={CogDisableSelect}
                                                        setRadioBtnSelect={setCogDisableSelect}
                                                        onPress={onPressRefugee}
                                                        borderStatus={borderStatus}
                                                        setBorderStatus={setBorderStatus}
                                                    />
                                                </View> :
                                                Heading == 11 ?
                                                    <View >
                                                        <SDOHTextInputRadioBtn
                                                            Data={InStoryData}
                                                            placeholder={"Please share any details you're comfortable with."}
                                                            radioBtnValue={CogDisableValue}
                                                            setRadioBtnValue={setCogDisableValue}
                                                            textInputValue={CogDisableInput}
                                                            setTextInputValue={setCogDisableInput}
                                                            radioBtnSelect={CogDisableSelect}
                                                            setRadioBtnSelect={setCogDisableSelect}
                                                            onPress={onPressRefugee}
                                                            borderStatus={borderStatus}
                                                            setBorderStatus={setBorderStatus}
                                                        />
                                                    </View> :
                                                    Heading == 12 ?
                                                        <View >
                                                            <SDOHTextInputRadioBtn
                                                                Data={InStoryData}
                                                                placeholder={"Please share any details you're comfortable with."}
                                                                radioBtnValue={CogDisableValue}
                                                                setRadioBtnValue={setCogDisableValue}
                                                                textInputValue={CogDisableInput}
                                                                setTextInputValue={setCogDisableInput}
                                                                radioBtnSelect={CogDisableSelect}
                                                                setRadioBtnSelect={setCogDisableSelect}
                                                                onPress={onPressInStory}
                                                                borderStatus={borderStatus}
                                                                setBorderStatus={setBorderStatus}
                                                            />
                                                        </View> : null}
        </View>
    )
}

export default MoreAbout;

const styles = StyleSheet.create({
    radioIcon: {
        marginLeft: GlobalSize(10),
        width: GlobalSize(20),
        height: GlobalSize(20),
        borderRadius: GlobalSize(10),
        borderWidth: 2,
        borderColor: BORDERCOLOR4,
        marginRight: GlobalSize(8),
        backgroundColor: PUREWHITE,
    },
    radioIconSelected: {
        backgroundColor: PUREWHITE,
        width: GlobalSize(20),
        height: GlobalSize(20),
        borderRadius: GlobalSize(10),
        borderColor: PRIMARYCOLOR,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: GlobalSize(8),
    },
    radioBorder: {
        width: GlobalSize(10),
        height: GlobalSize(10),
        borderRadius: GlobalSize(5),
        borderWidth: 2,
        borderColor: PRIMARYCOLOR,
        backgroundColor: PRIMARYCOLOR,
    },
    imageStyle: {
        width: DEFAULTWIDTH * 0.9,
        height: DEFAULTWIDTH * 0.7,
        //marginBottom: '4%',
    },
    mainView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: GlobalSize(10),
    },
    imageView: {
        alignItems: 'center',
        width: DEFAULTWIDTH * 0.9,
        backgroundColor: PUREWHITE,
        borderRadius: GlobalSize(10),
        elevation: 2,
        marginBottom: GlobalSize(15),
    },
    textDesc: {
        fontSize: fontSize(14),
        fontFamily: FONTS.FontRegular,
        color: TEXTCOLOR5,
        maxWidth: DEFAULTWIDTH * 0.9,
        lineHeight: GlobalSize(20)
    },
    viewRadioBtn: {
        flexDirection: 'row',
        marginLeft: GlobalSize(8),
        alignItems: 'center',
        marginBottom: GlobalSize(10),
        marginTop: GlobalSize(10),
    },
    inputWrite: {
        color: TEXTCOLOR10,
        fontSize: fontSize(12),
        fontFamily: FONTS.FontRegular,
        paddingLeft: GlobalSize(15),
    },
    descView: {
        marginLeft: GlobalSize(6),
        marginRight: GlobalSize(10),
        marginBottom: DEFAULTHEIGHT * 0.01
    },
    textInView: {
        width: DEFAULTWIDTH * 0.9,
        height: DEFAULTWIDTH * 0.13,
        borderRadius: GlobalSize(8),
        borderColor: BORDERCOLOR1,
        borderWidth: 1,
        marginTop: GlobalSize(12),
        marginBottom: GlobalSize(1),
    },
    textInputEducation: {
        width: DEFAULTWIDTH * 0.82,
        height: DEFAULTWIDTH * 0.25,
        borderRadius: GlobalSize(8),
        borderColor: BORDERCOLOR1,
        borderWidth: 1,
        marginBottom: GlobalSize(1),
        marginLeft: DEFAULTWIDTH * 0.1
    },
    inputView: {
        justifyContent: 'center',
        marginTop: GlobalSize(17),
        left: GlobalSize(15),
    },
})