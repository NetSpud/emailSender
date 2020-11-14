const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = 80;
app.use(express.json());
app.use(express.static('public'));



const transporter = nodemailer.createTransport({
    service: process.env.mailService,
    auth: {
        user: process.env.mailUsername,
        pass: process.env.MailPassword
    }
});




app.post('/send', (req, res) => {
    console.log(req.body)
const subject = req.body.subject;
const address = req.body.address;
const body = req.body.body;


    var mailOptions = {
        from: 'hengieuk@gmail.com',
        to: address,
        subject: subject,
        html: body
    };


    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });


});






app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
console.log("app Booted Successfully.");
