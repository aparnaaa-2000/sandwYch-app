import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import Header from '../../../../Components/SupportMember/Notifications/Header';
import DEFAULTSTYLES from '../../../../Constants/styles/styles';
import {DEFAULTGRAY} from '../../../../Constants/Colors/Colors';
import NewNotification from '../../../../Components/SupportMember/Notifications/NewNotification';
import NotificationTab from '../../../../Components/Common/TopTabs/NotificationTab';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SupportStack from '../../../../Navigation/SupportMember/navigationstack';
import { useNavigation } from '@react-navigation/native';


const NOTIFICATIONLATEST = [
  {
    name: "Andrew Symonds",
    role: "carepartner",
    date: "10th March 2024",
    time: "10:00 AM",
    city: "Austin, Texas",
    type: "ADL",
    title: "Transportation & Mobility",
    description: " A transfer can be viewed as the safe movement of a person from one place or surface to another, and as an opportunity to train an individual to enhance independent function.",
    status: "active"
  },
  {
    name: "Betty Smith",
    role: "patient",
    date: "10th March 2024",
    time: "10:00 AM",
    city: "Austin, Texas",
    type: "IADL",
    title: "Shopping",
    description: " A transfer can be viewed as the safe movement of a person from one place or surface to another, and as an opportunity to train an individual to enhance independent function.",
    status: "active"
  },
  {
    name: "Amy Balkley Linane",
    role: "casemanager",
    date: "10th March 2024",
    time: "10:00 AM",
    type: "Medical Assistance",
    city: "Austin, Texas",
    title: "Cathetar Injection",
    description: " A transfer can be viewed as the safe movement of a person from one place or surface to another, and as an opportunity to train an individual to enhance independent function.",
    status: "accepted"
  },
]


const NOTIFICATIONPREVIOUS = [
  {
    name: "Andrew Symonds",
    role: "carepartner",
    date: "10th March 2024",
    time: "10:00 AM",
    city: "Austin, Texas",
    type: "ADL",
    title: "Transportation & Mobility",
    description: " A transfer can be viewed as the safe movement of a person from one place or surface to another, and as an opportunity to train an individual to enhance independent function.",
    status: "accepted"
  },
  {
    name: "Betty Smith",
    role: "patient",
    date: "10th March 2024",
    time: "8:30 AM",
    city: "Houston, Texas",
    type: "IADL",
    title: "Shopping",
    description: " A transfer can be viewed as the safe movement of a person from one place or surface to another, and as an opportunity to train an individual to enhance independent function.",
    status: "accepted"
  },
  {
    name: "Amy Balkley Linane",
    role: "casemanager",
    date: "10th March 2024",
    time: "06:00 AM",
    city: "Dallas, Texas",
    type: "Medical Assistance",
    title: "Cathetar Injection",
    description: " A transfer can be viewed as the safe movement of a person from one place or surface to another, and as an opportunity to train an individual to enhance independent function.",
    status: "rejected"
  },
]

const Tab = createMaterialTopTabNavigator();

const NotificationScreen = () => {

  const navigation = useNavigation ();
  return (
    <SafeAreaView
      style={
        Platform.OS === 'android'
          ? DEFAULTSTYLES.AndroidSafeArea
          : styles.container
      }>
      <Header />

      <View style={{flex: 1,}}>

          <Tab.Navigator
          // name="SupportRoot"
          // component={SupportStack}
          tabBar={props => <NotificationTab {...props} />}>
            <Tab.Screen name="Latest" component={LatestNotifications} navigation={navigation}/>
            <Tab.Screen name="Previous" component={PreviousNotifications} navigation={navigation}/>
          </Tab.Navigator>
  
      </View>

      {/* <NewNotification /> */}
    </SafeAreaView>
  );
};

const LatestNotifications = ({navigation}) => {
  // Notifications for today are identified as 0
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={NOTIFICATIONLATEST}
      renderItem={({item}) => (
        <NewNotification notification={item} day={0} navigation={navigation} />
      )}
      keyExtractor={item => item.id}
    />
  );
};

const PreviousNotifications = ({navigation}) => {
  const ListItem = ({name}) => (
    <View style={styles.item}>
      <Text>{name}</Text>
    </View>
  );

  // Previous Notifications from yesterday are identified as 1
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={NOTIFICATIONPREVIOUS}
        renderItem={({item}) => (
          <NewNotification notification={item} day={1} navigation={navigation} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DEFAULTGRAY,
  },
});

export default NotificationScreen;
