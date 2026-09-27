import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnDestroy
} from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {

  private observer!: IntersectionObserver;

  constructor(
    private element: ElementRef<HTMLElement>
  ) {}

  ngAfterViewInit(): void {

    this.observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            this.element.nativeElement.classList.add(
              'scroll-visible'
            );

          } else {

            this.element.nativeElement.classList.remove(
              'scroll-visible'
            );

          }

        });

      },
      {
        threshold: 0.15
      }
    );

    this.observer.observe(
      this.element.nativeElement
    );
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}