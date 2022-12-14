import { useEffect } from 'react';
import FilmsList from '../films-list/films-list';
import Logo from '../logo/logo';
import { Films } from '../../types/types';
import { Link } from 'react-router-dom';
import GenresList from '../genres-list/genres-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setFilmsList } from '../../store/action';


type MainScreenProps = {
  nameFilm: string;
  genreFilm: string;
  dateFilm: number;
  posterFilm: string;
  backgroundPosterFilm: string;
  films: Films;
}

function Main({ nameFilm, genreFilm, dateFilm, posterFilm, backgroundPosterFilm, films }: MainScreenProps): JSX.Element {
  const filteredFilms = useAppSelector((state) => state.films);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setFilmsList(films));
  }, [dispatch]);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={`img/${backgroundPosterFilm}.jpg`} alt={nameFilm} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <Logo className="logo__link" />
          </div>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <Link className="user-block__link" to={'/login'}>Sign out</Link>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={`img/${posterFilm}.jpg`} alt={`${nameFilm} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{nameFilm}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genreFilm}</span>
                <span className="film-card__year">{dateFilm}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList films={films}/>

          <FilmsList films={filteredFilms} />

        </section>

        <footer className="page-footer">
          <div className="logo">
            <Logo className="logo__link logo__link--light" />
          </div>

          <div className="copyright">
            <p>?? 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Main;
