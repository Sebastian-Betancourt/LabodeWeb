import dotenv from 'dotenv';
dotenv.config();

//ODM = NoSQL  == MongoDB
import mongoose from "mongoose"

mongoose.set('strictQuery', true) //todas los campos de deben de usar



const connection =async() =>{
    try{
      const {connection} = await  mongoose.connect(process.env.MONGODB_URI_LOCAL)
      console.log("Database is connected")
      
    }catch(error){
        console.log(error);
    }
}

export default connection