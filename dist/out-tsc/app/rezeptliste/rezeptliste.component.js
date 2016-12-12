var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
import { Rezept } from "../rezept/rezept.model";
import { Zutat } from "../rezept/zutaten.model";
var RezeptlisteComponent = (function () {
    function RezeptlisteComponent() {
        this.rezeptAusgewaehlt = new EventEmitter();
        this.rezepte = [
            new Rezept('Schnitzel', 'lecker', 'http://www.hoehenrainer.de/wp-content/uploads/Schnitzel-Wiener-Art.jpg', [
                new Zutat('Pommes', 10),
                new Zutat('Pommes', 1),
            ]),
            new Rezept('Salat', 'grün', 'https://d1d8i24om29pt.cloudfront.net/static/desktop/products/salat-chicken.png', [])
        ];
    }
    RezeptlisteComponent.prototype.beimAuswaehlen = function (rezept) {
        this.rezeptAusgewaehlt.emit(rezept);
    };
    return RezeptlisteComponent;
}());
__decorate([
    Output(),
    __metadata("design:type", Object)
], RezeptlisteComponent.prototype, "rezeptAusgewaehlt", void 0);
RezeptlisteComponent = __decorate([
    Component({
        selector: 'app-rezeptliste',
        templateUrl: './rezeptliste.component.html',
        styles: []
    }),
    __metadata("design:paramtypes", [])
], RezeptlisteComponent);
export { RezeptlisteComponent };
//# sourceMappingURL=../../../../src/app/rezeptliste/rezeptliste.component.js.map