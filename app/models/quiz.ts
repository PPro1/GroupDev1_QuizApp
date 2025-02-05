export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  category: string;
  difficulty: 'facile' | 'moyen' | 'difficile';
  timeLimit?: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  category: string;
  date: Date;
}