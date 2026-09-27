import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILLS } from '../../data/portfolio-data';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {

  groups = Object.entries(SKILLS);

  icons: Record<string, string> = {

    // Languages
    TypeScript: 'devicon-typescript-plain',
    JavaScript: 'devicon-javascript-plain',
    HTML: 'devicon-html5-plain',
    CSS: 'devicon-css3-plain',
    Dart: 'devicon-dart-plain',
    Kotlin: 'devicon-kotlin-plain',
    Java: 'devicon-java-plain',
    PHP: 'devicon-php-plain',

    // Frontend
    Angular: 'devicon-angularjs-plain',
    Flutter: 'devicon-flutter-plain',
    'Tailwind CSS': 'devicon-tailwindcss-original',
    Bootstrap: 'devicon-bootstrap-plain',

    // Backend
    Laravel: 'devicon-laravel-original',
    MySQL: 'devicon-mysql-plain',
    ' MVC Architecture': 'mvc-icon',

    // Tools
    'VS Code': 'devicon-vscode-plain',
    'Android Studio': 'devicon-androidstudio-plain',
    GitHub: 'devicon-github-original',
    Figma: 'devicon-figma-plain',
  };

  iconFor(name: string): string {
    return this.icons[name] || 'devicon-code-plain';
  }
}