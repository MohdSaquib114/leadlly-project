import route from "./routes/route"
import express from "express"
import dbConnection from "./connection"
import cors from "cors"
import mongoose from "mongoose";


require("dotenv").config()

const app = express()
const PORT :number = Number(process.env.PORT) | 3000
dbConnection(String(process.env.DATABASE_URL))

const db = mongoose.connection
db.once("open",()=>console.log("Connection to database is successfull"))
db.on('error',()=>console.log("Connection to database has failed"))


app.use(express.json())
app.use(cors())
app.use("/api/v1/",route)







app.listen(PORT, ()=>console.log(`server is listening on port ${PORT}`))