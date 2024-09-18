import React, { useState } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, View, ScrollView, } from 'react-native'
import DEFAULTSTYLES, { DEFAULTWIDTH } from '../../../../Constants/styles/styles'
import { BACKGROUNDWHITE, BORDERCOLORW, PUREWHITE, TEXTCOLORW, SECONDARYCOLOR } from '../../../../Constants/Colors/Colors'
import { FONTS } from '../../../../Constants/Fonts'
import StatsTextInput from '../../../../Components/CarePartner/PatientJourney/StatsTextInput'
import SubHeader from '../../../../Components/Common/Headers/SubHeader'
import EditButton from '../../../../Components/Common/Buttons/EditButton'
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts'


const EditBloodPressure = ({navigation}) => {

    const Data = [
        {
            id: 1,
            weight: '78 mm Hg',
            CreatedAt: '28/01/2024'
        },
        {
            id: 1,
            weight: '72 mm Hg',
            CreatedAt: '10/01/2024'
        },
        {
            id: 1,
            weight: '74 mm Hg',
            CreatedAt: '22/12/2023'
        },
        {
            id: 1,
            weight: '86 mm Hg',
            CreatedAt: '04/12/2023'
        },
    ]
    const [Weight, setWeight] = useState('')

    return (
        <SafeAreaView style={DEFAULTSTYLES.AndroidSafeArea}>
            <StatusBar backgroundColor={BACKGROUNDWHITE} barStyle={'dark-content'} style={{ flex: 0 }} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <SubHeader 
                title={'Blood Pressure'}
                navigation={navigation} />

                <StatsTextInput
                    Data={Data}
                    value={Weight}
                    placeholder={'Add blood pressure'}
                    Unit={'mm Hg'}
                    onChangeText={(text) => setWeight(text)}
                />

            </ScrollView>

            <View style={styles.buttonContainer}>
                <EditButton navigation={navigation} />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUNDWHITE,
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        alignSelf: 'center',
        bottom: GlobalSize(10), 
    }
})

export default EditBloodPressure;