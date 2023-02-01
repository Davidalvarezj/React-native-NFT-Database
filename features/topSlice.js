import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../assets/data/baseUrl";
import { db } from "../firebase.config";
import { collection, getDocs } from "firebase/firestore";

export const fetchTop = createAsyncThunk("NFT/fetchTop", async () => {
  const querySnapshot = await getDocs(collection(db, "top"));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  data.sort((a, b) => a.rankedpos - b.rankedpos);

  return data;

  // const response = await fetch(baseUrl + "Top");
  // if (!response.ok) {
  //   return Promise.reject("Unable to fetch, status: " + response.status);
  // }
  // const data = await response.json();
  // return data;
});

const topSlice = createSlice({
  name: "top",
  initialState: { isLoading: true, errMess: null, topArray: [] },
  reducers: {},
  extraReducers: {
    [fetchTop.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchTop.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMess = null;
      state.topArray = action.payload;
    },
    [fetchTop.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMess = action.error ? action.error.message : "Fetch failed";
    },
  },
});

export const topReducer = topSlice.reducer;
