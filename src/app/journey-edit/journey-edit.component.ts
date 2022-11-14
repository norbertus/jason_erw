// src/app/journey-booking/journey-edit/journey-edit.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-journey-edit',
  templateUrl: './journey-edit.component.html',
  styleUrls: ['./journey-edit.component.scss']
})
export class JourneyEditComponent implements OnInit {

  id = 0;
  showDetails = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.id = p.id;
      this.showDetails = p.showDetails;
    });
  }

}
