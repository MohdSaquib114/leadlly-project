import exp from "constants"
import mongoose from "mongoose"
import { string } from "zod"

const userSchema = new  mongoose.Schema({
firstname:{
    type:String,
    require:true
},
lastname:{
    type:String,
    require:true
},
email:{
    type:String,
    unique:true,
    require:true
},
password:{
    type:String,
    require:true,
    minLength:8
},
dob:{
    type:Date
},
createdAt : { type : Date, default: Date.now }
})

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    imageUrl:{
        type:String,
       
    },
    description:{
        type:String,
        require:true
    },
    createdAt : { type : Date, default: Date.now }


})

export const User = mongoose.model("User",userSchema)
export const Product = mongoose.model("Product", productSchema)

