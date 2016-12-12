import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Rezept } from "../rezept/rezept.model";

@Component({
  selector: 'app-rezeptnummer',
  templateUrl: './rezeptnummer.component.html',
})
export class RezeptnummerComponent {

  @Input() rezept: Rezept;
  @Input() rezeptId: number;
  @Output() rezeptAusgewaehlt = new EventEmitter<Rezept>(); //hier wird Event nach außen geschickt
  constructor() { }

  beimAuswaehlen() {
    this.rezeptAusgewaehlt.emit(this.rezept); //hier wird das ausgewählte Rezept übergeben
  }
}
