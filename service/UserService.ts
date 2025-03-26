import User, {UserModel} from "../model/UserModel";
import bcrypt from 'bcrypt';

export async function AddUser(user:UserModel){
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

export async function VerifyUser(user: Partial<UserModel>) {
    try {
        const existingUser: UserModel | null = await User.findOne({ email: user.email });

        if (!existingUser) {
            console.error("User not found");
            return false;
        }

        if (!user.password) {
            console.error("Password is missing in request");
            return false;
        }

        if (!existingUser.password) {
            console.error("Stored password is missing");
            return false;
        }

        const isMatch = await bcrypt.compare(user.password, existingUser.password);
        return isMatch;
    } catch (error) {
        console.error("Error during user verification:", error);
        return false;
    }
}