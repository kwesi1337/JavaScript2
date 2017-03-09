const express = require('express');

const app = express();


app.get('/', (req, res)=>{


    res.send("Sending message..");
});

app.get('/world', (req, res)=>{

    res.send("Heello World its working..");
});

app.listen(3333, ()=> console.log("Server started..."));

