import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { CRDESC, CRSUBDESC, CRTEXT } from '../../../Constants/Texts';
import {
  GREYBACKGROUND1,
  LINECOLOR1,
  PUREBLACK,
  TEXTCOLOR10,
  TEXTCOLOR5,
  TEXTCOLOR7,
} from '../../../Constants/Colors/Colors';
import FastImage from 'react-native-fast-image';
import { CRIMAGE1 } from '../../../Constants/DummyImages';
import DEFAULTSTYLES, { DEFAULTWIDTH } from '../../../Constants/styles/styles';
import { GlobalSize, fontSize } from '../../../Constants/ResponsiveFont/ResponsiveFonts';

const CaregivingResources = () => {
  return (
    <>
      <View style={{ marginTop: GlobalSize(2), marginHorizontal: GlobalSize(10) }}>
        <View style={styles.lineBoder} />
        <View style={styles.headView}>
          <Text style={styles.headingText}>{CRTEXT}</Text>
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
          <Text style={styles.textDesc}>{CRDESC}</Text>

          <Text style={styles.descText}>{CRSUBDESC}</Text>

          <FastImage
            style={styles.imageView}
            source={{
              uri: CRIMAGE1,
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
    width: DEFAULTWIDTH * 0.90,
    backgroundColor: GREYBACKGROUND1,
    elevation: 5,
    margin: GlobalSize(10),
    borderRadius: GlobalSize(8),
    padding: GlobalSize(15),
  },
  imageView: {
    height: DEFAULTWIDTH * 0.45,
    width: DEFAULTWIDTH * 0.818,
    borderRadius: GlobalSize(8),
    marginVertical: GlobalSize(10),
    alignItems: 'baseline',
  },
  descText: {
    color: TEXTCOLOR5,
    fontFamily: 'Inter-Regular',
    fontSize: fontSize(14),
    marginTop: GlobalSize(5),
  },
  textDesc: {
    color: TEXTCOLOR10,
    fontFamily: 'Inter-Medium',
    fontSize: fontSize(14),
  },
  dismiss: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize(14),
    color: TEXTCOLOR5,
  },
  headView: {
    marginTop: GlobalSize(10),
    marginLeft: DEFAULTWIDTH * 0.02,
    marginBottom: GlobalSize(5)
  }
});

export default CaregivingResources;
