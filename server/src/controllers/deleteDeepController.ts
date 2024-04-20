import { Request, Response } from "express";
import Deep from "../models/Deep";


export async function deleteDeepController(req: Request, res: Response) {
  const deepId = req.params.deepId;
  const deep = await Deep.findByIdAndDelete(deepId);
  res.json(deep);
}
