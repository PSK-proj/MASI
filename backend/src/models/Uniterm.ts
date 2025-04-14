import mongoose, { Schema } from "mongoose";

const AlgorithmNodeSchema = new Schema(
  {
    type: { type: String, enum: ["sequence", "uniterm"], required: true },
    name: { type: String },
    operator: { type: String, enum: [";", ","], default: ";" },
    children: [
      {
        type: Schema.Types.Mixed,
      },
    ],
  },
  { _id: false }
);

const UnitermSchema = new Schema({
  name: { type: String, required: true, unique: true },
  expansion: AlgorithmNodeSchema,
});

export const Uniterm = mongoose.model("Uniterm", UnitermSchema);
