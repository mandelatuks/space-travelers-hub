import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rockets from './Rocket/rockets';
import missionsReducer from './Mission/Mission';

const reducer = combineReducers({
  rockets, missionsReducer,

});

const store = configureStore({
  reducer,
  middleware: [thunk, logger],
});

export default store;
