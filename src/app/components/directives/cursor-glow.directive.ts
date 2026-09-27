import { Directive, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGlobalCursorGlow]',
  standalone: true
})
export class CursorGlowDirective {

  constructor(private renderer: Renderer2) {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.renderer.setStyle(
      document.documentElement,
      '--mouse-x',
      `${event.clientX}px`
    );
    this.renderer.setStyle(
      document.documentElement,
      '--mouse-y',
      `${event.clientY}px`
    );
  }
}