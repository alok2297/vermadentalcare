import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  step: 1,
  isAuthenticated: false,
  showOTPModal: false,
  formData: {
    service: "",
    doctor: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    address: "",
    email: "",
    additionalDetails: "",
  }
};

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setAuth: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setOTPModal: (state, action) => {
      state.showOTPModal = action.payload;
    },
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    resetBooking: () => initialState
  }
});

export const { 
  setStep, 
  setAuth, 
  setOTPModal, 
  updateFormData, 
  resetBooking 
} = bookingSlice.actions;

export default bookingSlice.reducer;