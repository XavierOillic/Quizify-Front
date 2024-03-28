import { Component, OnInit } from '@angular/core';
import { Creation } from 'src/app/models/creation';
import { Stats } from 'src/app/models/stats';
import { CategoriesService } from 'src/app/services/categories.service';
import { CreationService } from 'src/app/services/creation.service';
import { QuestionsService } from 'src/app/services/questions.service';
import { StatistiquesService } from 'src/app/services/statistiques.service';

@Component({
  selector: 'app-page-stats',
  templateUrl: './page-stats.component.html',
  styleUrls: ['./page-stats.component.css']
})
export class PageStatsComponent implements OnInit {

  statToDisplay: Stats[] = [];
  creationToDisplay: Creation[] = [];
  numberOfQuestions: number = 0;
  numberOfCategories: number = 0;

  constructor(
    private statistiqueService: StatistiquesService,
    private creationService: CreationService,
    private questionService: QuestionsService,
    private categorieService: CategoriesService) { }

  ngOnInit(): void {
    this.statistiqueService.getStat().subscribe((data) => {
      console.log(data);
      this.statToDisplay = [...data];
    });
    this.creationService.getCreate().subscribe((data) => {
      console.log(data);
      this.creationToDisplay = [...data];
    });

    this.categorieService.getAllCat().subscribe((categories) => {
      this.numberOfCategories = categories.length;
    });

    this.questionService.getAllQuestion().subscribe((questions) => {
      this.numberOfQuestions = questions.length;
    });


  }

}
