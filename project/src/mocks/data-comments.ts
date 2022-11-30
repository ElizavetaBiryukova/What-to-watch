import { getRandomInteger } from './utils';
import dayjs from 'dayjs';

export function generateName() {
  const names = [
    'Bill Murray',
    'Edward Norton',
    'Jude Law',
    'Willem Dafoe',
    'Saoirse Ronan',
  ];
  const randomIndex = getRandomInteger(0, names.length - 1);
  return names[randomIndex];
}

export function generateDate() {
  const date = dayjs().format('YYYY-MM-DDTHH:mm:ss[Z]');
  return date;
}
