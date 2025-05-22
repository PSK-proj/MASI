export interface AlgorithmNode {
  type: 'uniterm' | 'sequence';
  name?: string;
  operator?: ';' | ',';
  children?: AlgorithmNode[];
}

export interface Formula {
  _id: string;
  name: string;
  tree: AlgorithmNode;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface FormulaSummary {
  _id: string;
  name: string;
  createdAt: string;
}
