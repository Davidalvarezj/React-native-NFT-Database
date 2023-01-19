import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../assets/data/baseUrl";

export const fetchCategories = createAsyncThunk(
  "NFT/fetchCategories",
  async () => {
    const response = await fetch(baseUrl + "Categories");
    if (!response.ok) {
      return Promise.reject("Unable to fetch, status: " + response.status);
    }
    const data = await response.json();
    return data;
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: { isLoading: true, errMess: null, categoriesArray: [] },
  reducers: {},
  extraReducers: {
    [fetchCategories.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMess = null;
      state.campsitesArray = action.payload;
    },
    [fetchCategories.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMess = action.error ? action.error.message : "Fetch failed";
    },
  },
});

export const categoriesReducer = categoriesSlice.reducer;
