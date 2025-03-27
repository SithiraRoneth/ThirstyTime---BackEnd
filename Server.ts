import express from 'express'
import mongoose from 'mongoose'
import UserController from "./controller/UserController";
import OrderDetails from "./controller/OrderDetails";

const app = express();
const mongoUrl = 'mongodb://localhost:27017/ThirstyFirst';

app.use('/',(req,res, next)=>{
    res.header('Access-Control-Allow-Origin',"*");
    res.header('Access-Control-Allow-Methods',"GET,PUT,POST,DELETE,OPTIONS");
    res.header('Access-Control-Allow-Headers',"Origin,X-Requested-With, Content-Type, Accept");
    next();
});
mongoose
    .connect(mongoUrl)
    .then(()=>console.log("MongoDB Connected Successfully"))
    .catch((err:any)=> console.log("MongoDB Connection Error :",err))

app.use(express.json());

app.use('/user',UserController);
app.use('/orders',OrderDetails);

app.listen(3000,()=>{
    console.log("Server running port 3000")
})
