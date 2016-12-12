import { Routes, RouterModule } from "@angular/router";

import { RezeptComponent } from "./rezept/rezept.component";
import { EinkaufslisteComponent } from "./einkaufsliste/einkaufsliste.component";
import { REZEPT_ROUTES } from "./rezept.routes";

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/rezepte', pathMatch: 'full'},
  { path: 'rezepte', component: RezeptComponent, children: REZEPT_ROUTES},
  { path: 'einkaufsliste', component: EinkaufslisteComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
