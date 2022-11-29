import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from '../main/main';
import { AppRoute, AuthorizationStatus } from '../../const';
import Error from '../error/error';
import Film from '../film/film';
import Login from '../login/login';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import Review from '../review/review';
import PrivateRoute from '../private-route/private-route';
import { Films } from '../../types/types';


type AppScreenProps = {
  nameFilm: string;
  genreFilm: string;
  dateFilm: number;
  posterFilm: string;
  backgroundPosterFilm: string;
  films: Films;
}


function App({ nameFilm, genreFilm, dateFilm, posterFilm, backgroundPosterFilm, films }: AppScreenProps): JSX.Element {

  return (

    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <Main
              nameFilm={nameFilm}
              genreFilm={genreFilm}
              dateFilm={dateFilm}
              posterFilm={posterFilm}
              backgroundPosterFilm={backgroundPosterFilm}
              films={films}
            />
          }
        />
        <Route path={AppRoute.Film}
          element={
            <Film
              film={films[0]}
            />
          }
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
              <MyList
                films={films}
              />
            </PrivateRoute>
          }
        />
        {/* <Route
          path={AppRoute.MyList}
          element={
            <MyList
              films={films}
            />

          }
        /> */}
        <Route path={AppRoute.AddReview}
          element={
            <Review
              film={films[0]}
            />
          }
        />
        <Route path={AppRoute.Player}
          element={
            <Player
              films={films}
            />
          }
        />

        <Route path='*'
          element={<Error />}
        />

      </Routes>
    </BrowserRouter>


  );
}

export default App;
