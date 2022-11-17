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
