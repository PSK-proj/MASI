import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormulaBuilderComponent } from './components/formula-builder/formula-builder.component';
import { FormulaViewerComponent } from './components/formula-viewer/formula-viewer.component';
import { AlgorithmNode } from './models/algorithm-node.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FormulaBuilderComponent,
    FormulaViewerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentTree!: AlgorithmNode;

  onTree(t: AlgorithmNode) {
    this.currentTree = t;
  }
}
