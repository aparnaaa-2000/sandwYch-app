import React, { } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";
import { BORDERCOLOR4,PRIMARYCOLOR,PUREWHITE,TEXTCOLOR5, THIRDCOLOR } from '../../../../Constants/Colors/Colors'
import { FONTS } from "../../../../Constants/Fonts";
import { DEFAULTWIDTH } from "../../../../Constants/styles/styles";
import { GlobalSize, fontSize } from "../../../../Constants/ResponsiveFont/ResponsiveFonts";


const LogOutModal = ({ ModalOpen, setModalOpen,navigation}) => {

    const CloseModal = () => { //To close the Delete Modal
        setModalOpen(false)
    }

    const NavigateBack = ()=>{
        navigation.navigate('SignIn')
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
            <View style={styles.mainContainer} >
                <View style={styles.viewMain}>

                    <View style={{ marginBottom: GlobalSize(10), marginHorizontal: GlobalSize(30) }}>
                        <Text style={styles.textQuest}>Are you sure you want to logout?</Text>
                    </View>

                    <View style={styles.buttonView}>
                        <View>
                            <TouchableOpacity style={styles.touchBtn} onPress={() =>NavigateBack()}>
                                <Text style={styles.textBtn}>Yes</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.touchCancel} onPress={() => CloseModal()}>
                                <Text style={[styles.textCancel, { color: PRIMARYCOLOR }]}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
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
    textBtn: {
        fontSize: fontSize(12),
        color: PUREWHITE,
        fontFamily: FONTS.FontMedium
    },
    textCancel: {
        fontFamily: FONTS.FontMedium,
        fontSize: fontSize(12),
        color: THIRDCOLOR,
        fontWeight: '700'
    },
    textQuest: {
        fontFamily: FONTS.FontRegular,
        fontSize: fontSize(16),
        color: TEXTCOLOR5,
        textAlign: 'center'
    },
    touchBtn: {
        marginBottom: DEFAULTWIDTH * 0.05,
        width: DEFAULTWIDTH * 0.22,
        height: DEFAULTWIDTH * 0.11,
        backgroundColor: PRIMARYCOLOR,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    touchCancel: {
        marginBottom: DEFAULTWIDTH * 0.05,
        width: DEFAULTWIDTH * 0.22,
        height: DEFAULTWIDTH * 0.11,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: BORDERCOLOR4
    },
    viewMain: {
        width: DEFAULTWIDTH * 0.90,
        borderRadius: 10,
        paddingTop: DEFAULTWIDTH * 0.07,
        backgroundColor: PUREWHITE,
        justifyContent: 'center'
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: DEFAULTWIDTH * 0.05,
        margin: GlobalSize(10),
        paddingLeft: DEFAULTWIDTH * 0.15,
        paddingRight: DEFAULTWIDTH * 0.15
    }

});

export default LogOutModal;
