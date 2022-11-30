import nextId from 'react-id-generator';
import { Films, FilmType } from '../types/types';
import { generateName, generateImage, generateVideo, generateDescription, generateRating, generateScores, generateStarring, generateDirector, generateGenre, generateDate, generateFavorite } from './data-films';

const generateFilms = () => {
  const film: FilmType =
  {
    id: nextId(),
    name: generateName(),
    posterImage: `img/${generateImage()}-poster.jpg`,
    previewImage: `img/${generateImage()}.jpg`,
    backgroundImage: `img/${generateImage()}.jpg`,
    backgroundColor: '#ffffff',
    videoLink: generateVideo(),
    previewVideoLink: generateVideo(),
    description: generateDescription(),
    rating: generateRating(),
    scoresCount: generateScores(),
    director: generateDirector(),
    starring: generateStarring(),
    runTime: generateScores(),
    genre: generateGenre(),
    released: generateDate(),
    isFavorite: generateFavorite(),
  };

  return film;
};


export const films: Films = new Array(8).fill(0).map(generateFilms);
