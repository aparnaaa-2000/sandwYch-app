import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, TouchableOpacity, Platform, ScrollView, Image } from 'react-native'
import { BACKGROUNDWHITE, BORDERCOLORSUPPORT, PRIMARYCOLOR, PUREBLACK, PUREWHITE, TEXTCOLORG } from '../../../../Constants/Colors/Colors'
import DEFAULTSTYLES, { DEFAULTHEIGHT, DEFAULTWIDTH } from '../../../../Constants/styles/styles'
import ResourceHeader from '../../../../Components/Common/Headers/ResourceHeader'
import { AVALONG } from '../../../../Constants/DummyImages'
import { FONTS } from '../../../../Constants/Fonts'
import { BlueStar } from '../../../../../assets'
import RequestModal from '../../../../Components/Common/Modal/RequestModal';
import { GlobalSize, height, width } from '../../../../Constants/ResponsiveFont/ResponsiveFonts';

const SupportPersonList = ({navigation}) => {
const [ModalOpen,setModalOpen] = useState(false)
    const SupportList = [
        {
            id: 1,
            Name: 'Amelia',
            Place: 'Newyork',
            Gender: 'Female',
            image: AVALONG,
            Rating: 'Average'
        },
        {
            id: 2,
            Name: 'Ava Long',
            Place: 'Texas',
            Gender: 'Femal',
            image: AVALONG,
            Rating: 'Average'
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


    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity 
            onPress={()=>navigation.navigate('SupportDetail')}
            style={[
                styles.cardView,
                Platform.OS == 'android' ?
                    DEFAULTSTYLES.androidShadow :
                    DEFAULTSTYLES.iosShadow]}>

                <View style={styles.viewAlign}>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ marginRight: 10 }}>
                            <Image
                                source={{ uri: item.image }}
                                style={styles.imageV} />
                        </View>

                        <View>
                            <Text style={[styles.textValue, { fontSize: 15,maxWidth:DEFAULTWIDTH*0.2 }]}>{item.Name}</Text>
                            <Text style={styles.textKey}>{item.Place}</Text>
                        </View>
                    </View>

                    <View>
                        <TouchableOpacity 
                        onPress={()=>setModalOpen(true)}
                        style={styles.btnView}>
                            <Text style={styles.textBtn}>Request Support</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.lineBorder} />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    <View>
                        <Text style={styles.textKey}>Gender</Text>
                        <Text style={styles.textValue}>{item.Gender}</Text>
                    </View>

                    <View>
                        <Text style={styles.textKey}>Response Rating</Text>
                        <Text style={styles.textValue}>{item.Rating}</Text>
                    </View>

                    <View>
                        <ScrollView horizontal={true} style={{ marginTop: 5 }} showsHorizontalScrollIndicator={false}>
                            {Star.map((item) => {
                                return (
                                    <View key={item.id} horizontal style={{ margin: 1 }}>
                                        <BlueStar />
                                    </View>
                                )
                            })}

                        </ScrollView>
                    </View>

                </View>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={DEFAULTSTYLES.AndroidSafeArea}>
            <StatusBar
                backgroundColor={BACKGROUNDWHITE}
                barStyle={'dark-content'}
                style={{ flex: 0 }} />

            <ResourceHeader title={'Support'} navigation={navigation}/>

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <FlatList data={SupportList}
                    keyExtractor={item => item.id}
                    renderItem={renderItem} />
            </View>

            <RequestModal
                    ModalOpen={ModalOpen}
                    title={'Are you sure you want to confirm this support?'}
                    setModalOpen={setModalOpen}
                    navigation={navigation} />
        </SafeAreaView>
    )
}

export default SupportPersonList

const styles = StyleSheet.create({
    cardView: {
        width: DEFAULTWIDTH * 0.86,
        backgroundColor: PUREWHITE,
        borderRadius: 8,
        marginBottom: GlobalSize(10),
        margin: GlobalSize(2),
        padding: GlobalSize(18)
    },
    textKey: {
        fontSize: GlobalSize(12),
        fontFamily: FONTS.FontRegular,
        color: TEXTCOLORG
    },
    textValue: {
        fontSize: GlobalSize(13),
        fontFamily: FONTS.FontSemiB,
        color: PUREBLACK,
        textAlign: 'center'
    },
    lineBorder: {
        width: DEFAULTWIDTH * 0.76,
        height: 1,
        backgroundColor: BORDERCOLORSUPPORT,
        marginBottom: DEFAULTHEIGHT * 0.02,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBtn: {
        fontSize: GlobalSize(12),
        color: PUREWHITE,
        fontFamily: FONTS.FontMedium
    },
    btnView: {
        backgroundColor: PRIMARYCOLOR,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        padding: GlobalSize(5)
    },
    viewAlign: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: DEFAULTHEIGHT * 0.025,
        alignItems: 'center'
    },
    imageV: {
        width:GlobalSize(70),
        height: GlobalSize(70),
        borderRadius: GlobalSize(35)
    }
})