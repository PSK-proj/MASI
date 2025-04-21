import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathKatexDirective } from '../../shared/math-katex.directive';
import { AlgorithmNode } from '../../models/algorithm-node.model';

@Component({
  selector: 'app-formula-viewer',
  standalone: true,
  imports: [CommonModule, MathKatexDirective],
  template: `<div mathK="{{ toKaTeX(tree) }}"></div>`,
  styles: [
    `
      div {
        padding: 1rem;
        border: 1px solid #ddd;
        border-radius: 4px;
      }
    `,
  ],
})
export class FormulaViewerComponent {
  @Input() tree!: AlgorithmNode;

  toKaTeX(node: AlgorithmNode): string {
    if (node.type === 'uniterm') return node.name ?? '';
    const parts: string[] = [];
    node.children!.forEach((ch, i) => {
      if (i > 0) parts.push(node.operator!);
      parts.push(this.toKaTeX(ch));
    });
    const body = parts.join(' \\\\ ');
    return `\\left(\\begin{array}{l}${body}\\end{array}\\right.`;
  }
}
