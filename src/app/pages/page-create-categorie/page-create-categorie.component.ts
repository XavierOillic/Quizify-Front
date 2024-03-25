import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-page-create-categorie',
  templateUrl: './page-create-categorie.component.html',
  styleUrls: ['./page-create-categorie.component.css'],
})
export class PageCreateCategorieComponent {
  constructor(
    private categoriesService: CategoriesService,
    // private router: Router
  ) {}

  newCategorieSubmitted(categorie: Categorie) {
    this.categoriesService.createNewCategorie(categorie).subscribe((resp) => {
      console.log("new cat createFind", resp);
      // this.router.navigate(['/createQuestion']);a ajouter pour redirection vers création de question
    })
  }
}
