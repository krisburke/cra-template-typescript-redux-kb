import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../store/counter/counterSlice';

export const rootReducer = combineReducers({
    counter: counterReducer,
});
