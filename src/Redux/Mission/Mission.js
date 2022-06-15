import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/missions';

export const FetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const response = await fetch(url);
    const info = await response.json();
    return info;
  },
);

export const missionsSlice = createSlice({
  name: 'missions',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchMissions.fulfilled, (state, action) => action.payload);
  },
});

export const selectMission = (state) => state.missions;
export default missionsSlice.reducer;
