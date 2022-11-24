export type FilmType = {
  id: string,
  name: string,
  posterImage: string,
  previewImage: string,
  backgroundImage: string,
  backgroundColor: string,
  videoLink: string,
  previewVideoLink: string,
  description: string,
  rating: number,
  scoresCount: number,
  director: string,
  starring: string[],
  runTime: number,
  genre: string,
  released: number,
  isFavorite: boolean,
}

export type Films = FilmType[];

export type Comment = {
  id: string,
  user: {
    id: string,
    name: string,
  },
  rating: number,
  comment: string,
  date: string,
}

export type Comments = Comment[];
