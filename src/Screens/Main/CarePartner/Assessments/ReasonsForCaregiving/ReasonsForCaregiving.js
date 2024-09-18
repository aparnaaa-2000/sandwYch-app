import React from 'react';
import {View, Text, Image, SafeAreaView, StyleSheet,StatusBar} from 'react-native';
import {
  PRIMARYCOLOR,
  PUREWHITE,
} from '../../../../../Constants/Colors/Colors';
import {Button} from 'react-native-paper';

const ReasonsForCaregiving = ({navigation}) => {
  
  const backToEnrollment = () => {
    navigation.navigate('EnrollmentProgress');
  };

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={PRIMARYCOLOR} barStyle={'light-content'} style={{ flex: 0 }} />
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../../../../../../assets/Images/RFC.png')}
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Caregiving style</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={() => backToEnrollment()} style={styles.buttonStyle}>
          <Text style={{color: PRIMARYCOLOR}}>Save & Exit</Text>
        </Button>
        <Button style={styles.buttonStyle} onPress={()=>navigation.navigate('ReasonsForm')}>
          <Text style={{color: PRIMARYCOLOR}}>Continue</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = new StyleSheet.create({
  container: {
    backgroundColor:PRIMARYCOLOR,
    flex: 1,
  },
  imageStyle: {
    width: '92%',
    height: '83%',
  },
  headingContainer: {
    marginTop: -120,
    alignItems: 'center',
  },
  headingText: {
    color: PUREWHITE,
    fontSize: 25,
    fontFamily: 'Inter-Bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
  buttonStyle: {
    width: '45%',
    height: 40,
    backgroundColor: PUREWHITE,
    borderRadius: 8,
  },
});

export default ReasonsForCaregiving;
