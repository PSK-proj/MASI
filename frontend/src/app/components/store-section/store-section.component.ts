import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
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
  @ViewChild(FormulaListComponent)
  private readonly listComp!: FormulaListComponent;

  preview?: { id: string; tree: AlgorithmNode; name: string };

  @Output() assignTarget = new EventEmitter<{
    id: string;
    tree: AlgorithmNode;
    name: string;
  }>();
  @Output() assignReplacement = new EventEmitter<{
    id: string;
    tree: AlgorithmNode;
    name: string;
  }>();
  @Output() deleted = new EventEmitter<string>();

  public reload(): void {
    this.listComp.loadList();
  }

  selectPreview(sel: { id: string; tree: AlgorithmNode; name: string }) {
    this.preview = sel;
  }

  setAsTarget() {
    if (this.preview) {
      this.assignTarget.emit(this.preview);
    }
  }

  setAsReplacement() {
    if (this.preview) {
      this.assignReplacement.emit(this.preview);
    }
  }

  onDeleted(id: string) {
    if (this.preview?.id === id) {
      this.preview = undefined;
    }
    this.reload();
    this.deleted.emit(id);
  }
}
