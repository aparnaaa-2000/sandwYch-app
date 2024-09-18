import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import { BACKGROUNDWHITE, BORDERCOLOR2, GREYBACKGROUND1, LINECOLOR1, PLACEHOLDERCOLOR3, PUREWHITE, TEXTCOLOR7 } from '../../../../Constants/Colors/Colors';
import DEFAULTSTYLES, { DEFAULTHEIGHT, DEFAULTWIDTH } from '../../../../Constants/styles/styles';
import { ArrowF, BlackDots, LogoSmall } from '../../../../../assets';
import { FONTS } from '../../../../Constants/Fonts';
import About from '../../../../Components/Common/Profile/About';
import ProfessionalInfo from '../../../../Components/CarePartner/CarePartnerProfile/ProfessionalInfo';
import PatientList from '../../../../Components/CarePartner/CarePartnerProfile/PatientList';
import SupportList from '../../../../Components/CarePartner/CarePartnerProfile/SupportList';
import CarePartnerDetails from '../../../../Components/CarePartner/CarePartnerProfile/CarePartnerDetails';
import { GlobalSize, fontSize, height, width } from '../../../../Constants/ResponsiveFont/ResponsiveFonts';


export default function CarePartnerProfile({ navigation }) {

    const [EditProfile, setEditProfile] = useState(false)

    const JourneyItems = [
        {
            id: 1,
            Title: 'Details'
        },
        {
            id: 2,
            Title: 'Support'
        },
        {
            id: 3,
            Title: 'Patients'
        },

    ]

    const [itemState, setItemState] = useState(1)


    return (
        <SafeAreaView style={DEFAULTSTYLES.AndroidSafeArea}>
            <StatusBar backgroundColor={BACKGROUNDWHITE} barStyle={'dark-content'} style={{ flex: 0 }} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>

                    <View style={styles.flexView}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ marginRight: GlobalSize(10) }}>
                                <TouchableOpacity onPress={()=>navigation.goBack()}>
                                <ArrowF height={height(22)} width={width(22)} />
                                </TouchableOpacity>
                            </View>

                            <View>
                                <LogoSmall />
                            </View>

                        </View>

                        <View>
                        </View>


                        <View>

                            <TouchableOpacity 
                            onPress={() => setEditProfile(!EditProfile)} 
                            style={{ padding:GlobalSize(10)}}>
                                <BlackDots />
                            </TouchableOpacity>
                        </View>


                    </View>

                    {EditProfile &&
                        <View style={{ alignItems: 'flex-end', top: GlobalSize(-15) }}>
                            <TouchableOpacity 
                            onPress={()=>navigation.navigate('CarePartnerEditProfile')}
                            style={[styles.selectView, { width: DEFAULTWIDTH * 0.4 }]}>
                                <Text style={styles.textTitle}>Edit Profile</Text>
                            </TouchableOpacity>
                        </View>}
                    <View>
                        <CarePartnerDetails />
                    </View>
                    <View style={styles.tabView}>
                        <View style={styles.cardView}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                {JourneyItems?.map((item) => {
                                    return (

                                        <TouchableOpacity
                                            style={itemState == item.id ?
                                                styles.selectView :
                                                styles.unselectView}
                                            onPress={() => setItemState(item.id)}>
                                            <Text style={styles.textTitle}>{item.Title}</Text>
                                        </TouchableOpacity>

                                    )
                                })}
                            </ScrollView>
                        </View>
                    </View>

                    <View style={DEFAULTSTYLES.alignView}>
                        <View style={styles.lineView} />
                    </View>

                    {itemState == 1 ?
                        <View>
                            <View style={styles.bottomView}>

                                <About
                                    Title={'Personal Info'}
                                    Edit={false}
                                    Gender={'Female'}
                                    DOB={null}
                                />
                            </View>

                            <View style={styles.bottomView}>
                                <ProfessionalInfo />
                            </View>
                        </View> :
                        itemState == 2 ?
                            <View>
                                <SupportList navigation={navigation}/>
                            </View> :

                            <View>
                                <PatientList />
                            </View>}
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    flexView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: DEFAULTWIDTH * 0.05,
        marginRight: DEFAULTWIDTH * 0.03,
        marginBottom: DEFAULTHEIGHT * 0.02
    },
    textTitle: {
        fontFamily: FONTS.FontMedium,
        fontSize: fontSize(14),
        color: TEXTCOLOR7
    },
    cardView: {
        backgroundColor: BACKGROUNDWHITE,
        width: DEFAULTWIDTH * 0.9,
        padding: GlobalSize(5),
        borderRadius: GlobalSize(8),
        borderColor: BORDERCOLOR2,
        borderWidth: 1,
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: GREYBACKGROUND1,
        paddingLeft: DEFAULTWIDTH * 0.05,
        paddingRight: DEFAULTWIDTH * 0.05
    },
    lineView: {
        width: DEFAULTWIDTH * 0.88,
        height: 1,
        backgroundColor: LINECOLOR1,
        marginBottom: DEFAULTHEIGHT * 0.02
    },
    selectView: {
        backgroundColor: PUREWHITE,
        padding: GlobalSize(8),
        borderRadius: GlobalSize(6),
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 1,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: PLACEHOLDERCOLOR3,
        shadowOpacity: 0.3,
        marginLeft: DEFAULTWIDTH * 0.04,
        marginRight: DEFAULTWIDTH * 0.02,
        paddingLeft: GlobalSize(15),
        paddingRight: GlobalSize(15)

    },
    unselectView: {
        padding: GlobalSize(6),
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: DEFAULTWIDTH * 0.04,
        marginRight: DEFAULTWIDTH * 0.02
    },
    tabView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: DEFAULTHEIGHT * 0.02,
        paddingLeft: DEFAULTWIDTH * 0.1,
        paddingRight: DEFAULTWIDTH * 0.1
    },
    bottomView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: DEFAULTHEIGHT * 0.02
    }
})