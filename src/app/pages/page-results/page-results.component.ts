import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { Question } from 'src/app/models/question';
import { Reponse } from 'src/app/models/reponse';
import { CategoriesService } from 'src/app/services/categories.service';
import { MessageService } from 'src/app/services/message.service';
import { QuestionsService } from 'src/app/services/questions.service';
import { ReponsesService } from 'src/app/services/reponses.service';

@Component({
  selector: 'app-page-results',
  templateUrl: './page-results.component.html',
  styleUrls: ['./page-results.component.css'],
})
export class PageResultsComponent implements OnInit {
  themeId!: number;
  theme!: Categorie;
  data: any;
  responses = [];

  reponse1!: Reponse;
  question1!: Question;
  reponse2!: Reponse;
  question2!: Question;
  reponse3!: Reponse;
  question3!: Question;

  goodAnswers: number = 0;

  constructor(
    private messageService: MessageService,
    private categoryService: CategoriesService,
    private reponseService: ReponsesService,
    private questionService: QuestionsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.themeId = Number(this.route.snapshot.paramMap.get('id'));
    this.themeId &&
      this.categoryService.getOne(this.themeId).subscribe({
        next: (res) => {
          this.theme = res;
        },
        error: () => {},
      });

    this.messageService.getMessage.subscribe((data) => (this.data = data));
    this.responses = Object.values(this.data);
    console.log(this.responses);

    this.reponseService.getOne(Number(this.responses[0])).subscribe({
      next: (res) => {
        this.reponse1 = res;
        if (this.reponse1.isCorrect) {
          this.goodAnswers++;
        }
        this.questionService.getOne(this.reponse1.questionId).subscribe({
          next: (data) => {
            this.question1 = data;
          },
        });
      },
    });
    this.reponseService.getOne(Number(this.responses[1])).subscribe({
      next: (res) => {
        this.reponse2 = res;
        if (this.reponse2.isCorrect) {
          this.goodAnswers++;
        }
        this.questionService.getOne(this.reponse2.questionId).subscribe({
          next: (data) => {
            this.question2 = data;
          },
        });
      },
    });
    this.reponseService.getOne(Number(this.responses[2])).subscribe({
      next: (res) => {
        this.reponse3 = res;
        if (this.reponse3.isCorrect) {
          this.goodAnswers++;
        }
        this.questionService.getOne(this.reponse3.questionId).subscribe({
          next: (data) => {
            this.question3 = data;
          },
        });
      },
    });
  }
}
