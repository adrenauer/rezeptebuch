import { Component, Output, EventEmitter } from '@angular/core';

import { Rezept } from "../rezept/rezept.model";
import { Zutat } from "../rezept/zutaten.model";



@Component({
  selector: 'app-rezeptliste',
  templateUrl: './rezeptliste.component.html',
  styles: []
})
export class RezeptlisteComponent {
  @Output() rezeptAusgewaehlt = new EventEmitter<Rezept>(); //selbes Vorgehen wie bei rezeptnummer, event wird hier nach auußen geschickt

  rezepte: Rezept[] = [
    new Rezept('Schnitzel',
    'lecker',
    'http://www.hoehenrainer.de/wp-content/uploads/Schnitzel-Wiener-Art.jpg',
    [
      new Zutat('Pommes', 10),
      new Zutat('Pommes', 1),
    ]
  ),
    new Rezept('Salat', 'grün', 'https://d1d8i24om29pt.cloudfront.net/static/desktop/products/salat-chicken.png', [])
  ];
  ausgewaehltesRezept: Rezept; //wird in html eingefügt, abfangbar durch $event
  constructor() { }

// Rezept muss bis zu rezept.component duchgereicht werden
  beimAuswaehlen(rezept: Rezept) {
    this.rezeptAusgewaehlt.emit(rezept);
  }
}
