import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, StatusBar, Dimensions } from 'react-native';
import { BACKGROUNDWHITE, BORDERCOLOR7, LINECOLOR1,TEXTCOLORSC1 } from '../../Constants/Colors/Colors';
import { FONTS } from '../../Constants/Fonts';
import { TEXTCOLOR10 } from '../../../../Constants/Colors/Colors';
import DEFAULTSTYLES from '../../../../Constants/styles/styles';


const PatientDetailCard = () => {
    return (

        <View style={DEFAULTSTYLES.alignView}>
        <View style={styles.viewCard}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View>
                    <Text style={styles.textAd}>Address</Text>
                </View>

                <View>
                    <Text style={styles.textKey} numberOfLines={2}>1234567 S. Congress St,</Text>
                    <Text style={styles.textKey} numberOfLines={2}>Austin TX 78744</Text>
                </View>
            </View>

            <View style={styles.lineView}/>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         
                <View>
                    <Text style={styles.textAd}>SSN</Text>
                </View>

                <View>
                    <Text style={styles.textKey}>000-000-0000</Text>
            
                </View>
            </View>
            
            <View style={styles.lineView}/>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{width:DEFAULTWIDTH*0.25}}>
                    <Text style={styles.textAd}>Medicare Number</Text>
                </View>

                <View>
                    <Text style={styles.textKey}>123456789</Text>
            
                </View>
            </View>

            
            <View style={styles.lineView}/>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{width:DEFAULTWIDTH*0.25}}>
                    <Text style={styles.textAd}>Medicare Number</Text>
                </View>

                <View>
                    <Text style={styles.textKey}>123456789</Text>
            
                </View>
            </View>

            
            <View style={styles.lineView}/>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{width:DEFAULTWIDTH*0.2}}>
                    <Text style={styles.textAd}>Current Payment Source</Text>
                </View>

                <View>
                    <Text style={styles.textKey}>Cash, Check, Card</Text>
            
                </View>
            </View>

            
            <View style={styles.lineView}/>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View>
                    <Text style={styles.textAd}>Case Manager</Text>
                </View>

                <View>
                    <Text style={styles.textKey}>Olivia Rhye</Text>
            
                </View>
            </View>
            
            <View style={styles.lineView}/>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View>
                    <Text style={styles.textAd}>Unit/Floor</Text>
                </View>

                <View>
                    <Text style={styles.textKey}>ICU</Text>
            
                </View>
            </View>

            
            <View style={styles.lineView}/>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View>
                    <Text style={styles.textAd}>Location</Text>
                </View>

                <View>
                    <Text style={styles.textKey}>Pearland Hospital</Text>
            
                </View>
            </View>

            
            <View style={styles.lineView}/>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{width:DEFAULTWIDTH*0.3}}>
                    <Text style={styles.textAd}>Advanced Care Directive</Text>
                </View>

                <View>
                    <Text style={styles.textKey}>YES</Text>
            
                </View>
            </View>

            
            <View style={styles.lineView}/>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{width:DEFAULTWIDTH*0.25}}>
                    <Text style={styles.textAd}>Date Completed</Text>
                </View>

                <View>
                    <Text style={styles.textKey}>00/00/0000</Text>
            
                </View>
            </View>

            
            <View style={styles.lineView}/>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{width:DEFAULTWIDTH*0.25}}>
                    <Text style={styles.textAd}>Medical Power of Attorney</Text>
                </View>

                <View style={{width:DEFAULTWIDTH*0.5}}>
                    <Text style={styles.textKey}>First Last name, (123) 456-7890, asdfghjk@gmail.com</Text>
            
                </View>
            </View>

            
            <View style={styles.lineView}/>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{width:DEFAULTWIDTH*0.25}}>
                    <Text style={styles.textAd}>Is MPOA the Primary Caregiver</Text>
                </View>

                <View>
                    <Text style={styles.textKey}>YES</Text>
            
                </View>
            </View>
        </View>
        </View>
    )
};

const styles = StyleSheet.create({
    viewCard: {
        backgroundColor: BACKGROUNDWHITE,
        width: DEFAULTWIDTH * 0.88,
        elevation: 2,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: BORDERCOLOR7,
        padding: DEFAULTWIDTH * 0.04,
        marginBottom: 15
    },
    textKey:{
        fontSize:14,
        fontFamily:FONTS.FontMedium,
        color:TEXTCOLOR10,
        textAlign:'right'
    },
    textAd:{
        fontSize:15,
        fontFamily:FONTS.FontRegular,
        color:TEXTCOLORSC1
    },
    lineView:{
        margin:10,
        width:DEFAULTWIDTH*0.82,
        height:1,
        backgroundColor:LINECOLOR1
    }
})

export default PatientDetailCard;