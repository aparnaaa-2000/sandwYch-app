import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";
import { BORDERCOLOR4, PRIMARYCOLOR, PUREWHITE, TEXTCOLOR10, TEXTCOLOR7 } from "../../../../Constants/Colors/Colors";
import { FONTS } from "../../../../Constants/Fonts";
import ImagePicker from 'react-native-image-crop-picker';
import { DEFAULTWIDTH } from "../../../../Constants/styles/styles";
import { Close } from "../../../../../assets";
import { GlobalSize, fontSize } from "../../../../Constants/ResponsiveFont/ResponsiveFonts";


const MedModal = ({ ModalOpen, setModalOpen, navigation }) => {

    const [ImagePath, setImagePath] = useState()

    const ScanBottleLabel = () => { // Upload Prescription using camera
        setModalOpen(false)
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
            useFrontCamera: false
        }).then((image) => {
            navigation.navigate('', { screen: 'NewMedication' })
        }).catch((error) => {
            console.log(error);
        });
    }

    const UploadGallery = () => { // Upload Prescription from gallery
        setModalOpen(false)
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            setImagePath(image.path)
            navigation.navigate('MedStack2', { screen: 'NewMedication' })
        });
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

                    <View style={styles.rowView}>
                        <View style={styles.medView}>
                            <Text style={styles.textAddMed}>Add Medication</Text>
                        </View>

                        <TouchableOpacity onPress={() => setModalOpen(false)}>
                            <Close />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.viewSub}>
                        <Text style={styles.textSub}>Use your bottle label to scan or manually enter medication details </Text>
                    </View>

                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity style={styles.btnView} onPress={() => ScanBottleLabel()}>
                            <Text style={styles.textBtn}>Scan Bottle Label</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnManual} onPress={() => UploadGallery()}>
                            <Text style={[styles.textBtn, { color: TEXTCOLOR7 }]}>Upload From Gallery</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnManual} onPress={() => { navigation.navigate('MedStack', { screen: 'AddMedication' }), setModalOpen(false) }}>
                            <Text style={[styles.textBtn, { color: TEXTCOLOR7 }]}>Manually Enter</Text>
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
        justifyContent: 'center'
    },
    touchableStyle: {
        flex: 1,
        height: Dimensions.get('window').height,
    },
    centeredView2: {
        justifyContent: "flex-end",
    },
    viewMain: {
        width: DEFAULTWIDTH * 0.90,
        borderRadius: GlobalSize(10),
        paddingTop: DEFAULTWIDTH * 0.05,
        backgroundColor: PUREWHITE,
        paddingBottom: GlobalSize(5)
    },
    medView: {
        marginLeft: DEFAULTWIDTH * 0.05,
    },
    textAddMed: {
        color: TEXTCOLOR10,
        fontFamily: FONTS.FontMedium,
        fontWeight: '500',
        fontSize: fontSize(18)
    },
    textSub: {
        fontSize: fontSize(14),
        fontFamily: FONTS.FontRegular,
        fontWeight: '400',
        color: TEXTCOLOR7,
        marginTop: GlobalSize(10),
    },
    rowView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: GlobalSize(15)
    },
    btnView: {
        width: DEFAULTWIDTH * 0.80,
        height: DEFAULTWIDTH * 0.125,
        backgroundColor: PRIMARYCOLOR,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: GlobalSize(8),
        marginBottom: DEFAULTWIDTH * 0.04
    },
    btnManual: {
        width: DEFAULTWIDTH * 0.80,
        height: DEFAULTWIDTH * 0.125,
        backgroundColor: PUREWHITE,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: GlobalSize(8),
        borderWidth: 1,
        borderColor: BORDERCOLOR4,
        marginBottom: DEFAULTWIDTH * 0.04
    },
    textBtn: {
        fontSize: fontSize(16),
        color: PUREWHITE,
        fontWeight: '500',
        fontFamily: FONTS.FontMedium,
        textAlign: 'center',
    },
    viewSub: {
        marginHorizontal: GlobalSize(18),
        marginBottom: DEFAULTWIDTH * 0.05
    }

});

export default MedModal;
