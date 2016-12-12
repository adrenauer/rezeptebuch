var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
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
    }),
    __metadata("design:paramtypes", [])
], AppModule);
export { AppModule };
//# sourceMappingURL=../../../src/app/app.module.js.map