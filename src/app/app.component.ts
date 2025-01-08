import { Component } from '@angular/core';
import { NavVisibilityServiceService } from '../../src/app/core/Services/Nav/nav-visibility-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'e-commerce';
  constructor(public navService: NavVisibilityServiceService) {}
}
