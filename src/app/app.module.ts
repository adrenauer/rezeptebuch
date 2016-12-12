import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RezeptComponent } from './rezept/rezept.component';
import { EinkaufslisteComponent } from './einkaufsliste/einkaufsliste.component';
import { RezeptlisteComponent } from './rezeptliste/rezeptliste.component';
import { RezeptdetailComponent } from './rezeptdetail/rezeptdetail.component';
import { RezeptnummerComponent } from './rezeptnummer/rezeptnummer.component';
import { EinkauflisteHinzufügenComponent } from './einkaufliste-hinzufügen.component';
import { DropdownDirective } from './dropdown.directive';
import { routing } from "./app.routing";
import { RezeptStartComponent } from './rezept-start.component';
import { RezeptBearbeitungComponent } from './rezept-bearbeitung/rezept-bearbeitung.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RezeptComponent,
    EinkaufslisteComponent,
    RezeptlisteComponent,
    RezeptdetailComponent,
    RezeptnummerComponent,
    EinkauflisteHinzufügenComponent,
    DropdownDirective,
    RezeptStartComponent,
    RezeptBearbeitungComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [RezeptdetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
