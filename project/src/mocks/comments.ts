import nextId from 'react-id-generator';
import { Comment, Comments } from '../types/types';
import { generateDescription, generateRating } from './data-films';
import { generateName, generateDate } from './data-comments';

const generateComments = () => {
  const comment: Comment =
  {
    id: nextId(),
    user: {
      id: nextId(),
      name: generateName(),
    },
    rating: generateRating(),
    comment: generateDescription(),
    date: generateDate(),
  };

  return comment;
};


export const comments: Comments = new Array(6).fill(0).map(generateComments);
