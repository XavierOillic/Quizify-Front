import { Categorie } from './categorie';
import { Reponse } from './reponse';

export interface Question {
  id: number;
  libelleQuestion: string;
  categorie: Categorie;
  reponse: Reponse[];
}
