const express = require('express'); 
const router = express.Router();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:"aaghum.eh@gmail.com",
        pass:process.env.MAIL_PASS
    }
});


router.post("/",(req,res)=>{
    const user = req.body.data;
    transporter.sendMail({
        from:user.email,
        to:"hanielryanephin@gmail.com",
        subject:user.subject,
        html:`<div style="display:grid;gap:10px;place-items:center;"><h1>Email from ${user.firstName} ${user.lastName} with email ${user.email}.</h1>
        <p>${user.message}</p>
         </div>`
    },(err,info)=>{
        err ? console.log(err) : res.sendStatus(200);
    });

})

module.exports = router;
