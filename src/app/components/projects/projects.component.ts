import { Component, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS, Project } from '../../data/portfolio-data';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnDestroy {

  projects = PROJECTS;
  selectedProject: Project | null = null;
  activeSlide: Record<string, number> = {};


  viewProject(project: Project): void {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden'; // lock page scroll behind the popup
  }

  closeProject(): void {
    this.selectedProject = null;
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.selectedProject) this.closeProject();
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }

  isMobileApp(app: { name: string }): boolean {
  return /android|ios|mobile/i.test(app.name);
}

private stepOf(track: HTMLElement): number {
  const card = track.firstElementChild as HTMLElement | null;
  return card ? card.offsetWidth + 16 : 0; // 16 = gap-4
}

onSlide(e: Event, key: string): void {
  const track = e.target as HTMLElement;
  const step = this.stepOf(track);
  if (step) this.activeSlide[key] = Math.round(track.scrollLeft / step);
}

slide(track: HTMLElement, dir: number): void {
  track.scrollBy({ left: dir * this.stepOf(track), behavior: 'smooth' });
}

goTo(track: HTMLElement, i: number): void {
  track.scrollTo({ left: i * this.stepOf(track), behavior: 'smooth' });
}
}