import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TEXTCOLOR10, TEXTCOLOR5 } from '../../../Constants/Colors/Colors'
import { FONTS } from '../../../Constants/Fonts'
import { DEFAULTWIDTH } from '../../../Constants/styles/styles'
import { Account, BlueCall, BlueEmail, OrangePen } from '../../../../assets'


export default function CarePartnerDetails() {
    return (
        <View>
            <View style={styles.centerView}>

                <View style={{ marginRight: DEFAULTWIDTH * 0.1,flexDirection:'row' }}>
                  
                    <Account />
                    {/* <View style={{left:-28,top:5}}>
                    <OrangePen/>
                    </View> */}
                </View>

                <View style={{left:-18}}>
                    <Text style={styles.textName}>Amy Blakely Liane</Text>
                    <Text style={styles.textId}>ID: 002145</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <BlueEmail width={15} height={15}/>
                        <Text style={[styles.textId,{marginLeft:5}]}>amyblakely@gmail.com</Text>
                    </View>
                   

                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <BlueCall width={15} height={15}/>
                    <Text style={[styles.textId,{marginLeft:5}]}>+1 999 888 001</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textName: {
        color: TEXTCOLOR10,
        fontFamily: FONTS.FontMedium,
        fontSize: 20
    },
    textId: {
        fontSize: 14,
        color: TEXTCOLOR5,
        fontFamily: FONTS.FontMedium
    },
    centerView: {
        flexDirection: 'row',
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }
})