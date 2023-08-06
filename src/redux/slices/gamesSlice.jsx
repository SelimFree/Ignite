import { createSlice } from "@reduxjs/toolkit";

export const gamesSlice = createSlice({
  name: "games",
  initialState: {
    pupular: [],
    new: [],
    upcoming: [],
    searched: [],
  },
  reducers: {
    fetchGames: (state) => {
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchGames } = gamesSlice.actions;

export default gamesSlice.reducer;
