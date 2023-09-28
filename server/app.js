import express from "express";
import dotenv from "dotenv";
//import mongoose from "mongoose";
import bodyParser from "body-parser";
import {v4 as uuid} from 'uuid';
import router from "./routes/route.js";
import Connection from "./database/db.js";
import DefaultData from "./default.js";
import cors from "cors";

const app=express();
const port=8000;

dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use('/', router);

//connecting to database
Connection();
// mongoose.connect("mongodb://127.0.0.1:27017/flipkartDB",{useUnifiedTopology: true, useNewUrlParser: true});

app.get("/",(req, res)=>{
    res.send("Hello")
})
app.listen(port, ()=>{
    console.log(`Server is running successfully on port ${port}`)
});

DefaultData();

