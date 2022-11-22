import { Films } from '../../types/types';

type FilmCardProps = {
  films: Films;
}

function FilmCard({films}: FilmCardProps): JSX.Element {

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <article key={film.id} className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
          </div>
          <h3 className="small-film-card__title">
            <a className="small-film-card__link" href="film-page.html">{film.name}</a>
          </h3>
        </article>
      ))}

    </div>
  );
}

export default FilmCard;
