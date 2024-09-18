import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, FlatList, Platform } from 'react-native'
import React, { useState } from 'react'
import { BACKGROUNDWHITE, BORDERCOLOR2, PUREBLACK } from '../../../../Constants/Colors/Colors'
import DEFAULTSTYLES, { DEFAULTHEIGHT, DEFAULTWIDTH } from '../../../../Constants/styles/styles'
import SubHeader from '../../../../Components/Common/Headers/SubHeader'
import { FONTS } from '../../../../Constants/Fonts'
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts'

const FAQ = ({navigation}) => {
    const data = [
        { id: 1, title: 'What is Sandwych?', description: 'Lorem ipsum dolor sit amet, consectetur laborum.' },
        { id: 2, title: 'How the app works?', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { id: 3, title: 'What are the steps to register the app?', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    ];

    const [expandedId, setExpandedId] = useState(null)

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id)
    };

    const renderItem = ({ item }) => {
        const expanded = expandedId === item.id
        return (
            <View>
                <TouchableOpacity
                    style={[styles.cardView,
                    Platform.OS == 'android' ?
                        DEFAULTSTYLES.androidShadow :
                        DEFAULTSTYLES.iosShadow]}
                    onPress={() => toggleExpand(item.id)}>
                    <Text style={styles.textTitle}>{item.title}</Text>

                    {expanded && (
                        <View style={styles.viewDesc}>
                            <Text style={styles.textFAQ}>{item.description}</Text>
                        </View>
                    )}
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <SafeAreaView style={DEFAULTSTYLES.AndroidSafeArea}>
            <StatusBar
                backgroundColor={BACKGROUNDWHITE}
                barStyle={'dark-content'}
                style={{ flex: 0 }} />

            <View style={{ marginBottom: DEFAULTHEIGHT * 0.04 }}>
                <SubHeader title={'FAQ'} navigation={navigation}/>
            </View>
            <View style={DEFAULTSTYLES.alignView}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem} />

            </View>
        </SafeAreaView>
    )
}

export default FAQ;

const styles = StyleSheet.create({
    textFAQ: {
        fontSize: fontSize(12),
        color: PUREBLACK,
        fontFamily: FONTS.FontRegular
    },
    textTitle: {
        fontFamily: FONTS.FontMedium,
        color: PUREBLACK,
        fontSize: fontSize(14)
    },
    cardView: {
        margin: GlobalSize(1),
        width: DEFAULTWIDTH * 0.86,
        backgroundColor: BACKGROUNDWHITE,
        borderRadius: 8,
        marginBottom: GlobalSize(15),
        justifyContent: 'center',
        padding: GlobalSize(15)
    },
    viewDesc: {
        marginTop: GlobalSize(5),
        backgroundColor: BORDERCOLOR2,
        padding: GlobalSize(10),
        borderRadius: 5

    }
})


