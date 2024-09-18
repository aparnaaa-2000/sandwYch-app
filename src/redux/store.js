import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loginSliceKey from './Slice/LoginSliceKey';
import OtpSliceKey from './Slice/OTPSliceKey';
import resetSliceKey from './Slice/ResetPswKey';
import verifySliceKey from './Slice/SignupVerifyEmail';
import verifyRSliceKey from './Slice/VerifyRstEmail';
import OtpRSliceKey from './Slice/VerifyResetOtp';
import registerSliceKey from './Slice/RegisterKey';
import ResendOtpEmail from './Slice/ResendOtpEmail';
import CreatePswSliceKey from './Slice/CreatePswSliceKey';
import ResetOtpResendSliceKey  from './Slice/ResendOtpResetEmail';

const reducer = combineReducers({

  login: loginSliceKey,
  otp: OtpSliceKey,
  reset: resetSliceKey,
  verify: verifySliceKey,
  verifyEmailReset: verifyRSliceKey,
  verifyOtpReset: OtpRSliceKey,
  register:registerSliceKey,
  ResendOTPER: ResetOtpResendSliceKey,
  ResendOTPESignup:ResendOtpEmail,
  createPSW: CreatePswSliceKey

});
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
