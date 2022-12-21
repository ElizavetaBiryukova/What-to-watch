
import { createReducer } from '@reduxjs/toolkit';
import { films } from '../mocks/films';
import { Genres } from '../const';
import { setGenre, setFilmsList } from './action';
import {Films} from '../types/types';

type InitialState = {
  genre: string;
  films: Films;
}

const initialState : InitialState = {
  genre: Genres.AllGenres,
  films: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload;
      state.films = films.filter((film) => film.genre === state.genre || state.genre === Genres.AllGenres);
    })
    .addCase(setFilmsList, (state, action) => {
      state.films = action.payload;

    });
});

export { reducer };
