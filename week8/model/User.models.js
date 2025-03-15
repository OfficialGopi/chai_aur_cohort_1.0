/**
 * what to built 
 * Authentication system 
 * IN authention what to store 
 * name 
 * email 
 * password 
 * role
 * isVerified through email or otp
 * reset-password
 * reset-password-token
 * createdAt
 * updatedAt
 */

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum:["user", "Admin"],
        default: "user"
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    resetPasswordToken:{
        type: String
    },
    resetPasswordExpires:{
        type: Date
    }
},
{
    timestamps:true
}
)

const User = mongoose.model("User", userSchema)

export default User;