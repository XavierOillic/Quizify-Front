import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stats } from '../models/stats';

@Injectable({
  providedIn: 'root'
})
export class StatistiquesService {

  private apiUrl = 'your_api_url_here';

  constructor(private http: HttpClient) { }

  getStat(): Observable<Stats[]> {
    return this.http.get<Stats[]>("http://localhost:8080/api/stats");
  }

}
