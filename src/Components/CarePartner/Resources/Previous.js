import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DEFAULTSTYLES, { DEFAULTHEIGHT, DEFAULTWIDTH } from '../../../Constants/styles/styles'
import { BACKGROUNDWHITE, PUREBLACK, PUREWHITE, TEXTCOLORG } from '../../../Constants/Colors/Colors'
import { FONTS } from '../../../Constants/Fonts'
import { BlackReview, BlueStar } from '../../../../assets'
import ReviewRatingModal from '../../Common/Modal/ReviewRatingModal';
import { GlobalSize, fontSize } from '../../../Constants/ResponsiveFont/ResponsiveFonts'


const Previous = () => {

    const PreviousData = [ //DUMMY DATA
        {
            id: 1,
            Name: 'Nourish Nation',
            Type: 'Food',
            ResourceTime: 'Average',
            Status: 'Completed',
            Rating: null
        },
        {
            id: 2,
            Name: 'United Harvest',
            Type: 'Food',
            ResourceTime: 'Average',
            Status: 'Completed',
            Rating: 5
        },
        {
            id: 3,
            Name: 'United Harvest',
            Type: 'Food',
            ResourceTime: 'Poor',
            Status: 'Cancelled',
            Rating: null
        }
    ]

    const Star = [
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        },
        {
            id: 4
        },
        {
            id: 5
        }
    ]

    const [ModalOpen, setModalOpen] = useState(false)

    return (
        <View style={styles.viewMain}>

            {PreviousData.map((item) => {
                return (
                    <View
                        style={[styles.cardView,
                        Platform.OS == 'android' ?
                            DEFAULTSTYLES.androidShadow :
                            DEFAULTSTYLES.iosShadow]}>

                        <View style={styles.viewSpace}>
                            <View style={{ marginBottom: GlobalSize(10) }}>
                                <Text style={styles.textName}>{item.Name}</Text>
                            </View>

                            <View>
                                {item.Rating !== null && item.Status !== 'Cancelled' ?
                                    <ScrollView horizontal={true} style={{ marginTop: GlobalSize(5) }}>
                                        {Star.map((item) => {
                                            return (
                                                <View key={item.id} horizontal style={{ margin: GlobalSize(1) }}>
                                                    <BlueStar />
                                                </View>
                                            )
                                        })}

                                    </ScrollView> :
                                    item.Rating == null && item.Status !== 'Cancelled' ?
                                        <View>
                                            <TouchableOpacity onPress={() => setModalOpen(true)}>
                                                <BlackReview />
                                            </TouchableOpacity>
                                        </View> : null}

                            </View>

                        </View>

                        <View style={styles.viewSpace}>

                            <View>
                                <Text style={styles.textKey}></Text>
                                <Text style={[styles.textName, { fontSize: fontSize(12) }]}>{item.Type}</Text>
                            </View>

                            <View>
                                <Text style={styles.textKey}>Resource Time</Text>
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

            <ReviewRatingModal
                ModalReview={ModalOpen}
                setModalReview={setModalOpen} />
        </View>
    )
}

export default Previous;

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
    },
    viewSpace: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})