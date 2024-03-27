import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../models/categorie';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  urlApi = 'http://localhost:8080/categorie';

  getAllCat(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.urlApi);
  }

  getOne(categoryId: number): Observable<Categorie> {
    return this.http.get<Categorie>(`${this.urlApi}/${categoryId}`);
  }

  createNewCategorie(categorieToCreate: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(
      'http://localhost:8080/categorie',
      categorieToCreate
    );
  }

  updateCat(
    categoryUpdated: Categorie,
    categoryId: number
  ): Observable<Categorie> {
    return this.http.put<Categorie>(
      `${this.urlApi}/${categoryId}`,
      categoryUpdated
    );
  }

  deleteCat(categoryId: number) {
    return this.http.delete<Categorie>(`${this.urlApi}/${categoryId}`);
  }
}
