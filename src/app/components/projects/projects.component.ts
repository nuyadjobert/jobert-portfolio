import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../../data/portfolio-data';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'

})
export class ProjectsComponent {
  projects = PROJECTS;
}
