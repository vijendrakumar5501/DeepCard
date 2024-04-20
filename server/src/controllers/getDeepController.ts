   import { Response,Request } from "express";
   import Deep from "../models/Deep"
   
   
 export async function getDeepController(req:Request,res:Response){
   const {deepid}=req.params;
   const deep=await Deep.findById(deepid);
   res.json(deep)
}


