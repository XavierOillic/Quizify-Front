import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) {}

  createNewCategorie(categorieToCreate: string){
    return this.http.post('http://localhost:8080/createCategorie', categorieToCreate);
  }
}
