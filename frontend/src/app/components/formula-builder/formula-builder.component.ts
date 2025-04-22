import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SimplePreviewComponent } from '../simple-preview/simple-preview.component';
import { AlgorithmNode } from '../../models/algorithm-node.model';

@Component({
  selector: 'app-formula-builder',
  standalone: true,
  imports: [CommonModule, FormsModule, SimplePreviewComponent],
  templateUrl: './formula-builder.component.html',
  styleUrls: ['./formula-builder.component.scss'],
})
export class FormulaBuilderComponent implements OnInit {
  uniterms: string[] = ['A', 'B'];
  operator: ';' | ',' = ';';
  localTree!: AlgorithmNode;

  @Output() treeChange = new EventEmitter<AlgorithmNode>();

  ngOnInit() {
    this.updateTree();
  }

  trackByIndex(index: number): number {
    return index;
  }

  onUnitermChange(idx: number, value: string) {
    this.uniterms[idx] = value;
    this.updateTree();
  }

  addUniterm() {
    this.uniterms.push('');
    this.updateTree();
  }

  removeUniterm(idx: number) {
    this.uniterms.splice(idx, 1);
    this.updateTree();
  }

  onOperatorChange(op: ';' | ',') {
    this.operator = op;
    this.updateTree();
  }

  private buildTree(): AlgorithmNode {
    return {
      type: 'sequence',
      operator: this.operator,
      children: this.uniterms.map((n) => ({ type: 'uniterm', name: n })),
    };
  }

  private updateTree() {
    this.localTree = this.buildTree();
    this.treeChange.emit(this.localTree);
  }
}
