import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathKatexDirective } from '../../shared/math-katex.directive';
import { AlgorithmNode } from '../../models/algorithm-node.model';
@Component({
  selector: 'app-simple-preview',
  imports: [CommonModule, MathKatexDirective],
  templateUrl: './simple-preview.component.html',
  styleUrl: './simple-preview.component.scss',
})
export class SimplePreviewComponent {
  @Input() tree!: AlgorithmNode;

  toKaTeX(node: AlgorithmNode): string {
    if (node.type === 'uniterm') {
      return node.name ?? '';
    }
    const parts: string[] = [];
    node.children!.forEach((ch, i) => {
      if (i > 0) parts.push(node.operator!);
      parts.push(this.toKaTeX(ch));
    });
    const body = parts.join(' \\\\ ');
    return `\\left(\\begin{array}{l}${body}\\end{array}\\right.`;
  }
}
