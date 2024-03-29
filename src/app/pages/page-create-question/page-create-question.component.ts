import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { Question } from 'src/app/models/question';
import { Reponse } from 'src/app/models/reponse';
import { CategoriesService } from 'src/app/services/categories.service';
import { QuestionsService } from 'src/app/services/questions.service';
import { ReponsesService } from 'src/app/services/reponses.service';

@Component({
  selector: 'app-page-create-question',
  templateUrl: './page-create-question.component.html',
  styleUrls: ['./page-create-question.component.css'],
})
export class PageCreateQuestionComponent implements OnInit {
  categorieToDisplay: Categorie[] = [];
  categorieId!: number;

  constructor(
    private questionsService: QuestionsService,
    private categoriesService: CategoriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.categoriesService.getAllCat().subscribe((dataCategorie) => {
      console.log("mes categories de page create", dataCategorie);
      this.categorieToDisplay = [...dataCategorie];
      // this.categoriesToSend = this.getCategorieFrom(dataCategorie);
      Number(this.route.snapshot.paramMap.get('categorieId'));
      console.log("ça arrive là ou pas?", this.categorieId);
    });
  }

  newQuestionReponseSubmitted(question: Question) {

    console.log(question);
    
    this.questionsService
      .createNewQuestionWithReponse(question)
      .subscribe((resp) => {
        console.log('new question ok', resp);
      });
  }
}
