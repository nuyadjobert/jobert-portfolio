import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EDUCATION, ACHIEVEMENTS, EXPERIENCE, AWARD_IMAGE } from '../../data/portfolio-data';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive'; // adjust path


@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  education = EDUCATION;
  achievements = ACHIEVEMENTS;
  experience = EXPERIENCE;
  awardImage = AWARD_IMAGE;
}
