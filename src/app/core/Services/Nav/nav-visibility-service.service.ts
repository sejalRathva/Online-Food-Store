import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavVisibilityServiceService {
  isNavVisible = true;

  showNav() {
    this.isNavVisible = true;
  }

  hideNav() {
    this.isNavVisible = false;
  }
}
