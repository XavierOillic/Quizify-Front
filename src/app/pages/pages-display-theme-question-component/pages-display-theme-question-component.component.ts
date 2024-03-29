import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
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
export class PagesDisplayThemeQuestionComponentComponent
  implements OnInit, AfterViewInit
{
  constructor(
    private categoryServ: CategoriesService,
    private questionServ: QuestionsService,
    private route: ActivatedRoute
  ) {}

  formEdit!: FormGroup;

  categoryDisplayed!: Categorie[];
  questionDisplayed: Question[] = [];

  questionId!: Question;
  category!: Categorie;
  @Input() question!: Question;

  @Output() submitFormCategQuestion = new EventEmitter();

  ngOnInit(): void {
    // GET ONE CATEGORY
    const cheminUrl = this.route.snapshot.paramMap;
    const categoryIdFromUrl = Number(cheminUrl.get('categoryId'));
    console.log('Affichage dans AFFICHAGE ID Cat', categoryIdFromUrl);
    //GET ONE
    this.categoryServ.getOne(categoryIdFromUrl).subscribe({
      next: (responseId) => {
        console.log('Data category loaded :', responseId);
        this.category = responseId;
      },
      error: () => {},
    });

    // GET ALL CATEGORY
    this.categoryServ.getAllCat().subscribe((response) => {
      console.log(response);
      this.categoryDisplayed = [...response];
    });

    // GET ALL QUESTION BY CATEGORY
    this.questionServ
      .getByCategorie(categoryIdFromUrl)
      .subscribe((response) => {
        console.log(response);
        this.questionDisplayed = [...response];
      });

    const cheminUrlQuest = this.route.snapshot.paramMap;
    const questionIdFromUrl = Number(cheminUrlQuest.get('questionId'));
    console.log('Affichage dans AFFICHAGE ID Quest', questionIdFromUrl);
    this.questionServ.getOne(questionIdFromUrl).subscribe({
      next: () => {
        this.questionDisplayed = this.questionDisplayed.filter(
          (x) => x.id !== questionIdFromUrl
        );
      },
    });
  }

  deleteQuestionButton(deletedQuestion: number) {
    this.questionServ.deleteQuestion(deletedQuestion).subscribe({
      next: () => {
        this.questionDisplayed = this.questionDisplayed.filter(
          (x) => x.id !== deletedQuestion
        );
      },
    });
    console.log('La Plante a été supprimée : ', deletedQuestion);
  }

  /// BOITE MODALE TYPE POPUP
  ngAfterViewInit(): void {
    this.dialog = document.querySelector('dialog');
  }
  dialog: any;

  ouvrirModal() {
    this.dialog!.showModal();
  }
  closeModal() {
    this.dialog!.close();
  }

  //// BOITE MODALE TYPE POPUP
}
