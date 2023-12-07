import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    favorite: [],
}

const sliceFavorites = createSlice({
    name: 'favorities', 
    initialState,
    reducers: {
    setFavorites: (state, action) => {
      state.favorite.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorite = state.favorite.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
})

export const favoriteReducer = sliceFavorites.reducer;
export const { setFavorites, removeFromFavorites } = sliceFavorites.actions;