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
  const date = dayjs().format('[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]');
  return date;
}
