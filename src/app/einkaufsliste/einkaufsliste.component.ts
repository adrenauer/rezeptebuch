import { Component, OnInit } from '@angular/core';

import { Zutat } from "../rezept/zutaten.model";

@Component({
  selector: 'app-einkaufsliste',
  templateUrl: './einkaufsliste.component.html',
  styles: []
})
export class EinkaufslisteComponent implements OnInit {

  zutaten: Zutat[] = [];

  constructor() { }

  ngOnInit() {
  }

}
