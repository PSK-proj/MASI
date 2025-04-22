import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulaListComponent } from '../formula-list/formula-list.component';
import { SimplePreviewComponent } from '../simple-preview/simple-preview.component';
import { AlgorithmNode } from '../../models/algorithm-node.model';

@Component({
  selector: 'app-store-section',
  standalone: true,
  imports: [CommonModule, FormulaListComponent, SimplePreviewComponent],
  templateUrl: './store-section.component.html',
  styleUrls: ['./store-section.component.scss'],
})
export class StoreSectionComponent {
  preview?: { id: string; tree: AlgorithmNode; name: string };

  @Output() assignTarget = new EventEmitter<typeof this.preview>();
  @Output() assignReplacement = new EventEmitter<typeof this.preview>();

  selectPreview(sel: typeof this.preview) {
    this.preview = sel;
  }
  setAsTarget() {
    if (this.preview) this.assignTarget.emit(this.preview);
  }
  setAsReplacement() {
    if (this.preview) this.assignReplacement.emit(this.preview);
  }
}
