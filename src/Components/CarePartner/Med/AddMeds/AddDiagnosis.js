import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View, Dimensions, TextInput,BackHandler, FlatList } from "react-native";
import { BORDERCOLOR4, PRIMARYCOLOR, PUREWHITE, TEXTCOLOR10, TEXTCOLOR7,PLACEHOLDERCOLOR1,PLACEHOLDERCOLOR3,VALIDCOLOR ,SECONDARYCOLOR,BORDERCOLOR1,  BACKGROUNDWHITE,  THIRDCOLOR,} from "../../../../Constants/Colors/Colors";
// import DEFAULTSTYLES  from '../../../Constants/styles/styles';
import { FONTS } from "../../../../Constants/Fonts";
import ImagePicker from 'react-native-image-crop-picker';
import { DEFAULTWIDTH ,DEFAULTSTYLES} from "../../../../Constants/styles/styles";
import { Close } from "../../../../../assets";
import { GlobalSize, fontSize } from "../../../../Constants/ResponsiveFont/ResponsiveFonts";
// import { TextInput } from "react-native-gesture-handler";
// import { SearchBar } from 'react-native-elements';
// import { Picker } from '@react-native-picker/picker';
// import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { GetMedicineList } from "../../../../redux/Thunk/Medication/MedicationThunk";
import { CalenderLine } from "../../../../../assets";
// import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useEffect } from "react";


const AddDiagnosis= ({}) =>{
    const [startDate, setStartDate] = useState(null);
    const [isStartPickerVisible, setStartPickerVisibility] = useState(false);
    const [StartStatus, setStartStatus] = useState(true);
    const [NewDate, setNewDate] = useState(new Date());
    const dispatch = useDispatch();
    const [brandStatus, setBrandStatus] = useState(true)
    const [ScientificStatus, setScientificStatus] = useState(true)
    const [query, setQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [UserData, setUserData] = useState()


    useEffect(() => {
        getData().then(data => setUserData(data));
    }, []);

    const getData = async () => {
        try {
            const patientData = await AsyncStorage.getItem('PatientData');
            console.log('userdata-->',UserData.patientData);
            // return JSON.parse(patientData);
            return patientData != null ? JSON.parse(patientData) : null
        } catch (e) {
            console.error('Error retrieving data:', e);
        }   
    };
    


    
    

    const { MedicineListData } = useSelector(
        state => ({
            MedicineListData: state.MedicineNameList.data,
        }),
        shallowEqual
    );

    const handleSearch = (query) => {
        GetMedicineList(query,dispatch)
        setQuery(query);
        console.log("Name data",MedicineListData?.Items)
          const filteredData = MedicineListData?.Items?.filter((item) =>
            item?.RoutedGenericDesc?.toLowerCase()?.includes(query?.toLowerCase())
          );
          console.log("FILTER DATA",filteredData)
         setFilteredItems(filteredData);
        };

        const handleSelectItem = (item) => {
            console.log("ITEM............",item?.GenericStrength)
              setQuery(item?.RoutedGenericDesc);
            //   setValueDos(item?.GenericStrength)
              setFilteredItems([]);
            };


    const showStartDatePicker = () => {
        setStartPickerVisibility(true);
    };

    const hideStartDatePicker = () => {
        setStartPickerVisibility(false);
    };

    const handleStartDateConfirm = (date) => {
        const formattedDate = moment(date).format('YYYY-MM-DD');
        setStartDate(formattedDate);
        hideStartDatePicker();
    };
    const hideDatePicker = () => {
        setStartPickerVisibility(false);
        setStartStatus(true);
    };

    const handleConfirm = (date) => {
        const ConvertDate = moment(date).format('YYYY-MM-DD');
        setStartDate(ConvertDate);
        hideDatePicker();
    };
    const renderItem = ({ item }) => {
        if (item && item.someProperty) {
          return <Text>{item.someProperty.toString()}</Text>;
        }
        return <Text>Property is missing</Text>;
      };
      

  return (
 <Modal animationType="fade"
 transparent={true}
 visible={true}

 >
 

        
    <View style={styles.mainContainer} >
        <View style={styles.viewMain}>

            <View style={styles.rowView}>
                <View style={styles.medView}>
                    <Text  style={styles.textField}>Add Diagnosis</Text>
                </View>

            </View>
            {/* <View style={{gap:5}}></View> */}

            {/* <SearchBar
        placeholder="Type Here..."
       
        value={search} /> */}
      <View style={styles.view}>
      <Text style={styles.subHeading}>Medicine Name</Text>
                        <TextInput
                        placeholder="Search here..."
                        value={query}
                        placeholderTextColor={PLACEHOLDERCOLOR1}
                        onChangeText={handleSearch}
                        style={[styles.textInput, { borderColor: brandStatus ? BORDERCOLOR4 : VALIDCOLOR,textTransform:'capitalize'}]} 
                    />
          {filteredItems?.length > 0 && (
        <View style={styles.dropdown}>
          <FlatList
            data={filteredItems}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.item}
                onPress={() => handleSelectItem(item)}
              >
                <Text style={styles.textMed}>{item?.RoutedGenericDesc}</Text>
              </TouchableOpacity>
            )}
          />
        </View>)}
     
                        <View>
                            {!ScientificStatus && (
                                <Text style={{ color: VALIDCOLOR }}>Medicine name is required</Text>
                            )}
                        </View>

                       
       </View>
      

            <View style={{ alignItems: 'center', justifyContent: 'center',gap:5 }}>
                {/* <TouchableOpacity style={styles.btnView} >
                    <Text style={styles.textBtn}>Diagnosis Name</Text>
                </TouchableOpacity> */}
                <View>             
 <Text style={{color:"black"}}>Physician Name</Text>
 <TextInput
        style={styles.textInput}
        placeholder="Enter text here"/>
 </View>
         {/* <View> 
           
                <TouchableOpacity style={styles.btnManual} >
                    <Text style={[styles.textBtn, { color: TEXTCOLOR7 }]}>Add Physician</Text>
                </TouchableOpacity>
                </View> */}
       <View style={styles.container}>
                    <View style={DEFAULTSTYLES}>
                        <Text style={styles.textField}>Start Date</Text>

                        <View style={[DEFAULTSTYLES, { marginBottom: GlobalSize(10) }]}>
                            <View style={[styles.dateView, {
                                flexDirection: 'row',
                                borderColor: StartStatus ? BORDERCOLOR4 : VALIDCOLOR,
                            }]}>
                            
                                <Text style={styles.dateText}>{startDate ? startDate : moment(NewDate).format('YYYY-MM-DD')}</Text>
                                <View style={DEFAULTSTYLES}>
                                    <TouchableOpacity onPress={() => setStartPickerVisibility(true)}
                                        style={{ padding: 5 }}>
                                        <CalenderLine />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View>
                            {!StartStatus && (
                                <Text style={{ color: VALIDCOLOR }}>Start Date is required</Text>
                            )}
                        </View>
                    </View>

                    <DateTimePickerModal
                        isVisible={isStartPickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </View>
                    <View>             
 <Text style={{color:'black'}}>Note</Text>
 <TextInput
        style={styles.note}
        placeholder="Enter text here"/>
 </View>

               <TouchableOpacity style={styles.btnView} onPress={getData}>
                <Text >
                   SUBMIT

                </Text>
                </TouchableOpacity> 

               
               
            </View>
        </View>
    </View>
    

 </Modal>

  )
}
const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#000000aa",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    view:{
        paddingLeft:10,
    },
    dropdown:{
        color:'black'
    },
    note:{
        width: DEFAULTWIDTH * 0.88,
        height: DEFAULTWIDTH * 0.25,
        borderColor: BORDERCOLOR1,
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 8,
        borderRadius: 5,
      
        color:'black'
    },
    subHeading:{
        fontFamily: FONTS.FontMedium,
        fontWeight: '600',
        fontSize: GlobalSize(14),
        color: SECONDARYCOLOR,
        left: 2
    },
    touchableStyle: {
        flex: 1,
        height: Dimensions.get('window').height,
    },
    centeredView2: {
        justifyContent: "flex-end",
    },
    viewMain: {
        width: DEFAULTWIDTH * 0.92,
        borderRadius: GlobalSize(10),
        paddingTop: DEFAULTWIDTH * 0.05,
        backgroundColor: PUREWHITE,
        paddingBottom: GlobalSize(5),
        
    },
    medView: {
        marginLeft: DEFAULTWIDTH * 0.05,
    },
    textAddMed: {
        color: TEXTCOLOR10,
        fontFamily: FONTS.FontMedium,
        fontWeight: '500',
        fontSize: fontSize(18)
    },
    textSub: {
        fontSize: fontSize(14),
        fontFamily: FONTS.FontRegular,
        fontWeight: '400',
        color: TEXTCOLOR7,
        marginTop: GlobalSize(10),
    },
    rowView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: GlobalSize(15)
    },
    btnView: {
        width: DEFAULTWIDTH * 0.80,
        height: DEFAULTWIDTH * 0.125,
        backgroundColor: PRIMARYCOLOR,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: GlobalSize(8),
        marginBottom: DEFAULTWIDTH * 0.04,
        
    },
    btnManual: {
        // width: DEFAULTWIDTH * 0.80,
        height: DEFAULTWIDTH * 0.125,
        backgroundColor: PUREWHITE,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: GlobalSize(8),
        borderWidth: 1,
        borderColor: BORDERCOLOR4,
        // marginBottom: DEFAULTWIDTH * 0.04
    },
    textBtn: {
        fontSize: fontSize(16),
        color: PUREWHITE,
        fontWeight: '500',
        fontFamily: FONTS.FontMedium,
        textAlign: 'center',
    },
    viewSub: {
        marginHorizontal: GlobalSize(18),
        // marginBottom: DEFAULTWIDTH * 0.05
    },
    textInput: {
        // height: 40,
        borderColor: BORDERCOLOR1,
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 8,
        borderRadius: 5,
        width: DEFAULTWIDTH * 0.88,
        height: DEFAULTWIDTH * 0.15,
        color:'black'
      },
      textInput2:{
        width: DEFAULTWIDTH * 0.88,
        height: DEFAULTWIDTH * 0.28,
        borderColor: 'black',
        borderWidth: 1,
        paddingLeft: 8,
        borderRadius: 5,
        color:'black'

      },
      textInputSearch:{
        borderColor: BORDERCOLOR1,
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 8,
        borderRadius: 5,
        width: DEFAULTWIDTH * 0.88,
        height: DEFAULTWIDTH * 0.15,
        color:'black'

      },
      rowDate:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginRight: GlobalSize(22) 
    },
    radioIcon: {
        marginLeft: GlobalSize(10),
        width: GlobalSize(20),
        height: GlobalSize(20),
        borderRadius: GlobalSize(10),
        borderWidth: 2,
        borderColor: BORDERCOLOR4,
        marginRight: GlobalSize(8),
        backgroundColor: PUREWHITE
    },
    radioIconSelected: {
        backgroundColor: PUREWHITE,
        width: GlobalSize(20),
        height: GlobalSize(20),
        borderRadius: GlobalSize(10),
        borderColor: PRIMARYCOLOR,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    radioBorder: {
        width: GlobalSize(10),
        height: GlobalSize(10),
        borderRadius: GlobalSize(5),
        borderWidth: 2,
        borderColor: PRIMARYCOLOR,
        backgroundColor: PRIMARYCOLOR
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: GlobalSize(8),
    },
    textArea: {
        fontSize: fontSize(14),
        fontFamily: FONTS.FontRegular,
        fontWeight: '400',
        color: TEXTCOLOR10,
    },
    dropView: {
        borderRadius: GlobalSize(8),
        borderColor: BORDERCOLOR4,
        width: DEFAULTWIDTH * 0.88,
        padding: GlobalSize(5),
    },
    rowFlex: {
        flexDirection: 'row',
        marginLeft: GlobalSize(10),
        marginBottom: GlobalSize(2)
    },
    placeholderS: {
        color: BORDERCOLOR4,
        fontSize: GlobalSize(12),
        fontFamily: FONTS.FontRegular
    },
    textBtn: {
        fontSize: GlobalSize(12),
        color: PUREWHITE,
        fontWeight: '700',
        fontFamily: FONTS.FontMedium,
        textAlign: 'center',
    },
    textField: {
        fontFamily: FONTS.FontMedium,
        fontWeight: '600',
        fontSize: GlobalSize(14),
        color: SECONDARYCOLOR,
        left: 2
    },
    alignView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: DEFAULTWIDTH * 0.0,
        marginTop: DEFAULTWIDTH * 0.02
    },
    textIn: {
        fontSize: fontSize(12),
        fontFamily: FONTS.FontRegular,
        fontWeight: '400',
        color: TEXTCOLOR7,
        width: DEFAULTWIDTH * 0.88,
        height: DEFAULTWIDTH * 0.13,
        borderWidth: 1,
        borderRadius: GlobalSize(4),
        borderColor: BORDERCOLOR1,
        paddingLeft: GlobalSize(15),
        backgroundColor: BACKGROUNDWHITE,
        paddingRight: GlobalSize(10)
    },
    // dateView: {
  
    // },
    dateText: {
        fontSize: fontSize(12),
        fontFamily: FONTS.FontRegular,
        fontWeight: '400',
        color: TEXTCOLOR7,
        left: GlobalSize(-5)
    },
    textCancel: {
        fontFamily: FONTS.FontMedium,
        fontSize: fontSize(12),
        color: THIRDCOLOR,
        fontWeight: '700'
    },
    marginView: {
        marginLeft: DEFAULTWIDTH * 0.06,
        marginBottom: GlobalSize(10),
        marginTop: GlobalSize(5)
    },
    datePickerContainer: {
        marginVertical: 10,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color:'black'
    },
    datePickerButton: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '',
        borderRadius: 5,
        backgroundColor: 'blackf',
    },
 
    dateView: {
        width: DEFAULTWIDTH * 0.88,
        height: DEFAULTWIDTH * 0.13,
        borderWidth: 1,
        borderRadius: GlobalSize(4),
        borderColor: BORDERCOLOR1,
        paddingLeft: GlobalSize(15),
        alignItems: 'center',
        backgroundColor: BACKGROUNDWHITE,
        paddingRight: GlobalSize(10),
        justifyContent: 'space-between',
        marginBottom: DEFAULTWIDTH * 0.01,
        marginTop: DEFAULTWIDTH * 0.02
    },
    // dateText: {
    //     flex: 1,
    //     fontSize: 16,
    // },
   

});
export default AddDiagnosis;


