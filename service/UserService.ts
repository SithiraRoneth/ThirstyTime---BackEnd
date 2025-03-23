import User, {IUser} from "../model/UserModel";
import bcrypt from 'bcrypt';

export async function AddUser(user:IUser){
    const hashPassword = await bcrypt.hash(user.password,10);
    try{
        const newUser = new User({
            userName:user.userName,
            email:user.email,
            password:hashPassword
        })
        const saveUser =await newUser.save();
        console.log("User Saved :",saveUser)
    }catch (err){
        console.log("Error During User :", err)
    }
}
