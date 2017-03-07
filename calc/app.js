var express = require('express');

var app = express();

var bodyParser = require('body-parser');

app.listen(3000, () => {

    console.log("Server Started Listing on: " + 3000);


})

app.use("/api/calculator/:operation/:n1/:n2", function (req, res, next) {

    let calculatorRequest = {

        operation: req.params.operation,
        n1: req.params.n1,
        n2: req.params.n2
    };


    req.calcObject = calculatorRequest;
    next();

})
app.use(bodyParser.urlencoded({extended: false}));


app.get("/api/calculator/:operation/:n1/:n2", (req, res)=>{

    var calcObject = req.calcObject;
    var calculation = eval(calcObject.n1 + calcObject.operation + calcObject.n2);


    res.send("Result is: " + calculation);
    
})