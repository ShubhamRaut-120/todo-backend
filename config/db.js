const mongoose = require('mongoose');
const mongo_id = process.env.mongo_id;
const mongo_pass = process.env.mongo_pass;

const dotenv = require('dotenv')
dotenv.config({path:".env"})

const connection = mongoose.createConnection(process.env.DB_URL).on('open', ()=>{
    console.log('MongoDB Connection Succesfull');
}).on('error',()=>{
    console.log("MongoDb connection failed");
});

module.exports = connection;