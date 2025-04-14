import express from "express";
import { replaceNodeAtPath } from "../services/treeReplace";
import { AlgorithmNode } from "../types/algorithm";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      targetTree,
      replacementTree,
      path,
    }: {
      targetTree: AlgorithmNode;
      replacementTree: AlgorithmNode;
      path: number[];
    } = req.body;

    const result = replaceNodeAtPath(targetTree, path, replacementTree);

    res.json({ result });
  } catch (err) {
    console.error("Replace error:", err);
    res.status(500).json({ error: "Replace failed" });
  }
});

export default router;
