import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Creation } from '../models/creation';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreationService {

  constructor(private http: HttpClient) { }

  getCreate(): Observable<Creation[]> {
    return this.http.get<Creation[]>("http://localhost:8080/api/creation");
  }
}
