import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import {
    BACKGROUNDWHITE,
    BORDERCOLOR1,
    BORDERCOLOR4,
    BOTTOMTABTEXT1,
    PRIMARYCOLOR,
    PUREWHITE,
    TEXTCOLOR10,
    TEXTCOLOR7,
    TEXTCOLORRS
} from '../../../../Constants/Colors/Colors'
import DEFAULTSTYLES, { DEFAULTWIDTH } from '../../../../Constants/styles/styles'
import { FONTS } from '../../../../Constants/Fonts'
import { Dropdown } from 'react-native-element-dropdown';
import { BlackCalender } from '../../../../../assets';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts'
import ResourceHeader from '../../../../Components/Common/Headers/ResourceHeader'

const FilterResource = ({ navigation }) => {

    const [Place, setPlace] = useState([
        { label: 'Texas', value: 'Texas' },
    ]);
    const [PlaceValue, setPlaceValue] = useState('')
    const [Address, setAddress] = useState('')
    const [Date, setDate] = useState(moment().format('MMMM D, YYYY h:mm A'))
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [From, setFrom] = useState(null)

    const handleConfirm = (date) => {
        const ConvertDate = moment(date).format('MMMM D, YYYY h:mm A')
        setDate(ConvertDate)
        setDatePickerVisibility(false)
    };

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const FilterSubmit = () => {
        if (Date && PlaceValue && From && Address) {
            navigation.navigate('ResourceList')
        } else {

        }
    }
    return (
        <SafeAreaView style={DEFAULTSTYLES.AndroidSafeArea}>
            <StatusBar
                backgroundColor={BACKGROUNDWHITE}
                barStyle={'dark-content'}
                style={{ flex: 0 }} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <ResourceHeader navigation={navigation} title={'Filter resources'} />
                <View style={{ padding: GlobalSize(15) }}>


                    {/* <View style={{ marginBottom: GlobalSize(10) }}>
                        <Text style={styles.textFilter}>Filter resource you want</Text>
                    </View> */}

                    {/* <View style={styles.cardView}>
                        <Text style={styles.textCatg}>Resource Category</Text>
                    </View>

                    <View style={DEFAULTSTYLES.alignView}>
                        <View style={styles.viewCateg}>
                            <Text style={styles.inputCateg}>Transportation</Text>
                        </View>
                    </View> */}

                    <View style={styles.cardView}>
                        <Text style={styles.textCatg}>From</Text>

                        <View>
                            <TextInput
                                style={styles.viewCateg}
                                value={From}
                                onChangeText={(text) => setFrom(text)} />
                        </View>
                    </View>

                    <View style={[styles.cardView, { marginBottom: GlobalSize(15) }]}>
                        <Text style={styles.textCatg}>To</Text>

                        <View>
                            <Dropdown
                                style={styles.dropDnContainer}
                                placeholderStyle={styles.placeholderS}
                                itemTextStyle={styles.textArea}
                                selectedTextStyle={styles.textArea}
                                containerStyle={styles.dropView}
                                data={Place}
                                showsVerticalScrollIndicator={false}
                                search={false}
                                labelField="label"
                                valueField="value"
                                placeholder={'Select'}
                                value={PlaceValue}
                                onChange={item => {
                                    setPlaceValue(item.value)
                                }}
                            />
                        </View>
                    </View>


                    <View style={styles.cardView}>
                        <Text style={styles.textCatg}>Date & Time</Text>

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

                    <View style={styles.cardView}>
                        <Text style={styles.textCatg}>Info</Text>
                    </View>
                    <View style={DEFAULTSTYLES.alignView}>
                        <TextInput
                            multiline
                            style={[styles.viewCateg, { height: GlobalSize(100), alignItems: 'flex-start', textAlignVertical: 'top' }]}
                            value={Address}
                            onChangeText={(text) => setAddress(text)} />
                    </View>

                </View>
            </ScrollView>

            <View style={styles.viewPost}>
                <TouchableOpacity
                    style={[styles.btnView, { opacity: From && Address && Date && PlaceValue ? 1 : 0.5 }]}
                    onPress={() => FilterSubmit()}>
                    <Text style={styles.textBtn}>Apply</Text>
                </TouchableOpacity>
            </View>

            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="datetime"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </SafeAreaView>
    )
}

export default FilterResource

const styles = StyleSheet.create({
    textFilter: {
        color: TEXTCOLOR10,
        fontSize: fontSize(18),
        fontFamily: FONTS.FontMedium
    },
    textCatg: {
        color: TEXTCOLOR7,
        fontFamily: FONTS.FontMedium,
        fontSize: fontSize(14),
        marginBottom: GlobalSize(10)
    },
    cardView: {

        // width: DEFAULTWIDTH * 0.90,
        // borderWidth: 1,
        // borderColor: BORDERCOLOR4,
        // borderRadius: 8,
        // padding: GlobalSize(15),
        marginLeft: GlobalSize(10),

    },
    viewCateg: {
        borderWidth: 1,
        borderColor: BORDERCOLOR4,
        borderRadius: 8,
        width: DEFAULTWIDTH * 0.86,
        padding: GlobalSize(10),
        marginBottom: GlobalSize(15),
        color: TEXTCOLOR10,
    },
    inputCateg: {
        color: TEXTCOLORRS,
        fontFamily: FONTS.FontRegular,
        fontSize: fontSize(15)
    },
    btnView: {
        width: DEFAULTWIDTH * 0.88,
        height: DEFAULTWIDTH * 0.125,
        backgroundColor: PRIMARYCOLOR,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    textBtn: {
        fontSize: fontSize(12),
        color: PUREWHITE,
        fontWeight: '700',
        fontFamily: FONTS.FontMedium,
        textAlign: 'center',
    },
    viewPost: {
        position: 'absolute',
        bottom: GlobalSize(20),
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textArea: {
        fontSize: fontSize(14),
        fontFamily: FONTS.FontRegular,
        fontWeight: '400',
        color: TEXTCOLOR10,
    },
    placeholderS: {
        fontSize: fontSize(14),
        fontFamily: FONTS.FontRegular,
        color: BOTTOMTABTEXT1,
    },
    dropDnContainer: {
        backgroundColor: BACKGROUNDWHITE,
        width: DEFAULTWIDTH * 0.86,
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
        width: DEFAULTWIDTH * 0.86,
        padding: GlobalSize(5),
    },
})