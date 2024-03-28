import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
    private questionServ: QuestionsService,
    private route: ActivatedRoute
  ) {}

  formEdit!: FormGroup;

  categoryDisplayed: Categorie[] = [];
  questionDisplayed: Question[] = [];

  category!: Categorie;
  @Input() question!: Question;

  @Input() color: String = '';

  @Output() submitFormCategQuestion = new EventEmitter();

  initFormCategoryResp() {
    console.log(
      'affichage des questions dans la page affichage :',
      this.question
    );
    this.formEdit = new FormGroup({
      question1: new FormControl(
        this.question.libelleQuestion,
        Validators.required
      ),
      question2: new FormControl(
        this.question.libelleQuestion,
        Validators.required
      ),
      question3: new FormControl(
        this.question.libelleQuestion,
        Validators.required
      ),
      question4: new FormControl(this.question.libelleQuestion),
    });
  }

  ngOnInit(): void {
    this.initFormCategoryResp(); // Initialisation du Form.

    // GET ONE CATEGORY
    const cheminUrl = this.route.snapshot.paramMap;
    const categoryIdFromUrl = Number(cheminUrl.get('categoryId'));
    console.log('Affichage dans AFFICHAGE', categoryIdFromUrl);

    this.categoryServ.getOne(categoryIdFromUrl).subscribe({
      next: (responseId) => {
        console.log('Data catgory loaded :', responseId);
        this.category = responseId;
      },
      error: () => {},
    });

    // GET ALL CATEGORY
    this.categoryServ.getAllCat().subscribe((response) => {
      console.log(response);
      this.categoryDisplayed = [...response];
    });

    // GET ALL QUESTION
    this.questionServ.getAllQuestion().subscribe((response) => {
      console.log(response);
      this.questionDisplayed = [...response];
    });

    // GET QUESTON VIA CATEGORIE
  }
  submitForm() {
    console.log(this.formEdit);
    this.submitFormCategQuestion.emit(this.formEdit.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
