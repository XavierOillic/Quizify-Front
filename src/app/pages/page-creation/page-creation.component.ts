import { Component, Input } from '@angular/core';
import { Categorie } from 'src/app/models/categorie';
import { CategoriesService } from 'src/app/services/categories.service';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-page-creation',
  templateUrl: './page-creation.component.html',
  styleUrls: ['./page-creation.component.css'],
})
export class PageCreationComponent {
  constructor(private categoryServ: CategoriesService) {}
  @Input() categorieTheme!: undefined;

  @Input() categoryToDisplay: Categorie[] = [];
  @Input() cardColor: String = '';

  ngOnInit(): void {
    this.categoryServ.getAllCat().subscribe((dataCategory) => {
      console.log(dataCategory);
      this.categoryToDisplay = [...dataCategory];
    });
  }
}
