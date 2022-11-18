import { nanoid } from 'nanoid';
import { Films } from '../types/types';
import { generateName, generateImage, generateVideo, generateDescription, generateRating, generateScores, generateStarring, generateDirector, generateGenre, generateDate, generateFavorite } from './data-films';


export const films: Films = [
  {
    id: Number(nanoid()),
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
    released: Number(generateDate()),
    isFavorite: generateFavorite(),
  }
];

