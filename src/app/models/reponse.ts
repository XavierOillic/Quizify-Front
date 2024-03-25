import { Question } from './question';

export interface Reponse {
  id: number;
  libelle: string;
  question: Question;
  isCorrect: boolean;
}
