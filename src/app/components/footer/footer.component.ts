import { Component } from '@angular/core';
import { PROFILE } from '../../data/portfolio-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  profile = PROFILE;
  year = new Date().getFullYear();
}
