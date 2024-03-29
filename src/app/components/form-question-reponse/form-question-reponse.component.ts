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
          console.log("id de ma cat?", this.categorieId);
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

     const newQuestion = {
       reponses: [
         {
           libelle: this.formQuestionReponse.value.reponse1,
           isCorrect: true,
         },
         {
           libelle: this.formQuestionReponse.value.reponse2,
           isCorrect: false,
         },
         {
           libelle: this.formQuestionReponse.value.reponse3,
           isCorrect: false,
         },
         {
           libelle: this.formQuestionReponse.value.reponse4,
           isCorrect: false,
         },
       ],
       libelleQuestion: this.formQuestionReponse.value.libelleQuestion,
       categorieId: this.categorieId.id,
       categorie: this.categorieId.libelle,
     };

     console.log(newQuestion);
     
    // const envoieQuestion = this.formQuestionReponse.value.libelleQuestion;
    this.lesReponses.push(newQuestion);       
    // const envoieReponse1 = this.formQuestionReponse.value.reponse1;
    // this.lesReponses.push(envoieReponse1);
    // const envoieReponse2 = this.formQuestionReponse.value.reponse2;
    // this.lesReponses.push(envoieReponse2);
    // const envoieReponse3 = this.formQuestionReponse.value.reponse3;
    // this.lesReponses.push(envoieReponse3);
    // const envoieReponse4 = this.formQuestionReponse.value.reponse4;
    // this.lesReponses.push(envoieReponse4);
  
    this.submitFormQuestionReponse.emit(newQuestion);
    // console.log("la question", envoieQuestion);
    // this.submitFormQuestionReponse.emit(envoieReponse1);
    // console.log("rep1=", envoieReponse1);
    // this.submitFormQuestionReponse.emit(envoieReponse2);
    // console.log('rep2=', envoieReponse2);
    // this.submitFormQuestionReponse.emit(envoieReponse3);
    // console.log('rep3=', envoieReponse3);
    // this.submitFormQuestionReponse.emit(envoieReponse4);
    // console.log('rep4=', envoieReponse4);
  }
}
//  onSubmitQuestionReponse() {
//     this.submitFormQuestionReponse.emit(this.formQuestionReponse.value);
//     console.log('ça marche', this.formQuestionReponse.value);
//   }

