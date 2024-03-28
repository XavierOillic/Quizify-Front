import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-page-quiz',
  templateUrl: './page-quiz.component.html',
  styleUrls: ['./page-quiz.component.css'],
})
export class PageQuizComponent implements OnInit {
  theme: any;
  categoriesToDisplay: Categorie[] = [];

  constructor(
    private categoryService: CategoriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.categoryService.getAllCat().subscribe((data) => {
      this.categoriesToDisplay = [...data];
    });
  }
}
