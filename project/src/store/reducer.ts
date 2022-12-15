
import { createReducer } from '@reduxjs/toolkit';
import { films } from '../mocks/films';
import { Genres } from '../const';
import { setGenre, setFilmsList } from './action';
import {Films} from '../types/types';

type InitialState = {
  genre: string;
  films: Films;
  filteredFilms: Films;
}

const initialState : InitialState = {
  genre: Genres.AllGenres,
  films: [],
  filteredFilms: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload;
      state.films = films.filter((film) => film.genre === state.genre);
    })
    .addCase(setFilmsList, (state, action) => {
      state.films = action.payload;
      state.filteredFilms = action.payload;
    });
});

export { reducer };
