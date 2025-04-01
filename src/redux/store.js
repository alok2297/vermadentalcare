import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from './bookingSlice';

// Clear store configuration
export const store = configureStore({
  reducer: {
    booking: bookingReducer
  }
});