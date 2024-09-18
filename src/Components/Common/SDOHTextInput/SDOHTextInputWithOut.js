import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { BORDERCOLOR1, BORDERCOLOR4, BORDERCOLOR5, PRIMARYCOLOR, PUREWHITE, TEXTCOLOR10, TEXTCOLOR5 } from '../../../Constants/Colors/Colors';
import { FONTS } from '../../../Constants/Fonts';
import { DEFAULTWIDTH } from '../../../Constants/styles/styles';
import { GlobalSize, fontSize } from '../../../Constants/ResponsiveFont/ResponsiveFonts';

const SDOHTextInputWithout = ({
    radioBtnValue,
    setRadioBtnValue,
    Data
}) => {

    const onPress = option => {
        setRadioBtnValue(option.id)
    }

    return (
        <View>
            <FlatList
                data={Data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={{ marginLeft: GlobalSize(10) }}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity
                                    style={styles.radioButton}
                                    onPress={() => onPress(item)}>
                                    <View
                                        style={[
                                            styles.radioIcon,
                                            radioBtnValue == item.id && styles.radioIconSelected,
                                        ]}>
                                        {radioBtnValue == item.id && (
                                            <View style={styles.radioBorder} />
                                        )}
                                    </View>
                                </TouchableOpacity>

                                <View style={{ marginTop: 7,maxWidth:DEFAULTWIDTH*0.8}}>
                                    <Text style={styles.textDesc}>{item.Title}</Text>
                                </View>

                            </View>


                        </View>
                    );
                }}
            />
        </View>
    )
}

export default SDOHTextInputWithout;

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
        fontSize: fontSize(11),
        fontFamily: FONTS.FontRegular,
        paddingLeft: GlobalSize(15),
    },
    textInputEducation: {
        width: DEFAULTWIDTH * 0.8,
        height: DEFAULTWIDTH * 0.25,
        borderRadius: GlobalSize(8),
        borderColor: BORDERCOLOR1,
        borderWidth: 1,
        marginBottom: 1,
        marginLeft: DEFAULTWIDTH * 0.1
    },
    inputView: {
        justifyContent: 'center',
        marginTop: GlobalSize(17),
        left: GlobalSize(15),
    },
})