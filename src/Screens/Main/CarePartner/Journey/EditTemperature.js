import React, { useState } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, View, ScrollView, Keyboard } from 'react-native'
import DEFAULTSTYLES, { DEFAULTWIDTH } from '../../../../Constants/styles/styles'
import { BACKGROUNDWHITE, BORDERCOLORW, PUREWHITE, TEXTCOLORW, SECONDARYCOLOR } from '../../../../Constants/Colors/Colors'
import { FONTS } from '../../../../Constants/Fonts'
import StatsTextInput from '../../../../Components/CarePartner/PatientJourney/StatsTextInput'
import SubHeader from '../../../../Components/Common/Headers/SubHeader'
import EditButton from '../../../../Components/Common/Buttons/EditButton'
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts'


const EditTemperature = ({ navigation }) => {

    const [inputTemp, setInputTemp] = useState(null)
    const [selectUnit, setSelectUnit] = useState(1)
    const [UnitName, setUnitName] = useState(null)

    const Data = [
        {
            id: 1,
            weight: '38°C',
            CreatedAt: '28/01/2024'
        },
        {
            id: 1,
            weight: '35°C',
            CreatedAt: '10/01/2024'
        },
        {
            id: 1,
            weight: '37°C',
            CreatedAt: '22/12/2023'
        },
        {
            id: 1,
            weight: '36°C',
            CreatedAt: '04/12/2023'
        },
    ]

    const Unit = [
        {
            id: 1,
            unit: '°C'
        },
        {
            id: 2,
            unit: '°F'
        }
    ]


    const SelectUnit = (UnitName, ItemId) => {
        Keyboard.dismiss()
        setSelectUnit(ItemId)
        setUnitName(UnitName)
        if (UnitName == '°C' && inputTemp) {
     
            setInputTemp(fahrenheitToCelsius().toFixed(0));

        } else if (UnitName == '°F' && inputTemp) {
            
            setInputTemp(celsiusToFahrenheit().toFixed(0));
        }
    }


    // Function to convert degrees Celsius to degrees Fahrenheit
    const celsiusToFahrenheit = () => {
        return (inputTemp * 9) / 5 + 32;
    };

    // Function to convert degrees Fahrenheit to degrees Celsius
    const fahrenheitToCelsius = () => {
        return ((inputTemp - 32) * 5) / 9;
    };


    //EDIT WEIGHT VALIDATION
    const handleEditChange = (text) => {
        setInputTemp(text);
    };

    return (
        <SafeAreaView style={DEFAULTSTYLES.AndroidSafeArea}>
            <StatusBar backgroundColor={BACKGROUNDWHITE} barStyle={'dark-content'} style={{ flex: 0 }} />

            <ScrollView keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false}>
                <SubHeader
                    title={'Temperature'}
                    navigation={navigation} />

                <StatsTextInput
                    Data={Data}
                    value={inputTemp}
                    placeholder={'Add Temperature'}
                    Unit={'°C'}
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
        bottom: GlobalSize(10), // Adjust as needed
    }
})

export default EditTemperature;