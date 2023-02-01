import { configureStore } from "@reduxjs/toolkit";
import { spotlightReducer } from "../features/spotlightSlice";
import { topReducer } from "../features/topSlice";
import { categoriesReducer } from "../features/categoriesSlice";
import { learningReducer } from "../features/learningSlice";
import { favoritesReducer } from "../features/favoritesSlice";
import { notableReducer } from "../features/notableSlice";
import { commentsReducer } from "../features/commentsSlice";

export const store = configureStore({
  reducer: {
    spotlight: spotlightReducer,
    top: topReducer,
    categories: categoriesReducer,
    learning: learningReducer,
    favorites: favoritesReducer,
    notable: notableReducer,
    comments: commentsReducer,
  },
});
