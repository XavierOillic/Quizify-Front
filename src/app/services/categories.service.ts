import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  //chemin de l'information
  constructor(private http: HttpClient) {}

  createNewCategorie(categorieToCreate: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>('http://localhost:8080/categorie', categorieToCreate);
  }

  getCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>('http://localhost:8080/categorie');
  }
}
