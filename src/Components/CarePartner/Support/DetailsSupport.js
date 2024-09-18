import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GreyCall, GreyEmail, GreyLocation, GreyMap } from '../../../../assets'
import { DEFAULTWIDTH } from '../../../Constants/styles/styles'
import { BACKGROUNDGREY, BORDERCOLOR5, PUREBLACK, TEXTCOLOR10, TEXTCOLOR5 } from '../../../Constants/Colors/Colors'
import { FONTS } from '../../../Constants/Fonts'

const DetailsSupport = () => {
  return (
<>
       <View style={{ marginLeft: DEFAULTWIDTH * 0.02, marginBottom: 5 }}>
                    <Text style={[styles.textRes, { fontSize: 20 }]}>Nourish Nation</Text>
                </View>


                <View style={styles.viewDetails}>

                    <View style={{ marginRight: 10 }}>
                        <GreyCall />
                    </View>

                    <View>
                        <Text style={styles.textDetails}>0345 640 2020</Text>
                    </View>
                </View>



                <View style={styles.viewDetails}>

                    <View style={{ marginRight: 10 }}>
                        <GreyEmail />
                    </View>

                    <View>
                        <Text style={styles.textDetails}>NourishNation@gmail.com</Text>
                    </View>
                </View>



                <View style={styles.viewDetails}>

                    <View style={{ marginRight: 10 }}>
                        <GreyLocation />
                    </View>

                    <View style={{ maxWidth: DEFAULTWIDTH * 0.5 }}>
                        <Text style={styles.textDetails}>Argos Limited Royal Avenue Widnes WA8 8HS</Text>
                    </View>


                </View>


                <View style={[styles.viewDetails,{marginBottom:10}]}>

                    <View style={{ marginRight: 10 }}>
                        <GreyMap />
                    </View>

                    <View>
                        <Text style={styles.textDetails}>English, French</Text>
                    </View>
                </View>

                <View style={styles.borderView}>
                <View>
                    <Text style={styles.textReq}>Your request</Text>
                </View>

                <View>
                    <Text style={styles.textDesc}>The healthy food competitions to be organised on the occasion of World Food Day 2023 play a pivotal role in spotlighting the significance of sustainable food practices and nutritious eating. Australia, with its diverse culinary heritage and agricultural potential, recognizes the importance of addressing global hunger and promoting healthy diets.</Text>
                </View>
                </View>
   </>
  )
}

export default DetailsSupport

const styles = StyleSheet.create({
    viewDetails: {
        width: DEFAULTWIDTH * 0.85,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: BACKGROUNDGREY,
        marginBottom: 2,
        paddingLeft: 18,
        marginLeft: DEFAULTWIDTH * 0.02
    },
    textDetails: {
        fontFamily: FONTS.FontRegular,
        color: PUREBLACK,
        fontSize: 14,
    },
    borderView:{
        borderWidth:1,
        borderRadius:8,
        padding:15,
        borderColor:BORDERCOLOR5,
        margin:6
    },
    textRes: {
        fontSize: 24,
        fontFamily: FONTS.FontMedium,
        color: TEXTCOLOR10
    },
    textReq:{
        color:TEXTCOLOR10,
        fontSize:16,
        fontFamily:FONTS.FontMedium,
        marginBottom:5
    },
    textDesc:{
        fontFamily:FONTS.FontRegular,
        color:TEXTCOLOR5,
        fontSize:13
    }
})