import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { gameUrl, gameScreenshotsUrl } from "../../api";

export const detailsSlice = createSlice({
  name: "details",
  initialState: {
    game: {},
    screenshots: [],
    isLoading: true
  },
  reducers: {
    fetchDetails: (state, data) => {
      return {
        ...state,
        ...data.payload,
        isLoading: false
      };
    },
    startLoading: (state) => {
      return {
        ...state,
        isLoading: true
      };
    },
  },
});

export const loadDetails = (id) => async (dispatch) => {

  dispatch(detailsSlice.actions.startLoading())
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
export const { fetchDetails, startLoading} = detailsSlice.actions;

export default detailsSlice.reducer;
