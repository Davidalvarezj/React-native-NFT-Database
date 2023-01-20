import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../assets/data/baseUrl";

export const fetchSpotlight = createAsyncThunk(
  "NFT/fetchSpotlight",
  async () => {
    const response = await fetch(baseUrl + "spotlight");
    if (!response.ok) {
      return Promise.reject("Unable to fetch, status: " + response.status);
    }
    const data = await response.json();
    return data;
  }
);

const spotlightSlice = createSlice({
  name: "spotlight",
  initialState: { isLoading: true, errMess: null, spotlightArray: [] },
  reducers: {},
  extraReducers: {
    [fetchSpotlight.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchSpotlight.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMess = null;
      state.spotlightArray = action.payload;
    },
    [fetchSpotlight.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMess = action.error ? action.error.message : "Fetch failed";
    },
  },
});

export const spotlightReducer = spotlightSlice.reducer;
