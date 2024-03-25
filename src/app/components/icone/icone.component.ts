import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icone',
  templateUrl: './icone.component.html',
  styleUrls: ['./icone.component.css'],
})
export class IconeComponent {
  @Input() iconName:
    | 'trash'
    | 'playstation'
    | 'list'
    | 'percent'
    | 'globe-europe-africa'
    | 'hourglass-split'
    | 'pencil' = 'pencil';

  @Input() iconSize: number = 2;
  @Input() iconColor: string = 'white';
}
