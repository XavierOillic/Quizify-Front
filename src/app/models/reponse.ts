import { Question } from './question';

export interface Reponse {
  id: number;
  libelleReponse: string;
  question: Question;
  isCorrect: boolean;
}
