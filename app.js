const express = require('express');
const bodyParser = require('body-parser');
const loginroutes = require('./routes/login');


const app = express();
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

const PORT = 3000;




app.use('login',loginroutes);
app.get('/',(req,res,next)=>{
    res.send('hello exoress!');
});



app.listen(PORT,() =>{
    console.log("server is running in port "+PORT)
})