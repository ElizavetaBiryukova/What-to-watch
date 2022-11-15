import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const InfoPromoFilm = {
  CARDS_COUNT: 20,
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  DATE: 2014,
  BG_POSTER: 'bg-the-grand-budapest-hotel',
  POSTER: 'the-grand-budapest-hotel-poster',
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App
      cardsCount={InfoPromoFilm.CARDS_COUNT}
      nameFilm={InfoPromoFilm.TITLE}
      genreFilm={InfoPromoFilm.GENRE}
      dateFilm={InfoPromoFilm.DATE}
      posterFilm={InfoPromoFilm.POSTER}
      backgroundPosterFilm={InfoPromoFilm.BG_POSTER}
    />
  </React.StrictMode>,
);
