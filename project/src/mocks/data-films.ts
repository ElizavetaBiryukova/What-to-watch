import dayjs from 'dayjs';
import { getRandomInteger, shuffleArray } from './utils';

export function generateName() {
  const names = [
    'The Grand Budapest Hotel',
    'Aviator',
    'Bohemian Rhapsody',
    'Dardjeeling Limited',
    'Fantastic beasts the crimes of Grindelwald',
    'What we do in the shadows',
    'Macbeth',
    'Moonrise Kingdom',
  ];
  const randomIndex = getRandomInteger(0, names.length - 1);
  return names[randomIndex];
}

export function generateImage() {
  const image = generateName().toLowerCase().split(' ').join('-');

  return image;
}

export function generateVideo() {
  const video = [
    'https://videos.pond5.com/4k-personal-trainer-shows-client-footage-071942434_main_xxl.mp4',
    'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'https://videos.pond5.com/thanks-giving-chapel-interior-rotate-footage-054035898_main_xxl.mp4',
    'https://videos.pond5.com/silhouette-grass-blowing-wind-sunset-footage-099356536_main_xxl.mp4',
  ];

  const randomIndex = getRandomInteger(0, video.length - 1);
  return video[randomIndex];
}

export function generateDescription() {
  const description = [
    'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege.',
    'The Aviator is a 2004 American epic biographical drama film directed by Martin Scorsese and written by John Logan.',
    'Fantastic Beasts: The Crimes of Grindelwald is a 2018 fantasy film directed by David Yates and written by J. K. Rowling. The sequel to Fantastic Beasts and Where to Find Them (2016), it is the second instalment in the Fantastic Beasts film series and the tenth overall in the Wizarding World franchise.',
  ];

  const randomIndex = getRandomInteger(0, description.length - 1);
  return description[randomIndex];
}

export function generateRating() {
  const raiting = [];

  for (let i = 1; i <= 10; i = i + 0.1) {
    raiting.push(i.toFixed(1));
  }
  const randomIndex = getRandomInteger(0, raiting.length - 1);

  return Number(raiting[randomIndex]);
}

export function generateScores() {
  const scores = getRandomInteger(1, 1000);
  return scores;
}

export function generateStarring() {
  const starring = [
    'Bill Murray',
    'Edward Norton',
    'Jude Law',
    'Willem Dafoe',
    'Saoirse Ronan',
  ];

  return shuffleArray(starring);
}

export function generateDirector() {
  const directors = [
    'Bill Murray',
    'Edward Norton',
    'Jude Law',
    'Willem Dafoe',
    'Saoirse Ronan'
  ];

  const randomIndex = getRandomInteger(0, directors.length - 1);

  return directors[randomIndex];
}

export function generateGenre() {
  const genres = [
    'Drama',
    'Mystery',
    'Comedy',
    'Western',
    'Musical'
  ];

  const randomIndex = getRandomInteger(0, genres.length - 1);

  return genres[randomIndex];
}

export function generateDate() {
  const years = getRandomInteger(1920, dayjs().year());

  return years;
}

export function generateFavorite() {
  return !getRandomInteger(0, 1);
}


