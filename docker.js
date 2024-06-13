const express = require("express");
const app = express();
const PORT = 4000;

app.get('/',(req,res,next)=>{
    res.send('<h1> DOCKER </h1>')
});

app.listen(PORT,()=> console.log('server listen at '+PORT));
