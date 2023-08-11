import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./slices/gamesSlice";
import detailsReducer from "./slices/detailsSlice";

export default configureStore({
  reducer: {
    games: gamesReducer,
    details: detailsReducer
  },
});
