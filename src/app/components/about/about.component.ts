import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JOURNEY } from '../../data/portfolio-data';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  journey = JOURNEY;
}