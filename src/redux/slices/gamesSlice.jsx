import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { popularGamesUrl, upcomingGamesUrl, newGamesUrl, gameSearchedUrl } from "../../api";

export const gamesSlice = createSlice({
  name: "games",
  initialState: {
    popularGames: [],
    newGames: [],
    upcomingGames: [],
    searchedGames: {
      text: "",
      games: []
    },
  },
  reducers: {
    fetchGames: (state, data) => {
      return {
        ...state,
        ...data.payload,
      };
    },
    clearSearch: (state) => {
      return {
        ...state,
        searchedGames: {
          text: "",
          games: []
        },
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
      popularGames: popularGames.data.results,
      upcomingGames: upcomingGames.data.results,
      newGames: newGames.data.results,
    })
  );
};

export const loadSearchedGames = (game_name) => async (dispatch) => {
  const searchedGames = await axios.get(gameSearchedUrl(game_name));

  dispatch(
    gamesSlice.actions.fetchGames({
      searchedGames: {
        text: game_name,
        games: searchedGames.data.results
      },
    })
  );
};


// Action creators are generated for each case reducer function
export const { fetchGames, clearSearch } = gamesSlice.actions;

export default gamesSlice.reducer;
