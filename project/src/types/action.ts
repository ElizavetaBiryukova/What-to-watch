export enum ActionType {
  SetGenre = 'main/incrementGenreAction',
  SetFilmsList = 'main/incrementFilmsListAction',
}

export type SetGenreAction = {
  type: ActionType.SetGenre;
}


export type SetFilmsListAction = {
  type: ActionType.SetFilmsList;
}

export type Actions = SetGenreAction | SetFilmsListAction;
