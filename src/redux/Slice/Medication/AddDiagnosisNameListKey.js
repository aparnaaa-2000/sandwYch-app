import {createSlice} from '@reduxjs/toolkit';

export const AddDiagnosisNameListKey = 'AddDiagnosisNameList';

const initialState = {
  isLoading: false,
  data: undefined,
  error: undefined,
  Id: undefined,
};

const slice = createSlice({
  name: AddDiagnosisNameListKey,
  initialState,
  reducers: {
    AddDiagnosislistBegin: AddDiagnosis => {
        AddDiagnosis.isLoading = true;
    },

    AddDiagnosislistSuccess: (AddDiagnosis, action) => {
        AddDiagnosis.isLoading = false;
        AddDiagnosis.data = action.payload;
        AddDiagnosis.error = undefined;
    },

    AddDiagnosislistFailure: (AddDiagnosis, action) => {
        AddDiagnosis.isLoading = false;
        AddDiagnosis.error = action.payload;
        AddDiagnosis.data = undefined;
    },

    AddDiagnosislistClear: AddDiagnosis => {
        AddDiagnosis.isLoading = false;
        AddDiagnosis.error = undefined;
        AddDiagnosis.data = undefined;
    },
  },
});

export default slice.reducer;
export const {AddDiagnosislistBegin,AddDiagnosislistClear,AddDiagnosislistFailure,AddDiagnosislistSuccess} =
  slice.actions;
