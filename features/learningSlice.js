import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../assets/data/baseUrl";
import { db } from "../firebase.config";
import { collection, getDocs } from "firebase/firestore";

export const fetchLearning = createAsyncThunk("NFT/fetchLearning", async () => {
  const querySnapshot = await getDocs(collection(db, "learning"));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  return data;

  // const response = await fetch(baseUrl + "Learning");
  // if (!response.ok) {
  //   return Promise.reject("Unable to fetch, status: " + response.status);
  // }
  // const data = await response.json();
  // return data;
});

const learningSlice = createSlice({
  name: "learning",
  initialState: { isLoading: true, errMess: null, learningArray: [] },
  reducers: {},
  extraReducers: {
    [fetchLearning.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchLearning.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMess = null;
      state.learningArray = action.payload;
    },
    [fetchLearning.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMess = action.error ? action.error.message : "Fetch failed";
    },
  },
});

export const learningReducer = learningSlice.reducer;
