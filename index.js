require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({
    origin: 'https://aaghumministries.vercel.app'
}));
app.use(express.json());

app.use("/",require("./mail"));

app.get("/message",(req,res)=>{
    res.send("hi")
})

app.use((err,req,res,next)=>{
    console.log(err);
    res.status(err.status).json(err.message);
})

app.listen(5000,()=>console.log('server is running'));
