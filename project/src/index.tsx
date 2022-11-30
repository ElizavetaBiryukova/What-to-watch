import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { films } from './mocks/films';
import { comments } from './mocks/comments';


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
    <App
      nameFilm={InfoPromoFilm.TITLE}
      genreFilm={InfoPromoFilm.GENRE}
      dateFilm={InfoPromoFilm.DATE}
      posterFilm={InfoPromoFilm.POSTER}
      backgroundPosterFilm={InfoPromoFilm.BG_POSTER}
      films={films}
      comments={comments}
    />
  </React.StrictMode>,
);

