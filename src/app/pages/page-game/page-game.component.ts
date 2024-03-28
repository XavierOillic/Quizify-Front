import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { Question } from 'src/app/models/question';
import { Reponse } from 'src/app/models/reponse';
import { CategoriesService } from 'src/app/services/categories.service';
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

  constructor(
    private activeRoute: ActivatedRoute,
    private categoryService: CategoriesService,
    private questionService: QuestionsService,
    private reponseService: ReponsesService
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
      console.log(this.allQuestions);
      this.allQuestions = [...data];
      this.questionsSelected = this.responseRandomizer(this.allQuestions, 3);
    });
  }

  responseRandomizer(array: Question[], subsetLength: number): Question[] {
    const copy = array;
    copy.sort(() => 0.5 - Math.random());
    console.log(copy);
    return copy.slice(0, subsetLength);
  }
}
