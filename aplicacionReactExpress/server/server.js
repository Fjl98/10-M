const express = require('express');
const app = express();
const user = require('./route/user');
const rick_morty = require('./route/user_ricky_morty')

app.listen(3000);

app.get('/api',(req,res)=>{
    res.send("hola desde express");
});
app.get('/rick_morty',(req,res)=>{
    res.send("hola desde express");
});

app.use('/api/user',user);
app.use('/rick_morty/info',rick_morty);