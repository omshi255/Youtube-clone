// require('dotenv').config({path:'./.env'})
  import dotenv from 'dotenv';
import connectDB from "./db/index.js";

  dotenv.config({
      path:'./.env'
   })
connectDB()
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