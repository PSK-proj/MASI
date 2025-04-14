import { AlgorithmNode } from "../types/algorithm";

export function replaceNodeAtPath(
  node: AlgorithmNode,
  path: number[],
  replacement: AlgorithmNode
): AlgorithmNode {
  if (path.length === 0) return replacement;

  const [index, ...rest] = path;

  if (!node.children || index >= node.children.length) {
    throw new Error("Invalid path");
  }

  return {
    ...node,
    children: node.children.map((child, i) =>
      i === index ? replaceNodeAtPath(child, rest, replacement) : child
    ),
  };
}
