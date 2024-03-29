import { Question } from './question';

export interface Reponse {
  id: number;
  libelleReponse: string;
  questionId: number;
  isCorrect: boolean;
}
