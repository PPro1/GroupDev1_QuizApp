import { Question } from '../models/quiz';

export const questions: Question[] = [
  {
    id: '1',
    text: 'Quelle est la capitale de la France ?',
    options: ['Londres', 'Berlin', 'Paris', 'Madrid'],
    correctAnswer: 2,
    category: 'culture',
    difficulty: 'facile'
  },
  {
    id: '2',
    text: 'Quel est le symbole chimique de l\'or ?',
    options: ['Ag', 'Fe', 'Au', 'Cu'],
    correctAnswer: 2,
    category: 'science',
    difficulty: 'facile'
  },
  {
    id: '3',
    text: 'Qui a peint la Joconde ?',
    options: ['Van Gogh', 'Léonard de Vinci', 'Picasso', 'Michel-Ange'],
    correctAnswer: 1,
    category: 'art',
    difficulty: 'facile'
  }
];