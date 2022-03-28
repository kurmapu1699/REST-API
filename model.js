const mongoose = require('mongoose');
const validator = require('validator');

const usersSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:5,
        maxlength:250,
    },
    email:{
        type:String,
        required:true,
        minlength:5,
        maxlength:250,
        unique:[true, "Enter invalid email Id"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email")
            }
        }
    },
    phone:{
        type:Number,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true
    }
});

const Users = new mongoose.model('Users',usersSchema);

module.exports = Users;