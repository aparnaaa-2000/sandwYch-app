import React, {useState} from 'react';
import {Text, View, StyleSheet, Dimensions, Platform, ScrollView} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  BORDERCOLOR1,
  BORDERCOLOR4,
  BORDERCOLOR5,
  PUREBLACK,
  PUREWHITE,
  TEXTCOLOR10,
  TEXTCOLOR5
} from '../../../../Constants/Colors/Colors';
import {FONTS} from '../../../../Constants/Fonts';
import {Uploads} from '../../../../../assets';
import FastImage from 'react-native-fast-image';
import DEFAULTSTYLES, { DEFAULTWIDTH } from '../../../../Constants/styles/styles';
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts';

const TeamList = ({DocList,setDocList}) => {
  //To open care team

  const [openTeam, setOpenTeam] = useState(false);
  const [valueTeam, setValueTeam] = useState('Care team Documents');
  const [Team, setTeam] = useState([
    {label: 'Care team Documents', value: 'Care team Documents'},
    {label: 'Support Team', value: 'Support Team'},
    {label: 'Medical Team', value: 'Medical Team'},
    {label: 'Medical History', value: 'Medical History'},
  ]);

  return (
    <>
      <View style={styles.dropView}>
        <DropDownPicker
          style={styles.textIn}
          placeholder={''}
          open={openTeam}
          value={valueTeam}
          items={Team}
          setOpen={setOpenTeam}
          setValue={setValueTeam}
          setItems={setTeam}
          dropDownDirection="BOTTOM"
          showsVerticalScrollIndicator={false}
          dropDownContainerStyle={styles.containerStyle}
        />
      </View>

    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        {DocList.map(item => {
          return (
            <>
              {valueTeam == item.DocId &&
              item.DocId == 'Care team Documents' ? (
                <View
                  style={[
                    styles.cardView,
                    Platform.OS == 'android'
                      ? DEFAULTSTYLES.androidShadow
                      : DEFAULTSTYLES.iosShadow,
                  ]}>
                  <View>
                    <Text style={styles.textDoc}>{item.DocName}</Text>
                    <Text style={styles.textDate}>Date: 00/00/0000</Text>
                  </View>
                  {/* <Uploads /> */}
                </View>
              ) : valueTeam == item.DocId && item.DocId == 'Medical History' ? (
                <View
                  style={[
                    styles.cardView,
                    Platform.OS == 'android'
                      ? DEFAULTSTYLES.androidShadow
                      : DEFAULTSTYLES.iosShadow,
                  ]}>
                  <View>
                    <Text style={styles.textDoc}>{item.DocName}</Text>
                    <Text style={styles.textDate}>Date: 00/00/0000</Text>
                  </View>
                  {/* <Uploads /> */}
                </View>
              ) : valueTeam == item.DocId && item.DocId == 'Medical Team' ? (
                <View
                  style={[
                    styles.cardTeam,
                    Platform.OS == 'android'
                      ? DEFAULTSTYLES.androidShadow
                      : DEFAULTSTYLES.iosShadow,
                  ]}>
                  <View style={styles.profileView} />
                  <View style={{marginLeft: DEFAULTWIDTH * 0.035}}>
                    <Text style={styles.textDoc}>{item.DocName}</Text>
                    <Text style={styles.textDate}>Primary Physician</Text>
                  </View>
                </View>
              ) : valueTeam == item.DocId && item.DocId == 'Support Team' ? (
                <View
                  style={[
                    styles.cardTeam,
                    Platform.OS == 'android'
                      ? DEFAULTSTYLES.androidShadow
                      : DEFAULTSTYLES.iosShadow,
                  ]}>
                  {item.ImageUri !== null ? (
                    <FastImage
                      style={styles.imageV}
                      source={{
                        uri: item.ImageUri,
                        priority: FastImage.priority.normal,
                      }}
                      resizeMode={FastImage.resizeMode.cover}
                    />
                  ) : (
                    <View style={styles.profileView} />
                  )}
                  <View style={{marginLeft: DEFAULTWIDTH * 0.035}}>
                    <Text style={styles.textDoc}>{item.DocName}</Text>
                    <Text style={styles.textDate}>{item.Team}</Text>
                  </View>
                </View>
              ) : null}
            </>
          );
        })}
      </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  textIn: {
    fontSize: fontSize(16),
    fontFamily: FONTS.FontRegular,
    fontWeight: '400',
    color: TEXTCOLOR10,
    width: DEFAULTWIDTH * 0.9,
    height: DEFAULTWIDTH * 0.13,
    borderWidth: 1,
    borderRadius: GlobalSize(8),
    borderColor: BORDERCOLOR1,
    paddingLeft: GlobalSize(15),
  },
  dropView: {
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: DEFAULTWIDTH * 0.07,
    top: GlobalSize(5),
    zIndex: 99,
  },
  textDoc: {
    fontFamily: FONTS.FontMedium,
    fontSize: fontSize(14),
    fontWeight: '500',
    color: TEXTCOLOR10,
  },
  imageV: {
    width: DEFAULTWIDTH * 0.12,
    borderRadius: GlobalSize(25),
    height: DEFAULTWIDTH * 0.12,
  },
  cardView: {
    backgroundColor: PUREWHITE,
    width: DEFAULTWIDTH * 0.9,
    margin:1,
    height: DEFAULTWIDTH * 0.2,
    paddingLeft: DEFAULTWIDTH * 0.05,
    borderRadius: GlobalSize(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: DEFAULTWIDTH * 0.05,
    alignItems: 'center',
    marginBottom: GlobalSize(10),
  },
  cardTeam: {
    backgroundColor: PUREWHITE,
    width: DEFAULTWIDTH * 0.9,
    height: DEFAULTWIDTH * 0.2,
    paddingLeft: DEFAULTWIDTH * 0.05,
    borderRadius: GlobalSize(8),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingRight: DEFAULTWIDTH * 0.05,
    alignItems: 'center',
    marginBottom: GlobalSize(10),
    margin:1
  },
  textDate: {
    fontSize: fontSize(14),
    fontFamily: FONTS.FontRegular,
    fontWeight: '400',
    color: TEXTCOLOR5,
  },
  profileView: {
    width: GlobalSize(40),
    height: GlobalSize(40),
    borderRadius: GlobalSize(20),
    backgroundColor: BORDERCOLOR5,
  },
  containerStyle:{
    borderColor: BORDERCOLOR4,
    width: DEFAULTWIDTH * 0.9,
    zIndex: 99,
  }
});
export default TeamList;
