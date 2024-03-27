import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Categorie } from 'src/app/models/categorie';
import { CategoriesService } from 'src/app/services/categories.service';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-card-theme',
  templateUrl: './card-theme.component.html',
  styleUrls: ['./card-theme.component.css'],
})
export class CardThemeComponent implements OnChanges {
  constructor(
    private categoryServ: CategoriesService,
    private questionServ: QuestionsService
  ) {}

  @Input() category!: Categorie;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
