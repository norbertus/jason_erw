// src/app/journey-search/journey-search.component.ts

import { Component, OnInit } from '@angular/core';
import { Dbstopplace } from '../dbstopplace';
import { DbstopplaceService } from '../dbstopplace.service';

@Component({
  selector: 'app-journey-search',
  templateUrl: './journey-search.component.html',
  styleUrls: ['./journey-search.component.scss']
})
export class JourneySearchComponent implements OnInit {

  stationname = 'Berlin';
  
//  dbstopplaces: Array<Journey> = [];
  dbstopplaces: Array<Dbstopplace> = [];
//  selectetDbstopplace: Journey | null = null;
  selectetDbstopplace: Dbstopplace | null = null;
  delayFilter = false;

  basket: { [key: string]: boolean } = {
    1071: true,
    4859: true
  };

  constructor(private dbstopplaceService: DbstopplaceService) {
    }

  ngOnInit(): void {
  }

  search(): void {

    this.dbstopplaceService.find(this.stationname).subscribe({
      next: (dbstopplaces) => {
        this.dbstopplaces = dbstopplaces;
      },
      error: (err) => {
        console.debug('Error', err);
      }
    });

  }

//  select(f: Journey): void {
  select(f: Dbstopplace): void {
      this.selectetDbstopplace = f;
  }

}
