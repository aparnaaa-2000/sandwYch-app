import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DEFAULTSTYLES, { DEFAULTHEIGHT, DEFAULTWIDTH } from '../../../Constants/styles/styles'
import { BACKGROUNDWHITE, PUREBLACK, PUREWHITE, TEXTCOLORG } from '../../../Constants/Colors/Colors'
import { FONTS } from '../../../Constants/Fonts'
import { GlobalSize, fontSize } from '../../../Constants/ResponsiveFont/ResponsiveFonts'

const Inprocess = () => {

    const ProcessData = [ //DUMMY DATA

        {
            id: 1,
            Name: 'Nourish Nation',
            Type: 'Food',
            ResourceTime: 'Average',
            Status: 'Completed'
        },
        {
            id: 2,
            Name: 'United Harvest',
            Type: 'Food',
            ResourceTime: 'Average',
            Status: 'Inprogress'
        }
    ]
    return (
        <View style={styles.viewMain}>

            {ProcessData.map((item) => {
                return (
                    <View
                        style={[styles.cardView,
                        Platform.OS == 'android' ?
                            DEFAULTSTYLES.androidShadow :
                            DEFAULTSTYLES.iosShadow]}>

                        <View style={{ marginBottom: GlobalSize(10) }}>
                            <Text style={styles.textName}>{item.Name}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <View>
                                <Text style={styles.textKey}>Support Type</Text>
                                <Text style={[styles.textName, { fontSize: fontSize(12) }]}>{item.Type}</Text>
                            </View>

                            <View>
                                <Text style={styles.textKey}>Support Time</Text>
                                <Text style={[styles.textName, { fontSize: fontSize(12) }]}>{item.ResourceTime}</Text>
                            </View>

                            <View>
                                <Text style={styles.textKey}>Status</Text>
                                <Text style={[styles.textName, { fontSize: fontSize(12) }]}>{item.Status}</Text>
                            </View>

                        </View>
                    </View>
                )
            })}

        </View>
    )
}

export default Inprocess

const styles = StyleSheet.create({
    viewMain: {
        paddingTop: DEFAULTHEIGHT * 0.026,
        flex: 1,
        backgroundColor: BACKGROUNDWHITE,
        alignItems: 'center'
    },
    cardView: {
        width: DEFAULTWIDTH * 0.9,
        padding: GlobalSize(15),
        backgroundColor: PUREWHITE,
        borderRadius: 8,
        marginBottom: GlobalSize(15)
    },
    textName: {
        fontFamily: FONTS.FontSemiB,
        color: PUREBLACK,
        fontSize: fontSize(14)
    },
    textKey: {
        fontSize: fontSize(11),
        color: TEXTCOLORG,
        fontFamily: FONTS.FontRegular
    }
})