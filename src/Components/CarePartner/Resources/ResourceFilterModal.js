import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";
import { BACKGROUNDWHITE, BORDERCOLOR1, BORDERCOLOR4, BOTTOMTABTEXT1, PRIMARYCOLOR, PUREWHITE, TEXTCOLOR10, TEXTCOLOR7, TEXTCOLORRS, THIRDCOLOR } from '../../../Constants/Colors/Colors';
import { FONTS } from "../../../Constants/Fonts";
import DEFAULTSTYLES, { DEFAULTHEIGHT, DEFAULTWIDTH } from "../../../Constants/styles/styles";
import { Dropdown } from "react-native-element-dropdown";
import { GlobalSize, fontSize } from "../../../Constants/ResponsiveFont/ResponsiveFonts";
import { Close } from "../../../../assets";

const ResourceFilterModal = ({ ModalOpen, setModalOpen, MainCategory, navigation }) => {

    const [SubCategory, setSubCategory] = useState([
        { label: 'Food', value: 'Food' },
        { label: 'Transporation', value: 'Transporatation' }
    ]);

    const [SubCategValue, setSubCategValue] = useState('')


    const SubmitModal = () => {
        console.log("sub and main....................",SubCategValue,MainCategory)
        if (SubCategValue && MainCategory == 'Food') {
            navigation.navigate('FilterFood')
            setModalOpen(false)
            setSubCategValue(null)
        } else if(SubCategValue && MainCategory == 'Transportation'){
            navigation.navigate('FilterResource')
            setModalOpen(false)
            setSubCategValue(null)
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

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={styles.textCateg}>Resource Category</Text>
                        </View>

                        <TouchableOpacity onPress={() => setModalOpen(false)} style={{ left: GlobalSize(5) }}>
                            <Close />
                        </TouchableOpacity>

                    </View>
                    <View style={[DEFAULTSTYLES.alignView, { marginBottom: GlobalSize(10) }]}>

                        <View style={styles.viewCateg}>
                            <Text style={styles.inputCateg}>{MainCategory}</Text>
                        </View>

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
                            placeholder={'Select Sub category'}
                            value={SubCategValue}
                            onChange={item => {
                                setSubCategValue(item.value)
                            }}
                        />
                    </View>

                    <View style={DEFAULTSTYLES.alignView}>
                        <TouchableOpacity
                            style={[styles.btnView, { opacity: SubCategValue ? 1 : 0.5 }]}
                            onPress={() => SubmitModal()}>
                            <Text style={styles.textBtn}>Apply</Text>
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
        borderRadius: GlobalSize(10),
        backgroundColor: PUREWHITE,
        justifyContent: 'center',
        padding: DEFAULTHEIGHT * 0.04
    },
    btnView: {
        width: DEFAULTWIDTH * 0.75,
        height: DEFAULTWIDTH * 0.125,
        backgroundColor: PRIMARYCOLOR,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: GlobalSize(4),
    },
    textBtn: {
        fontSize: fontSize(14),
        color: PUREWHITE,
        fontWeight: '700',
        fontFamily: FONTS.FontMedium,
        textAlign: 'center',
    },
    textCateg: {
        fontSize: fontSize(16),
        fontFamily: FONTS.FontMedium,
        color: TEXTCOLOR10
    },
    textArea: {
        fontSize: fontSize(14),
        fontFamily: FONTS.FontRegular,
        fontWeight: '400',
        color: TEXTCOLORRS,
    },
    placeholderS: {
        fontSize: fontSize(14),
        fontFamily: FONTS.FontRegular,
        color: TEXTCOLORRS,
    },
    dropDnContainer: {
        backgroundColor: PUREWHITE,
        width: DEFAULTWIDTH * 0.75,
        borderWidth: 1,
        borderRadius: GlobalSize(8),
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
        borderRadius: GlobalSize(8),
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

});

export default ResourceFilterModal;
