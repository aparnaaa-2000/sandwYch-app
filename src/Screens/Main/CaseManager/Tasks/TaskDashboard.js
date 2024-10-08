import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import DEFAULTSTYLES from '../../../../Constants/styles/styles'
import { BACKGROUNDWHITE, BORDERCOLORLINE, FOURTHCOLOR, LINECOLOR1, PUREWHITE } from '../../../../Constants/Colors/Colors'
import MainHeader from '../../../../Components/Common/Headers/MainHeader'
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts'
import DashboardHeader from '../../../../Components/Common/Headers/DashboardHeader'
import TodayTask from '../../../../Components/CaseManager/TaskDashboard/TodayTask';
import UpcomingSchedule from '../../../../Components/CaseManager/TaskDashboard/UpcomingSchedule';
import DailyStat from '../../../../Components/CaseManager/TaskDashboard/DailyStat';
import { FONTS } from '../../../../Constants/Fonts'
import AssessmentGraph from '../../../../Components/CaseManager/TaskDashboard/AssessmentGraph'


const TaskDashboard = ({ navigation }) => {
    return (
        <SafeAreaView style={DEFAULTSTYLES.AndroidSafeArea}>
            <StatusBar
                backgroundColor={BACKGROUNDWHITE}
                barStyle={'dark-content'}
                style={{ flex: 0 }} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    {/* <DashboardHeader />

                    <View style={styles.lineBorder} /> */}

                    <MainHeader navigation={navigation} />

                    <AssessmentGraph/>
                    <TodayTask />
                    <View style={styles.border} />

                    <UpcomingSchedule />

                    <View style={styles.border} />

                    <View style={{ marginBottom: GlobalSize(50) }}>
                        <DailyStat />
                    </View>
                </View>
            </ScrollView>

            <View style={styles.align}>
                <TouchableOpacity style={styles.touchBtn}>
                    <Text style={styles.textPlus}>+</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default TaskDashboard

const styles = StyleSheet.create({
    lineBorder: {
        backgroundColor: LINECOLOR1,
        height: GlobalSize(1),
        margin: GlobalSize(10),
        marginLeft: GlobalSize(8),
        marginRight: GlobalSize(8),
        marginTop: 0
    },
    border: {
        backgroundColor: BORDERCOLORLINE,
        height: GlobalSize(1),
    },
    textPlus: {
        color: PUREWHITE,
        fontFamily: FONTS.FontBold,
        fontSize: fontSize(26)
    },
    touchBtn: {
        backgroundColor: FOURTHCOLOR,
        width: GlobalSize(46),
        height: GlobalSize(46),
        borderRadius: GlobalSize(23),
        alignItems: 'center',
        justifyContent: 'center'
    },
    align: {
        position: 'absolute',
        left: 0,
        right: GlobalSize(15),
        alignItems: 'flex-end',
        bottom: GlobalSize(20)
    }
})