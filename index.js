const app = require('./app');
const db = require('./config/db');
const usermodel = require('./model/user.model')
const dotenv = require('dotenv');

dotenv.config({path: ".env"}); 

app.get('/', (req,res)=>{
    res.send("Hello!!")
});
const port = process.env.PORT;

app.listen(port,() => {
    console.log(`Server is Listening port http://127.0.0.1:${port} or http://localhost:${port}`);
});