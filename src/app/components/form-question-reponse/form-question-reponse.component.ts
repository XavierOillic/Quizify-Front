import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { Question } from 'src/app/models/question';
import { Reponse } from 'src/app/models/reponse';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-form-question-reponse',
  templateUrl: './form-question-reponse.component.html',
  styleUrls: ['./form-question-reponse.component.css'],
})
export class FormQuestionReponseComponent implements OnInit {
  formQuestionReponse!: FormGroup;
  lesReponses: any[] = [];

  constructor(
    private categoriesService: CategoriesService,
    private route: ActivatedRoute
  ) {}

  @Output() submitFormQuestionReponse = new EventEmitter(); //a typer?
  categorieId!: Categorie;
  catId!: number;

  ngOnInit(): void {
    this.initQuestionReponse();
    this.categoriesService.getAllCat().subscribe((prout) => {
      console.log('mes categories de formulaire quest rep', prout);
    });
    this.catId = Number(this.route.snapshot.paramMap.get('categorieId'));
    this.catId &&
      this.categoriesService.getOne(this.catId).subscribe({
        next: (cDedan) => {
          this.categorieId = cDedan;
          console.log('c dedan est', cDedan);
        },
        error: () => {},
      });
  }

  initQuestionReponse() {
    this.formQuestionReponse = new FormGroup({
      libelleQuestion: new FormControl(
        this.formQuestionReponse,
        Validators.required
      ),
      reponse1: new FormControl(this.formQuestionReponse, Validators.required),
      reponse2: new FormControl(this.formQuestionReponse, Validators.required),
      reponse3: new FormControl(this.formQuestionReponse, Validators.required),
      reponse4: new FormControl(this.formQuestionReponse, Validators.required),
    });
  }

  onSubmitQuestionReponse() {
    const reponseActuelle = this.formQuestionReponse.value;
    this.lesReponses.push(reponseActuelle);
    this.submitFormQuestionReponse.emit(reponseActuelle);
    console.log(reponseActuelle);    
  }
}
//  onSubmitQuestionReponse() {
//     this.submitFormQuestionReponse.emit(this.formQuestionReponse.value);
//     console.log('ça marche', this.formQuestionReponse.value);
//   }

