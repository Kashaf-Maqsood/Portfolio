import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';

/**
 * Adds a subtle rise + fade the first time an element enters the viewport.
 * Respects prefers-reduced-motion by doing nothing (element stays visible).
 */
@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements OnInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {}

  ngOnInit(): void {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const node = this.el.nativeElement;

    if (prefersReduced) {
      this.renderer.addClass(node, 'revealed');
      return;
    }

    this.renderer.addClass(node, 'reveal-init');

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(node, 'revealed');
            this.observer?.unobserve(node);
          }
        });
      },
      { threshold: 0.15 }
    );

    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
