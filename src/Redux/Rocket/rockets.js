/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://api.spacexdata.com/v3/";

// slice
const rocketsSlice = createSlice({
  name: "rockets",
  initialState: {
    rockets: [],
    loading: false,
    error: null,
  },
  reducers: {
    rocketsError: (state, action) => {
      state.error = action.payload;
    },
    rocketsSuccess: (state, action) => ({ ...state, rockets: action.payload }),
    reserveRocket: (state, action) => {
      const rocket = state.rockets.find(
        (rocket) => rocket.rocket_id === action.payload
      );
      rocket.reserved = true;
    },
    cancelReservation: (state, action) => {
      const rocket = state.rockets.find(
        (rocket) => rocket.rocket_id === action.payload
      );
      rocket.reserved = false;
    },
  },
});

export default rocketsSlice.reducer;

export const {
  rocketsSuccess,
  reserveRocket,
  cancelReservation,
  rocketsError,
} = rocketsSlice.actions;

export const fetchRockets = () => async (dispatch) => {
  try {
    const rockets = await axios.get("/rockets");
    dispatch(rocketsSuccess(rockets.data));
  } catch (error) {
    dispatch(rocketsError(error.message));
  }
};
