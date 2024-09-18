import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {DEFAULTHEIGHT, DEFAULTWIDTH} from '../../../Constants/styles/styles';
import {Card} from 'react-native-paper';
import {
  BORDERCOLOR8,
  PRIMARYCOLOR,
  PUREWHITE,
  SECONDARYTEXTCOLOR3,
  SIXTHCOLOR,
  TEXTCOLOR10,
  TEXTCOLOR11,
  TEXTCOLOR5,
} from '../../../Constants/Colors/Colors';
import {FONTS} from '../../../Constants/Fonts';
import {AnalogClock, GreyHourGlass, Maps} from '../../../../assets';

const UpcomingCard = () => {
  return (
    <View style={styles.mainConainter}>
      {/* MainHeader */}
      <View style={styles.headerRow}>
        <Text style={styles.headTitle}>Upcoming</Text>
        <TouchableOpacity>
          <Text style={styles.headSubText}>see all</Text>
        </TouchableOpacity>
      </View>

      {/* Card  */}
      <Card style={styles.cardLayout}>
        <View>
          {/* Card Header */}
          <View style={styles.cardHeader}>
            <View style={styles.timeLayout}>
              <View style={{marginRight: DEFAULTWIDTH * 0.01}}>
                <AnalogClock width={18} height={18} />
              </View>

              <Text style={styles.timeText}>09:00 am</Text>
            </View>
            <View style={styles.horizontalDivider} />
            <View>
              <Text style={styles.titleText}>Transfer Mobility</Text>
              <View style={styles.rowItems}>
                <Maps width={15} height={15} />
                <Text style={styles.locationText}>
                  936 Kiehn Route, West Ned
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.splitVerticalLine} />

          {/* Footer */}
          <View style={styles.cardFooter}>
            {/* 1st Section */}
            <View style={styles.rowItems}>
              <View style={styles.profileOverLay}>
                <Text style={styles.profileText}>CM</Text>
              </View>
              <View>
                <Text style={styles.footerUser}>Ram Charan</Text>
                <Text style={styles.footerUser}>Caregiver</Text>
              </View>
            </View>

            {/* 2nd Section */}
            <View style={styles.rowItems}>
              <Text style={styles.timeLeft}>4 hours left</Text>
              <GreyHourGlass width={14} height={14} />
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = new StyleSheet.create({
  mainConainter: {
    marginVertical: DEFAULTHEIGHT * 0.01,
    marginHorizontal: DEFAULTWIDTH * 0.02,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headTitle: {
    fontSize: 16,
    fontFamily: FONTS.FontRegular,
    color: TEXTCOLOR10,
  },
  headSubText: {
    fontFamily: FONTS.FontMedium,
    fontSize: 12,
    color: TEXTCOLOR11,
  },
  cardLayout: {
    backgroundColor: PUREWHITE,
    marginVertical: DEFAULTWIDTH * 0.02,
  },
  cardHeader: {flexDirection: 'row', margin: DEFAULTWIDTH * 0.02},
  timeLayout: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 18,
    fontFamily: FONTS.FontLight,
    color: PRIMARYCOLOR,
  },
  horizontalDivider: {
    marginHorizontal: DEFAULTWIDTH * 0.02,
    width: 0.5,
    height: 'auto',
    backgroundColor: BORDERCOLOR8,
  },
  titleText: {
    fontSize: 20,
    fontFamily: FONTS.FontMedium,
    color: TEXTCOLOR10,
  },
  locationText: {
    fontSize: 12,
    fontFamily: FONTS.FontRegular,
    color: TEXTCOLOR5,
  },
  splitVerticalLine: {
    height: 0.4,
    width: 'auto',
    backgroundColor: BORDERCOLOR8,
    marginBottom: DEFAULTWIDTH * 0.02,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: DEFAULTWIDTH * 0.02,
    marginBottom: DEFAULTWIDTH * 0.02,
  },

  profileOverLay: {
    width: 22,
    height: 22,
    borderRadius: 22,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    backgroundColor: PRIMARYCOLOR,
    alignSelf: 'center',
  },
  rowItems: {flexDirection: 'row', alignItems: 'center'},

  profileText: {
    fontSize: 8,
    fontFamily: FONTS.FontSemiB,
    color: PUREWHITE,
  },
  footerUser: {
    fontSize: 10,
    fontFamily: FONTS.FontRegular,
    color: SECONDARYTEXTCOLOR3,
  },
  timeLeft: {
    marginRight: DEFAULTWIDTH * 0.01,
    fontSize: 12,
    fontFamily: FONTS.FontRegular,
    color: SIXTHCOLOR,
  },
});

export default UpcomingCard;
