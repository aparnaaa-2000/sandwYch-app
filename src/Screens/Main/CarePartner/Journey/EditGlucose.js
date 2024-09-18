import React, { useState } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, View, ScrollView, Keyboard } from 'react-native'
import DEFAULTSTYLES, { DEFAULTWIDTH } from '../../../../Constants/styles/styles'
import { BACKGROUNDWHITE, BORDERCOLORW, PUREWHITE, TEXTCOLORW, SECONDARYCOLOR } from '../../../../Constants/Colors/Colors'
import { FONTS } from '../../../../Constants/Fonts'
import StatsTextInput from '../../../../Components/CarePartner/PatientJourney/StatsTextInput'
import SubHeader from '../../../../Components/Common/Headers/SubHeader'
import EditButton from '../../../../Components/Common/Buttons/EditButton'
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts'


const EditGlucose = ({ navigation }) => {

    const Data = [
        {
            id: 1,
            weight: '78 mg/dl',
            CreatedAt: '28/01/2024'
        },
        {
            id: 1,
            weight: '72 mg/dl',
            CreatedAt: '10/01/2024'
        },
        {
            id: 1,
            weight: '74 mg/dl',
            CreatedAt: '22/12/2023'
        },
        {
            id: 1,
            weight: '86 mg/dl',
            CreatedAt: '04/12/2023'
        },
    ]

    const Unit = [
        {
            id: 1,
            unit: 'mg/dL'
        },
        {
            id: 2,
            unit: 'mmol/L'
        }
    ]

    const [inputGlucose, setInputGlucose] = useState(null)
    const [selectUnit, setSelectUnit] = useState(1)
    const [UnitName, setUnitName] = useState(null)

    const SelectUnit = (UnitName, ItemId) => {
        Keyboard.dismiss()
        setSelectUnit(ItemId)
        setUnitName(UnitName)
        if (UnitName == 'mg/dL' && inputGlucose) {
            setInputGlucose(mmolToMg())
        } else if (UnitName == 'mmol/L' && inputGlucose) {
            setInputGlucose(mgToMmol())
        }
    }

    //EDIT GLUCOSE VALIDATION
    const handleEditChange = (text) => {
        setInputGlucose(text);
    };

    // Convert mg/dL to mmol/L
    const mgToMmol = () => {
        return (inputGlucose / 18.01559).toFixed(2); // 1 mg/dL = 0.0555 mmol/L
    };

    // Convert mmol/L to mg/dL
    const mmolToMg = () => {
        return (inputGlucose * 18.01559).toFixed(2); // 1 mmol/L = 18.01559 mg/dL
    };

    return (

        <SafeAreaView style={DEFAULTSTYLES.AndroidSafeArea}>
            <StatusBar backgroundColor={BACKGROUNDWHITE} barStyle={'dark-content'} style={{ flex: 0 }} />

            <ScrollView keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false}>
                <SubHeader
                    title={'Blood Glucose'}
                    navigation={navigation} />

                <StatsTextInput
                    Data={Data}
                    value={inputGlucose}
                    placeholder={'Add blood glucose'}
                    Unit={'mg/dl'}
                    UnitData={Unit}
                    selectUnit={selectUnit}
                    setSelectUnit={setSelectUnit}
                    SelectUnit={SelectUnit}
                    UnitName={UnitName}
                    setUnitName={setUnitName}
                    onChangeText={(text) => handleEditChange(text)}
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
    },

})

export default EditGlucose;