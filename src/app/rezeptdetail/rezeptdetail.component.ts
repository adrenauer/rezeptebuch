import { Component, Input } from '@angular/core';

import { Rezept } from "../rezept/rezept.model";

@Component({
  selector: 'app-rezeptdetail',
  templateUrl: './rezeptdetail.component.html',
  styles: []
})
export class RezeptdetailComponent {
  @Input() ausgewaehltesRezept: Rezept;

  constructor() { }

  public setRezept(rezept)
  {
    console.log(rezept);
    this.ausgewaehltesRezept = rezept;
  }
}
