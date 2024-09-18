import React, { useState, useRef } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Text,
  Dimensions,
  Platform
} from 'react-native';

//import packages
import ImagePicker from 'react-native-image-crop-picker';

import EmojiSelector from 'react-native-emoji-selector';
import DocumentPicker from 'react-native-document-picker';

//Import components
import ListItem from './ListItem';
import CommonPreview from './CommonPreview';
import { FONTS } from '../../../Constants/Fonts';

import { BACKGROUNDWHITE, BORDERCOLOR1, PRIMARYCOLOR, PUREWHITE, TEXTCOLOR11 } from '../../../Constants/Colors/Colors';
import {  SendIcon, Emoji, BlueAttach } from '../../../../assets';
import { DEFAULTWIDTH } from '../../../Constants/styles/styles';
import { GlobalSize, fontSize, height } from '../../../Constants/ResponsiveFont/ResponsiveFonts';


const Chats = ({ Name, navigation, EmojiOpen, setEmojiOpen, messages, setMessages, setModalOpen }) => {

  const scrollViewRef = useRef(null);
  const [newMessage, setNewMessage] = useState(null);
  const [imagePath, setImagePath] = useState()
  const [FileView, setFileView] = useState(false)
  const [fileType, setFileType] = useState()
  const [fileName, setFileName] = useState()
  const [selectedEmoji, setSelectedEmoji] = useState([])

  const SendText_Message = () => { // To send text messages 

    if (newMessage !== null) { // Don't send empty messages
      const message = {
        id: messages.length + 1,
        text: newMessage,
        type: 'text',
        timestamp: new Date(),
      };
      setMessages([...messages, message]);
      setNewMessage(null);
      setEmojiOpen(false)

    }
  };


  const SendEmojis = () => { // To send  emojis

    if (selectedEmoji?.length > 0) {
      const message = {
        id: messages.length + 1,
        text: selectedEmoji,
        type: 'emoji',
        timestamp: new Date(),
      };
      setMessages([...messages, message]);
      setSelectedEmoji([])
      setEmojiOpen(false) // to close the emoji keyboard

    };
  }


  const Send_Files = () => {  // to send files like image, pdf etc
    const message = {
      id: messages.length + 1,
      text: fileType == 'application/pdf' ? fileName : fileType == 'audio/mpeg' ? fileName : imagePath,
      type: fileType,
      url: imagePath?.toString(),
      timestamp: new Date(),
      Playing: false,
      ResumePlay: false,
      durationMin: 0,
      durationInSeconds: 0
    };

    setMessages([...messages, message]);
    setFileView(false) // to close the preview 
  }



  const selectDocFile = async () => {
    //Opening Document Picker for selection of file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      setImagePath(res[0].uri)
      setFileView(true)
      setFileName(res[0].name)
      setFileType(res[0].type)

    } catch (err) {

    }
  };


  const handleEmojiSelect = (emoji) => { // To select emojis from keyboard
    setSelectedEmoji((prevSelectedEmojis) => [...prevSelectedEmojis, emoji]);
  };


  const openCamera = () => { // To open Camera
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      useFrontCamera: false
    }).then((image) => {
      setFileType('image/jpeg')
      setImagePath(image?.path)
      setFileView(true) // To open view the selected file
    }).catch((error) => {
      console.log(error);
    });
  }


  return (
    <>

      <View>
        <ScrollView 
        
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
          onContentSizeChange={(contentWidth, contentHeight) => {
            // Scroll to the end when the content size changes
            scrollViewRef.current.scrollToEnd({ animated: true });
          }}
          onLayout={() => {
            // Scroll to the end when the component initially lays out
            scrollViewRef.current.scrollToEnd({ animated: false });
          }}>
          <ListItem
            Name={Name}
            messages={messages}
            setMessages={setMessages}
            navigation={navigation}
          />
        </ScrollView>
      </View>

      <View style={styles.innerContainer}>

        {FileView ?
          <CommonPreview
            fileType={fileType}
            fileName={fileName}
            imagePath={imagePath}
            sendImage={Send_Files} />
          :
          <>
            {EmojiOpen ?
              <View style={{ width: DEFAULTWIDTH * 0.99, height: height(188) }}>
                <EmojiSelector
                  onEmojiSelected={handleEmojiSelect}
                  showSearchBar={false}
                  showSectionTitles={false} />
              </View> : null}

            <View style={styles.border} />
            <View style={styles.inputAndMicrophone}>

              <TouchableOpacity
                style={styles.emoticonButton}
                onPress={() => { setEmojiOpen(!EmojiOpen), setSelectedEmoji([]) }}>
                <Emoji />
              </TouchableOpacity>

              {!EmojiOpen ?
                <TextInput
                  multiline
                  placeholderTextColor={PRIMARYCOLOR}
                  placeholder={"Type a message here"}
                  style={styles.input}
                  value={newMessage}
                  onChangeText={(text) => setNewMessage(text)}
                /> :

                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={styles.input}>
                  {selectedEmoji?.map((item, index) => (
                    <View key={index} style={styles.viewEmj}>
                      <Text>{item}</Text>
                    </View>
                  ))}
                </ScrollView>
              }

              <TouchableOpacity style={styles.rightIconButtonStyle} onPress={() => selectDocFile()}>
                <BlueAttach />
              </TouchableOpacity>

              {/* <TouchableOpacity style={[styles.rightIconButtonStyle,{paddingLeft:5}]}>
                <Mic />
              </TouchableOpacity> */}
              {/* 
              <TouchableOpacity style={styles.rightIconButtonStyle} onPress={() => openCamera()}>
                <Camera
                  name="camera-alt"
                  size={25}
                  color={'#151F6D'}
                />
              </TouchableOpacity> */}

              <TouchableOpacity style={styles.rightIconButtonStyle1}
                onPress={() => { !EmojiOpen ? SendText_Message() : SendEmojis() }}>
                <SendIcon />
                {/* <Text style={{color:PRIMARYCOLOR}}>Send</Text> */}
              </TouchableOpacity>
            </View>

          </>}
      </View>

    </>
  )
}

const styles = StyleSheet.create({
  innerContainer: {
    backgroundColor: BACKGROUNDWHITE,
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  },
  inputAndMicrophone: {
    flexDirection: "row",
    flex: 1,
    marginRight: GlobalSize(10),
    borderRadius: GlobalSize(30),
    marginLeft: Platform.OS == 'ios' ? GlobalSize(10) : 0,
    alignItems: "center",
    justifyContent: "space-between",
  },
  viewEmj: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    backgroundColor: "transparent",
    paddingLeft: GlobalSize(20),
    color: PRIMARYCOLOR,
    flex: 1,
    top: Platform.OS == 'ios' ? GlobalSize(25) : 0,
    fontSize: GlobalSize(14),
    fontFamily: FONTS.FontRegular,
    fontWeight: '400',
    alignSelf: "center",
    height: Platform.OS == 'ios' ? GlobalSize(80) : GlobalSize(60)
  },
  rightIconButtonStyle: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: GlobalSize(5),
    paddingLeft: GlobalSize(10),
    borderLeftWidth: 1,
    borderLeftColor: "#fff",
  },
  rightIconButtonStyle1: {
    marginRight: GlobalSize(5),
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 1,
    borderLeftColor: "#fff",
    backgroundColor: '#86C8BC',
    width: GlobalSize(40),
    height: GlobalSize(40),
    borderRadius: GlobalSize(20),
    marginLeft: GlobalSize(5)
  },
  emoticonButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: GlobalSize(10),
  },

  messageText: {
    fontSize: fontSize(12),
    color: TEXTCOLOR11
  },
  messageContainer: {
    alignSelf: 'flex-start',
    backgroundColor: PUREWHITE,
    borderRadius: GlobalSize(6),
    margin: GlobalSize(5),
    padding: GlobalSize(8),
    borderColor: BORDERCOLOR1,
    borderWidth: 0.5,
  },
  messageContainer1: {
    backgroundColor: PUREWHITE,
    borderRadius: GlobalSize(6),
    padding: GlobalSize(8),
    borderColor: BORDERCOLOR1,
    borderWidth: 0.5,
  },
  border: {
    borderWidth: 0.5,
    borderColor: BORDERCOLOR1,
    width: DEFAULTWIDTH,
  },
})

export default Chats;