import { Request, Response } from "express";
import Deep from "../models/Deep";

export async function getDeepsController(req: Request, res: Response) {
  const deeps = await Deep.find();
  res.json(deeps);
}
