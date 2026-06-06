const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");


const employeeRouter = require('./routes/EmployeeRoutes');

app.use(cors());
app.use(express.json());
app.use('/employee',employeeRouter);

mongoose.connect('mongodb://localhost:27017/employeemanagement')
.then(()=>console.log("connected to mongodb"))
.catch((err)=>console.log(err));

app.get('/',(req,res)=>{
    res.send("Yash Tank");
});


app.listen(5000,()=>{
    console.log("server running on port 5000");
});