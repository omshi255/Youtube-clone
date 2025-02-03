// require('dotenv').config({path:'./.env'})
  import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import { app } from './app.js';

  dotenv.config({
      path:'./.env'
   })
connectDB()
.then(()=>
{
    app.listen(process.env.PORT || 8000 , ()=>
    {
        console.log(`server is running at port : ${process.env.PORT}`);
    })
})
.catch((err)=>
{
   console.log("connection failed",err)
})
/*
import express from "express"
const app =express()
(async ()=>
{
  try{
     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
     app.on("error",(error)=>
    {
        console.log("error not able to talk",error)
        throw error
    })

     

  } catch(error)
  {
    console.log("Error",error)
    throw error
  }
})()*/