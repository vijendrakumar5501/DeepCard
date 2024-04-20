
import mongoose from "mongoose";

const Schema=mongoose.Schema;

const DeepSchema=new Schema({
    title:String,
    cards:[String]
});

const DeepModel=mongoose.model("Deep",DeepSchema);


export default DeepModel