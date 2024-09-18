import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { GreyDownArrow, GreyUpArrow, WhiteCare, WhiteFun, WhiteSDOH } from '../../../../../assets'
import { BACKGROUNDCOLORBLUE, BACKGROUNDCOLORLIGHT, BACKGROUNDCOLORLIGHTBLUE, BACKGROUNDCOLORORANGE, BACKGROUNDCOLORRED, BORDERCOLOR10, BORDERCOLOR9, NINETHCOLOR, PRIMARYCOLOR, PUREWHITE, TEXTCOLOR10, TEXTCOLOR15, TEXTCOLOR16, TEXTCOLOR17 } from '../../../../Constants/Colors/Colors'
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts'
import { FONTS } from '../../../../Constants/Fonts'
import { AVALONG } from '../../../../Constants/DummyImages'
import { DEFAULTHEIGHT, DEFAULTWIDTH } from '../../../../Constants/styles/styles';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image'

const AssessInfo = () => {
    const [CareTeam, setCareTeam] = useState(false)
    const [FuncAbility, setFuncAbility] = useState(false)
    const [SDOH, setSDOH] = useState(false)

    const CareTeamData = [
        {
            id: 1,
            Name: 'Olivia Rhye',
            Image: AVALONG,
            Title: 'Case Manager',
            Email: 'olivia@sandwych.com',
            selected: false
        },
        {
            id: 2,
            Name: 'John Joseph',
            Image: AVALONG,
            Title: 'Primary Carepartner',
            Email: 'john123@gmail.com',
            selected: false
        }
    ]

    const ADLData = [
        {
            id: 1,
            Title: 'Bathing',
            textColor: PRIMARYCOLOR,
            image: require('../../../../../assets/Images/summary/bath.png'),
            backgroundColor: '#FFF7F6',
            color1: '#FEBCB510',
            color2: '#FB7E72'

        },
        {
            id: 2,
            Title: 'Eating',
            textColor: '#599E92',
            image: require('../../../../../assets/Images/summary/eat.png'),
            backgroundColor: '#F4FFFD',
            color1: '#FEBCB510',
            color2: 'rgba(89, 158, 146, 1)'
        },
        {
            id: 3,
            Title: 'Transfer & Mobility',
            image: require('../../../../../assets/Images/summary/Trans.png'),
            textColor: '#3153B8',
            backgroundColor: '#F4F7FF',
            color1: '#FEBCB510',
            color2: 'rgba(118, 151, 246, 1)'
        }
    ]

    const renderItem = ({ item }) => {
        return (
            <View style={[styles.cardView, styles.columnView]}>
                <Text style={styles.textType}>{item.Title}</Text>
                <FastImage
                    style={styles.imgView}
                    source={{
                        uri: item.Image,
                        priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                />
                <Text style={[styles.textHead, { fontSize: fontSize(15) }]}>{item.Name}</Text>
                <Text style={styles.textType}>{item.Email}</Text>

            </View>
        )
    }

    return (
        <View>

            <TouchableOpacity
                style={[styles.touchCard, { backgroundColor: BACKGROUNDCOLORBLUE }]}
                onPress={() => setCareTeam(!CareTeam)}>
                <View>
                    <ImageBackground
                        source={require('../../../../../assets/Images/summary/LighBlueRect.png')}
                        style={styles.imgBack}>
                        <WhiteCare width={18} height={18} />
                    </ImageBackground>
                </View>

                <View>
                    <Text style={styles.textHead}>Careteam</Text>
                </View>

                <View>
                    {CareTeam ?
                        <GreyUpArrow width={20} height={20} /> :
                        <GreyDownArrow width={20} height={20} />}
                </View>

            </TouchableOpacity>

            {CareTeam &&
                <View>
                    <FlatList
                        data={CareTeamData}
                        numColumns={2}
                        keyExtractor={item => item.id}
                        renderItem={renderItem} />
                </View>}


            <TouchableOpacity
                style={[styles.touchCard, { backgroundColor: BACKGROUNDCOLORRED }]}
                onPress={() => setFuncAbility(!FuncAbility)}>
                <View>
                    <ImageBackground
                        source={require('../../../../../assets/Images/summary/redRect.png')}
                        style={styles.imgBack}>
                        <WhiteFun width={18} height={18} />
                    </ImageBackground>
                </View>

                <View>
                    <Text style={styles.textHead}>Functional Abilities</Text>
                </View>

                <View>
                    {FuncAbility ?
                        <GreyUpArrow width={20} height={20} /> :
                        <GreyDownArrow width={20} height={20} />}
                </View>

            </TouchableOpacity>

            {FuncAbility &&
                <View>
                    {ADLData.map((item) => {
                        return (
                            <View style={[styles.cardFunc, { backgroundColor: item.backgroundColor }]}>
                                <View style={styles.titleView}>
                                    <Text style={styles.textADL}>ADL</Text>
                                    <Text style={[styles.titleText, { color: item.textColor, maxWidth: GlobalSize(120) }]}>{item.Title}</Text>
                                </View>

                                <LinearGradient
                                    start={{ x: 0.0, y: 0.1 }} end={{ x: 0.5, y: 1.0 }}
                                    locations={[0, 0.7, 0.1]}
                                    colors={[item.color1, item.color2]}
                                    style={styles.linearGradient}>
                                    <Image
                                        source={item.image}
                                        resizeMode='contain'
                                        style={styles.imgLinear} />
                                </LinearGradient>

                            </View>
                        )
                    })}
                </View>}

            <TouchableOpacity
                style={[styles.touchCard, { backgroundColor: BACKGROUNDCOLORLIGHTBLUE }]}
                onPress={() => setSDOH(!SDOH)}>
                <View>
                    <ImageBackground
                        source={require('../../../../../assets/Images/summary/VioletRect.png')}
                        style={styles.imgBack}>
                        <WhiteSDOH width={18} height={18} />
                    </ImageBackground>
                </View>

                <View>
                    <Text style={styles.textHead}>SDOH</Text>
                </View>

                <View>
                    {SDOH ?
                        <GreyUpArrow width={20} height={20} /> :
                        <GreyDownArrow width={20} height={20} />}
                </View>

            </TouchableOpacity>

            {SDOH &&
                <View>
                    <View style={{ marginBottom: GlobalSize(10), marginTop: GlobalSize(10) }}>
                        <Text style={styles.textSDOH}>Personal Characteristics</Text>
                    </View>
                    {SDOH &&
                        <View style={[styles.cardView, { flexDirection: 'column', justifyContent: 'flex-start' }]}>

                            <View>
                                <Text style={[styles.textType, { textAlign: 'left', marginBottom: 0 }]}>On average, how many days per week do you engage in moderate to strenuous exercise (like walking fast, running, jogging, dancing, swimming, biking, or other activities that cause a light or heavy sweat)?</Text>

                                <Text style={styles.textValue}>25 days</Text>
                            </View>

                            <View>
                                <Text style={[styles.textType, { textAlign: 'left', marginBottom: 0 }]}>How often do you have a drink containing alcohol?</Text>
                                <Text style={styles.textValue}>48.90%</Text>
                            </View>
                        </View>}
                    {/* <View style={{marginBottom:GlobalSize(10)}}>
                        <FlatList
                            data={PERSONAL}
                            numColumns={3}
                            keyExtractor={item => item.id}
                            renderItem={renderItemPersonal} />
                    </View> */}
                    {/* 
                    <View style={{ marginBottom: GlobalSize(15) }}>
                        <FlatList
                            data={SDOHData}
                            numColumns={3}
                            keyExtractor={item => item.id}
                            renderItem={renderItemSDOH} />
                    </View> */}
                </View>}
        </View>
    )
}

export default AssessInfo

const styles = StyleSheet.create({
    touchCard: {
        borderWidth: 1,
        borderRadius: GlobalSize(8),
        borderColor: BORDERCOLOR9,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: BACKGROUNDCOLORBLUE,
        // padding: GlobalSize(13),
        marginBottom: 1,
        paddingRight: GlobalSize(15)
    },
    textHead: {
        color: PRIMARYCOLOR,
        fontFamily: FONTS.FontMedium,
        fontSize: fontSize(18)
    },
    columnView: {
        flexDirection: 'column',
        width: DEFAULTWIDTH * 0.44,
        marginRight: GlobalSize(12),
        alignItems: 'center'
    },
    cardView: {
        borderWidth: 1,
        borderRadius: GlobalSize(8),
        borderColor: BORDERCOLOR9,
        padding: GlobalSize(15),
        paddingBottom: GlobalSize(5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: GlobalSize(10)
    },
    imgLinear: {
        width: GlobalSize(120),
        height: GlobalSize(110),
        marginTop: GlobalSize(20)
    },
    titleView:{
         flexDirection: 'column', 
         marginTop: GlobalSize(20),
          marginLeft: GlobalSize(20)
         },
    textValue: {
        fontFamily: FONTS.FontSemiB,
        fontSize: fontSize(14),
        color: PRIMARYCOLOR,
        marginBottom: GlobalSize(10),
        textAlign: 'left'
    },
    linearGradient: {
        borderTopLeftRadius: 120,
        alignItems: 'center',
        width: DEFAULTWIDTH * 0.5,
        height: DEFAULTHEIGHT * 0.2,
        borderTopRightRadius: GlobalSize(8),
        borderBottomRightRadius: GlobalSize(8)
    },
    textADL: {
        fontSize: fontSize(18),
        fontFamily: FONTS.FontRegular,
        color: TEXTCOLOR17
    },
    titleText: {
        fontFamily: FONTS.FontSemiB,
        fontSize: fontSize(20)
    },
    cardFunc: {
        borderWidth: 1,
        borderRadius: GlobalSize(8),
        borderColor: BORDERCOLOR9,
        //padding: GlobalSize(7),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: GlobalSize(6)

    },
    textType: {
        fontFamily: FONTS.FontRegular,
        fontSize: fontSize(14),
        color: TEXTCOLOR15,
        marginBottom: GlobalSize(10),
        textAlign: 'center'
    },
    imageCard: {
        width: GlobalSize(70),
        height: GlobalSize(70),
        borderRadius: GlobalSize(35),
        backgroundColor: PRIMARYCOLOR,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: GlobalSize(5)
    },
    imgView: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginBottom: GlobalSize(10)
    },
    textSDOH: {
        fontFamily: FONTS.FontSemiB,
        color: PRIMARYCOLOR,
        fontSize: GlobalSize(14),
    },
    cardSd: {
        borderWidth: 1,
        borderRadius: GlobalSize(8),
        borderColor: BORDERCOLOR10,
        backgroundColor: BACKGROUNDCOLORLIGHT,
        padding: GlobalSize(10),
        width: DEFAULTWIDTH * 0.32,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: GlobalSize(10),
        //height:DEFAULTHEIGHT*0.2
    },
    riskText: {
        fontSize: fontSize(10),
        color: PUREWHITE,
        fontFamily: FONTS.FontMedium
    },
    riskView: {
        width: DEFAULTWIDTH * 0.2,
        padding: GlobalSize(5),
        backgroundColor: NINETHCOLOR,
        borderRadius: GlobalSize(3),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: GlobalSize(10),
        // position:'absolute',
        //bottom:10
    },
    // imgView: {
    //     borderBottomLeftRadius: GlobalSize(8),
    //     borderTopLeftRadius: GlobalSize(8),
    //     overflow: 'hidden',
    //     width:GlobalSize(20),
    //     height:GlobalSize(20)
    // },
    imgBack: {
        width: GlobalSize(48),
        height: GlobalSize(48),
        alignItems: 'center',
        justifyContent: 'center'
    }
})