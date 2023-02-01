import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
  name: "comments",
  initialState: [],
  reducers: {
    addComment: (comments, action) => {
      comments.push(action.payload);

      console.log("commentsState--", comments);
      console.log("comments-action.payload--", action.payload);
    },
  },
});

export const { addComment } = commentsSlice.actions;
export const commentsReducer = commentsSlice.reducer;
