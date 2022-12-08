import { createAction } from '@reduxjs/toolkit';

export const setGenre = createAction('main/setGenre', (value) => ({ payload: value }));

export const setFilmsList = createAction('main/setFilmsList', (value) => ({payload: value}));
