import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Question } from 'src/app/models/question';
import { Reponse } from 'src/app/models/reponse';

@Component({
  selector: 'app-form-question-reponse',
  templateUrl: './form-question-reponse.component.html',
  styleUrls: ['./form-question-reponse.component.css'],
})
export class FormQuestionReponseComponent implements OnInit {
  formQuestionReponse!: FormGroup;

  @Output() submitFormQuestionReponse = new EventEmitter(); //a typer?
  // question!: Question;

  ngOnInit(): void {
    this.initQuestionReponse();
  }

  initQuestionReponse() {
    this.formQuestionReponse = new FormGroup({
      libelleQuestion: new FormControl(this.formQuestionReponse,Validators.required),
      reponse: new FormControl(this.formQuestionReponse, Validators.required),
    });
  }

  onSubmitQuestionReponse() {
    this.submitFormQuestionReponse.emit(this.formQuestionReponse.value);
    console.log('ça marche', this.formQuestionReponse.value);
  }
}

  // @Input() questionReponseRecupe!: Question;
  // @Output() submitFormReponse = new EventEmitter<Reponse>();
  // @Input() reponseRecupe!: Reponse;
