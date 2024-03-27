import {
  Component,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
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
  //@Output() sendCardCat: new EwenEmitter();

  @Input() category: Categorie = {
    libelle:
      'Si vous ne trouvez pas votre bonheur, cliquez ici pour créer de nouvelles Questions / Réponses...',
    id: 0,
  };
  // J'initialise cet objet CATEGORIE par défaut avec des valeurs.

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    //   if (!this.category) {
    //     this.category = {
    //       libelle: 'cliquez ici',
    //       id: 0,
    //     };
    //   }
  }
}
