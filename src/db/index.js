//  import mongoose, { connection } from "mongoose";
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB  = async ()=>
{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n Mongo DB connected !! DB host:${mongoose.connection.host}`)
        
    } catch (error) {
        console.log("mongodb connection error",error)
     process.exit(1)   }
}

export default connectDB