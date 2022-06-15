import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// slice
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    loading: false,
    error: null,
  },
  reducers: {
    rocketsSuccess: (state, action) => {
      state.rockets = action.payload;
      state.loading = false;
    },
    rocketsError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default rocketsSlice.reducer;

export const {
  rocketsSuccess,
  rocketsError,
} = rocketsSlice.actions;

export const fetchRockets = () => async (dispatch) => {
  try {
    const rockets = await axios.get('https://api.spacexdata.com/v3/rockets');
    dispatch(rocketsSuccess(rockets.data));
  } catch (error) {
    dispatch(rocketsError(error.message));
  }
};
