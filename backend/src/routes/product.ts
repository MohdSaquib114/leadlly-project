import express, {Request,Response} from "express"
import { productReqVerify } from "../middleware/middleware"
import { Product } from "../model/model"

const route = express.Router()

route.post("/",productReqVerify,async (req:Request,res:Response)=>{
   const product = await Product.create({...req.body})
   console.log(product)
   res.status(200).json({
    messgae:"Product posted successfull!",
    productId:product?._id
    
   })
})

route.get("/bulk",async  (req:Request,res:Response)=>{
  try{

      const response  = await Product.find()
      const products = response?.map(product=>{
        return {name:product.name,
        description:product.description,
    imageUrl:product.imageUrl,
id:product._id}
      })
      res.status(200).json({
          message:"Get products",
          products:products
        })
    }catch(e : any) {
        res.status(400).json({
            error:e?.message
        })
    }
    })

export default route