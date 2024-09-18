import React, {useState, useEffect} from 'react';
import {LogBox, Text, TextInput} from 'react-native';
import store from './src/redux/store';
import {Provider} from 'react-redux';

import 'react-native-gesture-handler';

import NetInfo from '@react-native-community/netinfo';
import AuthStack from './src/Navigation/Main/authstack';
import WorkerDashboard from './src/Screens/Main/CaseManager/SocialWorkerDashboard/WorkerDashboard';
import AvailableResource from './src/Screens/Main/CaseManager/Resources/AvailableResource';
import Transportation from './src/Screens/Main/CaseManager/Resources/Transportation';
import Food from './src/Components/CarePartner/Assessments/SDOH/Food';
import FoodResource from './src/Screens/Main/CaseManager/Resources/Food';
import AddCareTeam from './src/Screens/Main/CaseManager/CareTeam/AddCareTeam';
import TaskDashboard from './src/Screens/Main/CaseManager/Tasks/TaskDashboard';
import CreateAssessment from './src/Screens/Main/CaseManager/Tasks/CreateAssessment';
import AssignAssessment from './src/Screens/Main/CaseManager/Tasks/AssignAssessment';
import TaskDetails from './src/Screens/Main/CaseManager/Tasks/TaskDetails';
import CreateTask from './src/Screens/Main/CaseManager/Tasks/CreateTask';
import EditTask from './src/Screens/Main/CaseManager/Tasks/EditTask';
import MedMain from './src/Screens/Main/CaseManager/Medication/MedMain';
import MoreInfo from './src/Screens/Main/CaseManager/Tasks/MoreInfo';


LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

if (Text.defaultProps == null) {
  // To disable the device fontsize
  Text.defaultProps = {};
  Text.defaultProps.allowFontScaling = false;
}

if (TextInput.defaultProps == null) {
  TextInput.defaultProps = {};
  TextInput.defaultProps.allowFontScaling = false;
}

const App = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    // Cleanup function
    return () => unsubscribe();
  }, []);

  return (
    <Provider store={store}>

      <AuthStack /> 

      
      {/* SOCIAL WORKER SCREENS
      <WorkerDashboard /> */}
      {/* <AvailableResource/> */}
      {/* <Transportation/> */}
   {/* <FoodResource/> */}

   {/* <AddCareTeam/> */}
   {/* <TaskDashboard/> */}
   {/* <CreateAssessment/> */}
   {/* <TaskDetails/> */}
   {/* <AssignAssessment/> */}
   {/* <CreateTask/> */}
   {/* <EditTask/> */}

   {/* <MedMain/> */}
   {/* <MoreInfo/> */}
    </Provider>
  );
};

export default App;


