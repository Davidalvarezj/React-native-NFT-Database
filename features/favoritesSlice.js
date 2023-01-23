import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../assets/data/baseUrl";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    addFavorite: (favorites, action) => {
      let borrar = false;

      for (let i = 0; i < favorites.length; i++) {
        if (
          favorites[i].collection === action.payload.collection &&
          favorites[i].item === action.payload.item
        ) {
          favorites.splice(i, 1);
          console.log("Se borro del estado en index: ", i);
          i--;
          borrar = true;
        }
      }

      // JSON.favorites(obj1) === JSON.stringify(action.payload);

      if (!borrar) {
        favorites.push(action.payload);
      }

      console.log("favoritesState--", favorites);
      console.log("action.payload--", action.payload);
    },
  },
});

export const { addFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
