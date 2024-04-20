const express = require('express'); 
const router = express.Router();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:"hanielryanephin@gmail.com",
        pass:process.env.GOOGLE_PASS
    }
});

router.post("/",(req,res,next)=>{

    res.setHeader("Access-Control-Allow-Origin", "https://aaghum-ministries.vercel.app");

    try{
        const user  = req.body.data;
        console.log(user)
        const mailOptions = {
            from:user.email,
            to: 'aaghum.eh@gmail.com',
            subject: user.subject,
            html: `<h1>Name: ${user.firstName}</h1><h1>Email: ${user.email}</h1><h3>Message: ${user.message}</h3>`
        };
    
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.json(error)
               const error =   new Error(error.message);
               error.status = 404;
               throw error;
       
            } else {
                console.log('Email sent:'+ info.response);
                 res.sendStatus(200);
            }
        });

    }catch(err){
  next(err);
    }

})


module.exports = router;
