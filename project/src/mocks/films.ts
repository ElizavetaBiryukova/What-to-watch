import { nanoid } from 'nanoid';
import { Films } from '../types/types';
import { generateName, generateImage, generateVideo } from './data-films';


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
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege.',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 99,
    genre: 'Comedy',
    released: 2014,
    isFavorite: false,
  }
];
