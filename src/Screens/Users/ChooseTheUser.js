import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import {
  BellIcon,
  BlueMenu,
  LogoSmall,
  PlusWhite,
  Search,
} from '../../../assets';
import {
  BACKGROUNDWHITE,
  BELLCOLOR,
  FOURTHCOLOR,
  LINECOLOR1,
  PLACEHOLDERCOLOR3,
  PRIMARYCOLOR,
  PUREBLACK,
  PUREWHITE,
  TEXTCOLOR10,
  TEXTCOLOR5,
  TEXTCOLOR8,
} from '../../Constants/Colors/Colors';
import {FONTS} from '../../Constants/Fonts';
import {
  ADR,
  AVALONG,
  BETTYSMITHPROFILE,
  SALLYBROWN1,
  SALLYBROWN2,
} from '../../Constants/DummyImages';
import {FlatList} from 'react-native';
import FastImage from 'react-native-fast-image';
import {DEFAULTHEIGHT, DEFAULTWIDTH} from '../../Constants/styles/styles';
import DashboardHeader from '../../Components/Common/Headers/DashboardHeader';
import CustomSidebarMenu from '../../Components/CarePartner/SideMenu/CustomSideMenuBar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GlobalSize, fontSize, height } from '../../Constants/ResponsiveFont/ResponsiveFonts';

const Drawer = createDrawerNavigator();

const ChooseTheUser = () => (
  <Drawer.Navigator 
    screenOptions={{headerShown: false}}
    drawerContent={props=><CustomSidebarMenu {...props} />}
  >
    
    <Drawer.Screen name="ChooseTheUserScreen" component={ChooseTheUserScreen} />
  </Drawer.Navigator>
);


const ChooseTheUserScreen = ({navigation}) => {
  const Data = [
    {
      id: 1,
      Name: 'Betty Smith',
      image: BETTYSMITHPROFILE,
      Email: 'bettysmith@gmail.com',
      Status: false,
    },
    {
      id: 2,
      Name: 'Ava Long',
      image: AVALONG,
      Email: 'avalong@gmail.com',
      Status: true,
    },
  ];

  const renderItem = ({item}) => {
    console.log('item image...................', item.image);
    return (
      <View style={styles.viewMain}>
        <View>
          <FastImage
            style={styles.imageV}
            source={{
              uri: item.image,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>

        <View style={{flexDirection: 'column', width:DEFAULTWIDTH * 0.53}}>
          <Text style={styles.textNm}>{item.Name}</Text>
          <Text style={styles.textEm}>{item.Email}</Text>
        </View>

        <View>
          {item.Status ? (
            <Text style={styles.viewText}>View</Text>
          ) : (
            <Text style={{width: DEFAULTWIDTH * 0.085}}></Text>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: BACKGROUNDWHITE, flex: 1}}>
      <StatusBar
        backgroundColor={BACKGROUNDWHITE}
        barStyle={'dark-content'}
        style={{flex: 0}}
      />
      <View style={styles.container}>
        <DashboardHeader navigation={navigation}/>
        <View style={{marginBottom: DEFAULTHEIGHT * 0.02, marginLeft: 1}}>
          <Text style={styles.textGiver}>Hi, Amy!</Text>
          <Text style={styles.textSelect}>
            Select a patient to help them out
          </Text>
        </View>
        <View style={styles.viewRow}>
          <View>
            <Text style={styles.textCare}>Patients</Text>
          </View>

          <View style={styles.plusView}>
            <TouchableOpacity>
              <PlusWhite width={25} height={25} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.lineIcon} />

        <View style={styles.viewFlat}>
          <FlatList
            data={Data}
            keyExtractor={item => item.id}
            renderItem={renderItem}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUNDWHITE,
    padding: GlobalSize(15),
  },
  viewRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: DEFAULTWIDTH * 0.03,
    marginRight: GlobalSize(4),
  },
  textCare: {
    color: PUREBLACK,
    fontSize: fontSize(30),
    fontFamily: FONTS.FontSemiB,
  },
  lineIcon: {
    height: height(1.3),
    width: DEFAULTWIDTH * 0.89,
    backgroundColor: LINECOLOR1,
    marginBottom: DEFAULTWIDTH * 0.01,
    marginLeft: DEFAULTWIDTH * 0.01,
  },
  textNm: {
    fontSize: fontSize(14),
    fontFamily: FONTS.FontMedium,
    color: TEXTCOLOR10,
  },
  textEm: {
    fontSize: fontSize(14),
    fontFamily: FONTS.FontRegular,
    color: TEXTCOLOR5,
  },
  imageV: {
    width: DEFAULTWIDTH * 0.12,
    borderRadius: 25,
    height: DEFAULTWIDTH * 0.12,
  },
  viewText: {
    fontSize: fontSize(14),
    fontFamily: FONTS.FontMedium,
    color: PRIMARYCOLOR,
  },
  viewMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: GlobalSize(15),
    elevation: 2,
    backgroundColor: PUREWHITE,
    width: DEFAULTWIDTH * 0.9,
    marginTop: GlobalSize(2),
    borderRadius: 8,
    marginBottom: DEFAULTWIDTH * 0.04,
    marginLeft: GlobalSize(2),
    marginRight: GlobalSize(2),
  },
  plusView: {
    backgroundColor: '#FF9E1B',
    width: GlobalSize(28),
    height: GlobalSize(28),
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewFlat: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: GlobalSize(10),
  },

  textNum: {
    fontSize: fontSize(7),
    color: PUREWHITE,
    fontFamily: FONTS.FontSemiB,
  },
  viewCard: {
    width: GlobalSize(30),
    height: GlobalSize(30),
    borderRadius: GlobalSize(15),
    backgroundColor: PRIMARYCOLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSelect: {
    fontSize: fontSize(13),
    color: TEXTCOLOR5,
    fontFamily: FONTS.FontRegular,
  },
  textGiver: {
    fontSize: fontSize(26),
    fontFamily: FONTS.FontMedium,
    color: TEXTCOLOR8,
  },
});

export default ChooseTheUser;
