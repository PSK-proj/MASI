export interface AlgorithmNode {
  type: 'uniterm' | 'sequence';
  name?: string;
  operator?: ';' | ',';
  children?: AlgorithmNode[];
}
