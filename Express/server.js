const express = require('express');
const userRouter = require("./routes/user");
const app = express();
app.listen(3000);
app.set("view engine", "pug");


app.get("/",(req,res) => {
    
    res.render("index",[{mensaje:"holaaa"},{nombre:"jesus"},{despido:"adiooooos"}]);
});

app.get("/about",(req,res) => {
    
    res.render("about",{text:"hola me llamo jesus como estas"});
});

app.use('/user',userRouter);
app.use('/user/new',userRouter);


