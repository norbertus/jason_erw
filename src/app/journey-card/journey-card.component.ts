// src/app/journey-card/journey-card.component.ts

import { Component, Input, Output, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Dbstopplace } from '../dbstopplace';


@Component({
  selector: 'journey-card',
  templateUrl: './journey-card.component.html',
  styleUrls: ['./journey-card.component.scss']
})
export class JourneyCardComponent implements OnInit, OnChanges {

  @Input() item: Dbstopplace | null = null;
  @Input() selected = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor() {
    console.debug('ctor', this.item);
  }

  ngOnInit() {
    console.debug('ngOnInit', this.item);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.debug('ngOnChanges', this.item);

    if (changes.item) {
    console.debug('ngOnChanges: item');
    }
    if (changes.selected) {
    console.debug('ngOnChanges: selected');
    }
  }

  select() {
    this.selected = true;
    this.selectedChange.emit(true);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.emit(false);
  }

}
