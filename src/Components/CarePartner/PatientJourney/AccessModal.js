import React, { useState } from "react";
import { Modal, StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, FlatList } from "react-native";
import { PRIMARYCOLOR, PUREWHITE, TEXTCOLOR5, TEXTCOLORW } from '../../../Constants/Colors/Colors';
import { FONTS } from "../../../Constants/Fonts";
import { BlueSts, Check, Close, Uncheck } from "../../../../assets";
import { DEFAULTHEIGHT, DEFAULTWIDTH } from "../../../Constants/styles/styles";
import { GlobalSize, fontSize } from "../../../Constants/ResponsiveFont/ResponsiveFonts";

const AccessModal = ({ ModalOpen, setModalOpen, GrantData, setGrantData, selectedId, users, setUsers }) => {

    const [AllSelect, setAllSelect] = useState(false)

    const [data, setData] = useState([

        { id: 1, name: 'Basic Info', selected: false },
        { id: 2, name: 'Personal Info', selected: false },
        { id: 3, name: 'Medical data', selected: false },
        { id: 4, name: 'Diagnosis data', selected: false }
        // Add more items as needed
    ]);

    const CloseModal = () => { //To close the Delete Modal
        if (GrantData?.length > 0) {
            const updatedItems = data.map(item => ({ ...item, selected: false }));
            setData(updatedItems);
            setAllSelect(false)
            const updatedUsers = users.map(item => {
                if (item.id === selectedId) {
                    return { ...item, selected: true };
                } else {
                    return item;
                }
            });
            setUsers(updatedUsers)
            console.log("user..............", users)
            setModalOpen(false)
        } else {

        }
    }


    // Function to toggle selection of individual items
    const toggleSelection = (id) => {
        const updatedItems = data.map((item) =>
            item.id === id ? { ...item, selected: !item.selected } : item)

        setData(updatedItems)
        updateSelectAllState(updatedItems)

    };

    const updateSelectAllState = (updatedItems) => {
        const allSelected = updatedItems.every((item) => item.selected);
        setAllSelect(allSelected);
    };

    // Function to select all items
    const selectAll = () => {
        const updatedSelectAll = !AllSelect;
        setAllSelect(updatedSelectAll);
        const updatedItems = data.map((item) => ({ ...item, selected: updatedSelectAll }))
        setData(updatedItems)
        setGrantData(updatedItems)
    };


    // Render item for FlatList
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={[styles.item, item.selected && styles.selectedItem]}
            onPress={() => toggleSelection(item.id)}>
            <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center' }}>
                {item.selected ?
                    <Check /> :
                    <Uncheck />}

                <Text style={styles.textCode}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );


    return (

        <Modal
            animationType="fade"
            transparent={true}
            visible={ModalOpen}
            onRequestClose={() => {
                setModalOpen(!ModalOpen)
            }}>
            <TouchableWithoutFeedback>
                <View style={styles.mainContainer} >
                    <View style={styles.viewMain} onPress={() => CloseModal()}>
                        <View>

                            <View style={styles.rowView}>
                                <View style={{ marginBottom: GlobalSize(15) }}>
                                    <Text style={styles.textDR}>Give permissions to access the data</Text>
                                </View>

                                <TouchableOpacity onPress={()=>setModalOpen(false)}>
                                    <Close />
                                </TouchableOpacity>
                            </View>

                            <View style={{ flexDirection: 'row', marginBottom: GlobalSize(10) }}>
                                <TouchableOpacity onPress={() => selectAll()}>
                                    {AllSelect ?
                                        <Check /> :
                                        <Uncheck />}
                                </TouchableOpacity>
                                <Text style={styles.textCode}>All</Text>
                            </View>

                            <FlatList
                                data={data}
                                renderItem={renderItem}
                                keyExtractor={item => item.id.toString()}
                            />
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                            <TouchableOpacity style={styles.btnView} onPress={() => CloseModal()}>
                                <Text style={styles.textBtn}>Allow</Text>
                            </TouchableOpacity>
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
    rowView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: GlobalSize(15)
    },
    viewMain: {
        width: DEFAULTWIDTH * 0.88,
        borderRadius: GlobalSize(10),
        paddingTop: DEFAULTHEIGHT * 0.03,
        backgroundColor: PUREWHITE,
        paddingLeft: DEFAULTWIDTH * 0.07,
        paddingBottom: GlobalSize(20)
    },
    btnView: {
        width: DEFAULTWIDTH * 0.3,
        height: DEFAULTWIDTH * 0.1,
        backgroundColor: PRIMARYCOLOR,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: GlobalSize(4),
    },
    textBtn: {
        fontSize: GlobalSize(14),
        color: PUREWHITE,
        fontWeight: '500',
        fontFamily: FONTS.FontMedium,
        textAlign: 'center',
    },
    textCode: {
        marginLeft: GlobalSize(10),
        fontSize: fontSize(12),
        color: TEXTCOLORW,
        fontFamily: FONTS.FontRegular
    },
    textDR: {
        fontFamily: FONTS.FontMedium,
        fontSize: fontSize(13),
        color: PRIMARYCOLOR
    },
    viewDisplay: {
        padding: GlobalSize(7),
        backgroundColor: PRIMARYCOLOR,
        borderRadius: GlobalSize(15),
        alignItems: 'center',
        justifyContent: 'center',
        margin: GlobalSize(10),
        paddingLeft: GlobalSize(10),
        paddingRight: GlobalSize(10)
    },
    textDT: {
        fontSize: fontSize(12),
        color: PUREWHITE,
        fontFamily: FONTS.FontMedium
    },
    textView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: GlobalSize(10),
        marginBottom: GlobalSize(10)
    },
    viewTime: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: GlobalSize(10)
    }

});

export default AccessModal;
