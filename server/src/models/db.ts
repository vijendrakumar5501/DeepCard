import mongoose from "mongoose";
const url="mongodb://localhost:27017"
const db=mongoose.connect(url)
.then(()=>{
    console.log('db connected')
})
.catch((error)=>{
    console.log('error occured '+error)
})

export default db