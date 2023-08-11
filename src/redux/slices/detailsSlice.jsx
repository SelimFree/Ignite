import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { gameUrl, gameScreenshotsUrl } from "../../api";

export const detailsSlice = createSlice({
  name: "details",
  initialState: {
    game: {},
    screenshots: []
  },
  reducers: {
    fetchDetails: (state, data) => {
      return {
        ...state,
        ...data.payload,
      };
    },
  },
});

export const loadDetails = (id) => async (dispatch) => {
  const gameDetails = await axios.get(gameUrl(id));
  const gameScreenshots = await axios.get(gameScreenshotsUrl(id));

  dispatch(
    detailsSlice.actions.fetchDetails({
        game: gameDetails.data,
        screenshots: gameScreenshots.data.results
    })
  );
};


// Action creators are generated for each case reducer function
export const { fetchDetails } = detailsSlice.actions;

export default detailsSlice.reducer;
