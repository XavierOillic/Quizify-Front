import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../models/question';
import { Observable } from 'rxjs';
import { Reponse } from '../models/reponse';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  constructor(private http: HttpClient) {}
  createNewQuestionWithReponse(
    questionToCreate: Question,
    categorieId: number
  ): Observable<Question> {
    return this.http.post<Question>(
      `http://localhost:8080/question/${categorieId}`,
      questionToCreate
    );
  }

  // createNewQuestionWithReponse(questionToCreate: Question): Observable<Question> {
  //   return this.http.post<Question>(
  //     `http://localhost:8080/question`,
  //     questionToCreate
  //   );
  // }
}


