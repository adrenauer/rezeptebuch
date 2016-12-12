var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Rezept } from "../rezept/rezept.model";
var RezeptnummerComponent = (function () {
    function RezeptnummerComponent() {
        this.rezeptAusgewaehlt = new EventEmitter();
    }
    RezeptnummerComponent.prototype.beimAuswaehlen = function () {
        this.rezeptAusgewaehlt.emit(this.rezept);
    };
    return RezeptnummerComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Rezept)
], RezeptnummerComponent.prototype, "rezept", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], RezeptnummerComponent.prototype, "rezeptId", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], RezeptnummerComponent.prototype, "rezeptAusgewaehlt", void 0);
RezeptnummerComponent = __decorate([
    Component({
        selector: 'app-rezeptnummer',
        templateUrl: './rezeptnummer.component.html',
    }),
    __metadata("design:paramtypes", [])
], RezeptnummerComponent);
export { RezeptnummerComponent };
//# sourceMappingURL=../../../../src/app/rezeptnummer/rezeptnummer.component.js.map