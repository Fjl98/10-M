const express = require('express');
const route = express.Router();


route.get('/info',(req,res)=>{
    res.json([{
        name:"rick",
        lastname:"yoquese",
        image: "https://rickandmortyapi.com/api/character/avatar/21.jpeg",
        image: 22,
    },
    {
        name:"morty",
        lastname:"a",
        image: "https://rickandmortyapi.com/api/character/avatar/21.jpeg",
        image: 21,
    },
    {
        name:"blop",
        lastname:"hola",
        image: "https://rickandmortyapi.com/api/character/avatar/21.jpeg",
        image: 85,
    }]);

});

module.exports = route;