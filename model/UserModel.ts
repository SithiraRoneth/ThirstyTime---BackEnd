import mongoose, { Schema, Document } from "mongoose";

interface UserModel extends Document {
    userName?: string;
    email: string;
    password: string;
}

// Define the schema for the User model
const UserSchema: Schema<UserModel> = new Schema(
    {
        userName: {
            type: String,
            required: [true, "Please enter a name"],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Please enter an email"],
            unique: true,
            lowercase: true,
            trim: true,
            match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
        },
        password: {
            type: String,
            required: [true, "Please enter a password"],
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

// Create the User model
const User = mongoose.model<UserModel>("User", UserSchema);

export default User;
export { UserModel };
