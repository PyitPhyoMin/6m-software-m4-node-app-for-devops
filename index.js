require("dotenv").config();
const express = require('express')
const app = express()

app.use(express.json())

//const print = require("./controller");
const controller = require('./controller');

app.get('/', controller.print);
app.get('/home', controller.home);
app.post('/user', controller.user);


app.listen(process.env.PORT, ()=>{
    console.log(`Listening to port ${process.env.PORT}`)
})