import { Routes, RouterModule } from "@angular/router";

import { RezeptStartComponent } from "./rezept-start.component";
import { RezeptdetailComponent } from "./rezeptdetail/rezeptdetail.component";
import { RezeptBearbeitungComponent } from "./rezept-bearbeitung/rezept-bearbeitung.component";

export const REZEPT_ROUTES: Routes = [
  { path: '', component: RezeptStartComponent },
  { path: 'neu', component: RezeptBearbeitungComponent},
  { path: ':id', component: RezeptdetailComponent},
];
