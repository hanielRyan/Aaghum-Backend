require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({
    origin: 'https://aaghumministries.vercel.app'
}));
app.use(express.json());

app.use("/",require("./mail"));

app.get("/",(req,res)=>{
    res.set("Access-Control-Allow-Origin","https://aaghumministries.vercel.app");
    res.send("hi")
})


app.listen(5000,()=>console.log('server is running'));
