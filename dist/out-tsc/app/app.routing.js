import { RouterModule } from "@angular/router";
import { RezeptComponent } from "./rezept/rezept.component";
import { EinkaufslisteComponent } from "./einkaufsliste/einkaufsliste.component";
import { REZEPT_ROUTES } from "./rezept.routes";
var APP_ROUTES = [
    { path: '', redirectTo: '/rezepte', pathMatch: 'full' },
    { path: 'rezepte', component: RezeptComponent, children: REZEPT_ROUTES },
    { path: 'einkaufsliste', component: EinkaufslisteComponent },
];
export var routing = RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=../../../src/app/app.routing.js.map