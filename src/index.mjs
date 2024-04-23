import express from 'express';
import mongoose from 'mongoose';
import router from './routes/route.mjs';
const app=express();
app.use(express.json());
mongoose.connect("mongodb+srv://choudharyprateek131:9927729187@cluster0.nkeq4ce.mongodb.net/SDMS").then(()=>console.log('databse connected')).catch((err)=>console.log(err));
app.use('/',router);
app.listen(8000,()=>{
    console.log('server started on port:',8000);
})