import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rockets from './Rocket/rockets';

const reducer = combineReducers({
  rockets,

});

const store = configureStore({
  reducer,
  middleware: [thunk, logger],
});

export default store;
