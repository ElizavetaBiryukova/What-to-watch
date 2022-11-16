import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from '../main/main';
import { AppRoute, AuthorizationStatus } from '../../const';
import Error from '../error/error';
import Film from '../film/film';
// import FilmCard from '../film-card/film-card';
import Login from '../login/login';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import Review from '../review/review';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  cardsCount: number;
  nameFilm: string;
  genreFilm: string;
  dateFilm: number;
  posterFilm: string;
  backgroundPosterFilm: string;
}


function App({ cardsCount, nameFilm, genreFilm, dateFilm, posterFilm, backgroundPosterFilm }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <Main
              cardsCount={cardsCount}
              nameFilm={nameFilm}
              genreFilm={genreFilm}
              dateFilm={dateFilm}
              posterFilm={posterFilm}
              backgroundPosterFilm={backgroundPosterFilm}
            />
          }
        />
        <Route path={AppRoute.Film}
          element={<Film />}
        />
        <Route path={AppRoute.SignIn}
          element={<Login />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.AddReview}
          element={<Review />}
        />
        <Route path={AppRoute.Player}
          element={<Player />}
        />

        <Route path='*'
          element={<Error />}
        />

      </Routes>
    </BrowserRouter>


  );
}

export default App;
