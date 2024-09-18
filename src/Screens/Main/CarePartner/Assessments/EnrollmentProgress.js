import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  TouchableWithoutFeedback
} from 'react-native';
import React from 'react';
import MainHeader from '../../../../Components/Common/Headers/MainHeader'
import * as Progress from 'react-native-progress';
import {
  BACKGROUNDWHITE,
  FIFTHCOLOR,
  FOURTHCOLOR,
  POGRESSBARUNFILLEDCOLOR,
  PRIMARYCOLOR,
  PUREWHITE,
  SECONDARYCOLOR,
  SIXTHCOLOR,
  TEXTCOLOR2,
  TEXTCOLOR8,
  THIRDCOLOR
} from '../../../../Constants/Colors/Colors';
import { Button, Card } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts';


const EnrollmentProgress = ({ navigation }) => {
  const navigateToHome = () => {
    //navigation.navigate('ResearchPrompt')
    navigation.navigate('AssessmentSummary');
  };
  const navigateToHC = () => {
    navigation.navigate('HealthChallengesMainScreen');
  };
  const navigateToRFC = () => {
    navigation.navigate('ReasonsForCaregiving');
  };
  const navigateToCD = () => {
    navigation.navigate('CaregiverDemographics');
  };
  const navigateToCRD = () => {
    navigation.navigate('CareRecipientDemographics');
  };

  const navigateToFA = () => {
    navigation.navigate('AbilityToHelp1', { mainText: 'Ability to Help 1' });
  };

  const navigateToSDOH = () => {
     navigation.navigate('AbilityToHelp1', { mainText: 'SDOH Assessment' });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: BACKGROUNDWHITE }}>
      <StatusBar backgroundColor={BACKGROUNDWHITE} barStyle={'dark-content'} style={{ flex: 0 }} />
      <MainHeader navigation={navigation} />

      <ScrollView style={{ flex: 1, backgroundColor: BACKGROUNDWHITE }} showsVerticalScrollIndicator={false}>
        <View style={{ marginLeft: GlobalSize(10) }}>
          <Text style={styles.mainHeadingText}>Enrollment Progress</Text>
        </View>

        <TouchableWithoutFeedback
          onPress={() => navigateToHC()}
          style={{ margin: 10 }}>
          <Card style={styles.cardStyle}>
            <View style={styles.containerRow}>
              <Text style={styles.headingText}>About You</Text>
              <Text style={styles.subHeadingText}>Complete</Text>
            </View>
            <Progress.Bar
              progress={1}
              width={null}
              height={8}
              color={PRIMARYCOLOR}
              unfilledColor={POGRESSBARUNFILLEDCOLOR}
              borderWidth={0}
            />
          </Card>
        </TouchableWithoutFeedback>

        {/* <TouchableWithoutFeedback
          onPress={() => navigateToRFC()}
          style={{ margin: 10 }}>
          <Card style={styles.cardStyle}>
            <View style={styles.containerRow}>
              <Text style={styles.headingText}>Reasons for Caregiving</Text>
              <Text style={styles.subHeadingText}>Complete</Text>
            </View>
            <Progress.Bar
              progress={1}
              width={null}
              height={8}
              color={THIRDCOLOR}
              unfilledColor={POGRESSBARUNFILLEDCOLOR}
              borderWidth={0}
            />
          </Card>
        </TouchableWithoutFeedback> */}

        <TouchableWithoutFeedback
          onPress={() => navigateToCD()}
          style={{ margin: GlobalSize(10) }}>
          <Card style={styles.cardStyle}>
            <View style={styles.containerRow}>
              <Text style={styles.headingText}>Your Care Story</Text>
              <Text style={styles.subHeadingText}>Complete</Text>
            </View>
            <Progress.Bar
              progress={1}
              width={null}
              height={8}
              color={FOURTHCOLOR}
              unfilledColor={POGRESSBARUNFILLEDCOLOR}
              borderWidth={0}
            />
          </Card>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => navigateToCRD()}
          style={{ margin: GlobalSize(10) }}>
          <Card style={styles.cardStyle}>
            <View style={styles.containerRow}>
              <Text style={styles.headingText}>
               Who You Care For
              </Text>
              <Text style={styles.subHeadingText}>Complete</Text>
            </View>
            <Progress.Bar
              progress={1}
              width={null}
              height={8}
              color={FIFTHCOLOR}
              unfilledColor={POGRESSBARUNFILLEDCOLOR}
              borderWidth={0}
            />
          </Card>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback style={{ margin: GlobalSize(10) }}
          onPress={() => navigateToFA()}>
          <Card style={styles.cardStyle}>
            <View style={styles.containerRow}>
              <Text style={styles.headingText}>Day-To-Day</Text>
              <Text style={styles.subHeadingText}>Complete</Text>
            </View>
            <Progress.Bar
              progress={1}
              width={null}
              height={8}
              color={SIXTHCOLOR}
              unfilledColor={POGRESSBARUNFILLEDCOLOR}
              borderWidth={0}
            />
          </Card>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback style={{ margin: GlobalSize(10) }}
          onPress={() => navigateToSDOH()}>
          <Card style={styles.cardStyle}>
            <View style={styles.containerRow}>
              <Text style={styles.headingText}>Staying Strong at Home </Text>
              <Text style={styles.subHeadingText}>Complete</Text>
            </View>
            <Progress.Bar
              progress={1}
              width={null}
              height={8}
              color={THIRDCOLOR}
              unfilledColor={POGRESSBARUNFILLEDCOLOR}
              borderWidth={0}
            />
          </Card>
        </TouchableWithoutFeedback>

      </ScrollView>


      <Button
        onPress={() => navigateToHome()}
        style={styles.submitBtn}>
        <Text
          style={styles.submitText}>
          Submit
        </Text>
      </Button>

    </SafeAreaView>
  );
};

const styles = new StyleSheet.create({
  cardStyle: {
    padding: GlobalSize(20),
    borderRadius: 8,
    backgroundColor: PUREWHITE,
    margin: GlobalSize(10)
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: GlobalSize(20),
  },
  mainHeadingText: {
    fontFamily: 'Inter-Bold',
    fontSize: fontSize(14),
    color: TEXTCOLOR8,
  },
  headingText: {
    fontFamily: 'Inter-Bold',
    fontSize: fontSize(14),
    color: TEXTCOLOR2,
  },
  subHeadingText: {
    fontFamily: 'Inter-Regular',
    fontSize: fontSize(14),
    color: TEXTCOLOR2,
  },
  submitBtn: {
    backgroundColor: SECONDARYCOLOR,
    borderRadius: 8,
    margin: GlobalSize(10),
  },
  submitText: {
    color: PUREWHITE,
    fontFamily: 'Inter-Bold',
    fontSize: fontSize(12)
  }
});

export default EnrollmentProgress;
