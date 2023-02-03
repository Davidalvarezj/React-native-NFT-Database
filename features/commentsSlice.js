import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase.config";
import { collection, getDocs, addDoc } from "firebase/firestore";

export const fetchComments = createAsyncThunk("NFT/fetchComments", async () => {
  const querySnapshot = await getDocs(collection(db, "comments"));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });

  console.log("fetch-Comments: ", data);
  return data;
});

const commentsSlice = createSlice({
  name: "comments",
  initialState: { isLoading: true, errMess: null, commentsArray: [] },
  reducers: {
    addComment: (comments, action) => {
      comments.commentsArray.push(action.payload);

      // console.log("commentsState--", comments);
      // console.log("comments-action.payload--", action.payload);

      sendcommentsfirestore(comments.commentsArray);
    },
  },
  extraReducers: {
    [fetchComments.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMess = null;
      state.commentsArray = action.payload;
    },
    [fetchComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMess = action.error ? action.error.message : "Fetch failed";
    },
  },
});

export const { addComment } = commentsSlice.actions;
export const commentsReducer = commentsSlice.reducer;

async function sendcommentsfirestore(comments) {
  let index = comments.length - 1;
  const Sendcoment = await addDoc(collection(db, "comments"), comments[index]);
  // console.log("Sendcoment", Sendcoment);
}
