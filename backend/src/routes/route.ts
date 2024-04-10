import express from "express"
import userRoute from "./user"
import productRoute from "./product"

const route = express.Router()

route.use("/product", productRoute)
route.use("/user", userRoute)



export default route