import { Request, Response } from "express";
import Deep from "../models/Deep";

export async function createCardForDeepController(req: Request, res: Response) {
  const deepId = req.params.deckId;
  const deep = await Deep.findById(deepId);
  if (!deep) return res.status(400).send("no deck of this id exists");
  const { text } = req.body;
  deep.cards.push(text);
  await deep.save();
  res.json(deep);
}