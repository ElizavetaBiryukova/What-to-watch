import { useState } from 'react';
import { FilmType, Comments } from '../../types/types';
import Overview from '../tabs/tabs-overview';
import Reviews from '../tabs/tabs-reviews';
import Details from '../tabs/tabs-details';

type TabsProps = {
  film: FilmType;
  comments: Comments;
}

const titleTabs = [
  { title: 'Overview' },
  { title: 'Details' },
  { title: 'Reviews' },
];

function Tabs({ film, comments }: TabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState(0);

  function getActiveTab(index: number) {
    switch (index) {
      case 0:
        return <Overview film={film} />;
      case 1:
        return <Details film={film} />;
      case 2:
        return <Reviews comments={comments} />;
      default:
        return <Overview film={film} />;
    }
  }

  return (

    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {titleTabs.map((titleTab, index) => (
            <li
              key={titleTab.title}
              className={activeTab === index ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}
              onClick={() => setActiveTab(index)}
            >
              <span className="film-nav__link">{titleTab.title}</span>
            </li>
          ))}
        </ul>
      </nav>

      {getActiveTab(activeTab)}

    </div>

  );
}

export default Tabs;
