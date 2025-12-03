const express = require("express");

const app = express();


app.use('/',(req, res, next)=>{
    //  res.send("response")
    next();
})

app.get('/user', (req, res, next) => {
    next();
    console.log("route handler");

},
 
     (req, res, next) => {
        console.log("route handler");
         next()      

    },

     (req, res, next) => {
        console.log("route handler");
         res.send("Response2")

    },
);


app.listen(3000, (req, res) => {
    console.log("server listen on port 3000...");

});