import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import ChatDetails from '../Components/Chat/ChatDetails/ChatDetails';
import ChatDetails from '../../Components/Chat/ChatDetails/ChatDetails'
import VideoFile from '../../Components/Chat/ChatDetails/VideoFile'
import CreateGroup from '../../Components/Chat/ChatList/CreateGroup';

const Chat = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const ChatStack = ({ route }) => {

  return (
    <Chat.Navigator
      initialRouteName="ChatDetails"
      screenOptions={screenOptions}>
      <Chat.Screen
        name="ChatDetails"
        component={ChatDetails}
        initialParams={{ name: route?.params?.name, imageUri: route?.params?.imageUri }} />
      <Chat.Screen name="VideoFile" component={VideoFile} />
      <Chat.Screen name="CreateGroup" component={CreateGroup} />
    </Chat.Navigator>
  )
}


export default ChatStack;
