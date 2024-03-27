import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Categorie } from 'src/app/models/categorie';
import { Question } from 'src/app/models/question';
import { CategoriesService } from 'src/app/services/categories.service';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-pages-display-theme-question-component',
  templateUrl: './pages-display-theme-question-component.component.html',
  styleUrls: ['./pages-display-theme-question-component.component.css'],
})
export class PagesDisplayThemeQuestionComponentComponent implements OnChanges {
  constructor(
    private categoryServ: CategoriesService,
    private questionServ: QuestionsService
  ) {}

  categoryDisplayed: Categorie[] = [];
  questionDisplayed: Question[] = [];

  @Input() categoryToDisplay: Categorie[] = [];
  @Input() color: String = '';

  ngOnInit(): void {
    this.categoryServ.getAllCat().subscribe((response) => {
      console.log(response);
      this.categoryDisplayed = [...response];
    });

    this.questionServ.getAllQuestion().subscribe((response) => {
      console.log(response);
      this.questionDisplayed = [...response];
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
