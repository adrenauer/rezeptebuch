import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {

  @HostBinding('class.open') istOffen = false;

  @HostListener('click') toogle() {
      this.istOffen = !this.istOffen;
  }
}
