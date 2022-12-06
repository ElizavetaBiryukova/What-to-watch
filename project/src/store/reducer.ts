import { State } from '../types/state';
import {films} from '../mocks/films';

const initialState = {
  genre: 'All genres',
  listFilms: films,
}

const reducer = (state: State = initialState, action: Actions): State =
