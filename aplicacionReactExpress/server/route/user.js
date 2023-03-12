const express = require('express');
const route = express.Router();


route.get('/',(req,res)=>{
    res.json([{
        username:"Jesús",
        age: 25,
    },
    {
        username:"Javi",
        age: 22,
    },
    {
        username:"Andrea",
        age: 24,
    }]);

});

module.exports = route;