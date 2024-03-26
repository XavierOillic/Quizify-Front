import { Categorie } from './categorie';

export interface Question {
  id: number;
  libelleQuestion: string;
  categorie: Categorie;
}
