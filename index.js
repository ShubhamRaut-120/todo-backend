const app = require('./app');
const db = require('./config/db');
const usermodel = require('./model/user.model')

const port = 3050;

app.get('/', (req,res)=>{
    res.send("Hello!!")
});

app.listen(port,() => {
    console.log(`Server is Listening port http://127.0.0.1:${port} or http://localhost:${port}`);
});