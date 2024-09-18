import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View, Dimensions, FlatList, ScrollView } from "react-native";
import { PRIMARYCOLOR, PUREWHITE, TEXTCOLOR10, TEXTCOLOR5 } from '../../../Constants/Colors/Colors';
import { FONTS } from "../../../Constants/Fonts";
import DEFAULTSTYLES, { DEFAULTWIDTH } from "../../../Constants/styles/styles";
import { Check, Close, Uncheck } from "../../../../assets";
import { GlobalSize, fontSize } from "../../../Constants/ResponsiveFont/ResponsiveFonts";


const SupportSelectionModal = ({ ModalOpen, setModalOpen, }) => {

    const [selectADL, setSelectADL] = useState([])
    const [selectIADL, setSelectIADL] = useState([])

    const [ADL, setADL] = useState([
        {
            id: 1,
            Name: 'Eating',
            selected: false
        },
        {
            id: 2,
            Name: 'Dressing',
            selected: false
        },
        {
            id: 3,
            Name: 'Transfer & Mobility',
            selected: false
        },
        {
            id: 4,
            Name: 'Dental Hygiene',
            selected: false
        },
        {
            id: 5,
            Name: 'Toileting',
            selected: false
        },
        {
            id: 6,
            Name: 'Bathing',
            selected: false
        }
    ])

    const [IADL, setIADL] = useState([
        {
            id: 1,
            Name: 'Cooking',
            selected: false
        },
        {
            id: 2,
            Name: 'House cleaning',
            selected: false
        },
        {
            id: 3,
            Name: 'Taking Medication',
            selected: false
        },
        {
            id: 4,
            Name: 'Laundry',
            selected: false
        },
        {
            id: 5,
            Name: 'Service coordination',
            selected: false
        },
        {
            id: 6,
            Name: 'Personal Finance',
            selected: false
        },
        {
            id: 7,
            Name: 'Communication',
            selected: false
        },
        {
            id: 8,
            Name: 'Transportation',
            selected: false
        },

    ])

    const handleCheckBoxPressADL = item => {
        const updatedData = ADL.map(dataItem => {
            if (dataItem.id === item.id) {
                return { ...dataItem, selected: !dataItem.selected };
            }
            return dataItem;
        });

        setADL(updatedData);

        const selectedItems = updatedData.filter(item => item.selected);
        setSelectADL(selectedItems);
    };

    const handleCheckBoxPressIADL = item => {
        const updatedData = IADL.map(dataItem => {
            if (dataItem.id === item.id) {
                return { ...dataItem, selected: !dataItem.selected };
            }
            return dataItem;
        });

        setIADL(updatedData);

        const selectedItems = updatedData.filter(item => item.selected);
        setSelectIADL(selectedItems);
    };

    const onsubmitSupport = () => {
        if (selectADL?.length > 0 || selectIADL?.length > 0) {
            setModalOpen(false)
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
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.viewMain}>

                    <View>

                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <View>
                                <Text style={styles.textADL}>ADL</Text>
                            </View>

                            <TouchableOpacity onPress={()=>setModalOpen(false)}>
                                <Close />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <FlatList
                                data={ADL}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => {
                                    return (
                                        <View style={styles.checkView}>

                                            <TouchableOpacity
                                                onPress={() => handleCheckBoxPressADL(item)}
                                                style={{ padding: 5, marginTop: 5 }}>
                                                {item?.selected ?
                                                    <Check /> :
                                                    <Uncheck />}
                                            </TouchableOpacity>

                                            <View
                                                style={{ marginLeft: DEFAULTWIDTH * 0.03 }}>
                                                <Text style={styles.checkBoxText}>{item.Name} </Text>
                                            </View>
                                        </View>
                                    );
                                }}
                            />
                        </View>
                    </View>

                    <View>
                        <Text style={styles.textADL}>IADL</Text>
                        <View>
                            <FlatList
                                data={IADL}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => {
                                    return (
                                        <View style={styles.checkView}>

                                            <TouchableOpacity
                                                onPress={() => handleCheckBoxPressIADL(item)}
                                                style={{ padding: GlobalSize(5), marginTop: GlobalSize(5) }}>
                                                {item?.selected ?
                                                    <Check /> :
                                                    <Uncheck />}
                                            </TouchableOpacity>

                                            <View
                                                style={{ marginLeft: DEFAULTWIDTH * 0.03 }}>
                                                <Text style={styles.checkBoxText}>{item.Name} </Text>
                                            </View>
                                        </View>
                                    );
                                }}
                            />
                        </View>
                    </View>

                    <View style={DEFAULTSTYLES.alignView}>
                        <TouchableOpacity
                            style={[styles.btnView, { opacity: selectADL?.length > 0 || selectIADL?.length > 0 ? 1 : 0.5 }]}
                            onPress={() => onsubmitSupport()}>
                            <Text style={styles.textBtn}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </ScrollView>
            </View>


        </Modal>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#000000aa",
        alignItems: 'flex-end',
        flex: 1,
        justifyContent: 'flex-end'

    },
    checkView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: DEFAULTWIDTH * 0.02,
    },
    viewMain: {
        width: DEFAULTWIDTH,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: DEFAULTWIDTH * 0.07,
        backgroundColor: PUREWHITE,
        justifyContent: 'center',
        marginTop: GlobalSize(20),
        padding: GlobalSize(20)

    },
    btnView: {
        width: DEFAULTWIDTH * 0.7,
        height: DEFAULTWIDTH * 0.12,
        marginRight: GlobalSize(10),
        backgroundColor: PRIMARYCOLOR,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: GlobalSize(4),
        marginTop: GlobalSize(20)
    },
    textBtn: {
        fontSize: fontSize(13),
        color: PUREWHITE,
        fontWeight: '700',
        fontFamily: FONTS.FontMedium,
        textAlign: 'center',
    },
    checkBoxText: {
        color: TEXTCOLOR5,
        fontFamily: FONTS.FontMedium,
        fontSize: fontSize(14),
    },
    textADL: {
        fontFamily: FONTS.FontMedium,
        color: TEXTCOLOR10,
        fontSize: fontSize(16),
        marginBottom: GlobalSize(10)
    },


});

export default SupportSelectionModal;
