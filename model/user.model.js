const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const db = require('../config/db');

const {Schema} = mongoose;

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },

    password:{
        type: String,
        required: true
    }
});

userSchema.pre('save', async function (){
    try{
        var user = this;
        const salt = await(bcrypt.genSalt(9))
        const hashpass = await bcrypt.hash(user.password, salt);
        user.password = hashpass;
    }catch(error){
        throw(error)
    }
});

userSchema.methods.comparePassword = async function(userPassword){
   try{
        const isMatch = await bcrypt.compare(userPassword, this.password);
        return isMatch;
   } catch (err){
    throw (err)
   } 
}

const usermodel = db.model('user', userSchema);

module.exports = usermodel;