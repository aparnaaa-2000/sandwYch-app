import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BACKGROUNDWHITE, BORDERCOLOR4, PRIMARYCOLOR, PUREWHITE, TEXTCOLOR10, TEXTCOLOR7, TEXTCOLORRS, THIRDCOLOR } from '../../../Constants/Colors/Colors';
import { FONTS } from "../../../Constants/Fonts";
import DEFAULTSTYLES, { DEFAULTHEIGHT, DEFAULTWIDTH } from "../../../Constants/styles/styles";
import { Dropdown } from "react-native-element-dropdown";
import { GlobalSize, fontSize } from "../../../Constants/ResponsiveFont/ResponsiveFonts";
import { Close } from "../../../../assets";

const ActivitySelectionPopup = ({ ModalOpen, setModalOpen, navigation }) => {

    const [SubCategory, setSubCategory] = useState([
        { label: 'ADL', value: 'ADL' },
        { label: 'IADL', value: 'IADL' }
    ]);

    const [SubCategValue, setSubCategValue] = useState('')

    const SubmitModal = () => {
        if (SubCategValue) {
            navigation.navigate('MenuStack', { screen: 'ActivitiesList' })
            setModalOpen(false)
            setSubCategValue(null)
        } else {

        }

    }


    return (

        <Modal
            animationType="fade"
            transparent={true}
            visible={ModalOpen}
            onRequestClose={() => {
                setModalOpen(!ModalOpen)
            }}>
            <View style={styles.mainContainer} >
                <View style={styles.viewMain}>

                    <View style={styles.row}>
                        <Text style={styles.textCateg}>Select Activity</Text>

                        <TouchableOpacity style={{marginRight:GlobalSize(-10)}}
                        onPress={() => setModalOpen(false)}>
                            <Close />
                        </TouchableOpacity>
                    </View>



                    <View style={styles.viewDropdown}>
                        <Dropdown
                            style={styles.dropDnContainer}
                            placeholderStyle={styles.placeholderS}
                            itemTextStyle={styles.textArea}
                            selectedTextStyle={styles.textArea}
                            containerStyle={styles.dropView}
                            data={SubCategory}
                            showsVerticalScrollIndicator={false}
                            search={false}
                            labelField="label"
                            valueField="value"
                            placeholder={'Select activity type'}
                            value={SubCategValue}
                            onChange={item => {
                                setSubCategValue(item.value)
                            }}
                        />
                    </View>

                    <View style={DEFAULTSTYLES.alignView}>
                        <TouchableOpacity style={[styles.btnView, { opacity: SubCategValue ? 1 : 0.5 }]}
                            onPress={() => SubmitModal()}>
                            <Text style={styles.textBtn}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>


        </Modal>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#000000aa",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewMain: {
        width: DEFAULTWIDTH * 0.90,
        borderRadius: 10,
        backgroundColor: PUREWHITE,
        justifyContent: 'center',
        padding: DEFAULTHEIGHT * 0.04,
    
    },
    btnView: {
        width: DEFAULTWIDTH * 0.35,
        height: DEFAULTWIDTH * 0.125,
        backgroundColor: PRIMARYCOLOR,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    textBtn: {
        fontSize: GlobalSize(14),
        color: PUREWHITE,
        fontWeight: '700',
        fontFamily: FONTS.FontMedium,
        textAlign: 'center',
    },
    textCateg: {
        fontSize: GlobalSize(16),
        fontFamily: FONTS.FontMedium,
        color: TEXTCOLOR10
    },
    textArea: {
        fontSize: GlobalSize(14),
        fontFamily: FONTS.FontRegular,
        fontWeight: '400',
        color: TEXTCOLORRS,
    },
    placeholderS: {
        fontSize: GlobalSize(14),
        fontFamily: FONTS.FontRegular,
        color: TEXTCOLORRS,
    },
    dropDnContainer: {
        backgroundColor: PUREWHITE,
        width: DEFAULTWIDTH * 0.75,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: BORDERCOLOR4,
        paddingLeft: GlobalSize(15),
        padding: GlobalSize(5),
        color: TEXTCOLOR7,
    },
    dropView: {
        borderRadius: 8,
        borderColor: BORDERCOLOR4,
        width: DEFAULTWIDTH * 0.75,
        padding: GlobalSize(5),
    },
    viewCateg: {
        borderWidth: 1,
        opacity: 0.8,
        borderColor: BORDERCOLOR4,
        borderRadius: 8,
        width: DEFAULTWIDTH * 0.75,
        padding: GlobalSize(14),
        backgroundColor: BACKGROUNDWHITE,
        marginBottom: GlobalSize(10),
        marginTop: GlobalSize(10)
    },
    inputCateg: {
        color: TEXTCOLORRS,
        fontFamily: FONTS.FontRegular,
        fontSize: fontSize(14)
    },
    viewDropdown: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: DEFAULTHEIGHT * 0.03
    },
    row: {
        marginBottom: DEFAULTHEIGHT * 0.03,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }


});

export default ActivitySelectionPopup;
