
require("dotenv").config()
import express,{Request,Response} from "express"
import {loginVerify, passwordVerification, registrationVerify, tokenVerification} from "../middleware/middleware"
import {User} from "../model/model"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"





const route = express.Router()



route.post("/register",registrationVerify,async (req:Request,res:Response)=>{
    try{

        
        const {firstname,lastname,email,password,dob} = req.body
        const hashedPassword = await bcrypt.hash(password,Number(process.env.SALT))
        const date = new Date(dob)
        
        
        
        const user = await User.create({
            firstname:firstname,
            lastname:lastname,
            email:email,
            password:hashedPassword,
            dob:date
        })
        
        res.status(200).json({
            "message": "User created successfully",
            "user": {
                  
                   "email":user.email,
                }
        })
        
    }catch(e : any ){
        res.status(400).json({
            error:e.message
        })
    }

})

route.post("/login",loginVerify,passwordVerification,async(req:Request,res:Response)=>{
   try{ const {email,password} = req.body
    const user= await User.findOne({email})

    const token = jwt.sign({userId:user?._id.toString()},String(process.env.JWT_SECRET))
   
   res.cookie("jwtToken",token)
    res.status(200).json({
        message:"!Login"
        
    })
}catch(e : any){
    res.status(400).json({
        error:e?.message
        
    })
    }

})

route.post("/logout",tokenVerification,(req,res)=>{
    try{

        res.clearCookie("jwtToken")
        res.status(200).json({
            message:"!Logged-Out"
        })
    }catch(e:any){
        res.status(400).json({
            error:e?.message
        })
    }
})

export default route