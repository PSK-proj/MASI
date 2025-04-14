import express, { Request, Response } from "express";
import { Formula } from "../models/Formula";
import { AlgorithmNode } from "../types/algorithm";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { name, tree }: { name: string; tree: AlgorithmNode } = req.body;
    const formula = await Formula.create({ name, tree });
    res.status(201).json(formula);
  } catch (err) {
    console.error("Save formula error:", err);
    res.status(500).json({ error: "Failed to save formula" });
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const formulas = await Formula.find({}, { name: 1, createdAt: 1 });
    res.json(formulas);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch formulas" });
  }
});

router.get("/:id", async (req: Request<{ id: string }>, res: Response) => {
  try {
    const formula = await Formula.findById(req.params.id);
    if (!formula) return res.status(404).json({ error: "Not found" });
    res.json(formula);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch formula" });
  }
});

export default router;
