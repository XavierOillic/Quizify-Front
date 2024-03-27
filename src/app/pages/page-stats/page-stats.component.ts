import { Component, OnInit } from '@angular/core';
import { Creation } from 'src/app/models/creation';
import { Stats } from 'src/app/models/stats';
import { CreationService } from 'src/app/services/creation.service';
import { StatistiquesService } from 'src/app/services/statistiques.service';

@Component({
  selector: 'app-page-stats',
  templateUrl: './page-stats.component.html',
  styleUrls: ['./page-stats.component.css']
})
export class PageStatsComponent implements OnInit {

  statToDisplay: Stats[] = [];
  creationToDisplay: Creation[] = [];

  constructor(private statistiqueService: StatistiquesService, private creationService: CreationService) { }

  ngOnInit(): void {
    this.statistiqueService.getStat().subscribe((data) => {
      console.log(data);
      this.statToDisplay = [...data];
    });
    this.creationService.getCreate().subscribe((data) => {
      console.log(data);
      this.creationToDisplay = [...data];
    })

  }



}
