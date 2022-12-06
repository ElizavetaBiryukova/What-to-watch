export const incrementGenre = (count: string): IncrementGenreAction => ({
  type: ActionType.incrementGenre,
});

export const incrementFilmsList = (): IncrementFilmsListAction => ({
  type: ActionType.incrementFilmsList,
});
