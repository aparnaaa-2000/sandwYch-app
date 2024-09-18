import React, {useState, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SupportLandingScreen from '../../Screens/Main/SupportMember/LandingScreen';
import NotificationDetails from '../../Screens/Main/SupportMember/Notification/NotificationDetails';

const Support = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const SupportStack = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Support.Navigator screenOptions={screenOptions}>
      <Support.Screen
        name="SupportMainPage"
        component={isConnected ? SupportLandingScreen : NetworkConnectivity}
      />
      <Support.Screen
        name="SupportNotificationDetails"
        component={isConnected ? NotificationDetails : NetworkConnectivity}
      />
    </Support.Navigator>
  );
};

export default SupportStack;
