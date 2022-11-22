import { Films } from '../../types/types';
import FilmCard from '../film-card/film-card';

type FilmsListProps = {
  films: Films;
}

function FilmsList({ films }: FilmsListProps): JSX.Element {

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <FilmCard
        films={films}
      />
    </section>

  );
}

export default FilmsList;
