import mongoose from "mongoose";
const db = mongoose.connection

export default async function dbConnection(url:string){
const connection = await  mongoose.connect(url)

}

