import mongoose, { Schema } from "mongoose";

const AlgorithmNodeSchema = new Schema(
  {
    type: { type: String, enum: ["sequence", "uniterm"], required: true },
    name: { type: String },
    operator: { type: String, enum: [";", ","], default: ";" },
    children: [Schema.Types.Mixed],
  },
  { _id: false }
);

const FormulaSchema = new Schema(
  {
    name: { type: String, required: true },
    tree: { type: AlgorithmNodeSchema, required: true },
  },
  { timestamps: true }
);

export const Formula = mongoose.model("Formula", FormulaSchema);
