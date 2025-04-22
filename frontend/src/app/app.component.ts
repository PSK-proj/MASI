import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormulaBuilderComponent } from './components/formula-builder/formula-builder.component';
import { FormulaViewerComponent } from './components/formula-viewer/formula-viewer.component';
import { FormulaListComponent } from './components/formula-list/formula-list.component';
import { AlgorithmNode } from './models/algorithm-node.model';
import { FormulaService } from './services/formula.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FormulaBuilderComponent,
    FormulaViewerComponent,
    FormulaListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(FormulaListComponent) listComp!: FormulaListComponent;

  buildingTree: AlgorithmNode = {
    type: 'sequence',
    operator: ';',
    children: [],
  };

  preview?: { id: string; tree: AlgorithmNode; name: string };

  target?: { id: string; tree: AlgorithmNode; name: string };
  replacement?: { id: string; tree: AlgorithmNode; name: string };

  selectedPath?: number[];

  resultTree?: AlgorithmNode;

  constructor(private readonly formulaService: FormulaService) {}

  ngOnInit(): void {}

  onBuilderTree(tree: AlgorithmNode): void {
    this.buildingTree = tree;
  }

  saveBuilder(nameInput: HTMLInputElement): void {
    const name = nameInput.value.trim();
    if (!name) return;
    this.formulaService.saveFormula(name, this.buildingTree).subscribe(() => {
      nameInput.value = '';
      this.listComp.loadList();
    });
  }

  onSelectFormula(sel: {
    id: string;
    tree: AlgorithmNode;
    name: string;
  }): void {
    this.preview = sel;
  }

  setAsTarget(): void {
    if (this.preview) {
      this.target = this.preview;
      this.preview = undefined;
      this.selectedPath = undefined;
    }
  }
  setAsReplacement(): void {
    if (this.preview) {
      this.replacement = this.preview;
      this.preview = undefined;
    }
  }

  onNodePath(path: number[]): void {
    if (path.length) {
      this.selectedPath = path;
    }
  }

  doReplace(): void {
    if (!this.target || !this.replacement || !this.selectedPath) return;
    this.formulaService
      .replace(this.target.tree, this.replacement.tree, this.selectedPath)
      .subscribe((r) => (this.resultTree = r.result));
  }

  onSaveResult(nameInput: HTMLInputElement): void {
    const name = nameInput.value.trim();
    if (!name || !this.resultTree) return;
    this.formulaService.saveFormula(name, this.resultTree).subscribe(() => {
      nameInput.value = '';
      this.listComp.loadList();
    });
  }
}
