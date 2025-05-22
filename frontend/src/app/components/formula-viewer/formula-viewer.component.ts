import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathKatexDirective } from '../../shared/math-katex.directive';
import { AlgorithmNode } from '../../models/algorithm-node.model';

@Component({
  selector: 'app-formula-viewer',
  standalone: true,
  imports: [CommonModule, MathKatexDirective],
  templateUrl: './formula-viewer.component.html',
  styleUrls: ['./formula-viewer.component.scss'],
})
export class FormulaViewerComponent {
  @Input() tree!: AlgorithmNode;
  @Output() nodeClick = new EventEmitter<number[]>();

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

  renderNode(node: AlgorithmNode): string {
    if (node.type === 'uniterm') return node.name ?? '';
    return this.toKaTeX(node);
  }

  onNodeClick(path: number[]) {
    this.nodeClick.emit(path);
  }
}
