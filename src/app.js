const express = require("express");

const app = express();


app.use('/user', (req, res, next) => {
    next();
    console.log("route handler");
    
    // res.send("response1")
},
    (req, res, next) => {
        console.log("route handler");
        // res.send("Response2")
        next()

    },
     (req, res, next) => {
        console.log("route handler");
        // res.send("Response3")
        next()

    },
     (req, res, next) => {
        console.log("route handler");
        // res.send("Response4")
        next()

    },
     (req, res, next) => {
        console.log("route handler");
         res.send("Response5")
        

    },
);


app.listen(3000, (req, res) => {
    console.log("server listen on port 3000...");

});