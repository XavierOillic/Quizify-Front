import { Component, Input } from '@angular/core';
import { Categorie } from 'src/app/models/categorie';

@Component({
  selector: 'app-card-theme',
  templateUrl: './card-theme.component.html',
  styleUrls: ['./card-theme.component.css'],
})
export class CardThemeComponent {
  @Input() categorie!: Categorie;

  @Input() cardColor: String = '';
}
