import { FilmType } from '../../types/types';
import Overview from '../tabs/tabs-overview';

type TabsProps = {
  film: FilmType;
}

function Tabs({ film }: TabsProps): JSX.Element {
  return (

    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item film-nav__item--active">
            <a href="/#" className="film-nav__link">Overview</a>
          </li>
          <li className="film-nav__item">
            <a href="/#" className="film-nav__link">Details</a>
          </li>
          <li className="film-nav__item">
            <a href="/#" className="film-nav__link">Reviews</a>
          </li>
        </ul>
      </nav>

      <Overview film={film} />
    </div>

  );
}

export default Tabs;
