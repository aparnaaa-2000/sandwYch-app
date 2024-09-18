import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import { BACKGROUNDWHITE, BORDERCOLOR2, GREYBACKGROUND1, LINECOLOR1, PLACEHOLDERCOLOR3, PUREWHITE, TEXTCOLOR7 } from '../../../../Constants/Colors/Colors';
import DEFAULTSTYLES, { DEFAULTHEIGHT, DEFAULTWIDTH } from '../../../../Constants/styles/styles';
import { ArrowF, BlackDots, LogoSmall } from '../../../../../assets';
import PatientDetails from '../../../../Components/CarePartner/PatientJourney/PatientDetails';
import { FONTS } from '../../../../Constants/Fonts';


import RecentDgsis from '../../../../Components/CarePartner/PatientJourney/RecentDgsis';

import PatientStats from '../../../../Components/CarePartner/PatientJourney/PatientStats';
import SDOHStats from '../../../../Components/CarePartner/PatientJourney/SDOHStats';
import RecentDischarge from '../../../../Components/CarePartner/PatientJourney/RecentDischarge';
import PreviousDischarge from '../../../../Components/CarePartner/PatientJourney/PreviousDischarge';
import Surgery from '../../../../Components/CarePartner/PatientJourney/Surgery';

import Diagnosis from '../../../../Components/Common/Profile/Diagnosis';
import PatientInfo from '../../../../Components/CarePartner/PatientJourney/PatientInfo';
import About from '../../../../Components/Common/Profile/About';
import Access from '../../../../Components/CarePartner/PatientJourney/Access';
import { GlobalSize, fontSize, height, width } from '../../../../Constants/ResponsiveFont/ResponsiveFonts';
import DietPlan from '../../../../Components/CarePartner/PatientJourney/DietPlan';

export default function Journey({ navigation }) {


  const JourneyItems = [
    {
      id: 1,
      Title: 'Details'
    },
    {
      id: 2,
      Title: 'Health Metrics'
    },
    {
      id: 3,
      Title: 'Stats'
    },
    {
      id: 4,
      Title: 'Event'
    },
    {
      id: 5,
      Title: 'Access'
    },
    {
      id: 6,
      Title: 'Diet'
    }
  ]

  const [itemState, setItemState] = useState(1)
  const [GrantData, setGrantData] = useState([])
  { console.log("filter data...................", GrantData?.length) }

  useEffect(() => {
    if (GrantData?.length !== GrantData?.length) {
      setGrantData(GrantData)
    }
    console.log("grat................", GrantData)
  }, [GrantData])


  const [users, setUsers] = useState([
    {
      id: 1,
      Name: 'Primary Physician',
      selected: false,
      data: [

        { id: 1, name: 'Basic Info', selected: false },
        { id: 2, name: 'Personal Info', selected: false },
        { id: 3, name: 'Medical data', selected: false },
        { id: 4, name: 'Diagnosis data', selected: false }
      ]

    },
    {
      id: 2,
      Name: 'Physicians',
      selected: false,
      data: [

        { id: 1, name: 'Basic Info', selected: false },
        { id: 2, name: 'Personal Info', selected: false },
        { id: 3, name: 'Medical data', selected: false },
        { id: 4, name: 'Diagnosis data', selected: false }
      ]
    },
    {
      id: 3,
      Name: 'Nurses',
      selected: false,
      data: [

        { id: 1, name: 'Basic Info', selected: false },
        { id: 2, name: 'Personal Info', selected: false },
        { id: 3, name: 'Medical data', selected: false },
        { id: 4, name: 'Diagnosis data', selected: false }
      ]
    },
    {
      id: 4,
      Name: 'Hospital Admin',
      selected: false,
      data: [

        { id: 1, name: 'Basic Info', selected: false },
        { id: 2, name: 'Personal Info', selected: false },
        { id: 3, name: 'Medical data', selected: false },
        { id: 4, name: 'Diagnosis data', selected: false }
      ]
    },
    {
      id: 5,
      Name: 'Case Manager',
      selected: false,
      data: [

        { id: 1, name: 'Basic Info', selected: false },
        { id: 2, name: 'Personal Info', selected: false },
        { id: 3, name: 'Medical data', selected: false },
        { id: 4, name: 'Diagnosis data', selected: false }
      ]
    },
    {
      id: 6,
      Name: 'Primary Caregiver',
      selected: false,
      data: [

        { id: 1, name: 'Basic Info', selected: false },
        { id: 2, name: 'Personal Info', selected: false },
        { id: 3, name: 'Medical data', selected: false },
        { id: 4, name: 'Diagnosis data', selected: false }
      ]
    },
    {
      id: 7,
      Name: 'Caregiver',
      selected: false,
      data: [

        { id: 1, name: 'Basic Info', selected: false },
        { id: 2, name: 'Personal Info', selected: false },
        { id: 3, name: 'Medical data', selected: false },
        { id: 4, name: 'Diagnosis data', selected: false }
      ]
    },
    {
      id: 8,
      Name: 'Support Member',
      selected: false,
      data: [

        { id: 1, name: 'Basic Info', selected: false },
        { id: 2, name: 'Personal Info', selected: false },
        { id: 3, name: 'Medical data', selected: false },
        { id: 4, name: 'Diagnosis data', selected: false }
      ]
    },
    {
      id: 9,
      Name: 'MPOA',
      selected: false,
      data: [

        { id: 1, name: 'Basic Info', selected: false },
        { id: 2, name: 'Personal Info', selected: false },
        { id: 3, name: 'Medical data', selected: false },
        { id: 4, name: 'Diagnosis data', selected: false }
      ]
    },
    {
      id: 10,
      Name: 'LPOA',
      selected: false,
      data: [

        { id: 1, name: 'Basic Info', selected: false },
        { id: 2, name: 'Personal Info', selected: false },
        { id: 3, name: 'Medical data', selected: false },
        { id: 4, name: 'Diagnosis data', selected: false }
      ]
    },

  ])
  return (
    <SafeAreaView style={DEFAULTSTYLES.AndroidSafeArea}>
      <StatusBar backgroundColor={BACKGROUNDWHITE} barStyle={'dark-content'} style={{ flex: 0 }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>

          <View style={styles.flexView}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ marginRight: GlobalSize(10) }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <ArrowF height={width(22)} width={height(22)} />
                </TouchableOpacity>
              </View>

              <View>
                <LogoSmall />
              </View>

            </View>

            <View>
            </View>

            {/* <View>
              <BlackDots />
            </View> */}
          </View>

          <View>
            <PatientDetails />
          </View>

          <View style={styles.tabView}>
            <View style={styles.cardView}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {JourneyItems?.map((item) => {
                  return (

                    <TouchableOpacity
                      style={itemState == item.id ?
                        styles.selectView :
                        styles.unselectView}
                      onPress={() => setItemState(item.id)}>
                      <Text style={styles.textTitle}>{item.Title}</Text>
                    </TouchableOpacity>

                  )
                })}
              </ScrollView>
            </View>
          </View>

          <View style={DEFAULTSTYLES.alignView}>
            <View style={styles.lineView} />
          </View>

          {itemState == 1 ?
            <View>
              <View style={styles.bottomView}>

                <About
                  Title={'About'}
                  Edit={true}
                  Phone={'(01) 542-552277'}
                  Gender={null}
                  DOB={'12/10/1890'}
                  navigation={navigation}
                />
              </View>

              <View style={styles.bottomView}>
                <PatientInfo />
              </View>
            </View> :
            itemState == 2 ?
              <View>
                <View>
                  <RecentDgsis />
                </View>

                <View style={{ top: GlobalSize(-20) }}>
                  <Diagnosis title={'Ongoing Diagnosis'} />
                </View>

                <View style={{ top: GlobalSize(-20) }}>
                  <Diagnosis title={'Previous Diagnosis'} />
                </View>
              </View> :
              itemState == 3 ?
                <View>

                  <View>
                    <PatientStats navigation={navigation} />
                  </View>

                  <View>
                    <SDOHStats />
                  </View>
                </View> :

                itemState == 4 ?
                  <View>
                    <View>
                      <RecentDischarge />
                    </View>

                    <View>
                      <PreviousDischarge />
                    </View>

                    <View>
                      <Surgery />
                    </View>

                  </View> :

                  itemState == 5 ?
                    <View style={DEFAULTSTYLES.alignView}>
                      <Access
                        users={users}
                        setUsers={setUsers}
                        GrantData={GrantData}
                        setGrantData={setGrantData} />
                    </View> :
                    <View>
                      <DietPlan />
                    </View>}
        </View>


      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  flexView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: DEFAULTWIDTH * 0.05,
    marginRight: DEFAULTWIDTH * 0.06,
    marginBottom: DEFAULTHEIGHT * 0.02
  },
  textTitle: {
    fontFamily: FONTS.FontMedium,
    fontSize: fontSize(14),
    color: TEXTCOLOR7
  },
  cardView: {
    backgroundColor: BACKGROUNDWHITE,
    //width: DEFAULTWIDTH ,
    padding: GlobalSize(5),
    borderRadius: 8,
    borderColor: BORDERCOLOR2,
    borderWidth: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: GREYBACKGROUND1
  },
  lineView: {
    width: DEFAULTWIDTH * 0.88,
    height: 1,
    backgroundColor: LINECOLOR1,
    marginBottom: DEFAULTHEIGHT * 0.02
  },
  selectView: {
    backgroundColor: PUREWHITE,
    padding: GlobalSize(8),
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: PLACEHOLDERCOLOR3,
    shadowOpacity: 0.3,
    marginLeft: DEFAULTWIDTH * 0.02,
    marginRight: DEFAULTWIDTH * 0.02
  },
  unselectView: {
    padding: GlobalSize(6),
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: DEFAULTWIDTH * 0.03,
    paddingRight: DEFAULTWIDTH * 0.03
  },
  tabView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: DEFAULTHEIGHT * 0.02,
    marginLeft: DEFAULTWIDTH * 0.05,
    marginRight: DEFAULTWIDTH * 0.05
  },
  bottomView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: DEFAULTHEIGHT * 0.02
  }
})