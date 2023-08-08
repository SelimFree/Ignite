import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { popularGamesUrl, upcomingGamesUrl, newGamesUrl } from "../../api";

export const gamesSlice = createSlice({
  name: "games",
  initialState: {
    popular: [],
    new: [],
    upcoming: [],
    searched: [],
  },
  reducers: {
    fetchGames: (state, data) => {
      return {
        ...state,
        ...data.payload,
      };
    },
  },
});

export const loadGames = () => async (dispatch) => {
  const popularGames = await axios.get(popularGamesUrl);
  const upcomingGames = await axios.get(upcomingGamesUrl);
  const newGames = await axios.get(newGamesUrl);

  dispatch(
    gamesSlice.actions.fetchGames({
      popular: popularGames.data.results,
      upcoming: upcomingGames.data.results,
      new: newGames.data.results,
    })
  );
};

// Action creators are generated for each case reducer function
export const { fetchGames } = gamesSlice.actions;

export default gamesSlice.reducer;
