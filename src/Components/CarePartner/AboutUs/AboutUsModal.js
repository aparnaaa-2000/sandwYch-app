import React, { } from "react";
import { Modal, StyleSheet, Text, View, Image, TouchableWithoutFeedback } from "react-native";
import {  PUREWHITE, TEXTCOLOR5, TEXTCOLORW } from '../../../Constants/Colors/Colors';
import { FONTS } from "../../../Constants/Fonts";
import { DEFAULTHEIGHT, DEFAULTWIDTH } from "../../../Constants/styles/styles";
import { GlobalSize, fontSize } from "../../../Constants/ResponsiveFont/ResponsiveFonts";

const AboutUsModal = ({ ModalOpen, setModalOpen, item }) => {

    const CloseModal = () => { //To close the Modal
        setModalOpen(false)
    }

    return (

        <Modal
            animationType="fade"
            transparent={true}
            visible={ModalOpen}
            onRequestClose={() => {
                setModalOpen(!ModalOpen)
            }}>
            <TouchableWithoutFeedback onPress={CloseModal}>
                <View style={styles.mainContainer} >
                    <View style={styles.viewMain} onPress={() => CloseModal()}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ marginRight: DEFAULTWIDTH * 0.06 }}>
                                <Image
                                    source={{ uri: item.Image }}
                                    style={styles.imgView} />
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={styles.textDgNm}>{item.Name}</Text>
                                <Text style={styles.textCode}>607-777-2804</Text>
                                <Text style={styles.textCode}>support@gmail.com</Text>

                            </View>
                        </View>
                        <View style={{ padding: GlobalSize(25), paddingTop: GlobalSize(12) }}>
                            <Text style={styles.textCode}>Nicole Sayosa has over 8 years of experience working in professional office positions with a proven track record of excellent organizational skills in providing high-level support to C-level executives. She loves calendars and planners - anything to keep her executives organized and in check. Over the years, she has developed this skill of foresight, thinking critically, and offering solutions to problems with a high level of professionalism and confidentiality.</Text>
                        </View>


                    </View>
                </View>
            </TouchableWithoutFeedback>

        </Modal>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#000000aa",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    viewMain: {
        width: DEFAULTWIDTH * 0.85,
        borderRadius: GlobalSize(10),
        paddingTop: DEFAULTHEIGHT * 0.04,
        backgroundColor: PUREWHITE,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textDgNm: {
        fontFamily: FONTS.FontSemiB,
        fontSize: fontSize(18),
        color: TEXTCOLOR5,
        marginTop: GlobalSize(10)
    },
    textCode: {
        fontSize: fontSize(12),
        color: TEXTCOLORW,
        fontFamily: FONTS.FontRegular
    },
    imgView: {
        width: GlobalSize(100),
        height: GlobalSize(100),
        borderRadius: GlobalSize(50)
    }


});

export default AboutUsModal;
