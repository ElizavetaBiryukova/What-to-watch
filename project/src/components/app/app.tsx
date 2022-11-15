import Main from '../main/main';

type AppScreenProps = {
  cardsCount: number;
  nameFilm: string;
  genreFilm: string;
  dateFilm: number;
  posterFilm: string;
  backgroundPosterFilm:string;
}

function App({ cardsCount, nameFilm, genreFilm, dateFilm, posterFilm, backgroundPosterFilm }: AppScreenProps): JSX.Element {
  return (
    <Main
      cardsCount={cardsCount}
      nameFilm={nameFilm}
      genreFilm={genreFilm}
      dateFilm={dateFilm}
      posterFilm={posterFilm}
      backgroundPosterFilm={backgroundPosterFilm}
    />);
}

export default App;
