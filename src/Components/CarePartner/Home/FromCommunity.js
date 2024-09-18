import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {
  GREYBACKGROUND1,
  LINECOLOR1,
  PUREBLACK,
  TEXTCOLOR10,
  TEXTCOLOR5,
  TEXTCOLOR7,
  THIRDCOLOR,
} from '../../../Constants/Colors/Colors';
import FastImage from 'react-native-fast-image';
import {FTCIMAGE1} from '../../../Constants/DummyImages';
import {FTCDESC, FTCHEADER} from '../../../Constants/Texts';
import DEFAULTSTYLES, {DEFAULTWIDTH} from '../../../Constants/styles/styles';
import { GlobalSize, fontSize } from '../../../Constants/ResponsiveFont/ResponsiveFonts';

const FromCommunity = () => {
  return (
    <>
      <View style={{marginTop: GlobalSize(2), marginHorizontal: GlobalSize(10)}}>
        <View style={styles.lineBoder} />
        <View
          style={styles.headView}>
          <Text style={styles.headingText}>{FTCHEADER}</Text>
        </View>
      </View>

      <View style={DEFAULTSTYLES.alignView}>
        <View
          style={[
            styles.viewCard,
            Platform.OS == 'android'
              ? DEFAULTSTYLES.androidShadow
              : DEFAULTSTYLES.iosShadow,
          ]}>
          <Text style={{flexDirection: 'row'}}>
            <Text style={styles.textDesc}>{FTCDESC}</Text>
            <Text style={{color: THIRDCOLOR, fontFamily: 'Inter-Bold'}}>
              Read more...
            </Text>
          </Text>
          <FastImage
            style={styles.imageView}
            source={{
              uri: FTCIMAGE1,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />

          <TouchableOpacity>
            <Text style={styles.dismiss}>DISMISS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = new StyleSheet.create({
  lineBoder: {
    backgroundColor: LINECOLOR1,
    height: 1,
    margin: GlobalSize(10),
  },
  headingText: {
    color: TEXTCOLOR7,
    fontFamily: 'Inter-SemiBold',
    fontSize: fontSize(14),
  },
  viewCard: {
    width: DEFAULTWIDTH * 0.9,
    backgroundColor: GREYBACKGROUND1,
    elevation: 5,
    margin: GlobalSize(10),
    borderRadius: GlobalSize(8),
    padding: GlobalSize(15),
  },
  imageView: {
    height:DEFAULTWIDTH * 0.45,
    width: DEFAULTWIDTH * 0.818,
    borderRadius: GlobalSize(8),
    marginVertical: GlobalSize(10),
    alignItems: 'baseline',
  },
  dismiss: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize(14),
    color: TEXTCOLOR5,
  },
  textDesc: {
    color: TEXTCOLOR10,
    fontFamily: 'Inter-Medium',
    fontSize: fontSize(14),
    marginTop: GlobalSize(5),
  },
  headView:{
    marginTop: GlobalSize(10),
    marginLeft: DEFAULTWIDTH * 0.025,
    marginBottom: GlobalSize(5),
  }
});

export default FromCommunity;
