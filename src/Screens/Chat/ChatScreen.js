import React from 'react';
import { View, StyleSheet,StatusBar,SafeAreaView } from 'react-native';
import ChatHeader from '../../Components/Common/Headers/ChatHeader';
import List from '../../Components/Chat/ChatList/List';
import { useIsFocused } from '@react-navigation/native';
import { BACKGROUNDWHITE, PRIMARYCOLOR, PUREWHITE } from '../../Constants/Colors/Colors';

const ChatScreen = ({ navigation }) => {
  const isFocused = useIsFocused();

  return (
    <SafeAreaView style={{backgroundColor:PRIMARYCOLOR,flex:1}}>
    {isFocused && <StatusBar  backgroundColor={PRIMARYCOLOR} style={{ flex: 0 }} barStyle={'light-content'} />}
    <View style={styles.Container}>
      <ChatHeader navigation={navigation}/>
      <List navigation={navigation} />
    </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: BACKGROUNDWHITE
  }
})

export default ChatScreen;