const express = require('express');
const bodyParser = require('body-parser');
const loginroutes = require('./routes/login');
const mongoose = require('mongoose');

const PORT = 3000;


const app = express();

//connect to Mongoose

// mongoose.connect('mongodb://localhost/rekatani-dev', {
//     useMongoclient: true
// }).then(()=> console.log('MongoDB Connected...'))
// .catch(err=> console.log(err));

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.use((req, res, next)=> {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//test route
app.get('/',(req,res,next)=>{
    res.send('hello express!');
});

//routes to handle user registration
app.use('/auth',loginroutes);




app.listen(PORT,() =>{
    console.log("server is running in port "+PORT)
})