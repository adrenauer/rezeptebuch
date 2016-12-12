import { RezeptStartComponent } from "./rezept-start.component";
import { RezeptdetailComponent } from "./rezeptdetail/rezeptdetail.component";
import { RezeptBearbeitungComponent } from "./rezept-bearbeitung/rezept-bearbeitung.component";
export var REZEPT_ROUTES = [
    { path: '', component: RezeptStartComponent },
    { path: 'neu', component: RezeptBearbeitungComponent },
    { path: ':id', component: RezeptdetailComponent },
];
//# sourceMappingURL=../../../src/app/rezept.routes.js.map