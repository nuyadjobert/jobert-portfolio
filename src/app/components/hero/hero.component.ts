import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROFILE } from '../../data/portfolio-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  profile = PROFILE;
  first = PROFILE.name.split(' ')[0];
  rest = PROFILE.name.split(' ').slice(1).join(' ');
}
