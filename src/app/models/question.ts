import { Categorie } from './categorie';
import { Reponse } from './reponse';

export interface Question {
  id: number;
  libelleQuestion: string;
  categorieId: number;//ajout de ce paramètre pour que ce soit cohérent avec mon form et ma pagecreate question
  categorie: Categorie;
  reponse: Reponse[];
}
