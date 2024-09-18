import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TimePickerAndroid,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { DEFAULTHEIGHT, DEFAULTWIDTH } from '../../../../Constants/styles/styles';
import {
  BORDERCOLOR4,
  GREYBACKGROUND1,
  PRIMARYCOLOR,
  PUREBLACK,
  PUREWHITE,
  SECONDARYCOLOR,
  TEXTCOLOR10,
  TEXTCOLOR8,
  VALIDCOLOR,
} from '../../../../Constants/Colors/Colors';
import { FONTS } from '../../../../Constants/Fonts';
import CustomTimePicker from '../../../Common/TimePicker/CustomTimePicker';
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts';
import moment from 'moment';

const RadioButtonGroup = ({ onClose, onSave }) => {

  const [selectedOption, setSelectedOption] = useState(null);
  const [reason, setReason] = useState(null);
  const [otherTime, setOtherTime] = useState('');
  const [reasonStatus, setReasonStatus] = useState(true)
  const [PickerOpen, setPickerOpen] = useState(false)


  const handleOptionChange = option => {
    setSelectedOption(option);
  };

  const handleReasonChange = text => {
    const isValidReason = /^[A-Za-z .,()\s]{2,}$/.test(text);
    setReasonStatus(isValidReason)
    setReason(text);
  };

  const onSubmitData = () => {
    if (selectedOption == 'Not Given' && reason || selectedOption !== 'Not Given' && selectedOption !== null) {
      onClose()
      // console.log("date change.......................", moment(date).format('MMMM D, YYYY h:mm A'))
      setSelectedOption(null)
      setReason(null)
    } else {

    }
  }



  return (
    <View style={styles.container}>

      <View style={{ marginBottom: DEFAULTHEIGHT * 0.1 }}>
        <View style={styles.radioBtnContainer}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => handleOptionChange('Not Given')}
              style={[styles.radioButtonStyle, { borderColor: selectedOption == 'Not Given' ? PRIMARYCOLOR : BORDERCOLOR4 }]}>
              {selectedOption === 'Not Given' && (
                <View style={styles.radioButtonSelected} />
              )}
            </TouchableOpacity>
            <Text style={styles.radioBtnText}>Skipped</Text>
          </View>
        </View>

        {selectedOption == 'Not Given' && (
          <View style={[styles.input, { borderColor: reasonStatus ? BORDERCOLOR4 : VALIDCOLOR }]}>
            <TextInput
              placeholder="Enter reason"
              placeholderTextColor={BORDERCOLOR4}
              value={reason}
              multiline={true}
              // numberOfLines={4} // Adjust the number of lines according to your layout
              onChangeText={handleReasonChange}
              style={styles.textIns}
            />
          </View>
        )}
        {!reasonStatus &&
          <View style={{ marginBottom: GlobalSize(10), marginLeft: GlobalSize(20) }}>
            <Text style={{ color: VALIDCOLOR }}>Please enter your reason</Text>
          </View>}

        <View style={styles.radioBtnContainer}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => handleOptionChange('On Time')}
              style={[styles.radioButtonStyle, { borderColor: selectedOption == 'On Time' ? PRIMARYCOLOR : BORDERCOLOR4 }]}>
              {selectedOption === 'On Time' && (
                <View style={styles.radioButtonSelected} />
              )}
            </TouchableOpacity>
            <Text style={styles.radioBtnText}>On Time</Text>
          </View>
        </View>

        <View style={styles.radioBtnContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => handleOptionChange('Just Now')}
              style={[styles.radioButtonStyle, { borderColor: selectedOption == 'Just Now' ? PRIMARYCOLOR : BORDERCOLOR4 }]}>
              {selectedOption === 'Just Now' && (
                <View style={styles.radioButtonSelected} />
              )}
            </TouchableOpacity>
            <Text style={styles.radioBtnText}>Just Now</Text>
          </View>
        </View>

        <View style={styles.radioBtnContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => handleOptionChange('Other than above')}
              style={[styles.radioButtonStyle, { borderColor: selectedOption == 'Other than above' ? PRIMARYCOLOR : BORDERCOLOR4 }]}>
              {selectedOption === 'Other than above' && (
                <View style={styles.radioButtonSelected} />
              )}
            </TouchableOpacity>
            <Text style={styles.radioBtnText}>Other than above</Text>
          </View>
        </View>


        {selectedOption === 'Other than above' && (
          // 
          // Generate a custom Datepicker here similar to the ios alarm time picker -
          // Wheel modal to scroll hours and minutes
          // Should be done on custom component / service step.
          // Component is already generated, <CustomTimePicker /> do the codng there
          <CustomTimePicker />

        )}
      </View>
      <TouchableOpacity
        onPress={onSubmitData}
        style={[styles.btnView,
        {
          opacity: selectedOption == 'Not Given' &&
            reason || selectedOption !== 'Not Given' && selectedOption !== null ? 1 : 0.5
        }]}>
        <Text
          style={styles.btnText}>
          SAVE
        </Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  input: {
    borderWidth: 1,
    height: DEFAULTHEIGHT * 0.1,
    width: DEFAULTWIDTH * 0.80,
    borderColor: BORDERCOLOR4,
    backgroundColor: GREYBACKGROUND1,
    borderRadius: GlobalSize(10),
    paddingLeft: GlobalSize(10),
    marginLeft: GlobalSize(18),
    marginBottom: DEFAULTHEIGHT * 0.01
  },
  timePickerButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: GlobalSize(5),
    padding: GlobalSize(5),
    marginTop: GlobalSize(5),
  },
  textIns: {
    fontFamily: FONTS.FontRegular,
    fontSize: fontSize(12),
    color: TEXTCOLOR10,
  },
  radioButtonStyle: {
    backgroundColor: PUREWHITE,
    borderColor: BORDERCOLOR4,
    borderWidth: 1,
    width:GlobalSize(18),
    height:GlobalSize(18),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: GlobalSize(15),
    marginRight: DEFAULTWIDTH * 0.03,
  },
  radioButtonSelected: {
    backgroundColor: PRIMARYCOLOR,
    width:GlobalSize(9),
    height:GlobalSize(9),
    borderRadius: GlobalSize(9),
    alignItems:'center',
    justifyContent:'center'
  },

  radioBtnContainer: {
    width: DEFAULTWIDTH * 0.8,
    marginBottom: DEFAULTHEIGHT * 0.02,
    justifyContent: 'center',
  },
  radioBtnText: {
    fontFamily: FONTS.FontRegular,
    fontSize: fontSize(14),
    color: TEXTCOLOR8,
  },

  btnText: {
    color: PUREWHITE,
    fontFamily: FONTS.FontBold,
    fontSize: fontSize(14),
  },
  pickView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  btnView: {
    alignItems: 'center',
    backgroundColor: PRIMARYCOLOR,
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    bottom: GlobalSize(15),
    width: DEFAULTWIDTH * 0.88,
    height: DEFAULTHEIGHT * 0.06,
    borderRadius: GlobalSize(4),

  }
});

export default RadioButtonGroup;
