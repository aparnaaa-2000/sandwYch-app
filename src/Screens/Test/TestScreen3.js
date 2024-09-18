// import React, { useState } from 'react';
// import { View, Text, TextInput, ProgressBarAndroid } from 'react-native';
// import * as Progress from 'react-native-progress';

// const FormWithProgressBar = () => {
//   const [inputs, setInputs] = useState({
//     input1: '',
//     input2: '',
//     input3: '',
//   });

//   const handleInputChange = (inputName, value) => {
//     setInputs((prevInputs) => ({
//       ...prevInputs,
//       [inputName]: value,
//     }));
//   };

//   const calculateProgress = () => {
//     const numInputs = Object.keys(inputs).length;
//     const completedInputs = Object.values(inputs).filter((value) => value !== '').length;
//     return (completedInputs / numInputs) * 100;
//   };

//   return (+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//     <View style={{ padding: 20, margin:  20}}>
//       <TextInput
//         placeholder="Input 1"
//         onChangeText={(value) => handleInputChange('input1', value)}
//         value={inputs.input1}
//       />
//       <TextInput
//         placeholder="Input 2"
//         onChangeText={(value) => handleInputChange('input2', value)}
//         value={inputs.input2}
//       />
//       <TextInput
//         placeholder="Input 3"
//         onChangeText={(value) => handleInputChange('input3', value)}
//         value={inputs.input3}
//       />

//       {/* <ProgressBarAndroid
//         styleAttr="Horizontal"
//         indeterminate={false}
//         progress={calculateProgress() / 100}
//       /> */}
//       <Progress.Bar progress={calculateProgress() / 100} width={200} />

//       <Text style={{ marginTop: 10 }}>Progress: {Math.round(calculateProgress())}%</Text>
//     </View>
//   );
// };

// export default FormWithProgressBar;
