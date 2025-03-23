import express from "express";
import {AddUser} from "../service/UserService";

const router = express.Router();

router.post('/addUser',async (req,res)=>{
    const user = req.body;
    try{
        const userAdded = AddUser(user);
        res.status(201).json("User Added");
    }catch (err) {
        console.log("Error During User Adding :", err)
    }
})

export default router;