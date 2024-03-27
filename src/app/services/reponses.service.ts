import { Injectable } from '@angular/core';
import { Reponse } from '../models/reponse';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReponsesService {
  constructor(private http: HttpClient) {}

  createNewReponse(reponseToCreate: Reponse): Observable<Reponse> {
    return this.http.post<Reponse>(
      'http://localhost:8080/question',
      reponseToCreate
    );
  }
}
