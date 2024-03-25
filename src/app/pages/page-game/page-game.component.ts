import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-game',
  templateUrl: './page-game.component.html',
  styleUrls: ['./page-game.component.css'],
})
export class PageGameComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    let id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  }
}
