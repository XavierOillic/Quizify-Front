import { Component } from '@angular/core';
import { Categorie } from 'src/app/models/categorie';

@Component({
  selector: 'app-page-creation',
  templateUrl: './page-creation.component.html',
  styleUrls: ['./page-creation.component.css'],
})
export class PageCreationComponent {
  categorieTheme: Categorie[] = [];
}
