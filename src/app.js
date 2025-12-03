const express = require("express");

const app = express();

app.get('/getUserData', (req, res) => {
    throw new Error("fygjhkn")
    res.send("user data sent ")
})

app.use('/',(err, req, res, next)=>{
    if(err){
        res.status(500).send("Somthing want wrong ")
    }

})

app.listen(3000, (req, res) => {
    console.log("server listen on port 3000...");

});