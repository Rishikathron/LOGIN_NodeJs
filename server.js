require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const mongoDB = require('mongodb');
const mongoose = require('mongoose')
const connectDB = require('./config/dbConnection.js');
const Auth = require('./routes/authenticationRoute.js')

const app = express()

connectDB();

app.use(express.json())
app.use('/api' ,Auth)


mongoose.connection.once('open' , ()=>{
    console.log('connected to Database');
    app.listen(3000,()=>console.log("Listining to server"))
})
