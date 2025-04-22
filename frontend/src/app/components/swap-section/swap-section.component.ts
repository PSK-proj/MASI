import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulaViewerComponent } from '../formula-viewer/formula-viewer.component';
import { AlgorithmNode } from '../../models/algorithm-node.model';

@Component({
  selector: 'app-swap-section',
  standalone: true,
  imports: [CommonModule, FormulaViewerComponent],
  templateUrl: './swap-section.component.html',
  styleUrls: ['./swap-section.component.scss'],
})
export class SwapSectionComponent {
  @Input() target!: { id: string; tree: AlgorithmNode; name: string };
  @Input() replacement!: { id: string; tree: AlgorithmNode; name: string };
  @Output() swap = new EventEmitter<number[]>();

  selectedPath?: number[];

  onNodeClick(path: number[]) {
    if (path.length) this.selectedPath = path;
  }

  doSwap() {
    if (this.selectedPath) this.swap.emit(this.selectedPath);
  }
}
