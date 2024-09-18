import React, { useState } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, View, ScrollView, Keyboard } from 'react-native'
import DEFAULTSTYLES, { DEFAULTWIDTH } from '../../../../Constants/styles/styles'
import { BACKGROUNDWHITE, BORDERCOLORW, PUREWHITE, TEXTCOLORW, SECONDARYCOLOR } from '../../../../Constants/Colors/Colors'
import { FONTS } from '../../../../Constants/Fonts'
import StatsTextInput from '../../../../Components/CarePartner/PatientJourney/StatsTextInput'
import SubHeader from '../../../../Components/Common/Headers/SubHeader'
import EditButton from '../../../../Components/Common/Buttons/EditButton'
import { GlobalSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts'


const EditWeight = ({ navigation }) => {

    const [Weight, setWeight] = useState(null)
    const [inputWeight, setInputWeight] = useState(null)
    const [selectUnit, setSelectUnit] = useState(1)
    const [UnitName, setUnitName] = useState(null)

    const Data = [
        {
            id: 1,
            weight: '78 Kg',
            CreatedAt: '28/01/2024'
        },
        {
            id: 1,
            weight: '72 Kg',
            CreatedAt: '10/01/2024'
        },
        {
            id: 1,
            weight: '74 Kg',
            CreatedAt: '22/12/2023'
        },
        {
            id: 1,
            weight: '86 Kg',
            CreatedAt: '04/12/2023'
        },
    ]

    const Unit = [
        {
            id: 1,
            unit: 'lb'
        },
        {
            id: 2,
            unit: 'kg'
        }
    ]

    const SelectUnit = (UnitName, ItemId) => {
        Keyboard.dismiss()
        setSelectUnit(ItemId)
        setUnitName(UnitName)
        if (UnitName == 'lb' && inputWeight) {
            handleKgToLb()
        } else if (UnitName == 'kg' && inputWeight) {
            handleLbToKg()
        }
    }


    //EDIT WEIGHT VALIDATION
    const handleEditChange = (text) => {
        setInputWeight(text);
        setWeight(text);
    };

    // Function to convert kilograms to pounds
    const kgToLb = (kgValue) => {
        return kgValue * 2.20462;
    };

    // Function to convert pounds to kilograms
    const lbToKg = (lbValue) => {
        return lbValue / 2.20462;
    };

    // Event handler for converting kg to lb
    const handleKgToLb = () => {
        const result = kgToLb(parseFloat(inputWeight));
        setInputWeight(result.toFixed(0));
    };

    // Event handler for converting lb to kg
    const handleLbToKg = () => {
        console.log("lbtokg.............",inputWeight)
        const result = lbToKg(parseFloat(inputWeight));
        setInputWeight(result.toFixed(0))
    };

    return (
        <SafeAreaView style={DEFAULTSTYLES.AndroidSafeArea}>
            <StatusBar backgroundColor={BACKGROUNDWHITE} barStyle={'dark-content'} style={{ flex: 0 }} />

            <ScrollView keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false}>
                <SubHeader
                    title={'Weight'}
                    navigation={navigation} />

                <StatsTextInput
                    Data={Data}
                    value={inputWeight}
                    UnitData={Unit}
                    placeholder={'Add Weight'}
                    Unit={'kg'}
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
        bottom: GlobalSize(10), // Adjust as needed
    }
})

export default EditWeight;