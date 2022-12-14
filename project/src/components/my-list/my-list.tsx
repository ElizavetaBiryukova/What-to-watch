import Logo from '../logo/logo';
import FilmsList from '../films-list/films-list';
import { Films } from '../../types/types';
import { Link } from 'react-router-dom';

type MyListProps = {
  films: Films;
}

function MyList({ films }: MyListProps): JSX.Element {

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Logo className="logo__link" />
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <Link to={'/login'} className="user-block__link">Sign out</Link>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList films={films} />


      </section>

      <footer className="page-footer">
        <div className="logo">
          <Logo className="logo__link logo__link--light" />
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyList;
