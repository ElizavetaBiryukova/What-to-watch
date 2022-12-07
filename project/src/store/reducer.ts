
import { createReducer } from '@reduxjs/toolkit';
import { films } from '../mocks/films';
// import { ActionType, Actions } from '../types/action';
import { Genres } from '../const';
import { setGenre, setFilmsList } from './action';

const initialState = {
  genre: Genres.AllGenres,
  listFilms: films,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(setFilmsList, (state) => {
      if (state.genre === initialState.genre) {
        state.listFilms = films;
        return;
      }
      state.listFilms = films.filter((film) => film.genre === state.genre);
    });
});

export { reducer };
