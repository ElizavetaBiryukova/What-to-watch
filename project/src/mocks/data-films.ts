import { getRandomInteger} from './utils';

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
