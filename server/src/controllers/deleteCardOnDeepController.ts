import { Request, Response } from "express";
import Deep from "../models/Deep";

export async function deleteCardOnDeepController(req: Request, res: Response) {
  const deepId = req.params.deckId;
  const index = req.params.index;
  const deep = await Deep.findById(deepId);
  if (!deep) return res.status(400).send("no deck of this id exists");
  deep.cards.splice(parseInt(index), 1);
  await deep.save();
  res.json(deep);
}