import { Categorie } from './categorie';

export interface Question {
  id: number;
  libelle: string;
  categorie: Categorie;
}
