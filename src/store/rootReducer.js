import { combineReducers } from '@reduxjs/toolkit';
import housesReducer from './houses/housesSlice';
import authReducer from './auth/authSlice';

const rootReducer = combineReducers({
  houses: housesReducer,
  auth: authReducer
});

export default rootReducer;
