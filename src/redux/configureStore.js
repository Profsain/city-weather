import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import weatherReducers from './weatherreducers';

const rootReducer = combineReducers({
  weather: weatherReducers,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
