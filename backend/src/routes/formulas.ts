import express, { Request, Response } from "express";
import { Formula } from "../models/Formula";
import { AlgorithmNode } from "../types/algorithm";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { name, tree }: { name: string; tree: AlgorithmNode } = req.body;
    const formula = await Formula.create({ name, tree });
    return res.status(201).json(formula);
  } catch (err) {
    console.error("Save formula error:", err);
    return res.status(500).json({ error: "Failed to save formula" });
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const formulas = await Formula.find({}, { name: 1, createdAt: 1 });
    return res.json(formulas);
  } catch (err) {
    console.error("Fetch formulas error:", err);
    return res.status(500).json({ error: "Failed to fetch formulas" });
  }
});

router.get("/:id", async (req: Request<{ id: string }>, res: Response) => {
  try {
    const formula = await Formula.findById(req.params.id);
    if (!formula) {
      return res.status(404).json({ error: "Not found" });
    }
    return res.json(formula);
  } catch (err) {
    console.error("Fetch formula by id error:", err);
    return res.status(500).json({ error: "Failed to fetch formula" });
  }
});

router.delete("/:id", async (req: Request<{ id: string }>, res: Response) => {
  try {
    const deleted = await Formula.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Not found" });
    }
    return res.sendStatus(204);
  } catch (err) {
    console.error("Delete formula error:", err);
    return res.status(500).json({ error: "Failed to delete formula" });
  }
});

export default router;
