import { FilmType } from '../../types/types';

type FilmCardProps = {
  film: FilmType;
  onFocus: (id: string) => void;
}

function FilmCard({ film, onFocus }: FilmCardProps): JSX.Element {

  return (

    <article className="small-film-card catalog__films-card" onFocus={() => onFocus(film.id)}>
      <div className="small-film-card__image">
        <img src={film.posterImage} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{film.name}</a>
      </h3>
    </article>

  );
}

export default FilmCard;
