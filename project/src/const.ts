enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum Genres {
  AllGenres= 'All genres',
  Comedies='Comedies',
  Crime='Crime',
  Documentary='Documentary',
  Dramas='Dramas',
  Horror='Horror',
  KidsFamily='Kids & Family',
  Romance='Romance',
  SciFi='Sci-Fi',
  Thrillers='Thrillers'

}

export {AppRoute, AuthorizationStatus, Genres};
