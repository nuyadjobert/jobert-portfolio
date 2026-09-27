import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  ACHIEVEMENTS,
  EDUCATION,
  EXPERIENCE,
  PROFILE,
  PROJECTS,
  SKILLS,
} from '../data/portfolio-data';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './resume.component.html',
})
export class ResumeComponent {
  profile = PROFILE;
  education = EDUCATION;
  experience = EXPERIENCE;
  projects = PROJECTS;
  achievements = ACHIEVEMENTS;
  groups = Object.entries(SKILLS);

  print() {
    window.print();
  }
}
