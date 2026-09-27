import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  open = false;
  scrolled = false;

  links = [
    { id: '01', label: 'About', target: 'about' },
    { id: '02', label: 'Stack', target: 'skills' },
    { id: '03', label: 'Work', target: 'projects' },
    { id: '04', label: 'Path', target: 'education' },
    { id: '05', label: 'Contact', target: 'contact' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 16;
  }

  toggle() {
    this.open = !this.open;
  }

  close() {
    this.open = false;
  }

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.close();
  }
}