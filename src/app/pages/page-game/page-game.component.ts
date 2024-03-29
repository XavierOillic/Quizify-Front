import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Categorie } from 'src/app/models/categorie';
import { Question } from 'src/app/models/question';
import { Reponse } from 'src/app/models/reponse';
import { CategoriesService } from 'src/app/services/categories.service';
import { MessageService } from 'src/app/services/message.service';
import { QuestionsService } from 'src/app/services/questions.service';
import { ReponsesService } from 'src/app/services/reponses.service';

@Component({
  selector: 'app-page-game',
  templateUrl: './page-game.component.html',
  styleUrls: ['./page-game.component.css'],
})
export class PageGameComponent implements OnInit {
  themeId!: number;
  theme!: Categorie;
  allQuestions: Question[] = [];
  questionsSelected: Question[] = [];
  reponsesSelected: Reponse[][] = [];

  quizForm!: FormGroup;
  submitFormQuiz = new EventEmitter<Reponse>();

  constructor(
    private activeRoute: ActivatedRoute,
    private categoryService: CategoriesService,
    private questionService: QuestionsService,
    private reponseService: ReponsesService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.themeId = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.themeId &&
      this.categoryService.getOne(this.themeId).subscribe({
        next: (res) => {
          this.theme = res;
        },
        error: () => {},
      });

    this.questionService.getByCategorie(this.themeId).subscribe((data) => {
      this.allQuestions = [...data];
      this.questionsSelected = this.responseRandomizer(this.allQuestions, 3);
      const observableQuestion = this.questionsSelected.map((question) =>
        this.reponseService.getByQuestion(question.id)
      );
      forkJoin(observableQuestion).subscribe(
        (resp) => (this.reponsesSelected = resp)
      );
    });
    if (this.reponsesSelected !== undefined) {
      this.initForm(this.reponsesSelected);
    } else this.initForm('');
  }

  responseRandomizer(array: Question[], subsetLength: number): Question[] {
    const copy = array;
    copy.sort(() => 0.5 - Math.random());
    return copy.slice(0, subsetLength);
  }

  initForm(value: any): void {
    this.quizForm = new FormGroup({
      reponse1: new FormControl(value.reponse1, Validators.required),
      reponse2: new FormControl(value.reponse2, Validators.required),
      reponse3: new FormControl(value.reponse3, Validators.required),
    });
  }

  onSubmit(): void {
    this.submitFormQuiz.emit(this.quizForm.value);
  }

  updateData() {
    this.messageService.setMessage(this.quizForm.value);
  }
}
