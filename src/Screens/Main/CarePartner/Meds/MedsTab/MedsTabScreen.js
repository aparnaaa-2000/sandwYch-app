import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TimeList from '../../../../../Components/CarePartner/Med/MedTab/TimeList';
import { FONTS } from '../../../../../Constants/Fonts';
import { BACKGROUNDWHITE, FOURTHCOLOR, TEXTCOLOR10 } from '../../../../../Constants/Colors/Colors';
import {
  DEFAULTHEIGHT,
  DEFAULTWIDTH,
} from '../../../../../Constants/styles/styles';
import TopTab from '../../../../../Components/Common/TopTabs/TopTab';
import { PlusWhite } from '../../../../../../assets';
import DefaultBackHeader from '../../../../../Components/Common/Headers/DefaultBackHeader';
import { GlobalSize, fontSize } from '../../../../../Constants/ResponsiveFont/ResponsiveFonts';
import MedModal from '../../../../../Components/CarePartner/Med/AddMeds/MedModal';

// DOUMMY DATA TODAY API RESOPONSE
const DUMMYDATATODAY = [
  {
    time: '09: 00',
    medicines: [
      {
        nameOfMedicine: 'Galatamine Tablet',
        diagnosis: 'Alzhimer',
        description: '100mg - Twice day - After Meals',
        stats: 'completed',
        typeofMedicine: 'capsule',
        svg: '',
      },
      {
        nameOfMedicine: 'Systane Complete PF',
        diagnosis: 'Irritated Eyes',
        description: '2 Drops - Twice day',
        stats: 'pending',
        typeofMedicine: 'drop',
        svg: '',
      },
    ],
  },
  {
    time: '12: 30',
    medicines: [
      {
        nameOfMedicine: 'Famotidine Tablet',
        diagnosis: 'Gerd',
        description: '20mg - Once day - before meals',
        stats: 'upcoming',
        typeofMedicine: 'capsule',
        svg: '',
      },
    ],
  },
  {
    time: '21: 00',
    medicines: [
      {
        nameOfMedicine: 'Galatamine Tablet',
        diagnosis: 'Alzhimer',
        description: '100mg - Twice day - After Meals',
        stats: 'upcoming',
        typeofMedicine: 'capsule',
        svg: '',
      },
      {
        nameOfMedicine: 'Systane Complete PF',
        diagnosis: 'Irritated Eyes',
        description: '2 Drops - Twice day',
        stats: 'upcoming',
        typeofMedicine: 'drop',
        svg: '',
      },
    ],
  },
];

// DOUMMY DATA YESTERDAY API RESOPONSE
const DUMMYDATAYESTERDAY = [
  {
    time: '09: 00',
    medicines: [
      {
        id: 1,
        nameOfMedicine: 'Galatamine Tablet',
        diagnosis: 'Alzhimer',
        description: '100mg - Twice day - After Meals',
        stats: 'completed',
        typeofMedicine: 'capsule',
        svg: '',
      },
      {
        id: 2,
        nameOfMedicine: 'Systane Complete PF',
        diagnosis: 'Irritated Eyes',
        description: '2 Drops - Twice day',
        stats: 'pending',
        typeofMedicine: 'drop',
        svg: '',
      },
    ],
  },
  {
    time: '12: 30',
    medicines: [
      {
        id: 1,
        nameOfMedicine: 'Famotidine Tablet',
        diagnosis: 'Gerd',
        description: '20mg - Once day - before meals',
        stats: 'completed',
        typeofMedicine: 'capsule',
        svg: '',
      },
    ],
  },
  {
    time: '21: 00',
    medicines: [
      {
        id: 1,
        nameOfMedicine: 'Galatamine Tablet',
        diagnosis: 'Alzhimer',
        description: '100mg - Twice day - After Meals',
        stats: 'completed',
        typeofMedicine: 'capsule',
        svg: '',
      },
      {
        id: 2,
        nameOfMedicine: 'Systane Complete PF',
        diagnosis: 'Irritated Eyes',
        description: '2 Drops - Twice day',
        stats: 'completed',
        typeofMedicine: 'drop',
        svg: '',
      },
    ],
  },
];

const Tab = createMaterialTopTabNavigator();
const MedsTabScreen = ({ navigation }) => {
  // Today and Yesterday Tabs will be shown and listed here.
  // Today Medication will have a button
  // Yesterday Medication will only have badges.
  const [ModalOpen,setModalOpen] = useState(false)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={BACKGROUNDWHITE} barStyle="dark-content" />

      <View style={{ flex: 1, backgroundColor: BACKGROUNDWHITE }}>
        <DefaultBackHeader navigation={navigation} />
        <View style={styles.mainContainer}>
          <Text style={styles.headerText}>Medications</Text>

          <TouchableOpacity style={styles.buttonAdd} onPress={() =>setModalOpen(true)}>
            <PlusWhite width={GlobalSize(26)} height={GlobalSize(26)} />
          </TouchableOpacity>
        </View>

        {/* You might need to remove the navigation container from here */}
        <View style={{ flex: 1, backgroundColor: BACKGROUNDWHITE }}>

          <Tab.Navigator tabBar={props => <TopTab {...props} />}>
            <Tab.Screen name="Today" component={TodayScreen} />
            <Tab.Screen name="Yesterday" component={YesterdayScreen} />
          </Tab.Navigator>

        </View>
      </View>

      <MedModal
        navigation={navigation}
        ModalOpen={ModalOpen}
        setModalOpen={setModalOpen} />

    </SafeAreaView>
  );
};

const TodayScreen = ({ navigation }) => {
  // Today is identified as 0
  return (

    <FlatList
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps='always'
      data={DUMMYDATATODAY}
      renderItem={({ item }) => <TimeList time={item} day={0} navigation={navigation} />}
      keyExtractor={item => item.id}
    />

  );
};



const YesterdayScreen = ({ navigation }) => {

  // Yesterday is identified as 1
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DUMMYDATAYESTERDAY}
        renderItem={({ item }) => <TimeList time={item} day={1} navigation={navigation} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = new StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginHorizontal: DEFAULTWIDTH * 0.06,
    marginVertical: DEFAULTHEIGHT * 0.02,
    justifyContent: 'space-between',
    backgroundColor: BACKGROUNDWHITE

  },
  headerText: {
    fontFamily: FONTS.FontMedium,
    fontSize: fontSize(18),
    color: TEXTCOLOR10,
  },
  buttonAdd: {
    backgroundColor: FOURTHCOLOR,
    borderRadius: GlobalSize(15),
    width: DEFAULTWIDTH * 0.07,
    height: DEFAULTWIDTH * 0.07,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MedsTabScreen;
