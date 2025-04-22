import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulaViewerComponent } from '../formula-viewer/formula-viewer.component';
import { AlgorithmNode } from '../../models/algorithm-node.model';

@Component({
  selector: 'app-result-section',
  standalone: true,
  imports: [CommonModule, FormulaViewerComponent],
  templateUrl: './result-section.component.html',
  styleUrls: ['./result-section.component.scss'],
})
export class ResultSectionComponent {
  @Input() resultTree!: AlgorithmNode;
  @Output() saveResult = new EventEmitter<string>();

  onSave(nameInput: HTMLInputElement) {
    const name = nameInput.value.trim();
    if (name) this.saveResult.emit(name);
  }
}
