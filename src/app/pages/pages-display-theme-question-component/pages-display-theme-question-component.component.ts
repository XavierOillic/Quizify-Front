import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
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
  formCrea!: FormGroup;

  categoryDisplayed: Categorie[] = [];
  questionDisplayed: Question[] = [];

  category!: Categorie;
  @Input() question!: Question;

  @Input() color: String = '';

  @Output() submitFormCategQuestion = new EventEmitter();

  initFormCategoryResp() {}

  ngOnInit(): void {
    this.initFormCategoryResp();

    this.categoryServ.getAllCat().subscribe((response) => {
      console.log(response);
      this.categoryDisplayed = [...response];
    });

    this.questionServ.getAllQuestion().subscribe((response) => {
      console.log(response);
      this.questionDisplayed = [...response];
    });
  }
  submitForm() {
    console.log(this.formCrea);
    this.submitFormCategQuestion.emit(this.formCrea.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
