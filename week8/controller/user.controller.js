
import User from "../model/User.models.js";
import nodemailer from 'nodemailer'
import crypto from 'crypto'
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import cookieParser from "cookie-parser";
dotenv.config()

const registerUser = async (req, res) => {

    // console.log( "req detail : ", typeof req);
    // console.log( "res detail : ", typeof res);
    
   try {
     //get detail form user
     //validate
     //check if user already exist
     //create a new user in db
     //create a varification token
     //save token in database
     //send token as email to user
     //send success message to user
 
     const {username, email, password} = req.body

    //  console.log("req", req);
     console.log("email :", email);     
     console.log("req body ", req.body);

     if (!username || !email || !password) {
         return res.status(400).json({
             message: "all field are required"
         })
     }
 
     const existingUser = await User.findOne({email})
 
     if (existingUser) {
         return res.status(400).json({
             message: "user already exist"
         })
     }
 
     const user = await User.create({
         username,
         email,
         password
     })
     console.log("CREATED USER :", user);
     
 
     if(!user){
         return res.status(400).json({
             message: "user not register"
         })
     }
 
     //generate a token
     const token = crypto.randomBytes(25).toString('hex')
    //  console.log("crypto token: ", token);
     
     user.verificationToken = token
 
     await user.save()
     console.log("token save user :", user.email);
     

     //sending mail to user
     const transporter = nodemailer.createTransport({
       host: process.env.MAILTRAP_HOST,
       port: process.env.MAILTRAP_PORT,
       secure: false, // true for port 465, false for other ports
       auth: {
         user: process.env.MAILTRAP_USERNAME,
         pass: process.env.MAILTRAP_PASSWORD,
       },
     });

     const mailOption = {
        from: "guptashivam3935@gmail.com", // sender address
        to: user.email, // list of receivers
        subject: "verify your email", // Subject line
        text: `Please click on the following link : ${process.env.BASE_URL}/api/v1/users/verify/${token}`
     }
 
     await transporter.sendMail(mailOption)
 
    res.status(201).json({
      message: "user register successfully",
      success: true
    })
 
   } catch (error) {
      console.log("user registration failed" , error);
   }
}

//verify User
const verifyUser = async(req, res) => {
    //get token from url
    //validate
    //find user based on token
    //validate user
    //set isverified field is true
    //remove verification token
    //save
    //return response

    const {token} = req.params

    console.log(`token : ${token}`);

    if (!token) {
        return res.status(400).json({
            message: "invalid token "
        })
    }
    
    const user = await User.findOne({
        verificationToken: token
    })

    if (!user) {
        return res.status(400).json({
            message: "invalid user "
        })
    }

    user.isVerified = true

    user.verificationToken = undefined

    await user.save()

    return res.status(200).json({
        message: "user verified successfully",
        success: true
    })

    
}

//login flow
const loginUser = async (req, res) => {
    //username, email -> req.body
    //validate
    //find user in db -> User.findOne()
    //check password -> bcrypt.compare()
    // check userVerified
    // generate jwtToken -> jwt.sign()
    // store token in cookies -> cookies-parser
    //send response to user
    
    const {email, password} = req.body

    if (!email || !password) {
        return res.status(400).json({
            message: "invalid email or password",
            success : false
        })
    }

   try {
     const user = await User.findOne({email})
     if (!user) {
        return res.status(400).json({
            message: "invalid user email",
            success: false
        })
     }

     const isMatch =  bcrypt.compare(password, user.password)

     if (!isMatch) {
        return res.status(400).json({
            message: "invalid email password"
        })
     }

    if (!user.isVerified) {
        return res.status(400).json({
            message: "pleasee verify your email",
            success: false
        })
    }

    const jwtToken = jwt.sign(
        {
            id: user._id
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '24h'
        }
    )

    // console.log("jwt ", jwtToken);
    
    const cookiesOptions = {
        httpOnly: true,
        secure: true,
        maxAge: 24 * 60 * 60 * 1000
    }

  
    console.log("res cookies : ", res.cookies);   

    res.cookie("verifyToken", jwtToken, cookiesOptions)
    
 
    return res.status(200).json({
        message: "login successfully",
        success: true,
        token: jwtToken,
        user: {
            id: user._id,
            name: user.username            
        }
    })

   } catch (error) {
      console.log("error while fetching user : ", error);      
   }




}

const profile = async(req, res) => {
    
}
export {registerUser, verifyUser, loginUser, profile}

