import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  AlgorithmNode,
  Formula,
  FormulaSummary,
} from '../models/algorithm-node.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FormulaService {
  private readonly base = 'http://localhost:4000';

  constructor(private readonly http: HttpClient) {}

  listFormulas(): Observable<FormulaSummary[]> {
    return this.http.get<FormulaSummary[]>(`${this.base}/formulas`);
  }

  loadFormula(id: string): Observable<Formula> {
    return this.http.get<Formula>(`${this.base}/formulas/${id}`);
  }

  saveFormula(name: string, tree: AlgorithmNode): Observable<Formula> {
    return this.http.post<Formula>(`${this.base}/formulas`, { name, tree });
  }

  deleteFormula(id: string): Observable<void> {
    return this.http.delete<void>(`${this.base}/formulas/${id}`);
  }

  replace(
    targetTree: AlgorithmNode,
    replacementTree: AlgorithmNode,
    path: number[]
  ): Observable<{ result: AlgorithmNode }> {
    return this.http.post<{ result: AlgorithmNode }>(`${this.base}/replace`, {
      targetTree,
      replacementTree,
      path,
    });
  }
}
