const mongoose = require('mongoose');
const mongo_id = process.env.mongo_id;
const mongo_pass = process.env.mongo_pass;

const connection = mongoose.createConnection(`mongodb+srv://shubhamr:Igzz6A0IC6vTae63@todo.srqkvwu.mongodb.net`).on('open', ()=>{
    console.log('MongoDB Connection Succesfull');
}).on('error',()=>{
    console.log("MongoDb connection failed");
});

module.exports = connection;