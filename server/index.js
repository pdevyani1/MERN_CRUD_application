import express from  "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/userRoutes.js";

// Code for Connecting to the server 
const  app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();


const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL ;


mongoose.connect(URL).then(()=> {

    console.log("Database Connected Successfully");
    
    //to run the port
    app.listen(PORT , () => {

            console.log(`Server is running on port: ${PORT}`);

    }) // this is call back function 

}).catch(error => console.log(console.error()));

//we use route in this file 
app.use("/api", route);