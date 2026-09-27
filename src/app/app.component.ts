import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CursorGlowDirective } from './components/directives/cursor-glow.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CursorGlowDirective],
  templateUrl: './app.component.html',
})
export class AppComponent {
  @HostListener('document:mousemove', ['$event'])
  onMove(event: MouseEvent) {
    document.documentElement.style.setProperty('--mx', `${event.clientX}px`);
    document.documentElement.style.setProperty('--my', `${event.clientY}px`);
  }
}
