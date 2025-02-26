const mongoose=require("mongoose")
const connectDb=async()=>{
    try{
        // mongoose.connect(process.env.MONGO_URL)
        mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to db")
    }catch(err){
        console.log("Failed to connect to db")
    }
}

module.exports=connectDb;