import React, { useEffect, useState } from 'react';
import { View, StyleSheet, BackHandler } from 'react-native';
import ChatDetailHeader from '../../Common/Headers/ChatDetailHeader';
import Chats from './Chat';
import { BACKGROUNDWHITE } from '../../../Constants/Colors/Colors';


const ChatDetails = ({ navigation, route }) => {

  const [ModalOpen, setModalOpen] = useState(false)

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Thank you for choosing Houston Methodist as your healthcare partner. Complete Survey for your recent visit:  htttp://bit.ly/123456',
      type: 'text',
      timestamp: new Date(),
    }
  ])
  const [EmojiOpen, setEmojiOpen] = useState(false)

  useEffect(() => { // To close the emoji kyboard
    const backAction = () => {
      if (EmojiOpen) {
        setEmojiOpen(false) //to close the emoji keyboard
        return true
      } else {
        return false
      }
    };
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    // Cleanup the event listener when the component unmounts
    return () => backHandler.remove();
  }, [EmojiOpen]);


  return (
    <View style={styles.container}>
      {/*   
  <TouchableWithoutFeedback onPress={()=>setModalOpen(false)} style={{backgroundColor:'red'}}> */}

      <ChatDetailHeader
        ModalOpen={ModalOpen}
        setModalOpen={setModalOpen}
        name={route?.params?.name}
        navigation={navigation} />

      <Chats
        ModalOpen={ModalOpen}
        setModalOpen={setModalOpen}
        Name={route?.params?.imageUri}
        navigation={navigation}
        messages={messages}
        setMessages={setMessages}
        EmojiOpen={EmojiOpen}
        setEmojiOpen={setEmojiOpen} />

      {/* </TouchableWithoutFeedback> */}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUNDWHITE,
  }
})

export default ChatDetails;









