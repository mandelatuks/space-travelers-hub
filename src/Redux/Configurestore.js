import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './Mission/Mission';
import rockets from './Rocket/rockets';

const store = configureStore({
  reducer: {
    rockets,
    missions: missionsReducer,
  },
});

export default store;
