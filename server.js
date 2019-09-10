const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const exphbs = require('express-handlebars')
const nodemailer = require('nodemailer');
  

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

let pass = process.env.PASSWORD;  
let email = process.env.EMAIL; 

const app = express();
const port = process.env.PORT || 5000;

app.engine('handlebars',exphbs())
app.set('view engine','handlebars')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}  

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

app.post('/send',(req,res)=>{
  const emailsend = `
  <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: email,
        pass: pass
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  let mailOptions = {
    from: '"Someone" <ljesusescobar924@gmail.com>', // sender address
    to: 'leider924@gmail.com', // list of receivers 
    subject: 'Funciona?', // Subject line
    text: `${req.body.message}`, // plain text body
    html: emailsend // html body
};
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
      return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);   
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

  
});
})

