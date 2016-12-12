import { Component, OnInit } from '@angular/core';

import { Rezept } from "./rezept.model";
import { RezeptdetailComponent } from "../rezeptdetail/rezeptdetail.component";

@Component({
  selector: 'app-rezept',
  templateUrl: './rezept.component.html',
  styles: []
})
export class RezeptComponent {
  ausgewaehltesRezept: Rezept;

  constructor(public details: RezeptdetailComponent) {
  }

  public setRezept(rezept)
  {
    this.details.setRezept(rezept);
    this.ausgewaehltesRezept = rezept;
    return this.ausgewaehltesRezept;
  }

}
