import { createAction } from '@reduxjs/toolkit';
import { Films } from '../types/types';

export const setGenre = createAction('main/setGenre', (value) => ({ payload: value }));

export const setFilmsList = createAction<Films>('main/setFilmsList');
