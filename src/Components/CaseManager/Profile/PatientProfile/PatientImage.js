import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import { BETTYSMITHPROFILE } from '../../../../Constants/DummyImages';
import { BACKGROUNDWHITE, BORDERCOLOR7, TEXTCOLOR10, TEXTCOLOR5, TEXTCOLORSC1 } from '../../../../Constants/Colors/Colors';
import { FONTS } from '../../../../Constants/Fonts';
import { EditIcon } from '../../../../../assets';
import DEFAULTSTYLES from '../../../../Constants/styles/styles';


const PatientImage = () => {
    return (

        <View style={DEFAULTSTYLES.alignView}>
            <View style={styles.viewImg}>
                <Image source={{ uri: BETTYSMITHPROFILE }} style={styles.imageV} />
                <View style={[DEFAULTSTYLES.alignView,{top:-20}]}>
                <EditIcon/>
                </View>
            </View>

            <View style={styles.viewCard}>


                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column',left:-15 }}>
                        <Text style={styles.textKey}>Name:</Text>
                        <Text style={styles.textKey}>Email:</Text>
                        <Text style={styles.textKey}>Phone:</Text>
                    </View>

                    <View>
                        <Text style={styles.textValue}>Betty Smith</Text>
                        <Text style={[styles.textValue, { color: TEXTCOLOR5 }]}>bettysmith@gmail.com</Text>
                        <Text style={[styles.textValue, { color: TEXTCOLOR5, marginTop: 10 }]}>+ 9712457898</Text>


                    </View>

                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column', marginLeft: DEFAULTWIDTH * 0.1,left:-20 }}>
                        <Text style={styles.textKey}>Address:</Text>
                    </View>

                    <View style={{left:-14}}>
                        <Text style={[styles.textAddress,{marginTop:8}]}>Unit F, Winston Business</Text>
                        <Text style={styles.textAddress}>Park Churchill Way#00000</Text>
                        <Text style={styles.textAddress}>Sheffield</Text>
                        <Text style={styles.textAddress}>
                            S35 2PS</Text>
                    </View>
                </View>
            </View>
        </View>

    )
};

const styles = StyleSheet.create({
    imageV: {
        width: DEFAULTWIDTH * 0.42,
        height: DEFAULTWIDTH * 0.42,
        borderRadius: 100
    },
    viewImg: {
        marginTop: DEFAULTWIDTH * 0.15,
    },
    textKey: {
        fontSize: 17,
        color: TEXTCOLORSC1,
        fontFamily: FONTS.FontRegular,
        margin: 5
    },
    textValue: {
        fontFamily: FONTS.FontMedium,
        fontSize: 14,
        color: TEXTCOLOR10,
        margin: 5,
        marginTop:8
    },
    textAddress: {
        fontFamily: FONTS.FontMedium,
        fontSize: 14,
        color: TEXTCOLOR5,
    },
    viewCard: {
        backgroundColor: BACKGROUNDWHITE,
        width: DEFAULTWIDTH * 0.88,
        elevation: 2,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: BORDERCOLOR7,
        padding:DEFAULTWIDTH*0.05,
        marginBottom:DEFAULTWIDTH*0.05
    }
})
export default PatientImage;