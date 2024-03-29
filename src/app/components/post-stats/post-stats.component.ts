import { Component, Input } from '@angular/core';
import { Creation } from 'src/app/models/creation';
import { Stats } from 'src/app/models/stats';

@Component({
  selector: 'app-post-stats',
  templateUrl: './post-stats.component.html',
  styleUrls: ['./post-stats.component.css']
})
export class PostStatsComponent {
  // @Input() stats!: Stats;
  // @Input() creation!: Creation;
  // @Input() numberOfCategories!: number;
  // @Input() numberOfQuestions!: number;
  // @Input() games!: number;
  @Input() libelle!: string;
  @Input() value!: string;


}
