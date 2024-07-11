const express = require('express');
const bodyParser = require('body-parser');
const routesAPI = require('./routes/api');
const app = express();
const {conectdb} = require('./config/db');





// app.get('/',(req,res)=>
// {
//     res.status(200).send("code executed")

// });
//middle ware / package.jason
app.use(express.json());
app.use(bodyParser.json())


//conection db
conectdb();


app.use('/api',routesAPI);



app.listen(2000,()=>{
    console.log("hello");

});