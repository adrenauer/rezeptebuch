var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Rezept } from "../rezept/rezept.model";
var RezeptdetailComponent = (function () {
    function RezeptdetailComponent() {
    }
    RezeptdetailComponent.prototype.setRezept = function (rezept) {
        console.log(rezept);
        this.ausgewaehltesRezept = rezept;
    };
    return RezeptdetailComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Rezept)
], RezeptdetailComponent.prototype, "ausgewaehltesRezept", void 0);
RezeptdetailComponent = __decorate([
    Component({
        selector: 'app-rezeptdetail',
        templateUrl: './rezeptdetail.component.html',
        styles: []
    }),
    __metadata("design:paramtypes", [])
], RezeptdetailComponent);
export { RezeptdetailComponent };
//# sourceMappingURL=../../../../src/app/rezeptdetail/rezeptdetail.component.js.map