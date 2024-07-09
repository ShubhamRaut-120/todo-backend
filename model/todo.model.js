const db = require('../config/db');
const mongoose = require('mongoose');
const usermodel = require('../model/user.model');

const {Schema} = mongoose;

const todoSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: usermodel.modelName
    },
    title:{
        type: String,
        required: true
    },

    description:{
        type: String,
        // required: true
    }
});

const todomodel = db.model('todo', todoSchema);

module.exports = todomodel;