
//initializing axios
const axios = require('axios').default;
const baseUrl = 'http://18.237.111.97:7000/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginBegin, loginClear, loginFailure, loginSuccess } from './Slice/LoginSliceKey';
import { resetBegin, resetClear, resetFailure, resetSuccess } from './Slice/ResetPswKey';
import { verifyBegin, verifyClear, verifyFailure, verifySuccess } from './Slice/SignupVerifyEmail';
import { OtpBegin, OtpClear, OtpFailure, otpSuccess } from './Slice/OTPSliceKey';
import { verifyRBegin, verifyRClear, verifyRFailure, verifyRSuccess } from './Slice/VerifyRstEmail';
import { OtpRBegin, OtpRClear, OtpRFailure, OtpRSuccess } from './Slice/VerifyResetOtp';
import { registerBegin, registerClear, registerFailure, registerSuccess } from './Slice/RegisterKey';
import { createBegin, createClear, createFailure, createSuccess } from './Slice/CreatePswSliceKey';
import { ResendOtpResetBegin, ResendOtpResetClear, ResendOtpResetFailure, ResendOtpResetSuccess } from './Slice/ResendOtpResetEmail';
import { OtpResendBegin, OtpResendFailure, OtpResendSuccess } from './Slice/ResendOtpEmail';


//Function to verify the login credentials from api and get the response with token.
export const postLoginDetails = async (phone_number, password, dispatch,resetForm) => {

  dispatch(loginClear());
  dispatch(loginBegin());

  const req = {
    phone_number,
    password,
  };
  await axios
    .post(baseUrl + '/login', req)
    .then(response => {
      console.log('==================================== LOGIN');
      console.log(response.data.token);
      console.log('==================================== LOGIN');
      dispatch(loginSuccess(response.data));
      AsyncStorage.setItem('TOKENAuth', response.data.token);
    })
    .catch(error => {
      dispatch(loginFailure(error.response));
    
      console.log(error.response.status);
      console.log('==================================== LOGIN',error);
    });
};


//Login using email and password

export const LoginEmail = async (email, password, dispatch) => {

  dispatch(loginClear());
  dispatch(loginBegin());

  const req = {
    email,
    password,
  };
  await axios
    .post(baseUrl + '/loginEmail', req)
    .then(response => {
      console.log('==================================== LOGIN');
      console.log(response.data.token);
      console.log('==================================== LOGIN',);
      dispatch(loginSuccess(response.data));
      AsyncStorage.setItem('TOKENAuth', response.data.token);
    })
    .catch(error => {
      dispatch(loginFailure(error.response));

      console.log(error.response.status);
      console.log('==================================== LOGIN',error.response);
    });
};


//verify email for new register
export const VerifyEmailsignup = async (email, dispatch,resetForm) => {

  dispatch(verifyClear());
  dispatch(verifyBegin());

  const req = {
    email
  };
  await axios
    .post(baseUrl + '/sendVerificationCodeEmail', req)
    .then(res => {
      console.log('==================================== LOGIN');
      console.log("success message...............", res.data);
      console.log('==================================== LOGIN');
      AsyncStorage.setItem('EMAIL',email);
      dispatch(verifySuccess(res.data));

    })
    .catch(error => {
      dispatch(verifyFailure(error.response));
  
      console.log("sendverificationCode.....................", error.response);
      console.log('==================================== LOGIN');
    });
};

//verify email for new register
export const VerifyPhonesignup = async (email, dispatch) => {

  dispatch(verifyClear());
  dispatch(verifyBegin());

  const req = {
    phone_number
  };
  await axios
    .post(baseUrl + '/sendVerificationCodeEmail', req)
    .then(res => {
      console.log('==================================== LOGIN');
      console.log(res.data.token);
      console.log('==================================== LOGIN');
      dispatch(verifySuccess(res.data));

    })
    .catch(error => {
      dispatch(verifyFailure(error.response));
      console.log(error.response);
      console.log('==================================== LOGIN');
    });
};

//Verify the OTP - New user register
export const VerifyOtpRegister = async (verification_code, dispatch) => {

  dispatch(OtpClear());
  dispatch(OtpBegin());

  const req = {
    verification_code
  };
  await axios
    .post(baseUrl + '/verifyVerificationCode', req)
    .then(res => {
      console.log('==================================== LOGIN');
      console.log("SUCESS MESSAGE..............",res.data);
      console.log('==================================== LOGIN');
      dispatch(otpSuccess(res.data));

    })
    .catch(error => {
      dispatch(OtpFailure(error.response));
      console.log(error.response);
      console.log('==================================== LOGIN');
    });
};

// Verify the resend otp - signup 
export const ResendVerifyOtp = async (email, dispatch, token) => {

  dispatch(OtpResendBegin());

  const req = {
    email
  };

  await axios
    .post(baseUrl + '/resendVerificationCode', req)
    .then(res => {
      console.log(res.data.token);

      AsyncStorage.setItem('TOKENAuth', response.data.token);
      console.log('==================================== LOGIN success');
      dispatch(OtpResendSuccess(res.data));
    })
    .catch(error => {
      dispatch(OtpResendFailure(error.response));
      console.log(error.response);
      console.log('==================================== LOGIN');
    });
};

//verify email for reset the password
export const verifyEmailReset = async (email, dispatch) => {

  dispatch(verifyRClear());
  dispatch(verifyRBegin());

  const req = {
    email
  };

  await axios
    .post(baseUrl + '/sendVerificationCodeEmailResetPassword', req)
    .then(response => {

      AsyncStorage.setItem('TOKENAuth', response.data.token);
      console.log('==================================== LOGIN', response.data);
      dispatch(verifyRSuccess(response.data));

    })
    .catch(error => {
      dispatch(verifyRFailure(error.response));
    });
};

// Verify the otp for resetting the password
export const VerifyOtpReset = async (verification_code, dispatch, token) => {

  dispatch(OtpRClear());
  dispatch(OtpRBegin());

  // Set the Bearer token in the headers
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  const req = {
    verification_code
  };

  await axios
    .post(baseUrl + '/verifyVerificationCodeResetPassword', req, { headers })
    .then(res => {
      console.log(res.data.token);
      AsyncStorage.setItem('TOKENAuth', res.data.token);
      console.log('==================================== rset passord otp');
      dispatch(OtpRSuccess(res.data));
    })
    .catch(error => {
      dispatch(OtpRFailure(error.response));
      console.log(error.response);
      console.log('==================================== LOGIN');
    });
};


//Resend otp for resetting the password

export const ResendVerifyOtpReset = async (email, dispatch) => {

  dispatch(ResendOtpResetClear());
  dispatch(ResendOtpResetBegin())
  const req = {
    email
  };

  await axios
    .post(baseUrl + '/resendVerificationCodeEmailResetPassword', req)
    .then(res => {
      console.log(res.data.token);

      AsyncStorage.setItem('TOKENAuth', response.data.token);
      console.log('====================================resend potp reset password');
      dispatch(ResendOtpResetSuccess(res.data));
    })
    .catch(error => {
      dispatch(ResendOtpResetFailure(error.response));
    
      console.log(error.response);
      console.log('==================================== LOGIN');
    });
};

// Reset Password
export const ResetPassword = async (password, password_confirmation, token, dispatch) => {

  dispatch(resetClear());
  dispatch(resetBegin());

  // Set the Bearer token in the headers
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  const req = {
    password,
    password_confirmation,
  };
  await axios
    .post(baseUrl + '/resetPassword', req, { headers })
    .then(res => {
      console.log('==================================== LOGIN');
      console.log(res.data.token);
      console.log('==================================== LOGIN');
      dispatch(resetSuccess(res.data));
      AsyncStorage.setItem('TOKENAuth', res.data.token);

    })
    .catch(error => {
      dispatch(resetFailure(error));
      console.log('==================================== LOGIN');

      console.log(error.response.status);
      console.log('==================================== LOGIN');
    });
};


// Register new caregiver
export const RegisterUser = async (name, email, relationship, code, phone_number, address, zipcode, dob, gender, dispatch) => {
  console.log("data passing..............", name, email, relationship, code, phone_number, address, zipcode, dob, gender)

  dispatch(registerClear())
  dispatch(registerBegin())
  const req = {
    name,
    email,
    relationship,
    code,
    phone_number,
    address,
    zipcode,
    dob,
    gender
  };

  console.log("data.............", req)
  await axios
    .post(baseUrl + '/UserRegister', req)
    .then(res => {
      console.log('==================================== LOGIN', res?.data);
      console.log(res.data.token);
      console.log('==================================== LOGIN');
      AsyncStorage.setItem('TOKENAuth', res.data.token);
      dispatch(registerSuccess(res?.data))

    })
    .catch(error => {
      dispatch(registerFailure(error?.response))
      console.log('==================================== LOGIN', error?.response);

      console.log(error.response.status);
      console.log('==================================== LOGIN');
    });
};

// create new password for the new user
export const CreatePassword = async (password, password_confirmation, token, dispatch) => {

  dispatch(createClear());
  dispatch(createBegin());

  // Set the Bearer token in the headers
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  const req = {
    password,
    password_confirmation,
  };

  await axios
    .post(baseUrl + '/generatePassword', req, { headers })
    .then(res => {
      console.log('==================================== LOGIN');
      console.log(res.data.token);
      console.log('==================================== LOGIN');
      dispatch(createSuccess(res.data));
      AsyncStorage.setItem('TOKENAuth', res.data.token);

    })
    .catch(error => {
      dispatch(createFailure(error));
      console.log('==================================== LOGIN');

      console.log(error.response.status);
      console.log('==================================== LOGIN');
    });
};