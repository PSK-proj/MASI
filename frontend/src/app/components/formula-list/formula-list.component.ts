import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AlgorithmNode,
  FormulaSummary,
  Formula,
} from '../../models/algorithm-node.model';
import { FormulaService } from '../../services/formula.service';

@Component({
  selector: 'app-formula-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formula-list.component.html',
  styleUrls: ['./formula-list.component.scss'],
})
export class FormulaListComponent implements OnInit {
  formulas: FormulaSummary[] = [];

  @Output() select = new EventEmitter<{
    id: string;
    tree: AlgorithmNode;
    name: string;
  }>();

  constructor(private readonly srv: FormulaService) {}

  ngOnInit(): void {
    this.loadList();
  }

  public loadList(): void {
    this.srv.listFormulas().subscribe((f) => (this.formulas = f));
  }

  onSelect(id: string, name: string): void {
    this.srv.loadFormula(id).subscribe((formula: Formula) => {
      this.select.emit({ id, tree: formula.tree, name });
    });
  }
}
