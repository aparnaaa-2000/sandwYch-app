import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FONTS } from '../../../../Constants/Fonts'
import { BORDERCOLOR1, BORDERCOLOR9, PRIMARYCOLOR, PUREBLACK, PUREWHITE, TEXTCOLOR10, TEXTCOLOR15 } from '../../../../Constants/Colors/Colors'
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts'
import { DEFAULTWIDTH } from '../../../../Constants/styles/styles'
import { OrangePen } from '../../../../../assets'

const InitialAssessment = () => {

    return (
        <View>

            <View style={styles.patientCard}>

                <View style={styles.rowView}>
                    <View style={styles.nameCard}>
                        <Text style={styles.textInit}>BS</Text>
                    </View>

                    <View>
                        <Text style={styles.textNm}>Betty Smith</Text>
                        <Text style={styles.textEm}>bettysmith@gmail.com</Text>

                        <TouchableOpacity style={styles.borderView}>
                            <Text style={styles.textEm}>Save & Exit</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.shadowView}>
                        <OrangePen left={-18}/>
                    </View>
                </View>
            </View>

            <View style={{ marginBottom: GlobalSize(10) }}>
                <Text style={styles.textAssess}>Assessment Summary</Text>
            </View>

            <View style={styles.cardView}>

                <View style={styles.rowSpace}>
                    <View>
                        <Text style={styles.textInit}>Initial</Text>
                        <Text style={[styles.textInit, { fontFamily: FONTS.FontRegular, top: GlobalSize(-8) }]}>Assessment</Text>
                    </View>

                    <View>
                        <Text style={styles.textType}>Type : <Text style={[styles.textInit, { fontSize: fontSize(15) }]}>All</Text> </Text>
                    </View>
                </View>

                <View style={styles.lineBorder} />

                <View style={styles.viewRow}>
                    <View>
                        <Text style={styles.textStart}>Start Date: <Text style={[styles.textStart, { color: TEXTCOLOR10 }]}>12/01/2024</Text></Text>
                    </View>

                    <View>
                        <Text style={styles.textStart}>End Date: <Text style={[styles.textStart, { color: TEXTCOLOR10 }]}>12/01/2024</Text></Text>
                    </View>
                </View>

                <View style={styles.rowSpace}>
                    <View>
                        <Text style={styles.textStart}>Completed By:</Text>
                        <Text style={[styles.textInit, { fontSize: fontSize(15) }]}>Amy</Text>
                    </View>

                    <View>
                        <Text style={styles.textStart}>Role:</Text>
                        <Text style={[styles.textInit, { fontSize: fontSize(15) }]}>Hospital Admin</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default InitialAssessment

const styles = StyleSheet.create({
    textAssess: {
        fontFamily: FONTS.FontSemiB,
        color: PUREBLACK,
        fontSize: fontSize(22)
    },
    cardView: {
        borderWidth: 1,
        borderRadius: GlobalSize(8),
        borderColor: BORDERCOLOR9,
        padding: GlobalSize(15),
        marginBottom: GlobalSize(10)
    },
    textInit: {
        fontFamily: FONTS.FontSemiB,
        color: PRIMARYCOLOR,
        fontSize: fontSize(22)
    },
    textType: {
        fontFamily: FONTS.FontRegular,
        fontSize: fontSize(15),
        color: TEXTCOLOR15
    },
    lineBorder: {
        height: 1,
        width: DEFAULTWIDTH * 0.82,
        backgroundColor: BORDERCOLOR1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: GlobalSize(10)
    },
    textStart: {
        fontFamily: FONTS.FontRegular,
        color: TEXTCOLOR15,
        fontSize: fontSize(13)
    },
    viewRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: GlobalSize(10)
    },
    rowSpace: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    patientCard: {
        backgroundColor: PRIMARYCOLOR,
        // width:330,
        height:GlobalSize(160),
        borderRadius: GlobalSize(8),
        marginBottom:GlobalSize(10)
    },
    nameCard: {
        borderRadius: GlobalSize(25),
        width: GlobalSize(50),
        height: GlobalSize(50),
        backgroundColor: PUREWHITE,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:GlobalSize(10)
    },
    textNm: {
        color: PUREWHITE,
        fontFamily: FONTS.FontSemiB,
        fontSize: fontSize(22)
    },
    textEm: {
        color: PUREWHITE,
        fontFamily: FONTS.FontRegular,
        fontSize: fontSize(14)
    },
    borderView: {
        borderWidth: 1,
        borderColor: PUREWHITE,
        borderRadius: GlobalSize(5),
        padding: GlobalSize(5),
        width: DEFAULTWIDTH * 0.28,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: GlobalSize(10)
    },
    shadowView: {
        backgroundColor: PUREWHITE,
        marginLeft: GlobalSize(0),
        alignItems: 'center',
        paddingTop: GlobalSize(30),
        opacity: 0.5,
        width: GlobalSize(190),
        height: GlobalSize(150),
        borderTopLeftRadius: GlobalSize(1000),
        marginTop:GlobalSize(10),
       // borderBottomLeftRadius: 1000,
        //transform:[{ scaleX: 1.2 }],

    },
    rowView:{ 
        flexDirection: 'row', 
        alignItems: 'center',
        marginLeft:GlobalSize(10) 
    }
})