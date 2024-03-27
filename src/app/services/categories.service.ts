import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../models/categorie';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private baseURL = 'http://localhost:8080/categorie';

  constructor(private http: HttpClient) {}

  getCategorie(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(`${this.baseURL}`);
  }

  createNewCategorie(categorieToCreate: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(`${this.baseURL}`, categorieToCreate);
  }
}
