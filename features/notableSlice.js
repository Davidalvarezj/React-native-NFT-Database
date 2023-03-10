import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../assets/data/baseUrl";
import { db } from "../firebase.config";
import { collection, getDocs } from "firebase/firestore";

export const fetchNotable = createAsyncThunk("NFT/fetchNotable", async () => {
  const querySnapshot = await getDocs(collection(db, "notable"));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  return data;

  // const response = await fetch(baseUrl + "notable");
  // if (!response.ok) {
  //   return Promise.reject("Unable to fetch, status: " + response.status);
  // }
  // const data = await response.json();
  // return data;
});

const notableSlice = createSlice({
  name: "notable",
  initialState: { isLoading: true, errMess: null, notableArray: [] },
  reducers: {},
  extraReducers: {
    [fetchNotable.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchNotable.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMess = null;
      state.notableArray = action.payload;
    },
    [fetchNotable.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMess = action.error ? action.error.message : "Fetch failed";
    },
  },
});

export const notableReducer = notableSlice.reducer;
