import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reponse } from '../models/reponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReponsesService {
  constructor(private Http: HttpClient) {}

  urlApi = 'http://localhost:8080/reponse';

  getAllCat(): Observable<Reponse[]> {
    return this.Http.get<Reponse[]>(this.urlApi);
  }

  getOne(reponseId: number): Observable<Reponse> {
    return this.Http.get<Reponse>(`${this.urlApi}/${reponseId}`);
  }

  createNewCategorie(reponseToCreate: Reponse): Observable<Reponse> {
    return this.Http.post<Reponse>(this.urlApi, reponseToCreate);
  }

  updateCat(reponseUpdated: Reponse, reponseId: number): Observable<Reponse> {
    return this.Http.put<Reponse>(
      `${this.urlApi}/${reponseId}`,
      reponseUpdated
    );
  }

  delete(reponseId: number) {
    return this.Http.delete<Reponse>(`${this.urlApi}/${reponseId}`);
  }
}
