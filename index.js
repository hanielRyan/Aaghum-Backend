require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());

app.use("/",require("./mail"));

app.use((err,req,res,next)=>{
    console.log(err);
    res.status(err.status).json(err.message);
})

app.listen(5000,()=>console.log('server is running'));