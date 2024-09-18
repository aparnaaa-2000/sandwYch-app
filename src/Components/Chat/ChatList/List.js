import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Dimensions,
    TouchableOpacity,
    Image,
    Platform
} from 'react-native';
import { FONTS } from '../../../Constants/Fonts';
idth = Dimensions.get('window').width;
import { PRIMARYCOLOR, PUREWHITE, LINECOLOR1, TEXTCOLOR11, TEXTCOLOR13 } from '../../../Constants/Colors/Colors'
import { AVALONG, BETTYSMITHPROFILE, HOUSTON, SALLYBROWN1, SALLYBROWN2 } from '../../../Constants/DummyImages';
import FastImage from 'react-native-fast-image';
import { DEFAULTWIDTH } from '../../../Constants/styles/styles';
import { GlobalSize, fontSize } from '../../../Constants/ResponsiveFont/ResponsiveFonts';

const List = ({ navigation }) => {

    // DUMMY DATA
    const data = [
        {
            id: 1,
            name: 'Houston Methodist',
            time: '12:00 AM',
            msg: 'Complete Survey',
            imageUri: HOUSTON
        },
        {
            id: 2,
            name: 'Betty Smith',
            time: '12:00 AM',
            msg: 'Thankyou',
            imageUri: BETTYSMITHPROFILE
        },
        {
            id: 3,
            name: 'Ava Long',
            time: '12:00 AM',
            msg: 'Hi Ava, I am following up for ...',
            imageUri: AVALONG
        },
        {
            id: 4,
            name: 'Sally Brown',
            time: '12:00 AM',
            msg: 'Hi Sally, I am following up for ...',
            imageUri: SALLYBROWN1
        },
        {
            id: 5,
            name: 'Sally Brown',
            time: '12:00 AM',
            msg: 'Thankyou',
            imageUri: SALLYBROWN2
        }
    ]

    const renderItem = (({ item }) => {

        return (
            <TouchableOpacity onPress={() => {
                navigation.navigate('ChatStack', { name: item?.name, imageUri: item?.imageUri })
            }}>

                <View style={styles.mainView}>
                    <FastImage
                        style={styles.imageV}
                        source={{
                            uri: item.imageUri,
                            priority: FastImage.priority.normal,
                        }}
                        resizeMode={FastImage.resizeMode.cover}
                    />

                    <View style={{ width: DEFAULTWIDTH * 0.52, left: GlobalSize(-12), top: GlobalSize(2) }}>
                        <Text style={[styles.textName, { width: DEFAULTWIDTH * 0.5 }]}>{item.name}</Text>
                        <Text style={[styles.time, { maxWidth: DEFAULTWIDTH * 0.6 }]} numberOfLines={1}>{item.msg}</Text>

                    </View>
                    <View style={{ left: GlobalSize(-30), top: GlobalSize(2) }}>
                        <Text style={[styles.time, {
                            color: item.id == 1 ? '#151F6D' : TEXTCOLOR13,
                            fontWeight: item.id == 1 ? '600' : '400'
                        }]}>{item.time}</Text>
                        {item.id == 1 &&
                            <View style={styles.countView}>
                                <Text style={styles.countText}>1</Text>
                            </View>}
                    </View>


                </View>
                <View style={styles.border} />
            </TouchableOpacity>
        )
    })

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: GlobalSize(15),
        alignItems: 'center',
        flex: 1
    },
    mainView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: GlobalSize(10),
    },
    textName: {
        fontSize: fontSize(16),
        fontWeight: '600',
        color: TEXTCOLOR11,
        fontFamily: FONTS.FontSemiB
    },
    time: {
        fontSize: fontSize(14),
        color: TEXTCOLOR13,
        fontFamily: FONTS.FontRegular
    },
    border: {
        borderWidth: 0.5,
        left: DEFAULTWIDTH * 0.2,
        borderColor: LINECOLOR1,
        width: DEFAULTWIDTH * 0.98,
        marginTop: fontSize(10)
    },
    countText: {
        fontSize: fontSize(12),
        color: PUREWHITE
    },
    countView: {
        marginTop: GlobalSize(5),
        marginLeft: DEFAULTWIDTH * 0.1,
        width: GlobalSize(16),
        height: GlobalSize(16),
        backgroundColor: PRIMARYCOLOR,
        borderRadius: GlobalSize(8),
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageV: {
        width: DEFAULTWIDTH * 0.12,
        borderRadius: GlobalSize(25),
        height: DEFAULTWIDTH * 0.12
    },

})

export default List;