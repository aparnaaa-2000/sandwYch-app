import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Platform } from 'react-native';
import {
  PUREBLACK,
  PUREWHITE,
  TEXTCOLOR10,
  TEXTCOLOR3,
  TEXTCOLOR5,
  TEXTCOLOR7,
  TEXTCOLOR8,
} from '../../../Constants/Colors/Colors';
import { Maps, Phone, RxRed, SettingsDot } from '../../../../assets';
import { WALGREENS } from '../../../Constants/DummyImages';
import FastImage from 'react-native-fast-image';
import { RXDESC, RXHEADER } from '../../../Constants/Texts';
import { FONTS } from '../../../Constants/Fonts';
import DEFAULTSTYLES, { DEFAULTWIDTH } from '../../../Constants/styles/styles';
import { GlobalSize, fontSize } from '../../../Constants/ResponsiveFont/ResponsiveFonts';

const RxComponent = () => {
  return (
    <>
      <View
        style={[styles.cardView,
        Platform.OS == "android" ?
          DEFAULTSTYLES.androidShadow :
          DEFAULTSTYLES.iosShadow
        ]}>
        <View style={styles.cardSubView}>
          <View>
            <RxRed width={28} height={28} />
          </View>

          <View style={styles.subView}>
            <View style={{ flexDirection: 'row', bottom: GlobalSize(-8) }}>
              <Text style={styles.textPh}>{RXHEADER}</Text>
              <FastImage
                style={{ height: 30, width: 100 }}
                source={{
                  uri: WALGREENS,
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
            </View>
            <Text style={styles.rxDesc}>{RXDESC}</Text>
          </View>

          <View style={{ left: GlobalSize(3) }}>
            <SettingsDot width={28} height={28} />
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: DEFAULTWIDTH * 0.18 }}>
          <TouchableOpacity style={[styles.touchableRow, { marginRight: DEFAULTWIDTH * 0.04 }]}>
            <Phone width={26} height={26} />
            <Text style={styles.callStyle}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableRow}>
            <Maps width={20} height={20} />
            <Text style={styles.dirStyle}>Directions</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = new StyleSheet.create({

  cardView: {
    backgroundColor: PUREWHITE,
    width: DEFAULTWIDTH * 0.90,
    borderRadius: GlobalSize(8)
  },
  cardSubView: {
    padding: GlobalSize(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: GlobalSize(15)
  },
  touchableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    top: GlobalSize(-12)
  },
  callStyle: {
    textDecorationLine: 'underline',
    fontFamily: 'Inter-Regular',
    fontSize: fontSize(14),
    color: TEXTCOLOR8,
  },
  dirStyle: {
    textDecorationLine: 'underline',
    fontSize: fontSize(14),
    color: TEXTCOLOR3,
    fontFamily: 'Inter-Regular',
    left: GlobalSize(5)
  },
  rxDesc: {
    color: TEXTCOLOR5,
    fontSize: fontSize(13),
    fontFamily: FONTS.FontRegular
  },
  textPh: {
    color: TEXTCOLOR7,
    fontFamily: FONTS.FontMedium,
    fontSize: fontSize(14),
    opacity: 0.9
  },
  subView:{
     flexDirection: 'column', 
     top: GlobalSize(-10), 
     left: GlobalSize(5)
     }
});

export default RxComponent;
