var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, HostListener, HostBinding } from "@angular/core";
var DropdownDirective = (function () {
    function DropdownDirective() {
        this.istOffen = false;
    }
    DropdownDirective.prototype.toogle = function () {
        this.istOffen = !this.istOffen;
    };
    return DropdownDirective;
}());
__decorate([
    HostBinding('class.open'),
    __metadata("design:type", Object)
], DropdownDirective.prototype, "istOffen", void 0);
__decorate([
    HostListener('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropdownDirective.prototype, "toogle", null);
DropdownDirective = __decorate([
    Directive({
        selector: '[appDropdown]'
    }),
    __metadata("design:paramtypes", [])
], DropdownDirective);
export { DropdownDirective };
//# sourceMappingURL=../../../src/app/dropdown.directive.js.map