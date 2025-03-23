import express from 'express'
import mongoose from 'mongoose'
import UserController from "./controller/UserController";

const app = express();
const mongoUrl = 'mongodb://localhost:27017/ThirstyFirst';

mongoose
    .connect(mongoUrl)
    .then(()=>console.log("MongoDB Connected Successfully"))
    .catch((err:any)=> console.log("MongoDB Connection Error :",err))

app.use(express.json());

app.use('/user',UserController);

app.listen(3000,()=>{
    console.log("Server running port 3000")
})
