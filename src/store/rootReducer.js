import { combineReducers } from '@reduxjs/toolkit';
import housesReducer from './houses/housesSlice';

const rootReducer = combineReducers({
  houses: housesReducer
});

export default rootReducer;
