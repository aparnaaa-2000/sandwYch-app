import React from 'react';
import { View, StyleSheet, TouchableOpacity,Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Previous from '../../../../Components/CarePartner/Resources/Previous';
import Inprocess from '../../../../Components/CarePartner/Resources/Inprocess';
import { FONTS } from '../../../../Constants/Fonts';
import { BACKGROUNDWHITE, PRIMARYCOLOR, PUREWHITE, TEXTCOLOR10} from '../../../../Constants/Colors/Colors';
import ResourceHeader from '../../../../Components/Common/Headers/ResourceHeader';
import { DEFAULTWIDTH } from '../../../../Constants/styles/styles';
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts';

const Tab = createMaterialTopTabNavigator();

function InPrevResources({navigation}) {
    return (
        <View style={styles.container}>
         <ResourceHeader navigation={navigation} title={'Resources'}/>
            <Tab.Navigator
                tabBarOptions={{

                    activeTintColor:PRIMARYCOLOR, // Set the active tab text color
                    labelStyle: {
                        fontSize: fontSize(14),
                        textTransform: 'Capitalize',
                        fontFamily: FONTS.FontMedium,
                        fontWeight: '500',
                    },
                    style: {
                        backgroundColor: BACKGROUNDWHITE, // Set the background color here
                    },

                    indicatorStyle: { backgroundColor: PRIMARYCOLOR }, // Optional: Style for the indicator (the line under the active tab)
                }}
            >
                <Tab.Screen name="Inprocess" component={Inprocess} />
                <Tab.Screen name="Previous" component={Previous} />
            </Tab.Navigator>

            <View style={styles.buttonView}>
                <TouchableOpacity 
                style={styles.touchBtn}
                onPress={()=>navigation.navigate('SelectResource')}>
                    <Text style={styles.textBtn}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: BACKGROUNDWHITE,
        flex: 1,
    },
    textBtn: {
        fontSize: fontSize(24),
        color: PUREWHITE,
        fontFamily: FONTS.FontLight,
    },
    touchBtn: {
        marginBottom: DEFAULTWIDTH * 0.05,
        width: DEFAULTWIDTH * 0.12,
        height: DEFAULTWIDTH * 0.12,
        backgroundColor: PRIMARYCOLOR,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginLeft: GlobalSize(10),
        marginRight: GlobalSize(10),
    },
    buttonView:{
        alignItems:'flex-end',
        justifyContent:'flex-end',
        right:GlobalSize(10),
        position:'absolute',
        bottom:0
    }
})
export default InPrevResources;