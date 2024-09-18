import React, { useState } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, View, ScrollView, Keyboard } from 'react-native'
import DEFAULTSTYLES, { DEFAULTWIDTH } from '../../../../Constants/styles/styles'
import { BACKGROUNDWHITE, BORDERCOLORW, PUREWHITE, TEXTCOLORW, SECONDARYCOLOR } from '../../../../Constants/Colors/Colors'
import { FONTS } from '../../../../Constants/Fonts'
import StatsTextInput from '../../../../Components/CarePartner/PatientJourney/StatsTextInput'
import SubHeader from '../../../../Components/Common/Headers/SubHeader'
import EditButton from '../../../../Components/Common/Buttons/EditButton'
import { GlobalSize, fontSize, height } from '../../../../Constants/ResponsiveFont/ResponsiveFonts'


const EditHeight = ({ navigation }) => {

    const [Height, setHeight] = useState(null)
    const [inputHeight, setInputHeight] = useState(null)
    const [selectUnit, setSelectUnit] = useState(1)
    const [UnitName, setUnitName] = useState(null)

    const SelectUnit = (UnitName, ItemId) => {
        Keyboard.dismiss()
        console.log("input weight.....................",inputHeight)
        setSelectUnit(ItemId)
        setUnitName(UnitName)
        if (UnitName == 'ft' && inputHeight) {
            convertCmToFt()
        } else if (UnitName == 'cm' && inputHeight) {
            convertFtToCm()
        }
    }

    // Function to convert centimeters to feet
    const convertCmToFt = () => {
        const cmValue = parseFloat(Height ? Height : inputHeight);
        const ftValue = cmValue / 30.48; // 1 foot = 30.48 cm
        setHeight(ftValue.toFixed(0)); // Round to 2 decimal places

    };

    // Function to convert feet to centimeters
    const convertFtToCm = () => {
        const ftValue = parseFloat(Height ? Height : inputHeight);
        const cmValue = ftValue * 30.48; // 1 foot = 30.48 cm
        setHeight(cmValue.toFixed(0)); // Round to 2 decimal places
        console.log("cm value......................", inputHeight)
    };

    const Data = [
        {
            id: 1,
            weight: '5.3 ft',
            CreatedAt: '28/01/2024'
        }
    ]

    const Unit = [
        {
            id: 1,
            unit: 'cm'
        },
        {
            id: 2,
            unit: 'ft'
        }
    ]


    //EDIT HEIGHT VALIDATION
    const handleEditChange = (text) => {
        setInputHeight(text);
        setHeight(text);
    };

    return (
        <SafeAreaView style={DEFAULTSTYLES.AndroidSafeArea}>
            <StatusBar
                backgroundColor={BACKGROUNDWHITE}
                barStyle={'dark-content'}
                style={{ flex: 0 }} />

            <ScrollView keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false} >
                <SubHeader
                    title={'Height'}
                    navigation={navigation} />

                <StatsTextInput
                    UnitData={Unit}
                    Data={Data}
                    value={Height}
                    placeholder={'Add Height'}
                    Unit={'ft'}
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

export default EditHeight;