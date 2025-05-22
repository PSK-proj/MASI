import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormulaBuilderComponent } from '../formula-builder/formula-builder.component';
import { AlgorithmNode } from '../../models/algorithm-node.model';

@Component({
  selector: 'app-builder-section',
  standalone: true,
  imports: [CommonModule, FormsModule, FormulaBuilderComponent],
  templateUrl: './builder-section.component.html',
  styleUrls: ['./builder-section.component.scss'],
})
export class BuilderSectionComponent {
  @Output() treeChange = new EventEmitter<AlgorithmNode>();
  @Output() save = new EventEmitter<string>();

  onTree(tree: AlgorithmNode) {
    this.treeChange.emit(tree);
  }
  onSave(nameInput: HTMLInputElement) {
    const name = nameInput.value.trim();
    if (name) this.save.emit(name);
  }
}
