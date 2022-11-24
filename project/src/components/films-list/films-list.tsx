import {useState} from 'react';
import { Films } from '../../types/types';
import FilmCard from '../film-card/film-card';

type FilmsListProps = {
  films: Films;
}

function FilmsList({ films }: FilmsListProps): JSX.Element {
  const [, setActiveCard] = useState('0');

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          film={film}
          onFocus={() => setActiveCard(film.id)}
        />
      ))}
    </div>

  );
}

export default FilmsList;
