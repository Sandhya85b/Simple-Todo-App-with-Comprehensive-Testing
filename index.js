const express = require("express");
const mongoose = require("mongoose");
const connectDb = require("./config");
const todoRouter = require("./routes/todo.route");

require("dotenv").config({ path: process.env.testing === "test" ? ".env.testing" : ".env" });

connectDb();

const app = express();
app.use(express.json());
app.use("/todos", todoRouter);

// app.listen(5000,async()=>{
//     try{
//         console.log("Connected to server")
//     }
//     catch(err){
//         console.log("Error in connecting to server")
//     }
// })

module.exports = app;
