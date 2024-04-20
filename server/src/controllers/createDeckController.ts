import { Request, Response } from "express";
import Deep from "../models/Deep";

export async function createDeepController(req: Request, res: Response) {
  const newDeep = new Deep({
    title: req.body.title,
  });
  const createdDeep = await newDeep.save();
  res.json(createdDeep);
}