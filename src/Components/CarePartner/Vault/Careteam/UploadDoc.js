import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import {
  BACKGROUNDWHITE,
  BORDERCOLOR1,
  BORDERCOLOR4,
  BOTTOMTABTEXT1,
  PRIMARYCOLOR,
  PUREBLACK,
  PUREWHITE,
  TEXTCOLOR10,
  TEXTCOLOR13,
  TEXTCOLOR7
} from '../../../../Constants/Colors/Colors'
import DEFAULTSTYLES, { DEFAULTHEIGHT, DEFAULTWIDTH } from '../../../../Constants/styles/styles'
import ResourceHeader from '../../../Common/Headers/ResourceHeader'
import { FONTS } from '../../../../Constants/Fonts'
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts'
import { Dropdown } from 'react-native-element-dropdown';
import DocumentPicker from 'react-native-document-picker';
import { BlueAttach } from '../../../../../assets'

const UploadDoc = ({ route, navigation }) => {

  const [files, setFiles] = useState([
    { label: 'Medical Power of Attorney', value: 'Medical Power of Attorney' },
    { label: 'DNR', value: 'DNR' },
    { label: 'Out of Hospital DNR', value: 'Out of Hospital DNR' },
    { label: 'Careplan', value: 'Careplan' },
    { label: 'Office visit', value: 'Office visit' },
    { label: 'Hospital visit', value: 'Hospital visit' }
  ]);

  const [filesValue, setFilesValues] = useState(null)
  const [PdfFile, setPDFfile] = useState(null)

  const selectDocFile = async () => {
    //Opening Document Picker for selection of file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      setPDFfile(res[0].name)

    } catch (err) {

    }
  };

  const SaveTask = () => { //To create a task
    const TasksList = {
      id: route.params.Task?.length + 1,

      DateFilter: route?.params?.selectedDate?.toDateString()
    }
    route.params.setTask([...route.params.Task, TasksList])
    navigation.navigate('TaskList')
  }

  const onSubmitDoc = () => {
    if (filesValue && PdfFile) {
      navigation.goBack()
    } else {

    }
  }
  return (
    <SafeAreaView style={DEFAULTSTYLES.AndroidSafeArea}>
      <StatusBar
        backgroundColor={BACKGROUNDWHITE}
        barStyle={'dark-content'}
        style={{ flex: 0 }} />

      <ResourceHeader navigation={navigation} title={'Upload documents'} />

      <View style={{ paddingLeft: GlobalSize(20) }}>
        <Text style={styles.textDoc}>What type of PDF you want to upload ?</Text>

        <View style={styles.mainView}>
          <Dropdown
            style={styles.textIn}
            placeholderStyle={styles.placeholderS}
            itemTextStyle={styles.textArea}
            selectedTextStyle={styles.textArea}
            containerStyle={styles.dropView}
            data={files}
            search={false}
            labelField="label"
            valueField="value"
            placeholder={'Select'}
            value={filesValue}
            showsVerticalScrollIndicator={false}
            onChange={item => {
              setFilesValues(item.value)
            }}
          />
        </View>

        <View style={styles.borderLine}>
          <View style={DEFAULTSTYLES.alignView}>

            <BlueAttach
              width={GlobalSize(50)}
              height={GlobalSize(50)}
              opacity={0.1} />
            <Text style={styles.pdftext}>{PdfFile ? PdfFile : 'Upload your document'}</Text>
          </View>

          <TouchableOpacity
            style={[styles.touchBtn,
            {
              backgroundColor: filesValue ?
                PUREBLACK :
                BORDERCOLOR4
            }]} onPress={() => filesValue ? selectDocFile() : console.log("hh")}>
            <Text style={styles.textBtn}>BROWSE FILES</Text>
          </TouchableOpacity>
        </View>

      </View>

      <View style={styles.submitBtn}>
        <TouchableOpacity style={[styles.submitTouch,{opacity:filesValue&&PdfFile ? 1:0.5}]} 
        onPress={() => onSubmitDoc()}>
          <Text style={styles.textBtn}>Submit</Text>
        </TouchableOpacity>
      </View>


    </SafeAreaView>
  )
}

export default UploadDoc

const styles = StyleSheet.create({
  textDoc: {
    fontFamily: FONTS.FontRegular,
    color: TEXTCOLOR10,
    fontSize: fontSize(14)
  },
  dropView: {
    borderRadius: 8,
    borderColor: BORDERCOLOR4,
    width: DEFAULTWIDTH * 0.88,
    color: TEXTCOLOR10,

  },
  mainView: {
    marginTop: GlobalSize(10),
    marginBottom: GlobalSize(10),
  },
  textIn: {
    backgroundColor: BACKGROUNDWHITE,
    width: DEFAULTWIDTH * 0.88,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: BORDERCOLOR1,
    paddingLeft: GlobalSize(15),
    padding: GlobalSize(5),
    color: TEXTCOLOR7,
  },
  textArea: {
    fontSize: fontSize(14),
    fontFamily: FONTS.FontRegular,
    fontWeight: '400',
    color: TEXTCOLOR10,
  },
  placeholderS: {
    fontSize: fontSize(14),
    fontFamily: FONTS.FontRegular,
    color: BOTTOMTABTEXT1,
  },
  textBtn: {
    fontSize: fontSize(14),
    color: PUREWHITE,
    fontFamily: FONTS.FontMedium,
    textAlign: 'center',
  },
  touchBtn: {
    marginBottom: GlobalSize(10),
    width: DEFAULTWIDTH * 0.38,
    height: DEFAULTHEIGHT * 0.06,
    backgroundColor: BORDERCOLOR4,
    alignItems: 'center',
    justifyContent: 'center',
    padding: GlobalSize(5),
    marginLeft: GlobalSize(10),
    marginRight: GlobalSize(10),
    borderRadius: 4,
    marginTop: GlobalSize(10)
  },
  pdftext: {
    fontFamily: FONTS.FontMedium,
    color: TEXTCOLOR13,
    fontSize: fontSize(14),
    padding: GlobalSize(8)
  },
  submitBtn: {
    alignItems: 'center',
    position: 'absolute',
    bottom: GlobalSize(10),
    justifyContent: 'center',
    left: 0,
    right: 0
  },
  submitTouch: {
    marginBottom: GlobalSize(10),
    width: DEFAULTWIDTH * 0.88,
    height: DEFAULTHEIGHT * 0.06,
    backgroundColor: PRIMARYCOLOR,
    alignItems: 'center',
    justifyContent: 'center',
    padding: GlobalSize(5),
    marginLeft: GlobalSize(10),
    marginRight: GlobalSize(10),
    borderRadius: GlobalSize(4),
    marginTop: GlobalSize(10)
  },
  borderLine: {
    borderWidth: 1,
    borderColor: BORDERCOLOR1,
    width: DEFAULTWIDTH * 0.88,
    borderRadius: GlobalSize(10),
    alignItems: 'center',
    justifyContent: 'center',
    padding: GlobalSize(20)
  }
})