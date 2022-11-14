import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const InfoPromoFilm = {
  CARDS_COUNT: 20,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      cardsCount={InfoPromoFilm.CARDS_COUNT}
    />
  </React.StrictMode>,
  document.getElementById('root'));
