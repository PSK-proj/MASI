import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuilderSectionComponent } from './components/builder-section/builder-section.component';
import { StoreSectionComponent } from './components/store-section/store-section.component';
import { SwapSectionComponent } from './components/swap-section/swap-section.component';
import { ResultSectionComponent } from './components/result-section/result-section.component';
import { AlgorithmNode } from './models/algorithm-node.model';
import { FormulaService } from './services/formula.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    BuilderSectionComponent,
    StoreSectionComponent,
    SwapSectionComponent,
    ResultSectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  buildingTree!: AlgorithmNode;

  target?: { id: string; tree: AlgorithmNode; name: string };
  replacement?: { id: string; tree: AlgorithmNode; name: string };

  resultTree?: AlgorithmNode;

  constructor(private readonly formulaService: FormulaService) {}

  onBuilderTree(tree: AlgorithmNode) {
    this.buildingTree = tree;
  }
  onBuilderSave(name: string) {
    this.formulaService.saveFormula(name, this.buildingTree).subscribe();
  }

  onAssignTarget(sel: any) {
    this.target = sel;
  }
  onAssignReplacement(sel: any) {
    this.replacement = sel;
  }

  onSwap(path: number[]) {
    if (!this.target || !this.replacement) return;
    this.formulaService
      .replace(this.target.tree, this.replacement.tree, path)
      .subscribe((r) => (this.resultTree = r.result));
  }

  onSaveResult(name: string) {
    if (!this.resultTree) return;
    this.formulaService.saveFormula(name, this.resultTree).subscribe();
  }
}
