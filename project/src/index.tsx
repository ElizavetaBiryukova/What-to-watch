import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { films } from './mocks/films';
import { comments } from './mocks/comments';
import { store } from './store/index';


const InfoPromoFilm = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  DATE: 2014,
  BG_POSTER: 'bg-the-grand-budapest-hotel',
  POSTER: 'the-grand-budapest-hotel-poster',
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        nameFilm={InfoPromoFilm.TITLE}
        genreFilm={InfoPromoFilm.GENRE}
        dateFilm={InfoPromoFilm.DATE}
        posterFilm={InfoPromoFilm.POSTER}
        backgroundPosterFilm={InfoPromoFilm.BG_POSTER}
        films={films}
        comments={comments}
      />
    </Provider>

  </React.StrictMode>,
);

