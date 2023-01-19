// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { baseUrl } from "../assets/data/baseUrl";

// export const fetchSpotligth = createAsyncThunk(
//   "NFT/fetchSpotligth",
//   async () => {
//     const response = await fetch(baseUrl + "Spotligth");
//     if (!response.ok) {
//       return Promise.reject("Unable to fetch, status: " + response.status);
//     }
//     const data = await response.json();
//     return data;
//   }
// );

// const spotligthSlice = createSlice({
//   name: "spotligth",
//   initialState: { isLoading: true, errMess: null, spotligthArray: [] },
//   reducers: {},
//   extraReducers: {
//     [fetchSpotligth.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [fetchSpotligth.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       state.errMess = null;
//       state.campsitesArray = action.payload;
//     },
//     [fetchSpotligth.rejected]: (state, action) => {
//       state.isLoading = false;
//       state.errMess = action.error ? action.error.message : "Fetch failed";
//     },
//   },
// });

// export const spotligthReducer = spotligthSlice.reducer;
