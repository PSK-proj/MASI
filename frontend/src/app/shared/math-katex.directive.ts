import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

declare const katex: any;

@Directive({
  selector: '[mathK]',
  standalone: true,
})
export class MathKatexDirective implements OnChanges {
  @Input('mathK') tex = '';

  constructor(private readonly el: ElementRef<HTMLElement>) {}

  ngOnChanges() {
    const container = this.el.nativeElement;
    if (!this.tex) {
      container.textContent = '';
      return;
    }
    try {
      container.innerHTML = katex.renderToString(this.tex, {
        throwOnError: false,
        displayMode: true,
      });
    } catch {
      container.textContent = this.tex;
    }
  }
}
