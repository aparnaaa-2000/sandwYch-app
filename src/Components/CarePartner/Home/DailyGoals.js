import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import { PRIMARYCOLOR, PUREWHITE } from '../../../Constants/Colors/Colors'
import { GDESC, GOALS } from '../../../Constants/Texts'
import { IconFigure } from '../../../../assets'
import { DEFAULTWIDTH } from '../../../Constants/styles/styles'
import { GlobalSize, fontSize } from '../../../Constants/ResponsiveFont/ResponsiveFonts'

const DailyGoals = () => {
  return (
    <Card
        style={styles.container}>
        <View
          style={styles.absoluteContainer}>
          <View style={{justifyContent: 'center'}}>
            <Text
              style={styles.heading}>
              Betty's {GOALS}
            </Text>
            <Text
              style={styles.desc}>
              5/7 {GDESC}
            </Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <IconFigure width={80} height={80} />
          </View>
        </View>
        <View
          style={styles.opaqueContainer}></View>
      </Card>
  )
}

const styles = new StyleSheet.create({
    container: {
        backgroundColor: PRIMARYCOLOR,
       // height: 150,
        margin: GlobalSize(10),
        padding: GlobalSize(16),
        marginLeft:DEFAULTWIDTH*0.05,
        marginRight:DEFAULTWIDTH*0.05
      },
      absoluteContainer : {
        height: GlobalSize(120),
        width: '100%',
        borderRadius: GlobalSize(12),
        borderColor: PUREWHITE,
        borderWidth: 0.5,
        position: 'absolute',
        padding: GlobalSize(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      heading: {
        color: PUREWHITE,
        fontFamily: 'Inter-Regular',
        fontSize: fontSize(14),
      },
      desc: {
        color: PUREWHITE,
        fontSize: fontSize(24),
        fontFamily: 'Inter-SemiBold',
      },
      opaqueContainer: {
        height: GlobalSize(120),
        backgroundColor: PUREWHITE,
        opacity: 0.3,
        borderRadius: GlobalSize(12),
      }
})

export default DailyGoals