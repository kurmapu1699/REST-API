const express = require('express');
const mongoose = require('mongoose');
const Users = require('./model');
const app = express();


app.use(express.json());

mongoose.connect('mongodb+srv://kp123:kp123@cluster0.hmblp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=> console.log('DB connect'))
.catch(err => console.log(err.message))

app.post('/usersdetails', async(req,res) =>{
    try{
        const newData = new Users(req.body);
        await newData.save();
        return res.json( await Users.find())
    }
    catch(err){
        console.log(err.message)
    }
});


app.get('/getallusers', async (req,res) =>{
    try{
        const allData = await Users.find();
        return res.json(allData);
    }
    catch(err){
        console.log(err.message)
    }
});



app.get('/getallusers/:id', async (req,res) =>{
    try{
        const data = await Users.findById(req.params.id);
        return res.json(data);
    }
    catch(err){
        console.log(err.message)
    }
});


app.delete('/deleteuser/:id', async(req,res) =>{
    try{
        await Users.findByIdAndDelete(req.params.id);
        return res.json(Users.find())
    }
    catch(err){
        console.log(err.message)
    }
});


app.listen(8000,()=> console.log('server running'));