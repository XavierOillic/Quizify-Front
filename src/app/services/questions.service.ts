import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../models/question';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  constructor(private Http: HttpClient) { }

  urlApi = 'http://localhost:8080/question'; // Je variablise mon url d'Appel URL

  //GET ALL
  getAllQuestion(): Observable<Question[]> {
    return this.Http.get<Question[]>(this.urlApi);
  }

  //GET BY ID
  getOne(questionId: number): Observable<Question> {
    const urlQuestionId = `${this.urlApi}/${questionId}`;
    return this.Http.get<Question>(urlQuestionId);
  }

  // POST
  createQuestion(questionToCreate: Question): Observable<Question> {
    return this.Http.post<Question>(this.urlApi, questionToCreate);
  }

  //PUT
  updateQuestion(
    questionId: number,
    questionUpdated: Question
  ): Observable<Question> {
    return this.Http.put<Question>(
      `${this.urlApi}/${questionId}`,
      questionUpdated
    );
  }

  //DELETE
  deleteQuestion(questionId: number): Observable<Question> {
    return this.Http.delete<Question>(`${this.urlApi}/${questionId}`);
  }

  createNewQuestionWithReponse(
    questionToCreate: Question,
    categorieId: number
  ): Observable<Question> {
    return this.Http.post<Question>(
      'http://localhost:8080/question/${categorieId}',
      questionToCreate
    );
  }
}
