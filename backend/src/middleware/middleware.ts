
require("dotenv").config()
import {Request, Response,NextFunction} from 'express';
import zod from "zod"
import { User } from '../model/model';
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userRegisterSchema= zod.object({
    firstname:zod.string(),
    lastname:zod.string(),
    dob:zod.string(),
    email:zod.string().email(),
    password:zod.string()
})

const userLoginSchema = zod.object({
    email:zod.string().email(),
    password:zod.string()
})

const productSchema  = zod.object({
    name:zod.string(),
    description:zod.string(),
    imageUrl:zod.string()
})

export const  registrationVerify = (req:Request,res:Response,next:NextFunction)=>{
    try{

        const registerObj = req.body;
        const result = userRegisterSchema.safeParse(registerObj)
        if(!result.success){
            return res.status(400).json({
                error: "Invalid input",
                details: "The provided information  is not in a valid format.",
                suggestions: "Please ensure that the all the fields address follows the standard format (e.g.,firstname,lastname,email,dob (date of birth),  email:example@example.com, password:not less than 8 character)."
            })
        }
        
        next()
    }catch(e  :any ){
        res.status(400).json({
            error:e?.message
        })
    }
}
export const  loginVerify = async (req:Request,res:Response,next:NextFunction)=>{
    try{

        const loginObj = req.body;
        const result = userLoginSchema.safeParse(loginObj)
        if(!result.success){
            return res.status(400).json({
                error: "Invalid input",
                details: "The provided information  is not in a valid format.",
                suggestions: "Please ensure that the all the fields address follows the standard format (e.g.,  email:example@example.com, password:not less than 8 character)."
            })
        }
        
        
        
        
        next()
    }catch(e  :any ){
       
        res.status(400).json({
            error:e?.message
        })
    }
}

export const passwordVerification = async (req:Request,res:Response,next:NextFunction) =>{
    try{

        const {email,password} = req.body;
        const user= await User.findOne({email})
        if(!user){
            return res.status(400).json({
                error:"User does not exist"
            })
            return
        }
        const isMatched = await bcrypt.compare(password,(user?.password) as string)
        if(!isMatched){
            return res.status(400).json({
                error: "Invalid password",
                details: "The provided password is either too short or not in a valid format.",
                        })
        }
        
        
        
        
        next()
    }catch(e  :any ){
       
        res.status(400).json({
            error:e?.message
        })
    }
}

export const tokenVerification = async (req:Request,res:Response,next:NextFunction) =>{
    try{
                const {cookie}  = req.headers
                const secret = String(process.env.JWT_SECRET) 
                
                if(!cookie){
                    return res.status(400).json({
                        error:"cookie is not provided"
                    })
                    return
                }
                const jwtToken= cookie?.split("=")[1]
                
                const payload = jwt.verify(jwtToken,secret)
                
      
        
        
        
        
        next()
    }catch(e  :any ){
  
        res.status(400).json({
            error:e
        })
    }
}

export const  productReqVerify = (req:Request,res:Response,next:NextFunction)=>{
    try{

        const productObj = req.body;
        const result = productSchema.safeParse(productObj)
        if(!result.success){
            return res.status(400).json({
                error: "Invalid input",
                details: "The provided information  is not in a valid format.",
                suggestions: "Please ensure that the all the fields address follows the standard format (e.g.,name:string,description:string,imageUrl:string,)."
            })
        }
        
        next()
    }catch(e  :any ){
        res.status(400).json({
            error:e?.message
        })
    }
}