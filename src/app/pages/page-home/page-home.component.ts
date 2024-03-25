import { Component, Input } from '@angular/core';
import { Categorie } from 'src/app/models/categorie';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css'],
})
export class PageHomeComponent {
  @Input() categorie!: Categorie;
}
