import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-create-categorie',
  templateUrl: './form-create-categorie.component.html',
  styleUrls: ['./form-create-categorie.component.css']
})
export class FormCreateCategorieComponent implements OnInit {
  formCategorie!: FormGroup;
  @Output() submitFormCategorie = new EventEmitter(); //TYPER?

  ngOnInit(): void {
   this.initCategorie();
  }

  initCategorie() {
    this.formCategorie = new FormGroup({
      libelle: new FormControl(this.formCategorie, Validators.required),
    })
  }

  onSubmitFormCategorie(){
    this.submitFormCategorie.emit(this.formCategorie.value);
    console.log('catégorie ajoutée', this.formCategorie.value);
  }

}
