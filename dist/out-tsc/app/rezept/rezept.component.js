var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { RezeptdetailComponent } from "../rezeptdetail/rezeptdetail.component";
var RezeptComponent = (function () {
    function RezeptComponent(details) {
        this.details = details;
    }
    RezeptComponent.prototype.setRezept = function (rezept) {
        this.details.setRezept(rezept);
        this.ausgewaehltesRezept = rezept;
        return this.ausgewaehltesRezept;
    };
    return RezeptComponent;
}());
RezeptComponent = __decorate([
    Component({
        selector: 'app-rezept',
        templateUrl: './rezept.component.html',
        styles: []
    }),
    __metadata("design:paramtypes", [RezeptdetailComponent])
], RezeptComponent);
export { RezeptComponent };
//# sourceMappingURL=../../../../src/app/rezept/rezept.component.js.map