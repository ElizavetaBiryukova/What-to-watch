import { Films } from '../../types/types';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {setGenre} from '../../store/action';
import { Genres } from '../../const';

type Props = {
  films: Films;
}

function GenresList ({ films }: Props) {
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector((state) => state.genre);

  const genreList = new Set<string>();
  genreList.add(Genres.AllGenres);

  films.map((film) => genreList.add(film.genre));
  return (
    <ul className="catalog__genres-list">
      {genreList && [...genreList].map((genre) => (
        <li className={`catalog__genres-item ${genre === activeGenre && 'catalog__genres-item--active'}`} key={genre} onClick={() => dispatch(setGenre(genre))}>
          <a href="/#" className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
}

export default GenresList;
